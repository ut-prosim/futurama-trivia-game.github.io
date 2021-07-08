(async () => {
    $('#begin').click(function () {
        this.style.visibility = 'hidden';
        displayNewQuestion();
    });
    $('#answer').click(function () {

    });

    alert('welcome to the world of tomorrow! ...ahem, also known as the 31st century!');

    const url = `https://api.sampleapis.com/futurama/questions`;
    const response = await fetch(url);
    const data = await response.json();
   
    console.log(data);

    let correct = 0;
    let incorrect = 0;
    let questionCount = 0;
    
    function displayNewQuestion() {
        let randomIndex = randNum();
        let question = data[randomIndex];
        let previousQuestions = [];

        $('#question').html(data[randomIndex].question);
        
        question.possibleAnswers.forEach(answer => {
            $('#possibleAnswers').append(`<button id='answer'>${answer}</button>`);
        })
    
        $('#possibleAnswers').on('click', function (e) {
            $('#question').push(previousQuestions);
            console.log(question);
        })    
    }



    function randNum() {
        return Math.floor(Math.random() * 28);
    }



})();