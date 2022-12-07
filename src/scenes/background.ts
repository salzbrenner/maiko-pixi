import { Container, Sprite } from 'pixi.js';
import { scaleSpriteToCanvas } from '../pixi.utils';
import { App } from '../types';

type State = {
    transition: number;
    dispScale: number;
    dispX: boolean;
    dispY: boolean;
};

export class Background extends Container {
    app: App;
    sprite: Sprite;
    // bgDpSprite: Sprite;
    // layerDpSprite: Sprite;
    // bgDpFilter: any;
    // layerDpFilter: any;

    state: State;

    constructor(app: App) {
        super();
        this.app = app;
        this.update = this.update.bind(this);
        this.state = {
            transition: 3,
            dispScale: 20,
            dispX: false,
            dispY: true,
        };

        this.sprite = new Sprite(
            app.loader.resources['assets/darkness-10.jpg'].texture
        );

        this.alpha = 0.35;
        scaleSpriteToCanvas(this.sprite, app.renderer.view);

        this.addChild(app.__filters.bgDpSprite);
        this.addChild(this.sprite);

        this.filters = [app.__filters.bgDpFilter];

        // Handle window resizing
        window.addEventListener('resize', (e) => {
            scaleSpriteToCanvas(this.sprite, app.renderer.view);
        });

        // Handle update
        app.ticker.add(this.update);
    }

    update() {
        const { __filters } = this.app;
        if (__filters.bgDpSprite && __filters.layerDpSprite) {
            __filters.bgDpFilter.scale.x = this.state.dispX
                ? this.state.transition * this.state.dispScale
                : 0;
            __filters.bgDpFilter.scale.y = this.state.dispY
                ? this.state.transition * (this.state.dispScale + 10)
                : 0;

            __filters.bgDpSprite.x += 0.1;
            __filters.bgDpSprite.y += 0.4;

            // __filters.layerDpSprite.x += 0.9;
            // __filters.layerDpSprite.y += 1;
        }
    }
}
