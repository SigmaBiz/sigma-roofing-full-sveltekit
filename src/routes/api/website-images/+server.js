import { json } from '@sveltejs/kit';
import { imageService } from '$lib/services/imageService';

export async function GET() {
  try {
    const images = imageService.getAllImages();
    return json({
      success: true,
      images
    });
  } catch (error) {
    return json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}

export async function POST({ request }) {
  try {
    const data = await request.json();
    
    // Update images in the service
    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        imageService.setImage(key, value);
      }
    });
    
    return json({
      success: true,
      message: 'Images updated successfully',
      images: imageService.getAllImages()
    });
  } catch (error) {
    return json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}