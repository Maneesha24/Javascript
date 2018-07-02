var dice, activeplayer, roundscore, scores, gameplay;
gameplay = true;

function init() {
    scores = [0,0];
    activeplayer = 0;
    roundscore = 0;
    gameplay = true;
    
    document.querySelector('.Score-0').textContent = 0;
    document.querySelector('.Score-1').textContent = 0;
    document.querySelector('.finalscore-0').textContent = 0;
    document.querySelector('.finalscore-1').textContent = 0;
    document.getElementById('heading-0').textContent = 'PLAYER-1';
    document.getElementById('heading-1').textContent = 'PLAYER-2';
    document.querySelector('.Player-0').classList.remove('.active');
    document.querySelector('.Player-1').classList.remove('.active');
    document.querySelector('.Player-0').classList.add('.active');
    document.getElementById('heading-0').style.color = 'navy';
    document.getElementById('heading-1').style.color = 'navy';

}

init();

document.querySelector('.roll').addEventListener('click', function () {
    if(gameplay){
        dice = Math.floor(Math.random()*6)+1;  
  var diceimage = document.querySelector('#diceimage');
  diceimage.src = 'dice-' + dice + '.png';
  if(dice!==1){
      roundscore += dice;
      document.querySelector('.Score-'+ activeplayer).textContent = roundscore;
    }
  else{
        newPlayer();
    }
    }
  
} );

document.querySelector('.hold').addEventListener('click', function () {
    if(gameplay){
        scores[activeplayer] += roundscore;
         document.querySelector('.finalscore-' + activeplayer).textContent = scores[activeplayer];
    if(scores[activeplayer]>=100){
        var winner = document.querySelector('#heading-'+activeplayer);
        winner.textContent = 'WINNER..!';
        winner.style.color = 'red';
        document.querySelector('#heading-'+activeplayer).classList.remove('.active');
        gameplay = false;
        }
    else{
    newPlayer();
                
    }
    }

} );

document.querySelector('.new').addEventListener('click', init);


function newPlayer(){
    
        activeplayer ===0 ? activeplayer =1 : activeplayer=0;
        roundscore = 0;
        document.querySelector('.Score-0').textContent= 0;
        document.querySelector('.Score-1').textContent= 0;
        document.querySelector('.Player-0').classList.toggle('active');
        document.querySelector('.Player-1').classList.toggle('active');
}



