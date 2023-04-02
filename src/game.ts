import { Dice } from './dice';
import { Token } from './token';

export class Game {
    private dice: Dice;
    private token: Token;

    constructor() {
        this.dice = new Dice();
        this.token = new Token();
        console.info('\n───── Welcome to 🐍🪜 Snakes and Ladders 🪜🐍 ─────\n');
    }

    private getRollIcon(roll: number): string {
        const icons = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
        return icons[roll - 1] || '';
    }

    play(): void {
        while (this.token.position < 100) {
            console.info('\n🎲 Rolling the dice...');
            const roll: number = this.dice.roll();
            console.info(`✨ You rolled ${this.getRollIcon(roll)} (${roll})!`);
            this.token.move(roll);
            console.info(`♟️ You are now in position ${this.token.position} on the board.\n`);
        }

        if (this.token.position === 100) {
            console.info('\n🎉 Congratulations! You win! 🎉\nPress Enter to start a new game, or Esc to exit.\n');
        }

    }
}


}