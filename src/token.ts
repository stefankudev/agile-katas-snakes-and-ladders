export class Token {
    private _position: number;

    constructor(position: number = 1) {
        this._position = position;
    }

    get position(): number {
        return this._position;
    }

    move(distance: number) {
        if (this._position + distance > 100) {
            return;
        }
        if (this._position + distance < 1) {
            return;
        }
        this._position += distance;
    }
}