import { Dice } from './dice'
import { Token } from './token'

describe('dice', () => {

    test('dice roll returns number between 1 and 6', () => {
        const dice: Dice = new Dice();
        const roll = dice.roll();
        expect(roll).toBeGreaterThanOrEqual(1)
        expect(roll).toBeLessThanOrEqual(6)
    });

    test('dice roll always returns a positive integer', () => {
        const dice: Dice = new Dice();
        const roll = dice.roll();
        expect(roll).toBeGreaterThan(0)
        expect(Number.isInteger(roll)).toBe(true);
    });

    test('for 1,000 dice rolls, each number rolled was between 1 and 6', () => {
        const rollResults = new Set<number>();
        const dice: Dice = new Dice();
        for (let i = 0; i < 1000; i++) {
            const rollResult = dice.roll()
            expect(rollResult).toBeGreaterThanOrEqual(1);
            expect(rollResult).toBeLessThanOrEqual(6);
            rollResults.add(rollResult);
        }
    });

    test('for 10,000 dice rolls, each number between 1 and 6 was rolled at least once', () => {
        const rollResults = new Set<number>();
        const dice: Dice = new Dice();
        for (let i = 0; i < 10000; i++) {
            const rollResult = dice.roll()
            rollResults.add(rollResult);
        }
        expect(rollResults.size).toBe(6);
    });

    test('when dice rolls X, player token can be advanced by X spaces', () => {
        const token: Token = new Token()
        const dice: Dice = new Dice();
        const roll = dice.roll();
        token.move(roll);
        expect(token.position).toBe(1 + roll);
    });

});