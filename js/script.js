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
    let previousQuestions = [];
    let correctAnswer = ' ';
    
    function displayNewQuestion() {
        let randomIndex = randNum();
        let question = data[randomIndex];


        $('#question').html(data[randomIndex].question);
        
        question.possibleAnswers.forEach(answer => {
            $('#possibleAnswers').append(`<button class='answer'>${answer}</button>`);
        })


    
        $('.answer').on('click', function (e) {
            previousQuestions.push(randomIndex);
            console.log(previousQuestions);
        })    
    }



    function randNum() {
        return Math.floor(Math.random() * 28);
    }



})();