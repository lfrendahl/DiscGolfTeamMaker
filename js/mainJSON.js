
//start the page with the input already selected
let input = document.getElementById('name');
input.focus();
input.select();

//Check to see if there is a current list in Local Storage
let currentList = JSON.parse(localStorage.getItem('playerList')) || [];

//Find the length to use for future calculations
let playerListLength = currentList.length;

//add player button --uses button id
document.querySelector('#addplayer').addEventListener('click', addName);
//add player enter key -- since this looks at the text field, we use the text field id
document.querySelector('#name').addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        addName();
    }
});
//clear all players button
document.querySelector('#clearallplayers').addEventListener('click', clearAllPlayers);



//Put the current list on the page
function postList () {
    if  (!currentList) {
        return
    } else {
            for (let i=0; i < playerListLength; i++) {
                document.querySelector('#dropspot').innerHTML += `<li>${JSON.parse(localStorage.getItem('playerList'))[i]}</li>`
    }
   }
};
postList();


//Created the add name function. Will fire on button click or on enter key down in the top text input
function addName() {
    if (document.getElementById("name").value) {
        let currentList = JSON.parse(localStorage.getItem('playerList')) || []
        const newPlayer = document.getElementById("name").value;
        currentList = [...currentList, newPlayer]
        localStorage.setItem('playerList', JSON.stringify(currentList));
         }
         location.reload();
    }
    

//Clears all players currently in local storage
function clearAllPlayers() {
    localStorage.removeItem('playerList');
    location.reload();
}



//Randomize the results and store them in local storage
let randomizedOutput = []
function randomize() {
    let listChoices = currentList
    for (let i=0; i<playerListLength; i++) {
        let randomNumber = Math.floor(Math.random() * (playerListLength - i))
        randomizedOutput.push(listChoices[randomNumber])
        listChoices.splice(randomNumber,1)
    }
   
    localStorage.setItem('result', JSON.stringify(randomizedOutput));
}
randomize();


//Deleting individual LI capabilities 


//Grab all the list items we will be considering
let items = document.querySelectorAll("#dropspot li"),
      tab = [],
      liIndex;

// populate tab with li data
for(let i = 0; i < items.length; i++){
    tab.push(items[i].textContent);
}

// spread the function to every item that will be triggered on click event
for(let i = 0; i < items.length; i++){
    
// function that will actually take the current list, and remove the element that was clicked by it's index. The it will update locale storage and reload the page
items[i].onclick = function(){
        let currentList = JSON.parse(localStorage.getItem('playerList'))
        let currentListArray = Object.values(currentList)
        liIndex = tab.indexOf(this.innertextContent);
        currentListArray.splice(liIndex, 1)
        currentList = currentListArray
        localStorage.setItem('playerList', JSON.stringify(currentList));
        location.reload();
    };
}
    

