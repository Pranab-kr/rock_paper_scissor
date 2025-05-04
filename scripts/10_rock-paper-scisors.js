const score = JSON.parse(localStorage.getItem('score')) || { win: 0, lose: 0, tie: 0 };

updatescore();

function reset() {
  score.win = 0;
  score.lose = 0;
  score.tie = 0;
  localStorage.setItem('score', JSON.stringify(score)); // Save reset state

  updatescore();
}


function playgame(usermove) {
  const computer = computerMove(); // store the result of computer's move
  let result = '';

  if (usermove === computer) {
    result = 'Tie 😎';
  } else if (
    (usermove === 'Rock' && computer === 'Scissors') ||
    (usermove === 'Paper' && computer === 'Rock') ||
    (usermove === 'Scissors' && computer === 'Paper')
  ) {
    result = 'You Win 😉';
  } else {
    result = 'You Lose 😂';
  }

  if (result === 'You Win 😉') {
    score.win+=1;
  } else if (result === 'You Lose 😂') {
    score.lose+=1;
  } else if (result === 'Tie 😎') {
    score.tie+=1;
  }

  updatescore();
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-move').innerHTML = `You <img src="img/${usermove.toLowerCase()}-emoji.png" class="move-result-img"> <img src="img/${computer.toLowerCase()}-emoji.png" class="move-result-img"> Computer`;

  localStorage.setItem('score' , JSON.stringify(score));
}

function updatescore() {
  document.querySelector('.js-score').innerHTML = `WIN : ${score.win}, Lose : ${score.lose}, Tie : ${score.tie}`;
}

function computerMove() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return 'Rock';
  } else if (randomNumber < 2 / 3) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}