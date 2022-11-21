import { Character } from './personaje.js';
export class Adviser extends Character {
    constructor(
        role: string,
        name: string,
        familyName: string,
        age: number,
        public message: string,
        public whoAsses: string
    ) {
        super(role, name, familyName, age);
        super.talk(this.message);
    }
}
