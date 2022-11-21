import { generateCharacter } from './personaje.js';

const ulDiv = document.querySelector('ul') as HTMLDListElement;
/*const charactersData = [
    ['King', 'Joffrey', 'Baratheon', 14, 2, 'Vais a morir todos'],
    [
        'Knight',
        'Jaime',
        'Lannister',
        34,
        'Primero pego y luego pregunto',
        'Espada',
        9,
    ],
    [
        'Knight',
        'Daenerys',
        'Targaryen',
        16,
        'Primero pego y luego pregunto',
        'Dragones',
        10,
    ],
    [
        'Adviser',
        'Tyrion',
        'Lannister',
        27,
        'No sé por qué, pero creo que voy a morir pronto',
        'Daenerys',
    ],
    ['Squire', 'Bronn', 'Stokeworth', 32, 'Soy un loser', 'Jaime', 5],
];

const characterObject = charactersData.map((element) => {
    return generateCharacter(element);
});*/

const characters = [
    {
        role: 'King',
        name: 'Joffrey',
        familyName: 'Baratheon',
        age: 14,
        regnalYears: 2,
        isAlive: true,
        talk() {
            return 'Vais a morir todos';
        },
        die() {
            this.isAlive = false;
        },
    },
    {
        role: 'Adviser',
        name: 'Tyrion',
        familyName: 'Lannister',
        age: 27,
        message: 'No sé por qué, pero creo que voy a morir pronto',
        whoAsses: 'Daenerys',
    },
];

interface CharacterDataType {
    role: string;
    name: string;
    familyName: string;
    age: number;
    regnalYears: number;
    isAlive: boolean;
    weapon: string;
    kissAssLevel: number;
    skillLevel: number;
    whoServe: string;
    whoAsses: string;
}

const displayCard = (characterData: CharacterDataType) => {
    const newLi = document.createElement('li');
    newLi.className = 'character col';
    newLi.innerHTML = `
            <div class="card character__card">
                <img
                    src="../img/${characterData.name.toLowerCase()}.jpg"
                    alt="${characterData.name} ${characterData.familyName}"
                    class="character__picture card-img-top"
                />
                <div class="card-body">
                    <h2 class="character__name card-title h4">${
                        characterData.name
                    } ${characterData.familyName}</h2>
                    <div class="character__info">
                        <ul class="list-unstyled">
                            <li>Edad: ${characterData.age} años</li>
                            <li>
                                Estado:
                                <i class="fas fa-thumbs-down"></i>
                                <i class="fas fa-thumbs-up"></i>
                            </li>
                        </ul>
                    </div>
                    <div class="character__overlay">
                        <ul class="list-unstyled">
                            <li>Años de reinado: ${
                                characterData.regnalYears
                            }</li>
                            <li>Arma: ${characterData.weapon}</li>
                            <li>Destreza: ${characterData.skillLevel}</li>
                            <li>Peloteo: ${characterData.kissAssLevel}</li>
                            <li>Asesora a: ${characterData.whoServe}</li>
                            <li>Sirve a: ${characterData.whoAsses}</li>
                        </ul>
                        <div class="character__actions">
                            <button class="character__action btn  id="talk"">habla</button>
                            <button class="character__action btn  id="die"">muere</button>
                        </div>
                    </div>
                </div>
                <i class="emoji"></i>
            </div>`;
    ulDiv?.appendChild(newLi);
};

characters.forEach((element) => displayCard(element));
