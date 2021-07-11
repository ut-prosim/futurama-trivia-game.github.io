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

    const gameStats = { 
        correct: 0,
        incorrect: 0,
        questionCount: 0,
        previousQuestions: [],
        correctAnswer: ' ',
        correctResponses: [],
        incorrectResponses: [],
    };
    
    function displayNewQuestion() {
        let randomIndex = randNum();
        let question = data[randomIndex];


        $('#question').html(data[randomIndex].question);
        
        question.possibleAnswers.forEach(answer => {
            $('#possibleAnswers').append(`<button class='answer'>${answer}</button>`);
        })


    
        $('.answer').on('click', function (e) {
            e.preventDefault();
            gameStats.previousQuestions.push(randomIndex);
            console.log(gameStats.previousQuestions);
            console.log($(e.target).text());
            gameStats.correctAnswer = data[randomIndex].correctAnswer;
            console.log(gameStats.correctAnswer);
            let guess = $(e.target).text();
            gameStats.questionCount++;
            console.log(gameStats.questionCount);if (guess === gameStats.correctAnswer) {
                gameStats.correct++;
                console.log(gameStats.correct); alert('how did you know that? did you not have a life when you were younger?');
            } else {
                gameStats.incorrect++;
                console.log(gameStats.incorrect);alert('no wonder bender always said, "kill all humans!');
            }
        })    
    }



    function randNum() {
        return Math.floor(Math.random() * 28);
    }



})();