export class Ball {
    private readonly _context: CanvasRenderingContext2D;
    
    private readonly _pos: {
        x: number, 
        y: number
    };

    private readonly _collisions: {
        left: boolean, 
        up: boolean
    };

    public constructor(params: {context: CanvasRenderingContext2D, pos: {x: number, y: number}, collisions: {up: false, left: false}}) {
        this._context           = params.context;
        this._pos.x             = params.pos.x;
        this._pos.y             = params.pos.y;
        this._collisions.left   = params.collisions.left
        this._collisions.up     = params.collisions.up
    }

    get context(): CanvasRenderingContext2D {return this._context; }

    get x(): number { return this._pos.x; }
    set x(value: number) { this._pos.x = value; }

    get y(): number { return this._pos.y; }
    set y(value: number) { this._pos.y = value; }

    get up(): boolean { return this._collisions.up; }
    set up(value: boolean) { this._collisions.up = value; }

    get left(): boolean { return this._collisions.left; }
    set left(value: boolean) { this._collisions.left = value; }
}