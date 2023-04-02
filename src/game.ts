import { Dice } from './dice'
import { Token } from './token'

export function Game() {
    const dice: Dice = new Dice();
    const token: Token = new Token();

    console.info(`Welcome to 🐍🪜 Snakes and Ladders 🪜🐍`)

    while (token.position < 100) {
        console.info("Rolling the dice...")
        const roll: number = dice.roll();
        console.info(`You rolled ${roll}!`)
        token.move(roll)
        console.info(`You are now in position ${token.position} on the board.`)
    }

    if (token.position === 100) {
        console.info("🎉 Congratulations! You win! 🎉")

        console.info("Press Enter to start a new game, or Esc to exit.")
    }

    return;
}

Game();