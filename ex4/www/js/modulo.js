export default async function inicio() {
    const app = new PIXI.Application();

    await app.init({ background: '#1099bb', resizeTo: window });

    document.body.appendChild(app.canvas);

    const texture = await PIXI.Assets.load('img/bunny.png');

    const bunny = new PIXI.Sprite(texture);

    bunny.anchor.set(0.5);

    bunny.x = app.screen.width / 2;
    bunny.y = app.screen.height / 2;

    app.stage.addChild(bunny);

    app.ticker.add(() => {
        bunny.rotation += 0.1;
    });
}
