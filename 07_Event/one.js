
// click formula 1 
// document.getElementById('L').onclick = function () {
//     alert('alert')
// }

//imp{

// type, timeStamp, defultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// }


// click formula 2
// document.getElementById ('L').addEventListener('click' , function () {
//     console.log(e);
//     alert("alert again")
// },true)

// document.getElementById('code').addEventListener('click', function (e) {
//     console.log("clicked inside the ul");

// }, false)

// document.getElementById('python').addEventListener('click', function (e) {
//     console.log("clicked python");
// }, false)

// false {
        // first = clicked py
        // second = clicked inside the ul 
        // ( li -> ul )
// }

document.getElementById('code').addEventListener('click', function (e) {
    console.log("clicked inside the ul");
    e.stopPropagation()  // ahiya j rese nichhe nai jay
}, true)

document.getElementById('python').addEventListener('click', function (e) {
    console.log("clicked python");
}, true)
// True {
        // first = clicked inside the ul 
        // second = clicked py
        // ( ul -> li )
// }


document.querySelector("ul")
.addEventListener("click", function(e){

    e.target.remove();


});