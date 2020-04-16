document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const result = document.querySelector('#result');
    const displayResult = document.querySelector('.current-player');

    let currentPlayer = 1;
    let len = squares.length;

    for (let i = 0; i < len; i++)

    (index = () => {
        //add an onClick to each square in the grid
        squares[i].onclick = function(){
            //if the square below your current square is taken, you can go on top of it
            if(squares[index + 7].classList.contains('taken')){}
        }
    })
})