import { Container, Sprite } from 'pixi.js';
import { App } from '../types';

export class Foreground extends Container {
    app: App;
    // sprite: Sprite;
    state: { scrollPos: number; alpha: number; decrease: boolean };

    constructor(app: App) {
        super();
        this.app = app;
        this.state = { scrollPos: window.scrollY, alpha: 0, decrease: false };
        this.update = this.update.bind(this);

        this.addChild(app.__filters.layerDpSprite);
        this.filters = [app.__filters.layerDpFilter];

        // this.sprite = new Sprite(
        //     app.loader.resources['assets/hello-world.png'].texture
        // );
        // this.sprite.x = window.innerWidth / 2 - this.sprite.width / 2;
        // this.sprite.y = window.innerHeight / 2 - this.sprite.height / 2;
        // this.addChild(this.sprite);

        // // Handle window resizing
        // window.addEventListener('resize', (e) => {
        //     this.sprite.x = window.innerWidth / 2 - this.sprite.width / 2;
        //     this.sprite.y = window.innerHeight / 2 - this.sprite.height / 2;
        // });
        window.addEventListener('scroll', () => {
            this.state.scrollPos = window.scrollY;
        });

        // Handle update
        app.ticker.add(this.update);
    }

    update() {
        const { __filters } = this.app;

        // if (this.state.scrollPos) {
        //     if (this.state.scrollPos < 100) {
        //         this.alpha = 1;
        //     } else {
        //         this.alpha = (600 - this.state.scrollPos) / 600;
        //     }
        // }

        __filters.layerDpSprite.x += 0.9;
        __filters.layerDpSprite.y += 1;

        if (this.state.alpha >= 1) {
            setTimeout(() => {
                this.state.decrease = true;
            }, 1000);
        } else if (this.state.alpha <= 0.56) {
            setTimeout(() => {
                this.state.decrease = false;
            }, 2000);
        }

        if (this.state.decrease) {
            this.state.alpha -= Math.random() * 0.003;
        } else {
            this.state.alpha += Math.random() * 0.0025;
        }

        this.alpha = this.state.alpha;
    }
}
