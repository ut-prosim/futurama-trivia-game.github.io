$("#begin").click(function () {
    this.style.visibility = "hidden";
});

alert('welcome to the world of tomorrow! ...ahem, also known as the 31st century!');


async function getFuturamaQs(e) {
    e.preventDefault();

    const url = `https://api.sampleapis.com/futurama/questions`;

    const response = await fetch(url);
    const data = await response.json();
   
    console.log(data);

    let correct = 0;
    let incorrect = 0;
    let question = null;
    let input = null;
    let correctAnswer = null;
    
    
    
    for (let i=0; i < data.length-1; i++) {
        let question = data[i].question;
        console.log(question);
        let possibleAnswers = data[i].possibleAnswers;
        let correctAnswer = data[i].correctAnswer;
        // const random = Math.floor(Math.random() * 28);
        // console.log(random);


        $('#question').html(data[i].question);
        $('#possibleAnswers').html(data[i].possibleAnswers);


        let ask = function() { 
            input = prompt('#question');
        };
        
        let score = function() {
            if (input == correctAnswer) {
                correct += 1;
                alert('correct');
            }  else {
                incorrect += 1;
                alert('incorrect');
            }
        };
    
        const continueGame = function() {
            ask();
            score();
        };
        
    
    }

}

$('button').on('click', getFuturamaQs);

