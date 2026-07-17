//   solution 1

// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');


// buttons.forEach(function(button){
//     console.log(button);
//     button.addEventListener('click', function(e){
//         console.log(e.target.id);
//         if (e.target.id === 'grey') {
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === 'pink') {
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === 'blue') {
//             body.style.backgroundColor = 'blue';
//         }
//         if (e.target.id === 'yellow') {
//             body.style.backgroundColor = 'yellow';
//         }else{
//             console.log("Unknown color cliked");
            
//         }
//     })
// })


// solution 2

const buttons = document.querySelectorAll(".button");
        const body = document.querySelector("body");

        buttons.forEach(function (button) {
            button.addEventListener("click", function (e) {
                body.style.backgroundColor = e.target.id;
            });
        });