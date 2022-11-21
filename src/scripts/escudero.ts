import { Character } from './personaje.js';
export class Squire extends Character {
    emoji = String.fromCodePoint(0x1f6e1);
    message = 'Soy un loser';
    constructor(
        role: string,
        name: string,
        familyName: string,
        age: number,
        public whoServe: string,
        public kissAssLevel: number
    ) {
        super(role, name, familyName, age);
    }
}
