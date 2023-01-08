const synth = window.speechSynthesis;
let messages = ["I wish you the best year yet. May you achieve all you want with ever-present happiness!",
    "From resolutions to bucket lists, I hope you check them all off this year!",
    "A new year is filled with possibilities, so dream big and believe in yourself this year!",
    "Wishing that you have a truly remarkable and blissful year ahead! Happy new year to you and your family!",
    "Embrace the New Year with an open heart and a fierce spirit. Cheers to new horizons!",
    "Tomorrow is the first blank page of a 365-page book. Write a good one.",
    "We will open the book. Its pages are blank. We are going to put words on them ourselves. The book is called Opportunity and its first chapter is New Year's Day.",
];
document.querySelector('#button').addEventListener('click', wish);

function wish(){
    const fName = document.querySelector('#firstName').value
    const lName = document.querySelector('#lastName').value

    let speakText1 = document.querySelector('#hny').innerText = `Happy New Year ${new Date().getFullYear()}! ${fName} ${lName}`;
    let speakText2 = document.querySelector('#wish').innerHTML = `${messages[Math.floor((Math.random()*messages.length))]}`

    let speakText = speakText1+". "+speakText2

    let speakAloud = new SpeechSynthesisUtterance(speakText);

    synth.speak(speakAloud);
}
