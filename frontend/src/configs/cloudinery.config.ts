export default async function uploadImgToCloudinary(imageFile: File) {
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', 'developer_forum');
    const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNA}/image/upload?folder=developerForum`, {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Failed to upload image');
    }

    const result = await response.json();
    if (result && result.url) {
        return result.url;
    } else {
        throw new Error('Failed to upload image');
    }

}