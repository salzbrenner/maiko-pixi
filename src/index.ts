import * as PIXI from 'pixi.js';
import { spritePaths } from './pixi.utils';
import { Background } from './scenes/background';
import { App } from './types';
import { createFilters } from './scenes/filters';
import { Foreground } from './scenes/foreground';
import { Right } from './scenes/right';
import { Left } from './scenes/left';

PIXI.utils.skipHello();

const load = (app: PIXI.Application) => {
    return new Promise<void>((resolve) => {
        spritePaths.map((path) => app.loader.add(path));
        app.loader.load(() => resolve());
    });
};

const main = async () => {
    // Main app
    let app: App = new PIXI.Application();
    app.renderer = PIXI.autoDetectRenderer({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    // Display application properly
    document.body.style.margin = '0';
    app.renderer.view.style.position = 'absolute';
    app.renderer.view.style.display = 'block';

    // View size = windows
    app.renderer.resize(window.innerWidth, window.innerHeight);
    window.addEventListener('resize', (e) => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
    });

    // Load assets
    await load(app);

    app.__filters = createFilters(app);
    document.body.appendChild(app.view);

    // Set scene
    var bg = new Background(app);
    var fg = new Foreground(app);
    var right = new Right(app);
    var left = new Left(app);

    fg.addChild(right);
    fg.addChild(left);

    app.stage.addChild(bg);
    app.stage.addChild(fg);
};

main();
