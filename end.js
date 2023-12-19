const username = document.getElementById("username");
const saveScoreBtn = document.getElementById('saveScoreBtn');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalScore');
finalScore.innerText = mostRecentScore;
const MAX_HIGH_SCORE = 5;
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

username.addEventListener('keyup', () =>{
    //if empty username then set disable = true
    saveScoreBtn.disabled = !username.value;
})
saveHighScore = e => {
    console.log("saved successfully");
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    // sort the top 5 items
    highScores.sort ((a,b) => b.score - a.score);
    highScores.splice(5);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign("/");
    console.log(highScores);

};
