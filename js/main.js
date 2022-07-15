const discs = ["Entropy", "Cosmic Neutron Envy", "Soft Neutron Envy", "Proxy", "Pyro", "Reactor", "Hex", "Uplink", "Paradox", "Resistor", "Crave", "Relay", "Signal", "Volt", "Inertia", "Insanity", "SE Virus", "Virus", "Photon", "Wave", "Orbital", "Relativity"];


document.querySelector('#mysterybutton').addEventListener('click', interval);


function interval() {
    let count = 0;
    let flashing = setInterval(function (){
    count += 1;
       if(count === 8){
        clearInterval(flashing);
    }
  
    let choice = (Math.floor(Math.random() * discs.length));
    document.querySelector('h3').innerText = discs[choice];

}, 25);
}

//function discRandomizer () {
//      let choice = (Math.floor(Math.random() * discs.length))
//    document.querySelector('h3').innerText = discs[choice]
//}

//function loading () {
//    for(var i = 0;i < 4;i++) {
//        let choice = (Math.floor(Math.random() * discs.length));
//        document.querySelector('h3').innerText = discs[choice];
//    }
//}




 //function changeStyle(){
 //       var element = document.getElementById("myElement");
 //       element.style.color = "#FF0000";
 //   }