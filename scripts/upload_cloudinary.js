import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs/promises';
import path from 'path';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadVideos() {
    const folderPath = path.join(
        process.cwd(),
        'client',
        'src',
        'assets',
        'Videos',
        'Testimonial'
    );

    const files = await fs.readdir(folderPath);
    const mp4Files = files.filter((f) => f.endsWith('.mp4'));

    console.log(`Found ${mp4Files.length} MP4 files to upload...`);

    for (let i = 0; i < mp4Files.length; i++) {
        const file = mp4Files[i];
        const filePath = path.join(folderPath, file);
        const publicId = `testimonial-${i + 1}`; // e.g. testimonial-1

        console.log(`Uploading ${file} as ${publicId}...`);

        try {
            const result = await cloudinary.uploader.upload(filePath, {
                resource_type: 'video',
                folder: 'nkc-builders-website/testimonials',
                public_id: publicId,
                overwrite: true,
            });

            console.log(`✅ Uploaded ${file}`);
            console.log(`➡️  URL: ${result.secure_url}`);
        } catch (e) {
            console.error(`❌ Failed to upload ${file}:`, e);
        }
    }
}

uploadVideos().then(() => console.log("Done."));
