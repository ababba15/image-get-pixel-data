import Jimp from 'jimp';

function imgProcess(path) {
    return new Promise(resolve => {
        Jimp.read(path, function(err, image) {
            const result = [];
            const width = image.bitmap.width;
            const height = image.bitmap.height;
            for (let i = 0; i < width; i++) {
                for (let j = 0; j < height; j++) {
                    await image.getPixelColor(i, j, (err, hex) => {
                        const pixel = Jimp.intToRGBA(hex);
                        pixel.i = j + width * i;
                        result.push(pixel);
                    });
                    console.log(image.getPixelColor);
                }
            }
            resolve(result);
        });
    });
}

export async function imgData(path) {
    return await imgProcess(path)
}