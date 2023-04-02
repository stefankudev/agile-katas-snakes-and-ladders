import readline from 'readline';
import { Game } from './game';
import { Dice } from './dice';
import { Token } from './token';

describe('Game', () => {
    let game: Game;

    beforeEach(() => {
        game = new Game();
    });

    describe('startGameLoop', () => {
        it('plays the game when the Enter key is pressed', async () => {
            // hmm
        });
    });


    // describe('play', () => {
    //     it('calls startGameLoop', () => {
    //         jest.spyOn(game, 'startGameLoop').mockResolvedValueOnce(undefined);

    //         game.play();

    //         expect(game.startGameLoop).toHaveBeenCalled();
    //     });
    // });
});
