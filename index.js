let player1 = document.querySelector('#cube-1');
let player2 = document.querySelector('#cube-2');
player1.textContent = Math.floor(Math.random() * 6 + 1);
player2.textContent = Math.floor(Math.random() * 6 + 1);

let result = '';
if (player1.textContent>player2.textContent){
    result = 'Player 1 wins!';
} else if (player1.textContent<player2.textContent) {
    result = 'Player 2 wins!';
} else {
    result = "it's a tie!";
}

function CreateImgSrc (element) {
    let src = ''
    src = 'images/dice'+ element.textContent + '.png';
    return src;
}
document.querySelector('#cube-1').src = CreateImgSrc(player1);
document.querySelector('#cube-2').src = CreateImgSrc(player2);

document.querySelector('#result').textContent = result;
