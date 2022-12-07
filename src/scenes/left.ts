import { Container, interaction, Sprite } from 'pixi.js';
import { positionSprite, spriteOnMouseMove } from '../pixi.utils';
import { App } from '../types';

export class Left extends Container {
    app: App;
    children: Sprite[];
    mouseX?: number;
    mouseY?: number;
    positions: { x: number; y: number }[];

    constructor(app: App) {
        super();
        this.app = app;
        this.update = this.update.bind(this);
        this.getChildren = this.getChildren.bind(this);
        this.setPositions = this.setPositions.bind(this);

        this.children = this.getChildren();
        this.children.forEach((child) => this.addChild(child));
        // set positions
        this.setPositions();

        // store positions
        this.positions = this.children.map((child) => ({
            x: child.x,
            y: child.y,
        }));

        app.renderer.plugins.interaction.on('mousemove', (event: any) => {
            this.mouseX = event.data.global.x;
            this.mouseY = event.data.global.y;
        });

        // Handle window resizing
        window.addEventListener('resize', (e) => {
            this.setPositions();
            this.positions = this.children.map((child) => ({
                x: child.x,
                y: child.y,
            }));
        });

        // Handle update
        app.ticker.add(this.update);
    }

    setPositions() {
        if (window.innerWidth < 768) {
            this.y = window.innerHeight * 0.2;
            // K
            positionSprite(
                [this.children[4], this.children[5]],
                window.innerWidth * 0.52,
                window.innerHeight * 0.2,
                0.35
            );
            // I
            positionSprite(
                [this.children[8], this.children[9]],
                window.innerWidth * 0.32,
                window.innerHeight * 0.57,
                0.35
            );
            // B
            positionSprite(
                [this.children[6], this.children[7]],
                window.innerWidth * 0.67,
                window.innerHeight * 0.52,
                0.35
            );
            // A
            positionSprite(
                [this.children[2], this.children[3]],
                window.innerWidth * 0.85,
                window.innerHeight * 0.27,
                0.35
            );
            // MAI
            positionSprite(
                [this.children[0], this.children[1]],
                window.innerWidth * 0.73,
                window.innerHeight * 0.1,
                0.35
            );
            // CH
            positionSprite(
                [this.children[10], this.children[11]],
                window.innerWidth * 0.4,
                window.innerHeight * 0,
                0.35
            );
            // II
            positionSprite(
                [this.children[12], this.children[13]],
                window.innerWidth * 0.15,
                window.innerHeight * 0.45,
                0.35
            );
        } else {
            this.y = window.innerHeight * 0.15;
            // K
            positionSprite(
                [this.children[4], this.children[5]],
                window.innerWidth * 0.595,
                window.innerHeight * 0.31,
                0.5
            );
            // I
            positionSprite(
                [this.children[8], this.children[9]],
                window.innerWidth * 0.43,
                window.innerHeight * 0.6,
                0.5
            );
            // B
            positionSprite(
                [this.children[6], this.children[7]],
                window.innerWidth * 0.62,
                window.innerHeight * 0.58,
                0.5
            );
            // A
            positionSprite(
                [this.children[2], this.children[3]],
                window.innerWidth * 0.78,
                window.innerHeight * 0.27,
                0.45
            );
            // MAI
            positionSprite(
                [this.children[0], this.children[1]],
                window.innerWidth * 0.63,
                window.innerHeight * 0.03,
                0.5
            );
            // CH
            positionSprite(
                [this.children[10], this.children[11]],
                window.innerWidth * 0.455,
                window.innerHeight * 0,
                0.5
            );
            // II
            positionSprite(
                [this.children[12], this.children[13]],
                window.innerWidth * 0.265,
                window.innerHeight * 0.25,
                0.5
            );
        }
    }

    moveSprites() {
        // MAI
        spriteOnMouseMove.apply(this, [
            this.children,
            [0, 1],
            true,
            { x: 1.01, y: 1.01, mouseRatio: 0.0002 },
            this.positions,
            this.mouseX,
            this.mouseY,
        ]);
        // A SMALL
        spriteOnMouseMove.apply(this, [
            this.children,
            [2, 3],
            true,
            { x: 1.035, y: 1.09, mouseRatio: 0.0008 },
            this.positions,
            this.mouseX,
            this.mouseY,
        ]);
        // K
        spriteOnMouseMove.apply(this, [
            this.children,
            [4, 5],
            true,
            { x: 1.01, y: 1.01, mouseRatio: 0.00018 },
            this.positions,
            this.mouseX,
            this.mouseY,
        ]);
        // B
        spriteOnMouseMove.apply(this, [
            this.children,
            [6, 7],
            true,
            { x: 1.01, y: 1.01, mouseRatio: 0.0002 },
            this.positions,
            this.mouseX,
            this.mouseY,
        ]);
        // I small
        spriteOnMouseMove.apply(this, [
            this.children,
            [8, 9],
            true,
            { x: 1.05, y: 1.04, mouseRatio: 0.0015 },
            this.positions,
            this.mouseX,
            this.mouseY,
        ]);
        // CH
        spriteOnMouseMove.apply(this, [
            this.children,
            [10, 11],
            true,
            { x: 1.04, y: 4, mouseRatio: 0.0003 },
            this.positions,
            this.mouseX,
            this.mouseY,
        ]);
        // II
        spriteOnMouseMove.apply(this, [
            this.children,
            [12, 13],
            true,
            { x: 1.04, y: 1.06, mouseRatio: 0.0002 },
            this.positions,
            this.mouseX,
            this.mouseY,
        ]);
    }

    getChildren() {
        const resources = this.app.loader.resources;

        return [
            // MAI 0,1
            new Sprite(resources['assets/mai-base.png'].texture),
            new Sprite(resources['assets/mai-fade.png'].texture),
            // A Small 2,3
            new Sprite(resources['assets/a-sm-base.png'].texture),
            new Sprite(resources['assets/a-sm-fade.png'].texture),
            // K 4,5
            new Sprite(resources['assets/k-base.png'].texture),
            new Sprite(resources['assets/k-fade.png'].texture),
            // B 6,7
            new Sprite(resources['assets/b-base.png'].texture),
            new Sprite(resources['assets/b-fade.png'].texture),
            // I small 8,9
            new Sprite(resources['assets/i-sm-base.png'].texture),
            new Sprite(resources['assets/i-sm-fade.png'].texture),
            // CH 10,11
            new Sprite(resources['assets/ch-base.png'].texture),
            new Sprite(resources['assets/ch-fade.png'].texture),
            // II 12,13
            new Sprite(resources['assets/ii-base.png'].texture),
            new Sprite(resources['assets/ii-fade.png'].texture),
        ];
    }

    update(_: any, delta: number) {
        if (this.mouseX) {
            this.moveSprites();
        }
    }
}
