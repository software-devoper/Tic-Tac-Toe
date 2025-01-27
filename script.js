let buttons = document.querySelectorAll('button');
let message = document.querySelector('.msg');
let container = document.querySelector('.container');
let refresh = document.querySelector('#reset');
let winArray = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
let messageShown = (c) => {
    message.classList.remove('hide');
    message.innerText = `The Winner is player ${c}`;
    container.classList.add('hide');
};
let c=0;
let playerO = true;
buttons.forEach((item) => {
    item.addEventListener('click', () => {
        if (playerO) {
            playerO = false;
            item.innerText = 'O';
        } else {
            playerO = true;
            item.innerText = 'X';
        }
        item.disabled = true;
        item.style.color=rgb();
        c++;
        console.log(c);
        let Winner=checkWinner();
        console.log(Winner);
        if(c===9&&!Winner){
            gameDraw();
        }
    });
});
let checkWinner = () => {
    for (let pattern of winArray) {
        let pos1 = buttons[pattern[0]].innerText;
        let pos2 = buttons[pattern[1]].innerText;
        let pos3 = buttons[pattern[2]].innerText;
        if (pos1 != '' && pos2 != '' && pos3 != '') {
            if (pos1 === pos2 && pos2 === pos3) {
                disableBoxes(pos1);
                messageShown(pos1);
                return true;
            }
        }
    }
};
let disableBoxes = (b) => {
    if (b == 'O' || b == 'X') {
        for (let button of buttons) {
            button.disabled = true;
        }
    }
};
let researt = () => {
    refresh.addEventListener('click', () => {
        c=0;
        message.classList.add('hide');
        container.classList.remove('hide');
        for (let val of buttons) {
            val.innerText = ''; 
            val.disabled = false; 
        }
        playerO = true; 
    });
};
researt();
let gameDraw=()=>{
    message.classList.remove('hide');
    message.innerText='Game Over';
    container.classList.add('hide');
}
let rgb=()=>{
    color1=Math.ceil(Math.random()*255);
    color2=Math.ceil(Math.random()*255);
    color3=Math.ceil(Math.random()*255);
    return `rgb(${color1},${color2},${color3})`;
}
