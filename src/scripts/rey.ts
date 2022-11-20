import { Character } from './personaje.js';
export class King extends Character {
    constructor(
        name: string,
        familyName: string,
        age: number,
        role: string,
        public regnalYears: number,
        public message: string
    ) {
        super(name, familyName, age, role);
        super.talk(this.message);
    }
}
