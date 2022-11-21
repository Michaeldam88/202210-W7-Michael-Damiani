import { generateCharacter } from './personaje.js';

interface CommonCharacterProps {
    role: string;
    name: string;
    familyName: string;
    age: number;
    message: string;
}

interface KingProps extends CommonCharacterProps {
    regnalYears: number;
}
interface KnightProps extends CommonCharacterProps {
    weapon: string;
    skillLevel: number;
}
interface AdviserProps extends CommonCharacterProps {
    whoAsses: string;
}
interface SquireProps extends CommonCharacterProps {
    whoServe: string;
    kissAssLevel: number;
}

const charactersData: (KingProps | KnightProps | AdviserProps | SquireProps)[] =
    [
        {
            role: 'King',
            name: 'Joffrey',
            familyName: 'Baratheon',
            age: 14,
            message: 'Vais a morir todos',
            regnalYears: 2,
        },
        {
            role: 'Knight',
            name: 'Jaime',
            familyName: 'Lannister',
            age: 34,
            message: 'Primero pego y luego pregunto',
            weapon: 'Espada',
            skillLevel: 9,
        },
        {
            role: 'Knight',
            name: 'Daenerys',
            familyName: 'Targaryen',
            age: 16,
            message: 'Primero pego y luego pregunto',
            weapon: 'Dragones',
            skillLevel: 10,
        },
        {
            role: 'Adviser',
            name: 'Tyrion',
            familyName: 'Lannister',
            age: 27,
            message: 'No sé por qué, pero creo que voy a morir pronto',
            whoAsses: 'Daenerys',
        },
        {
            role: 'Squire',
            name: 'Bronn',
            familyName: 'Stokeworth',
            age: 32,
            message: 'Soy un loser',
            whoServe: 'Jaime',
            kissAssLevel: 5,
        },
    ];

const characterObject = charactersData.map((element) => {
    return generateCharacter(element);
});

console.log(characterObject);
