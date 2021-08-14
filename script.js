//task 02
const jsColor=document.getElementsByTagName('h1');
for( const h1 of jsColor){
    h1.style.color='lightBlue';
}
//task 03
const backBgColor=document.getElementById('Backpack');
    backBgColor.style.backgroundColor='tomato';
// task 04
    const cards=document.getElementsByClassName('card');
     for(const card of cards){
         card.style.borderRadius='30px';
     }
// task 5
     function myOrder(){
         console.log("Order-Complete");
     }

     // task 06
   document.getElementById('delete-btn').addEventListener('click', function(){
       document.getElementById('delete-info').style.display='none';
   })


//    task 07

document.getElementById('delete-confirm').addEventListener('keyup', function (event){
    const deleteBtnn=document.getElementById('delete-btnn');
    if(event.target.value == 'Email'){
        deleteBtnn.removeAttribute('disabled');
    }
    else{
        deleteBtnn.setAttribute('disabled', true) ;
    }
})