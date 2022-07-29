
//start the page with the input already selected
let input = document.getElementById('name');
input.focus();
input.select();

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

//Check to see if there is a current list in Local Storage
let currentList = localStorage.getItem('playerList') || '';
//Find the length to use for future calculations
let playerListLength = currentList.split('*').length;

//Put the current list on the page
function postList () {
    if  (!currentList) {
        return
    } else {
            for (let i=0; i < playerListLength; i++) {
                document.querySelector('#dropspot').innerHTML += `<li>${localStorage.getItem('playerList').split('*')[i]}</li>`
    }
   }
};
postList();


//Created the add name function. Will fire on button click or on enter key down in the top text input
function addName() {
    if (document.getElementById("name").value) {
        const newPlayer = document.getElementById("name").value;
        console.log(newPlayer)
         if (currentList == ''){
            currentList += `${newPlayer}`
        localStorage.setItem('playerList', currentList);
        location.reload();
         } else {
        currentList += `\*${newPlayer}`
        localStorage.setItem('playerList', currentList);
        location.reload();
         }
    }
    
}

//Clears all players currently in local storage
function clearAllPlayers() {
    localStorage.removeItem('playerList');
    location.reload();
}



//Randomize the results and sore them in local storage
let randomizedOutput = []
function randomize() {
    let listChoices = currentList.split('*')
    for (let i=0; i<playerListLength; i++) {
        let randomNumber = Math.floor(Math.random() * (playerListLength - i))
        randomizedOutput.push(listChoices[randomNumber])
        listChoices.splice(randomNumber,1)
    }
    console.log(randomizedOutput)
    localStorage.setItem('result', randomizedOutput.join('*'))
}
randomize();


//Deleting individual LI capabilities 


//Grab all the list items we will be considering
let items = document.querySelectorAll("#dropspot li"),
      tab = [], liIndex;
      console.log(items)

// populate tab with li data
for(let i = 0; i < items.length; i++){
tab.push(items[i].innerHTML);
}

// get li index using tab array on li click event
for(let i = 0; i < items.length; i++){

// function that will actually take the current list, and remove the element that was clicked by it's index. The it will update locale storage and reload the page
items[i].onclick = function(){

let currentListArray = currentList.split('*')
liIndex = tab.indexOf(this.innerHTML);
currentListArray.splice(liIndex, 1)
currentList = currentListArray.join('*')
localStorage.setItem('playerList', currentList);
location.reload();
};

}

