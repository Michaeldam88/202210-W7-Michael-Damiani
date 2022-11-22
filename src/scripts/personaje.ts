interface Actions {
    talk: (message: string) => void;
    die: () => void;
}
export class Character implements Actions {
    isAlive = true;
    extraInfo = '';
    constructor(
        public role: string,
        public name: string,
        public familyName: string,
        public age: number
    ) {}
    talk(message: string) {
        if (!this.isAlive) return;
        else {
            const talkTextDisplay = document.querySelector(
                '.display-1'
            ) as HTMLDataElement;
            if (talkTextDisplay != undefined) {
                talkTextDisplay.innerHTML = message;
            }
        }

        const talkImgDisplay = document.querySelector(
            '.comunications'
        ) as HTMLImageElement;
        if (talkImgDisplay != undefined) {
            //talkImgDisplay.url = `../img/${this.name.toLowerCase()}.jpg`;
            //talkImgDisplay.alt = `${this.name} ${this.familyName}`;
            talkImgDisplay.classList.add('on');
        }

        setTimeout(() => {
            talkImgDisplay?.classList.remove('on');
        }, 2000);
    }

    die() {
        if (this.isAlive) {
            const thumsUp = document.querySelector(
                `#up${this.name}`
            ) as HTMLDataElement;
            if (thumsUp != undefined) {
                thumsUp.style.display = 'none';
            }

            const thumsDown = document.querySelector(
                `#down${this.name}`
            ) as HTMLDataElement;
            if (thumsDown != undefined) {
                thumsDown.style.display = 'initial';
            }

            const characterImage = document.querySelector(
                `#img${this.name}`
            ) as HTMLImageElement;
            if (characterImage != undefined) {
                characterImage.style.rotate = '180deg';
            }
        }
        this.isAlive = false;
    }
}
