import { Container, Sprite } from 'pixi.js';

export const spritePaths = [
    'assets/hello-world.png',
    'assets/m-base.png',
    'assets/m-fade.png',
    'assets/a-base.png',
    'assets/a-fade.png',
    'assets/i-base.png',
    'assets/i-fade.png',
    'assets/k-base.png',
    'assets/k-fade.png',
    'assets/o-base.png',
    'assets/o-fade.png',
    'assets/h-base.png',
    'assets/h-fade.png',
    'assets/c-base.png',
    'assets/c-fade.png',
    'assets/i-sm-base.png',
    'assets/i-sm-fade.png',
    'assets/b-base.png',
    'assets/b-fade.png',
    'assets/a-sm-base.png',
    'assets/a-sm-fade.png',
    // japanese characters
    'assets/mai-base.png',
    'assets/mai-fade.png',
    'assets/ko-base.png',
    'assets/ko-fade.png',
    'assets/ch-base.png',
    'assets/ch-fade.png',
    'assets/ii-base.png',
    'assets/ii-fade.png',
    'assets/ba-base.png',
    'assets/ba-fade.png',
    // background
    // 'assets/darkness-2.jpg',
    // 'assets/darkness-3.jpg',
    // 'assets/darkness-4.jpg',
    // 'assets/darkness-5.jpg',
    // 'assets/darkness-6.jpg',
    // 'assets/darkness-7.jpg',
    // 'assets/darkness-8.jpg',
    // 'assets/darkness-9.png',
    'assets/darkness-10.jpg',
    // displacement
    'assets/displacement.png',
    // 'assets/displacement-2.jpg',
    // 'assets/displacement-3.png',
    // 'assets/displacement-4.jpg',
    'assets/displacement-5.jpg',
    // 'assets/displacement-7.png',
];

export function scaleSpriteToCanvas(spr: Sprite, canvas: HTMLCanvasElement) {
    const sprite = spr;
    const ratio = sprite.width / sprite.height;

    sprite.x = -(canvas.width * 0.1);

    if (canvas.width < canvas.height) {
        sprite.height = canvas.height * 1.2;
        sprite.width = ratio * sprite.height;
    } else {
        sprite.width = canvas.width * 1.2;
        sprite.height = sprite.width / ratio;

        if (sprite.height < canvas.height) {
            sprite.height = canvas.height * 1.2;
            sprite.width = ratio * sprite.height;
        }
    }
}

export function positionSprite(
    source: [Sprite, Sprite],
    x = 0,
    y = 0,
    scale: number
) {
    source.map((sprite, i) => {
        const spr = sprite;
        spr.x = x + i;
        spr.y = y + i;

        if (scale) {
            spr.scale.x = scale;
            spr.scale.y = scale;
        }
        return spr;
    });
}

export function spriteOnMouseMove(
    parentContainer: Sprite[],
    arrIndex: number[],
    reverse: boolean,
    obj: any,
    positions: { x: number; y: number }[],
    mouseX?: number,
    mouseY?: number
) {
    const sprites = [
        parentContainer[arrIndex[0]],
        parentContainer[arrIndex[1]],
    ];
    const spritesWidth = sprites[0].width + sprites[1].width;
    // const spritesHeight = sprites[0].height + sprites[1].height;
    const options = {
        x: reverse ? 1.1 : 0.9,
        y: reverse ? 1.1 : 0.9,
        mouseRatio: spritesWidth * 0.0006,
        frameRatio: 0.05,
    };
    if (obj) {
        if (typeof obj.x !== 'undefined') {
            options.x = obj.x;
        }
        if (typeof obj.y !== 'undefined') {
            options.y = obj.y;
        }
        if (typeof obj.mouseRatio !== 'undefined') {
            options.mouseRatio = spritesWidth * obj.mouseRatio;
        }
        if (typeof obj.frameRatio !== 'undefined') {
            options.frameRatio = obj.frameRatio;
        }
    }

    if (reverse) {
        sprites.map((spr, i) => {
            if (!mouseX || !mouseY) return spr;
            const sprite = spr;
            sprite.x +=
                (positions[arrIndex[i]].x * options.x +
                    (-mouseX * options.mouseRatio - sprite.x)) *
                options.frameRatio;
            sprite.y +=
                (positions[arrIndex[i]].y * options.y +
                    (-mouseY * options.mouseRatio - sprite.y)) *
                options.frameRatio;
            return sprite;
        });
    } else {
        sprites.map((spr, i) => {
            if (!mouseX || !mouseY) return spr;
            const sprite = spr;
            sprite.x +=
                (positions[arrIndex[i]].x * options.x +
                    (mouseX * options.mouseRatio - sprite.x)) *
                options.frameRatio;
            sprite.y +=
                (positions[arrIndex[i]].y * options.y +
                    (mouseY * options.mouseRatio - sprite.y)) *
                options.frameRatio;
            return sprite;
        });
    }
}
