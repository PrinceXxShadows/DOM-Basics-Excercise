const xMen = document.getElementById(`x-men`);

const centered = document.getElementsByClassName(`center`);

const batman = document.querySelector(`#batman`);

const h3s = document.querySelectorAll(`h3`);

const h1 = document.querySelector(`h1`);


h1.innerText = `The Best Animated Superhero TV Shows Ever!`;


const honorableMentions = document.getElementById(`honorable-mentions`);


honorableMentions.innerHTML = `<p>OTHER GREAT SHOWS</p>`;

const aTag = document.querySelector(`a`);

aTag.href = "https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked/";

h1.classList.add(`background`, `text-color`);

h1.classList.remove(`background`);

const h4 = document.createElement(`h4`);

h4.innerText = "Is Avatar: The Last Airbender A Superhero Show?";

const body = document.querySelector(`body`);
body.prepend(h4);

const h5 = document.createElement(`h5`);

h5.innerText = "Heroes in a half shell Turtle Power!";


aTag.insertAdjacentElement(`afterend`, h5);


const li = document.querySelector(`ul>li`);
li.remove();


const divs = document.querySelectorAll(`div`);


document.querySelectorAll(`div`).forEach(function(elem){
    elem.classList.toggle(`background`);
});

for (d of divs){
    d.classList.toggle(`background`);
};

const avengers = [
    "Forever",
    "Fight",
    "As",
    "One",
    "AVENGERS",
    "ASSEMBLE!"
];


for (a of avengers){
    body.append(a + ` `)};