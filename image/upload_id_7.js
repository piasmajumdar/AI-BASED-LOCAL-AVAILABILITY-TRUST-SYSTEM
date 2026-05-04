const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: "dt6mkrgtp",
  api_key: "716146734533797",
  api_secret: "fsamLyy8UeS9xElEnjFqkWj708I"
});

// 👉 Only id_7 folder
const folderPath = path.join(__dirname, 'shops', 'id_7');

async function uploadId7() {
  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const filePath = path.join(folderPath, file);

    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: "shops/id_7",
        use_filename: true,
        unique_filename: false
      });

      console.log("✅ Uploaded:", result.secure_url);
    } catch (err) {
      console.error("❌ Error:", err.message);
    }
  }
}

uploadId7();