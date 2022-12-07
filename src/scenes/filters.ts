import { filters, Sprite, Texture, WRAP_MODES } from 'pixi.js';
import { App } from '../types';

export const createFilters = (app: App) => {
    const PIXI = app;
    const resources = PIXI.loader.resources;

    // layers
    const layerDpSprite = new Sprite(
        resources['assets/displacement.png'].texture
    );
    layerDpSprite.width = window.innerWidth;

    const layerDpFilter = new filters.DisplacementFilter(layerDpSprite);
    layerDpSprite.width = window.innerWidth;

    // bg
    const bgDpSprite = new Sprite(
        resources['assets/displacement-5.jpg'].texture
    );
    // scaleSpriteToCanvas(bgDpSprite, renderer.view);
    const bgDpFilter = new filters.DisplacementFilter(bgDpSprite);
    bgDpFilter.scale.x = bgDpFilter.scale.y = 60;

    // repeat layer as it moves (v4)
    const displacementTexture = Texture.from('assets/displacement-5.jpg');
    const dTexture = Texture.from('assets/displacement.png');
    displacementTexture.baseTexture.wrapMode = WRAP_MODES.REPEAT;
    dTexture.baseTexture.wrapMode = WRAP_MODES.REPEAT;

    return {
        bgDpSprite,
        layerDpFilter,
        layerDpSprite,
        bgDpFilter,
    };
};
