import { Game } from './game';

describe('Game', () => {
    let game: Game;

    beforeEach(() => {
        game = new Game();
    });

    it('should create a new game instance', () => {
        expect(game).toBeInstanceOf(Game);
    });

    it('should have dice and a token', () => {
        expect(game).toHaveProperty('dice');
        expect(game).toHaveProperty('token');
    });

    it('should update the token position based on the dice roll', () => {
        const oldPosition = game['token'].position;
        game['rollDice']();
        expect(game['token'].position).toBeGreaterThan(oldPosition);
    });

    it('player should be victorious when they reach position 100', async () => {
        expect(game['victory']).toBe(false);

        game['token']['position'] = 100;
        process.stdin.setRawMode = jest.fn();
        game['rollDice'] = jest.fn();
        game['continueOnAnyKey'] = jest.fn();
        game['exitOnAnyKey'] = jest.fn();

        await game.play();

        expect(game['victory']).toBe(true);
        expect(game['token'].position).toBe(100);
    });

});
