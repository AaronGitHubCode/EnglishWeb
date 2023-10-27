"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ball = void 0;
var Ball = /** @class */ (function () {
    function Ball(params) {
        this._context = params.context;
        this._pos.x = params.pos.x;
        this._pos.y = params.pos.y;
        this._collisions.left = params.collisions.left;
        this._collisions.up = params.collisions.up;
    }
    Object.defineProperty(Ball.prototype, "context", {
        get: function () { return this._context; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "x", {
        get: function () { return this._pos.x; },
        set: function (value) { this._pos.x = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "y", {
        get: function () { return this._pos.y; },
        set: function (value) { this._pos.y = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "up", {
        get: function () { return this._collisions.up; },
        set: function (value) { this._collisions.up = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "left", {
        get: function () { return this._collisions.left; },
        set: function (value) { this._collisions.left = value; },
        enumerable: false,
        configurable: true
    });
    return Ball;
}());
exports.Ball = Ball;
