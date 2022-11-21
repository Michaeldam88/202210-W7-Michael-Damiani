import { Character } from './personaje.js';
export class King extends Character {
    constructor(
        role: string,
        name: string,
        familyName: string,
        age: number,
        public message: string,
        public regnalYears: number
    ) {
        super(role, name, familyName, age);
        super.talk(this.message);
    }
}
