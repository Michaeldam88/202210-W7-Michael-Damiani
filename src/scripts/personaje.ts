import { King } from './rey.js';
import { Knight } from './luchador.js';
import { Adviser } from './asesor.js';
import { Squire } from './escudero.js';
interface Action {
    talk: (message: string) => string;
    die: (message: string) => string;
}
export class Character implements Action {
    isAlive: boolean;
    constructor(
        public role: string,
        public name: string,
        public familyName: string,
        public age: number
    ) {
        this.isAlive = true;
    }
    talk(message: string) {
        return message;
    }

    die(message: string) {
        return message;
    }
}

export const generateCharacter = (data) => {
    let characterObject;
    switch (data[0]) {
        case 'King':
            characterObject = new King(...data);
            break;

        case 'Knight':
            characterObject = new Knight(...data);
            break;
        case 'Adviser':
            characterObject = new Adviser(...data);
            break;

        case 'Squire':
            characterObject = new Squire(...data);
            break;
    }

    return characterObject;
};
