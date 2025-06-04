import { browser } from '$app/environment';

// Default images
const defaultImages = {
  heroBackground: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  teamPhoto: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
  visionImage: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
  residentialRoofingImage: null,
  paintingServiceImage: null,
  roofRepairImage: null,
  roofInspectionImage: null,
  gutterServiceImage: null,
  stormDamageImage: null
};

class ImageService {
  constructor() {
    this.images = { ...defaultImages };
    this.loadFromStorage();
  }

  loadFromStorage() {
    if (!browser) return;
    
    try {
      const stored = localStorage.getItem('websiteImages');
      if (stored) {
        const parsed = JSON.parse(stored);
        this.images = { ...defaultImages, ...parsed };
      }
    } catch (error) {
      console.error('Error loading images from storage:', error);
    }
  }

  saveToStorage() {
    if (!browser) return;
    
    try {
      localStorage.setItem('websiteImages', JSON.stringify(this.images));
    } catch (error) {
      console.error('Error saving images to storage:', error);
    }
  }

  getImage(key) {
    return this.images[key] || null;
  }

  setImage(key, url) {
    this.images[key] = url;
    this.saveToStorage();
  }

  getAllImages() {
    return { ...this.images };
  }

  resetToDefaults() {
    this.images = { ...defaultImages };
    this.saveToStorage();
  }
}

export const imageService = new ImageService();