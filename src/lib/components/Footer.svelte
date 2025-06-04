<script>
  import { Facebook, Linkedin } from 'lucide-svelte';
  
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<footer class="bg-sigma-charcoal text-white py-16">
  <div class="container mx-auto px-4">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      <!-- Company Info -->
      <div>
        <div class="flex items-center space-x-3 mb-6">
          <img 
            src="/sigma-logo.png" 
            alt="Sigma Roofing LLC Logo" 
            class="w-12 h-12 object-contain"
          />
          <div>
            <h3 class="font-bold text-xl">Sigma Roofing LLC</h3>
            <p class="text-sm text-gray-400">LIC#80006734</p>
          </div>
        </div>
        <p class="text-gray-300 mb-4">
          Professional roofing and painting services in Edmond, Oklahoma. Licensed, insured, and committed to quality workmanship.
        </p>
        <div class="flex space-x-4">
          <button aria-label="Visit our Facebook page" class="w-10 h-10 bg-sigma-gold hover:bg-yellow-600 rounded flex items-center justify-center transition-colors">
            <Facebook size={16} class="text-white" />
          </button>
          <button aria-label="Visit our Google Business page" class="w-10 h-10 bg-sigma-gold hover:bg-yellow-600 rounded flex items-center justify-center transition-colors">
            <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.766 12.264c0-.815-.069-1.598-.194-2.347H12.24v4.448h6.482c-.28 1.48-1.126 2.732-2.394 3.57v2.963h3.877c2.269-2.09 3.56-5.166 3.56-8.634zM12.24 24c3.239 0 5.958-1.07 7.942-2.897l-3.877-2.963c-1.074.72-2.45 1.146-4.065 1.146-3.125 0-5.77-2.11-6.715-4.947H1.517v3.066C3.483 21.327 7.591 24 12.24 24z"/>
              <path d="M5.525 14.34c-.24-.72-.378-1.49-.378-2.29s.138-1.57.378-2.29V6.693H1.517C.552 8.623 0 10.773 0 13.05s.552 4.427 1.517 6.357l4.008-3.066z"/>
              <path d="M12.24 4.714c1.762 0 3.344.606 4.587 1.794l3.442-3.442C18.189 1.17 15.469 0 12.24 0 7.591 0 3.483 2.673 1.517 6.693l4.008 3.067c.945-2.838 3.59-4.947 6.715-4.947z"/>
            </svg>
          </button>
          <button aria-label="Visit our LinkedIn page" class="w-10 h-10 bg-sigma-gold hover:bg-yellow-600 rounded flex items-center justify-center transition-colors">
            <Linkedin size={16} class="text-white" />
          </button>
        </div>
      </div>

      <!-- Services -->
      <div>
        <h3 class="font-bold text-lg mb-6">Our Services</h3>
        <ul class="space-y-3 text-gray-300">
          <li><button on:click={() => scrollToSection('services')} class="hover:text-sigma-gold transition-colors text-left">Residential Roofing</button></li>
          <li><button on:click={() => scrollToSection('services')} class="hover:text-sigma-gold transition-colors text-left">Exterior Painting</button></li>
          <li><button on:click={() => scrollToSection('services')} class="hover:text-sigma-gold transition-colors text-left">Roof Repairs</button></li>
          <li><button on:click={() => scrollToSection('services')} class="hover:text-sigma-gold transition-colors text-left">Storm Damage</button></li>
          <li><button on:click={() => scrollToSection('services')} class="hover:text-sigma-gold transition-colors text-left">Roof Inspections</button></li>
          <li><button on:click={() => scrollToSection('services')} class="hover:text-sigma-gold transition-colors text-left">Gutter Services</button></li>
        </ul>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="font-bold text-lg mb-6">Quick Links</h3>
        <ul class="space-y-3 text-gray-300">
          <li><button on:click={() => scrollToSection('home')} class="hover:text-sigma-gold transition-colors text-left">Home</button></li>
          <li><button on:click={() => scrollToSection('about')} class="hover:text-sigma-gold transition-colors text-left">About Us</button></li>
          <li><button on:click={() => scrollToSection('services')} class="hover:text-sigma-gold transition-colors text-left">Services</button></li>
          <li><button on:click={() => scrollToSection('projects')} class="hover:text-sigma-gold transition-colors text-left">Projects</button></li>
          <li><button on:click={() => scrollToSection('contact')} class="hover:text-sigma-gold transition-colors text-left">Contact</button></li>
          <li><button on:click={() => scrollToSection('contact')} class="hover:text-sigma-gold transition-colors text-left">Free Estimate</button></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div>
        <h3 class="font-bold text-lg mb-6">Contact Info</h3>
        <div class="space-y-4 text-gray-300">
          <div class="flex items-start space-x-3">
            <div>
              <p class="font-semibold">(405) 902-1826</p>
              <p class="text-sm">24/7 Emergency Service</p>
            </div>
          </div>
          <div>
            <p>ok.sigmaroofs@gmail.com</p>
          </div>
          <div>
            <p>16612 N Western Avenue</p>
            <p>Edmond, OK 73012</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="border-t border-gray-700 pt-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm mb-4 md:mb-0">
          © 2024 Sigma Roofing LLC. All rights reserved. Licensed Contractor LIC#80006734
        </p>
        <div class="flex space-x-6 text-sm text-gray-400">
          <a href="/privacy-policy" class="hover:text-sigma-gold transition-colors">Privacy Policy</a>
          <a href="/terms-of-service" class="hover:text-sigma-gold transition-colors">Terms of Service</a>
          <a href="/sitemap" class="hover:text-sigma-gold transition-colors">Sitemap</a>
        </div>
      </div>
    </div>
  </div>
</footer>