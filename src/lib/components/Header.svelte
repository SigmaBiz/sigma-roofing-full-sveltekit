<script>
  import { Menu, X } from 'lucide-svelte';
  
  let isMobileMenuOpen = false;
  
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    isMobileMenuOpen = false;
  }
</script>

<header class="bg-white shadow-lg sticky top-0 z-50">
  <div class="container mx-auto px-4 py-4">
    <div class="flex justify-between items-center">
      <!-- Company Logo and Name -->
      <div class="flex items-center space-x-3">
        <img 
          src="/sigma-logo.png" 
          alt="Sigma Roofing LLC Logo" 
          class="w-16 h-16 object-contain"
        />
        <div>
          <h1 class="font-bold text-xl text-gray-800">Sigma Roofing LLC</h1>
          <p class="text-sm text-gray-600">LIC#80006734</p>
        </div>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-8">
        <button
          on:click={() => scrollToSection('home')}
          class="font-medium text-gray-700 hover:text-emerald-600 transition-colors"
        >
          Home
        </button>
        <button
          on:click={() => scrollToSection('services')}
          class="font-medium text-gray-700 hover:text-emerald-600 transition-colors"
        >
          Services
        </button>
        <button
          on:click={() => scrollToSection('about')}
          class="font-medium text-gray-700 hover:text-emerald-600 transition-colors"
        >
          About
        </button>
        <button
          on:click={() => scrollToSection('projects')}
          class="font-medium text-gray-700 hover:text-emerald-600 transition-colors"
        >
          Projects
        </button>
        <button
          on:click={() => scrollToSection('faq')}
          class="font-medium text-gray-700 hover:text-emerald-600 transition-colors"
        >
          FAQ
        </button>
        <button
          on:click={() => scrollToSection('contact')}
          class="font-medium text-gray-700 hover:text-emerald-600 transition-colors"
        >
          Contact
        </button>
      </nav>

      <!-- Contact Info -->
      <div class="hidden lg:flex items-center space-x-6">
        <div class="text-right">
          <p class="font-semibold text-gray-800">(405) 902-1826</p>
          <p class="text-sm text-gray-600">Free Estimates</p>
        </div>
        <button 
          on:click={() => scrollToSection('contact')}
          class="bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-2 rounded-md font-medium transition-colors"
        >
          Get Quote
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden text-gray-800"
        on:click={() => isMobileMenuOpen = !isMobileMenuOpen}
      >
        {#if isMobileMenuOpen}
          <X size={24} />
        {:else}
          <Menu size={24} />
        {/if}
      </button>
    </div>

    <!-- Mobile Menu -->
    {#if isMobileMenuOpen}
      <div class="md:hidden mt-4">
        <nav class="flex flex-col space-y-3 pb-4">
          <button
            on:click={() => scrollToSection('home')}
            class="font-medium text-gray-700 hover:text-emerald-600 transition-colors text-left"
          >
            Home
          </button>
          <button
            on:click={() => scrollToSection('services')}
            class="font-medium text-gray-700 hover:text-emerald-600 transition-colors text-left"
          >
            Services
          </button>
          <button
            on:click={() => scrollToSection('about')}
            class="font-medium text-gray-700 hover:text-emerald-600 transition-colors text-left"
          >
            About
          </button>
          <button
            on:click={() => scrollToSection('projects')}
            class="font-medium text-gray-700 hover:text-emerald-600 transition-colors text-left"
          >
            Projects
          </button>
          <button
            on:click={() => scrollToSection('faq')}
            class="font-medium text-gray-700 hover:text-emerald-600 transition-colors text-left"
          >
            FAQ
          </button>
          <button
            on:click={() => scrollToSection('contact')}
            class="font-medium text-gray-700 hover:text-emerald-600 transition-colors text-left"
          >
            Contact
          </button>
          <div class="pt-4 border-t">
            <p class="font-semibold text-gray-800">(405) 902-1826</p>
            <button 
              on:click={() => scrollToSection('contact')}
              class="bg-emerald-600 text-white mt-2 w-full hover:bg-emerald-700 px-4 py-2 rounded-md font-medium transition-colors"
            >
              Get Quote
            </button>
          </div>
        </nav>
      </div>
    {/if}
  </div>
</header>