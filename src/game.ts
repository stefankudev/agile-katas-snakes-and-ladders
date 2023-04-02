import { Dice } from './dice';
import { Token } from './token';
import readline from 'readline';

export class Game {
    private dice: Dice;
    private token: Token;
    private rl: readline.Interface;

    constructor() {
        this.dice = new Dice();
        this.token = new Token();
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    }

    private async waitForKeyPress(): Promise<void> {
        return new Promise((resolve) => {
            this.rl.question('', (key) => {
                if (key === '') {
                    resolve();
                } else if (key === '\u001b') {
                    process.exit(0);
                }
            });
        });
    }

    private getRollIcon(roll: number): string {
        const icons = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
        return icons[roll - 1] ?? '';
    }

    async play(): Promise<void> {
        while (this.token.position < 100) {
            console.info('\nPress Enter to roll the dice...');
            await this.waitForKeyPress();
            console.info('\n🎲 Rolling the dice...');
            const roll: number = this.dice.roll();
            console.info(`✨ You rolled ${this.getRollIcon(roll)} (${roll})!`);
            this.token.move(roll);
            console.info(`♟️ You are now in position ${this.token.position} on the board.\n`);
        }
        if (this.token.position === 100) {
            console.info('\n🎉 Congratulations! You win!');
            process.exit(0);
        }
    }

}
