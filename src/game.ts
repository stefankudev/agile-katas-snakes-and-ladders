const readline = require('readline');
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

    private startGameLoop(): void {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.on('line', (input: unknown) => {
            console.log(input);
            // if (input === '') {
            //     // User pressed Enter
            //     this.play();
            //     rl.close();
            // }
        });

        rl.on('SIGINT', () => {
            // User pressed Ctrl-C or Esc
            rl.close();
        });

        while (this.token.position < 100) {
            console.info('\n🎲 Press Enter to roll the dice...');

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

    play(): void {
        const game = new Game();
        game.startGameLoop();
    }
}

