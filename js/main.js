// when a user clicks a box, I want an x to appear. when a second user clicks a box, i want an O to appear
// when a user gets three in a row, whether its X's or O's, I want a prompt to come up that says User 1 or user 2 is the winner




let boxes = document.querySelectorAll('section')
boxes.forEach(box => box.addEventListener('click', makeChoice))
let counter = 0
let playing = true


function makeChoice (event){
    if (counter >= 9 || playing === false){
       counter = null
       alert('The game is over')
   } else if (event.target.innerText === 'X' || event.target.innerText === 'O' && counter <= 9 && playing == true){
       alert('Please pick a box that has not been picked')
   }
    else if (counter === 0 && playing || counter % 2 === 0 && playing) {
        event.target.innerText = 'X'
        counter ++
        checkWinner()
    } else if (counter % 2 != 0 && playing) {
        event.target.innerText = 'O'
        counter ++
        checkWinner()
    } 
}

function checkWinner() {
    if ((document.querySelector('#boxone').innerText === 'X') &&
    (document.querySelector('#boxtwo').innerText === 'X') &&
    (document.querySelector('#boxthree').innerText === 'X')
    ||
    (document.querySelector('#boxfour').innerText === 'X') &&
    (document.querySelector('#boxfive').innerText === 'X') &&
    (document.querySelector('#boxsix').innerText === 'X')
    ||
    (document.querySelector('#boxseven').innerText === 'X') &&
    (document.querySelector('#boxeight').innerText === 'X') &&
    (document.querySelector('#boxnine').innerText === 'X')
    ||


    (document.querySelector('#boxone').innerText === 'X') &&
    (document.querySelector('#boxfour').innerText === 'X') &&
    (document.querySelector('#boxseven').innerText === 'X')
    ||
    (document.querySelector('#boxtwo').innerText === 'X') &&
    (document.querySelector('#boxfive').innerText === 'X') &&
    (document.querySelector('#boxeight').innerText === 'X')
    ||
    (document.querySelector('#boxthree').innerText === 'X') &&
    (document.querySelector('#boxsix').innerText === 'X') &&
    (document.querySelector('#boxnine').innerText === 'X')
    ||

    (document.querySelector('#boxthree').innerText === 'X') &&
    (document.querySelector('#boxfive').innerText === 'X') &&
    (document.querySelector('#boxseven').innerText === 'X')
    ||
    (document.querySelector('#boxone').innerText === 'X') &&
    (document.querySelector('#boxfive').innerText === 'X') &&
    (document.querySelector('#boxnine').innerText === 'X')
    ) {
 alert ('X player wins!')
playing = false
   } else if (
    (document.querySelector('#boxone').innerText === 'O') &&
    (document.querySelector('#boxtwo').innerText === 'O') &&
    (document.querySelector('#boxthree').innerText === 'O')
    ||
    (document.querySelector('#boxfour').innerText === 'O') &&
    (document.querySelector('#boxfive').innerText === 'O') &&
    (document.querySelector('#boxsix').innerText === 'O')
    ||
    (document.querySelector('#boxseven').innerText === 'O') &&
    (document.querySelector('#boxeight').innerText === 'O') &&
    (document.querySelector('#boxnine').innerText === 'O')
    ||


    (document.querySelector('#boxone').innerText === 'O') &&
    (document.querySelector('#boxfour').innerText === 'O') &&
    (document.querySelector('#boxseven').innerText === 'O')
    ||
    (document.querySelector('#boxtwo').innerText === 'O') &&
    (document.querySelector('#boxfive').innerText === 'O') &&
    (document.querySelector('#boxeight').innerText === 'O')
    ||
    (document.querySelector('#boxthree').innerText === 'O') &&
    (document.querySelector('#boxsix').innerText === 'O') &&
    (document.querySelector('#boxnine').innerText === 'O')
    ||

    (document.querySelector('#boxthree').innerText === 'O') &&
    (document.querySelector('#boxfive').innerText === 'O') &&
    (document.querySelector('#boxseven').innerText === 'O')
    ||
    (document.querySelector('#boxone').innerText === 'O') &&
    (document.querySelector('#boxfive').innerText === 'O') &&
    (document.querySelector('#boxnine').innerText === 'O')


   ) {
       alert('O Player wins!')
   } else if (counter >= 9)
    alert('It is a draw')
}




// let winConditions = [[0,1,2], [3,4,5] [6,7,8] , [0,3,6] , [1,4,7] , [2,5,8] , [0,4,9] , [2,4,6] ]
// let board = ['', '', '', '', '', '', '', '', '', ]