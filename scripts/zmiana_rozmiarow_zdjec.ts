import path from "path";
import sharp from "sharp";
import fse from "fs-extra";

(async () => {
    // const ROOT = path.join(__dirname, "public", "images", "landing-page", "images-matching-game", "NOWE");
    const ROOT = path.join(__dirname, "dane_do_skryptow");
    const RESULT = path.join(__dirname, "wynik");

    let images: string[] = (await fse.readdir(ROOT)) as any;

    images = images.filter((image) => image.endsWith(".jpg") || image.endsWith(".png") || image.endsWith(".jpeg"));

    await fse.emptyDir(RESULT);

    for (const image of images) {
        // Change image's size to 480x360 using sharp
        const original = path.join(ROOT, image);
        const copy = path.join(RESULT, `COPY_${image}`);

        const createName = (name: string) => path.join(RESULT, name);
        // Copy current image for safety
        // fse.copyFileSync(original, copy);

        // await sharp(copy).resize(320, 320).toFile(original);
        let height;

        const sizes = [1540, 1280, 1024, 800, 480];

        for (const size of sizes) {
            height = Math.floor(size / 1.33333);
            const extension = image.split(".").pop();

            await sharp(original)
                .resize(size, height)
                .toFile(createName(`${size}x${height}.${extension}`));
        }
    }

    // for (const folder of features) {
    //     const tempImagePath = path.join(basePath, "temp.jpg");

    //     if (await fse.pathExists(path.join(basePath, "thumbnail.jpg"))) continue;
    //     console.log(folder);

    //     await sharp(tempImagePath).resize(480, 360).toFile(path.join(basePath, "thumbnail.jpg"));
    //     await sharp(tempImagePath).resize(1920, 1280).toFile(path.join(basePath, "fullsize.jpg"));
    //     await fse.remove(tempImagePath);
    // }
})();
