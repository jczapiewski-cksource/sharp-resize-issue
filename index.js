const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function resizeImage() {
    const imageFileBuffer = fs.readFileSync(
        path.resolve(__dirname, 'original.jpg')
    );

    const resizedImageFileBuffer = await sharp(imageFileBuffer).resize(80).toBuffer();

    fs.writeFileSync(
        path.resolve(__dirname, 'resized.jpg'),
        resizedImageFileBuffer
    )
}

resizeImage();
