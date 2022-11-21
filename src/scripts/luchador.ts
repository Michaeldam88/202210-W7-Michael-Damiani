import { Character } from './personaje.js';
export class Knight extends Character {
    constructor(
        role: string,
        name: string,
        familyName: string,
        age: number,
        public message: string,
        public weapon: string,
        public skillLevel: number
    ) {
        super(role, name, familyName, age);
        super.talk(this.message);
    }
}
