import { Game } from './game';

describe('Game', () => {
    let game: Game;

    beforeEach(() => {
        game = new Game();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('play', () => {
        it('should exit the process when the token reaches position 100', async () => {
            jest.spyOn(game['dice'], 'roll').mockImplementationOnce(() => 1);
            jest.spyOn(game['token'], 'move').mockImplementationOnce(() => {
                game['token']['move'](99);
            });
            // TODO: I want to spy on the rl output
        });
    });
});
