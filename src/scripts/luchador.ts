import { Character } from './personaje.js';
export class Knight extends Character {
    emoji = String.fromCodePoint(0x1F5E1)
    message = 'Primero pego y luego pregunto';
    constructor(
        role: string,
        name: string,
        familyName: string,
        age: number,
        public weapon: string,
        public skillLevel: number
    ) {
        super(role, name, familyName, age);
    }
}
