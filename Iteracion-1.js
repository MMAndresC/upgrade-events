//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click
const button = document.createElement('button');
button.id = 'btnToClick';
button.style.width = '50px';
button.style.height = '50px';
button.innerText = 'Boton'
document.body.appendChild(button);
 
button.addEventListener('click', function(event){
    console.log(event);
})



//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const input = document.querySelectorAll('input');

input.forEach((item) => {
    item.addEventListener ('focus', function(event) {
      console.log(event.target.value);
    })
})


//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
document
    .querySelectorAll('input')
    .forEach((item) =>{
        item.addEventListener ('input', function(event) {
            console.log(event.target.value);
        })
    })

    
