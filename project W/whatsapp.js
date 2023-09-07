let btns = document.querySelectorAll('.nav_icons button');

btns.forEach((element) =>{
    element.addEventListener( 'click', () =>{
        console.log(element.id);
    })
})


function takevalue(){
    var chat=document.getElementById("chat").value;
    console.log(chat);
}
// var chat=document.getElementById("chat").value;
// let btn1=document.querySelector('.s1');

//btn1.forEach((a) => {
    //  btn1.addEventListener( 'click', () =>{
    // console.log(chat);
    // })
//})


