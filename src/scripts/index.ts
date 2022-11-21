import { generateCharacter } from './personaje.js';

const charactersData = [
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
});

console.log(characterObject);
