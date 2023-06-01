//Get the result string from local storage
let result = JSON.parse(localStorage.getItem('result'));
//console.log(result);

//Find the length to use for future calculations
let resultLength = result.length;

//Put the current list on the page
function postResults () {
    if (!result.length) {
        document.querySelector('#postresults').innerHTML += `<ul>
            <li>Please Add Players</li
            </ul>`
    } else {
    let currentTeam = 1
     for (let i=0; i < resultLength; i+=2) {
        document.querySelector('#postresults').innerHTML += `<ul>
                   <li class='teamname'>Team ${currentTeam}</li>
                   <li>${result[i]}</li>
                   <li>${result[i+1]}</li> 
             </ul>`
        currentTeam +=1
    }
}
};
postResults();
