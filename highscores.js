const highScoreList = document.getElementById('highSCoreList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
console.log(highScores);



highScoresList.innerHTML = highScores
    .map(score =>{
    return (`<li class ="high-score">${score.name} - ${score.score}</li>`);
}).join("");


