class Token {
    private _position: number;

    constructor(position: number = 1) {
        this._position = position;
    }

    get position(): number {
        return this._position;
    }

    move(distance: number) {
        this._position += distance;
    }
}

describe('token', () => {
    test('token starts at position 1', () => {
        const token: Token = new Token();
        expect(token.position).toBe(1);
    });

    // new token moved 3 spaces is on position 4

    // new token moved 3 spaces, then 4 spaces, is in position 8

    // new token moved X spaces is in position 1+X

    // token can be moved forward

    // token can be moved backward

    // token can not be moved past position 100
});