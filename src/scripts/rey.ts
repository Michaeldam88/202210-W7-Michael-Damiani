import { Character } from './personaje.js';
export class King extends Character {
    emoji = String.fromCodePoint(0x1F451)
    message = 'Vais a morir todos';
    constructor(
        role: string,
        name: string,
        familyName: string,
        age: number,
        public regnalYears: number
    ) {
        super(role, name, familyName, age);
    }
}
