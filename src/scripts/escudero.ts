import { Character } from './personaje.js';
export class Squire extends Character {
    constructor(
        role: string,
        name: string,
        familyName: string,
        age: number,
        public message: string,
        public whoServe: number,
        public kissAssLevel: number
    ) {
        super(role, name, familyName, age);
        super.talk(this.message);
    }
}
