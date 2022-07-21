document.querySelector('.head1').addEventListener("click",()=>{
    document.querySelector('.total1').style.display='initial';
})
function myFunction(){
    document.querySelector('.total1').style.display='none';
}
document.querySelector('.head2').addEventListener("click",()=>{
    document.querySelector('.total2').style.display='initial';
    
})
function myFunction2(){
    document.querySelector('.total2').style.display='none';
}
function myFunction3(){
    document.querySelector('.total2').style.display='none';
    document.querySelector('.total1').style.display='none';
}
function myFunction4(){
    document.querySelector('.total2').style.display='none';
    document.querySelector('.total1').style.display='none';
}
