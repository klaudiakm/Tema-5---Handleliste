//get input text element 
const inputElement = document.getElementById('product');
//get button element 
const buttonAddElement = document.getElementById('add-button')
//get list 
const ulShoppingListElement = document.getElementById('grocerylist')
//eventListner som lytter på click hendelse på knapp 
// lese verdig av input text og legge i list
buttonAddElement.addEventListener('click',renderList );
window.addEventListener('keyup', (event) => {
    if(event.code === 'Enter') {
        renderList();
    }


})

//eventListner som lytter på tastaturknapp enter 
//lese verdig av input text og legge i list


function renderList () {
    if(inputElement.value !== '')
    {
        const liElement = document.createElement ('li');
        liElement.textContent = inputElement.value;
        console.log(liElement)
        ulShoppingListElement.appendChild(liElement);

        //Skrift blir borte etter add  
        liElement.textContent = inputElement.value;
        inputElement.value = '';



        // Remove kryss i enden av listen 
        const removeButtonElement = document.createElement('button');
        removeButtonElement.textContent = 'X';
        liElement.appendChild(removeButtonElement);

        removeButtonElement.addEventListener('click', () => {
        ulShoppingListElement.removeChild(liElement)
        });

        //Skifter farge når man trykker på den, 

        liElement.addEventListener('click', () => {
            liElement.classList.toggle('buyed');
        })

    

    
    }
    
}

//   const removeAll = document.createElement ('button');
//    removeAll.textContent = 'Remove All'
//     ulShoppingListElement.appendChild(removeAll);

//    removeAll.addEventListener('click', () => {
//     ulShoppingListElement.removeChild(liElement)
//     });

s

//for å fjerne ting fra listen.
//const buttonRemoveElement = document.getElementById('button-remove');

//const ulShoppingListElementRemove = document.getElementById('grocerylist');

/* buttonRemoveElement.removeEventListener('click',renderList );
window.removeEventListener('keyup', (event) => {
    if(event.code === 'backspace') {
        renderList();
    }


}) */


// Lage en knapp for å fjerne elementer fra listen

// legge til checkbox etter varen, ved krysset for remove 

// lage en linje gjennom varen når den er trykket på checkbox 

// sentrere 


// Tekst blir borte etter å ha trykket på add eller enter 
// RemoveAll 