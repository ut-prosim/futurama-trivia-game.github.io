$("#begin").click(function () {
    this.style.visibility = "hidden";
})

async function getFuturamaQs(e) {
    e.preventDefault();

    const url = `https://api.sampleapis.com/futurama/questions`;

    const response = await fetch(url);
    const data = await response.json();
   
    console.log(data);
    
    for (let i=0; i < data.length; i++) {
        // let question = data[i].question;
        // let possibleAnswers = data[i].possibleAnswers;
        // let correctAnswer = data[i].correctAnswer;
        // const random = Math.floor(Math.random() * 28);

        // console.log(random);
        // i = random
        $('#question').html(data[i].question);
        $('#possibleAnswers').html(data[i].possibleAnswers);
    }

}

$('button').on('click', getFuturamaQs);

