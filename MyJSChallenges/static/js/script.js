// Challenge 1: Your Age in Days

function ageInDays() {
    let birthYear = prompt('What year were your born... your Friend?');// Вопрос про дату рождения
    let ageInDayss = (2022 - birthYear /* for example 1997 is a birthYear */) * 365; // Вычисляем дни
    let h1 = document.createElement('h1'); // Создаем элемент h1 для ответа
    let textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.'); // Создаем текст 
    h1.setAttribute('id' , 'ageInDays'); // Добавляет новый атрибут
    h1.appendChild(textAnswer);  //  добавляет узел в конец * textAnwser *
    document.getElementById('flex-box-result').appendChild(h1); // Добавляем textAnswer в id flex-box-result
    console.log(ageInDayss); 
}

function reset() { // Удаляем при нажатии reset функцию ageInDays
    document.getElementById('ageInDays').remove();
}   


// Challenge 2: Generate Cat

function generateCat() {
    let image = document.createElement('img'); // 1) Создаем элемент для картинки
    let div = document.getElementById('flex-cat-gen'); // 2) Обращаемся к дом элементу 
    image.src = "https://i.pinimg.com/originals/93/f8/1e/93f81e022a6d138dd9a41f79ab332c80.gif";// 3) Вставляем адресс картинки
    div.appendChild(image); // 4) Ставим элемент картинки под конец
}


// Challenge 3: Rock paper Scissors

function rpsGame(yourChoice) {
    console.log(yourChoice);
    let humanChoice, bothChoice;
     humanChoice = yourChoice.id;
     bothChoice = numberToChoice(ranToRpsInt());
     results = decideWinner(humanChoice, bothChoice); //  [0, 1] human lost | bot won
     message = finalMessage(results); // 'You Won!';
     rpsFrontEnd(yourChoice.id , bothChoice, message);
}

function ranToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice( number ) {
    return ['rock', 'paper', 'scissors'][number]

}

function decideWinner(yourChoice, computerChoice) {
    let rpsDataBase = {
        'rock': {'scissors' : 1, 'rock' : 0.5, 'paper':  0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };

    let yourScore = rpsDataBase[yourChoice][computerChoice];
    let computerScore = rpsDataBase[computerChoice][yourChoice];

    return [yourScore, computerScore]
};

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': "You Lost!", 'color': 'red'};
    }  else if(yourScore === 0.5) {
        return {'message': "You Tied!", 'color': 'yellow'}
    } else {
        return {'message': "You Won!" , 'color': 'green'}
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    let imagesDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    // let's delete all the images

    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById('scissors').remove()

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDataBase[humanImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>";
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDataBase[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

