import { Token } from './token'

describe('token', () => {
    test('token starts in position 1 by default', () => {
        const token: Token = new Token();
        expect(token.position).toBe(1);
    });

    test('token can have custom starting position', () => {
        const startingPosition = 5;
        const token: Token = new Token(startingPosition);
        expect(token.position).toBe(startingPosition);
    });

    test('new token moved 3 spaces from position 1 is in position 4', () => {
        const token: Token = new Token();
        token.move(3);
        expect(token.position).toBe(4);
    });

    test('token moved 3 spaces, then 4 spaces, is in position 8', () => {

        const token: Token = new Token();
        const movement1 = 3;
        token.move(movement1);
        const movement2 = 4;
        token.move(movement2);
        expect(token.position).toBe(8);
    });

    test('new token moved X spaces is in position 1+X', () => {
        const randomMovement = Math.floor(Math.random() * 99) + 1;
        const token: Token = new Token();
        token.move(randomMovement);
        expect(token.position).toBe(1 + randomMovement);
    });

    test('token can be moved forward', () => {
        const movement = 7;
        const token: Token = new Token();
        token.move(movement);
        expect(token.position).toBe(1 + movement);
    });

    test('token can be moved backwards', () => {
        const startingPosition = 55;
        const movement = -20;
        const token: Token = new Token(startingPosition);
        token.move(movement);
        expect(token.position).toBe(35);
    });

    test('token can not be moved further back than position 1', () => {
        const startingPosition = 1;
        const movement = -99;
        const token: Token = new Token(startingPosition);
        token.move(movement);
        expect(token.position).toBe(startingPosition);
    });

    test('token can not be moved past position 100', () => {
        const startingPosition = 98;
        const movement = 6;
        const token: Token = new Token(startingPosition);
        token.move(movement);
        expect(token.position).toBe(startingPosition);
    });

});