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

        //Skifter farge når man trykker på den. 

        liElement.addEventListener('click', () => {
            liElement.classList.toggle('buyed');
        })

    

    
    }
    
}

