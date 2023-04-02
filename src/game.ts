import { Dice } from './dice';
import { Token } from './token';

export class Game {
    private dice: Dice;
    private token: Token;
    private victory: boolean;

    constructor() {
        this.dice = new Dice();
        this.token = new Token();
        this.victory = false;
    }

    private async continueOnAnyKey(): Promise<void> {
        console.info('\nPress any key to continue...');
        process.stdin.setRawMode(true)
        return new Promise(resolve => process.stdin.once('data', data => {
            const byteArray = [...data]
            if (byteArray.length > 0 && byteArray[0] === 3) {
                process.exit(0)
            }
            process.stdin.setRawMode(false)
            resolve();
        }))
    }

    private async exitOnAnyKey(): Promise<void> {
        console.info('\nPress any key to exit...');
        process.stdin.setRawMode(true)
        return new Promise(resolve => process.stdin.once('data', _ => {
            process.stdin.setRawMode(false)
            resolve();
            process.exit(0)
        }))
    }

    private getRollIcon(roll: number): string {
        const icons = ['', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
        return icons[roll] ?? '';
    }

    private rollDice(): void {
        console.info('\n🎲 Rolling the dice...');
        const roll: number = this.dice.roll();
        console.info(`✨ You rolled ${this.getRollIcon(roll)} (${roll})!`);
        this.token.move(roll);
        console.info(`♟️ You are now in position ${this.token.position} on the board.\n`);
    }

    async play(): Promise<void> {
        console.info(`\n === Welcome to 🐍🪜 Snakes and Ladders 🪜🐍 ===`)
        console.info(`Time to roll the dice!`)

        while (this.token.position < 100) {
            await this.continueOnAnyKey();
            this.rollDice();
        }

        if (this.token.position === 100) {
            this.victory = true;
            console.info('\n🎉 Congratulations! You win!');
            await this.exitOnAnyKey();
        }
    }

}
