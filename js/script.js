(async () => {
    $('#begin').click(function () {
        this.style.visibility = 'hidden';
        displayNewQuestion();
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
        correctAnswer: '',
        correctResponses: ["good news, everyone! you answered the question correctly!", "when you do things right, people won't be sure you've done anything at all.", "how did you know that? did you not have a life when you were younger?", "sweet topography of cosmology! you got it right!", "ah, congratulations. your latest performance was as delectable as dipping my bottom over and over into a bath of the silkiest oils and creams! you were the sole diversion in what has been a pale and unamusing season. and so i would feign commission you write an app.", "the brain spawn are grateful to you for helping them catalogue all known information in the universe."],
        incorrectResponses: ["oh wait, you're serious. let me laugh even harder.", "at the risk of sounding negative, no.", "oh wow, i can't believe how stupid i used to be and you still are.", "no wonder bender always said, 'kill all humans!'", "sweet file-not-found of puget sound! you got it wrong!", "hell is full of ten year olds who were bad at trivia. trouble is, you have what my old coding teacher mrs mellenger called 'stupid fingers.' with hands like that you'll be lucky to master a function declaration. now wouldn't it be nice if you had a pair of robot hands to replace them?"],
    };
    
    function displayNewQuestion() {
        let randomIndex = randNum();
        let question = data[randomIndex];
        let randomResponse = randNum1();

        $('#question').html(data[randomIndex].question);
        $('#possibleAnswers').empty();
        question.possibleAnswers.forEach(answer => {
            $('#possibleAnswers').append(`<button class='answer'>${answer}</button>`);
        })


    
        $('.answer').on('click', function (e) {
            e.preventDefault();
            gameStats.correctAnswer = data[randomIndex].correctAnswer;
            gameStats.previousQuestions.push(randomIndex);
            let guess = $(e.target).text();
            gameStats.questionCount++;
            if (guess == gameStats.correctAnswer) {
                gameStats.correct++;
                alert(gameStats.correctResponses[randomResponse]);
                displayNewQuestion();
            } else {
                gameStats.incorrect++;
                alert(gameStats.incorrectResponses[randomResponse]);
                displayNewQuestion();
            }
        })    
    }



    function randNum() {
        return Math.floor(Math.random() * 28);
    }
    function randNum1() {
        return Math.floor(Math.random() * gameStats.correctResponses.length);
    }


})();