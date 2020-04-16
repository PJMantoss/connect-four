document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const result = document.querySelector('#result');
    const displayCurrentPlayer = document.querySelector('.current-player');

    let currentPlayer = 1;
    let len = squares.length;

    for (let i = 0; i < len; i++)

    (index = () => {
        //add an onClick to each square in the grid
        squares[i].onclick = function(){
            //if the square below your current square is taken, you can go on top of it
            if(squares[index + 7].classList.contains('taken')){
                if (currentPlayer === 1){
                    squares[index].classList.add('taken');
                    squares[index].classList.add('player-one');
                    //change player
                    currentPlayer = 2;
                    displayCurrentPlayer.innerHTML = currentPlayer;
                } else if (currentPlayer === 2){
                    squares[index].classList.add('taken');
                    squares[index].classList.add('player-two');
                    //change player
                    currentPlayer = 1;
                    displayCurrentPlayer.innerHTML = currentPlayer;
                } else { //if the square below your current square is not taken, you can't go here
                    alert('You can\'t go here');
                }
                
            }
        }
    })
})