const numbers = [1, 2, 3, 4, 5];
let result2 = document.getElementById("opgave1");

/* opgave 1.1 */
console.group("opgave 1");
// din kode her


numbers.forEach((value) => {
    
    console.log(value)

result2.innerText = `opgave 1.1 giver: ${value}`;
});
console.groupEnd();

/* opgave 1.2 */

let sum = 0
numbers.forEach(function (number) {
   sum += number;
});
console.log(sum);
result2.innerHTML += `<br>opgave 1.2 giver: ${sum}`;
console.groupEnd();

/* opgave 1.3 */

let biggestNumber = 0;
 
numbers.forEach(function (number) {
  if(biggestNumber < number) 
  biggestNumber = number;
  console.log(number);
});

console.groupEnd();



/* opgave 2 */
console.group("opgave 2");
// din kode her

let result3 = document.getElementById("opgave2");
const data = getData();

data.forEach(function(item) {
    console.log(item.name);
    console.log(item.shortDescription);

    let newheader = document.createElement("h3");
    newheader.innerText += item.name;
    result3.appendChild(newheader);
    newheader.style.textAlign = "center";
    newheader.style.padding = "10px 0";

    let newIMG= document.createElement("img");
    newIMG.src = item.picture;
    console.log(item.picture);
    result3.appendChild(newIMG);
    newIMG.style.width = "100%";
});

console.groupEnd();
/* opgave 3 */
console.group("opgave 3");
// din kode her

// Hent data fra dette API-endpoint: https://dummyjson.com/users
// når du modtager data, så vis en liste over alle 30 brugere med: fornavn, efternavn og alder i elementet med id "opgave3"
// Den enest loop metode du må bruge i denne opgave er for...each loop!

// Instruktioner
// brug fetch() til at hente data
// skriv en callback funktion der modtager det hentede data
// skriv en funktion der kan vise dit data

let result4 = document.getElementById("opgave3");
let space = " ";

fetch('https://dummyjson.com/users')
.then(response => response.json())
.then((data) => {
    console.log(data);
    buildUserList(data.users);

    
})

.catch((err)=> {
console.log(err.message);
});


function buildUserList(users) {

users.forEach((user) => {
    let newUser = document.createElement("p");
    newUser.innerHTML += `Fornavn: ${user.firstName} <br> Efternavn:  ${user.lastName} <br> Alder:  ${user.age}<br><br>`;
    result4.appendChild(newUser);
    //result4.innerText += user.firstName;
    console.log(user.firstName);
});
console.log(data.users[0].firstName);

let result5 = document.getElementById("opgave4");
let myUser = data.users[0];

for (const key in myUser) {
    console.log(`${key}: ${myUser[key]}`);

    let oneUser = document.createElement("p");
    oneUser.innerHTML += `${key}: ${myUser[key]}`;
    result5.appendChild(oneUser);

  }
}
console.groupEnd();





// support functions ---------------------------------------------------------------------------------------------

function getData() {





    const myData = [

        {
            name: 'Elefant',
            picture: '../img/elephant.jpg',
            description: 'Loxodonta africana, også kendt som afrikansk elefant, er verdens største landdyr. Den har en grå hud og store ører, som den bruger til at regulere kropstemperaturen og kommunikere med andre elefanter. Afrikanske elefanter lever i store flokke og spiser op til 150 kg planter om dagen. De er også kendt for deres stærke intelligens og følelsesmæssige bånd til deres familie og flok. På grund af ulovlig jagt og tab af levesteder er afrikanske elefanter klassificeret som truede og er beskyttet af lovgivning'
            , shortDescription: 'Loxodonta africana, også kendt som afrikansk elefant.'
        },

        {
            name: 'Tiger',
            picture: '../img/standard_tiger.jpg',
            description: 'Panthera tigris, også kendt som tigeren, er en stor kat, der er hjemmehørende i Asien. Tigeren har en gul eller orange pels med mørke striber og har normalt en lang kraftig hale. Der findes forskellige underarter af tigeren, og størrelsen og farven kan variere afhængigt af underarten og habitatet. Tigeren er kendt for sin styrke, hurtighed og smidighed, og den er en top-rovdyr i sit økosystem. Desværre er mange af underarterne af tigeren truede på grund af tab af levesteder og ulovlig jagt, og bevaring af tigeren og dens levesteder er en vigtig bevaringsindsats.',
            shortDescription: 'Panthera tigris, også kendt som tigeren.'
        },

        {
            name: 'Tarantel',
            picture: '../img/Brachypelma_smithi.jpg',
            description: 'Brachypelma smithi, også kendt som den mexicansk rødknæs tarantel, er en stor og farverig edderkop, der er hjemmehørende i Mexico. Den har en mørk krop med røde og orange striber på benene og en karakteristisk rød knæled. Brachypelma smithi er en populær art blandt edderkoppeentusiaster på grund af dens smukke farver og rolige natur.',
            shortDescription: 'Brachypelma smithi, også kendt som den mexicansk rødknæs tarantel.'
        },

        {
            name: 'Koala',
            picture: '../img/_WW236934.jpg',
            description: 'Phascolarctos cinereus, også kendt som koala, er en pungdyrart, der er hjemmehørende i Australien. Den har en blød, tyk pels, store ører og en stor næse, og dens krop er tilpasset til at leve hovedsageligt af eukalyptusblade. Koalaer lever hovedsageligt i trætoppene og er kendt for deres afslappede og søvnige opførsel, da de sover op til 20 timer om dagen.',
            shortDescription: 'Phascolarctos cinereus, også kendt som koala.'
        },

        {
            name: 'Haj',
            picture: '../img/great-white.jpg',
            description: 'Carcharodon carcharias, også kendt som en hvidhaj eller great white haj, er en stor rovdyr, der lever i kystfarvande over hele verden. Den har en grå-blå krop med en trekantet finne på ryggen og en stor kraftig kæbe med skarpe tænder. Carcharodon carcharias er kendt for at være en top-rovdyr og jager primært sæler og fisk. Den er også kendt for dens sjældne, men berygtede, angreb på mennesker, selvom sådanne angreb ofte er utilsigtede og sjældne.',
            shortDescription: 'Carcharodon carcharias, også kendt som en hvidhaj.'
        }
    ];
    return myData

}






