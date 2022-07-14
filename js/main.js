const discs = ["Buzz", "Paradox", "River"];

document.querySelector('#mysterybutton').addEventListener('click', discRandomizer);

function discRandomizer () {
    let choice =  (Math.floor(Math.random() * discs.length))
    console.log(choice)
    console.log(discs[choice])
    document.querySelector('h3').innerText = discs[choice]
}