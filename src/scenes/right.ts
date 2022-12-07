import { Container, interaction, Sprite } from 'pixi.js';
import { positionSprite, spriteOnMouseMove } from '../pixi.utils';
import { App } from '../types';

export class Right extends Container {
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
            // M
            positionSprite(
                [this.children[0], this.children[1]],
                window.innerWidth * 0.2,
                window.innerHeight * 0.05,
                0.35
            );
            // A
            positionSprite(
                [this.children[2], this.children[3]],
                window.innerWidth * 0.25,
                window.innerHeight * 0.14,
                0.35
            );
            // I
            positionSprite(
                [this.children[4], this.children[5]],
                window.innerWidth * 0.53,
                window.innerHeight * 0.07,
                0.35
            );

            // O
            positionSprite(
                [this.children[6], this.children[7]],
                window.innerWidth * 0.67,
                window.innerHeight * 0.18,
                0.35
            );
            // C
            positionSprite(
                [this.children[10], this.children[11]],
                window.innerWidth * 0.15,
                window.innerHeight * 0.32,
                0.35
            );
            // H
            positionSprite(
                [this.children[8], this.children[9]],
                window.innerWidth * 0.4,
                window.innerHeight * 0.29,
                0.35
            );

            // KO
            positionSprite(
                [this.children[12], this.children[13]],
                window.innerWidth * 0.64,
                window.innerHeight * 0.37,
                0.35
            );

            // BA
            positionSprite(
                [this.children[14], this.children[15]],
                window.innerWidth * 0.4,
                window.innerHeight * 0.47,
                0.35
            );
        } else {
            this.y = window.innerHeight * 0.15;
            // M
            positionSprite(
                [this.children[0], this.children[1]],
                window.innerWidth * 0.3,
                window.innerHeight * 0.04,
                0.5
            );
            // A
            positionSprite(
                [this.children[2], this.children[3]],
                window.innerWidth * 0.38,
                window.innerHeight * 0.2,
                0.5
            );
            // I
            positionSprite(
                [this.children[4], this.children[5]],
                window.innerWidth * 0.53,
                window.innerHeight * 0.11,
                0.5
            );

            // O
            positionSprite(
                [this.children[6], this.children[7]],
                window.innerWidth * 0.67,
                window.innerHeight * 0.14,
                0.5
            );
            // C
            positionSprite(
                [this.children[10], this.children[11]],
                window.innerWidth * 0.19,
                window.innerHeight * 0.41,
                0.5
            );
            // H
            positionSprite(
                [this.children[8], this.children[9]],
                window.innerWidth * 0.475,
                window.innerHeight * 0.41,
                0.55
            );

            // KO
            positionSprite(
                [this.children[12], this.children[13]],
                window.innerWidth * 0.65,
                window.innerHeight * 0.4,
                0.5
            );

            // BA
            positionSprite(
                [this.children[14], this.children[15]],
                window.innerWidth * 0.31,
                window.innerHeight * 0.485,
                0.4
            );
        }
    }

    moveSprites() {
        // M
        spriteOnMouseMove.apply(this, [
            this.children,
            [0, 1],
            false,
            { x: 0.96, y: 0.81, mouseRatio: 0.0003 },
            this.positions,
            this.mouseX,
            this.mouseY,
        ]);
        // A
        spriteOnMouseMove.apply(this, [
            this.children,
            [2, 3],
            false,
            { x: 0.82, y: 0.72, mouseRatio: 0.0007 },
            this.positions,
            this.mouseX,
            this.mouseY,
        ]);
        // I
        spriteOnMouseMove.apply(this, [
            this.children,
            [4, 5],
            false,
            { x: 0.95, y: 0.8, mouseRatio: 0.0005 },
            this.positions,
            this.mouseX,
            this.mouseY,
        ]);
        // o
        spriteOnMouseMove.apply(this, [
            this.children,
            [6, 7],
            false,
            { x: 0.98, y: 0.96, mouseRatio: 0.0002 },
            this.positions,
            this.mouseX,
            this.mouseY,
        ]);
        // H
        spriteOnMouseMove.apply(this, [
            this.children,
            [8, 9],
            false,
            { x: 0.86, y: 0.81, mouseRatio: 0.00095 },
            this.positions,
            this.mouseX,
            this.mouseY,
        ]);
        // C
        spriteOnMouseMove.apply(this, [
            this.children,
            [10, 11],
            false,
            { x: 0.91, y: 0.95, mouseRatio: 0.0005 },
            this.positions,
            this.mouseX,
            this.mouseY,
        ]);
        // KO
        spriteOnMouseMove.apply(this, [
            this.children,
            [12, 13],
            false,
            { x: 0.98, y: 0.99, mouseRatio: 0.00025 },
            this.positions,
            this.mouseX,
            this.mouseY,
        ]);
        // BA
        spriteOnMouseMove.apply(this, [
            this.children,
            [14, 15],
            false,
            { x: 0.98, y: 0.99, mouseRatio: 0.00025 },
            this.positions,
            this.mouseX,
            this.mouseY,
        ]);

        // this.children.map(child => {
        //   if (this.children.indexOf(child) % 2 === 0) {
        //     const index = this.children.indexOf(child)
        //     spriteOnMouseMove.apply(this, [
        //       this.children, [index, index + 1]
        //     ]);
        //   }
        // })
    }

    getChildren() {
        const resources = this.app.loader.resources;

        return [
            // M 0,1
            new Sprite(resources['assets/m-base.png'].texture),
            new Sprite(resources['assets/m-fade.png'].texture),
            // A 2,3
            new Sprite(resources['assets/a-base.png'].texture),
            new Sprite(resources['assets/a-fade.png'].texture),
            // I 4,5
            new Sprite(resources['assets/i-base.png'].texture),
            new Sprite(resources['assets/i-fade.png'].texture),
            // O 6,7
            new Sprite(resources['assets/o-base.png'].texture),
            new Sprite(resources['assets/o-fade.png'].texture),
            // H 8,9
            new Sprite(resources['assets/h-base.png'].texture),
            new Sprite(resources['assets/h-fade.png'].texture),
            // C 10,11
            new Sprite(resources['assets/c-base.png'].texture),
            new Sprite(resources['assets/c-fade.png'].texture),
            // KO 12, 13
            new Sprite(resources['assets/ko-base.png'].texture),
            new Sprite(resources['assets/ko-fade.png'].texture),
            // BA 14, 15
            new Sprite(resources['assets/ba-base.png'].texture),
            new Sprite(resources['assets/ba-fade.png'].texture),
        ];
    }

    update(_: any, delta: number) {
        if (this.mouseX) {
            this.moveSprites();
        }
    }
}
