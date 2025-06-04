<script>
  import { onMount } from 'svelte';
  import { Home, PaintBucket, Hammer, ShieldCheck, Droplets, CloudRain, CheckCircle, Eye, Zap } from 'lucide-svelte';
  
  const services = [
    {
      icon: Home,
      title: "Residential Roofing",
      description: "Complete residential roofing services including new installations, repairs, and maintenance for all roof types.",
      features: ["Asphalt Shingles", "Metal Roofing", "Wood Shingles", "Storm Damage Repair"],
      imageKey: "residentialRoofingImage",
      iconColor: "bg-sigma-emerald"
    },
    {
      icon: PaintBucket,
      title: "Exterior Painting", 
      description: "Professional exterior painting services to protect and beautify your home with quality materials and expert craftsmanship.",
      features: ["House Painting", "Trim & Siding", "Deck Staining", "Power Washing"],
      imageKey: "paintingServiceImage",
      iconColor: "bg-sigma-gold"
    },
    {
      icon: Hammer,
      title: "Roof Repairs",
      description: "Emergency and scheduled roof repairs to protect your property from water damage and structural issues.",
      features: ["Leak Detection & Repair", "Shingle Replacement", "Flashing Repair", "Emergency Services"],
      imageKey: "roofRepairImage",
      iconColor: "bg-sigma-emerald"
    },
    {
      icon: Eye,
      title: "Roof Inspections",
      description: "Comprehensive roof inspections to identify potential issues before they become costly problems.",
      features: ["Annual Inspections", "Storm Damage Assessment", "Insurance Claims Support", "Detailed Reports"],
      imageKey: "roofInspectionImage",
      iconColor: "bg-sigma-charcoal"
    },
    {
      icon: Droplets,
      title: "Gutter Services",
      description: "Complete gutter installation, repair, and maintenance services to protect your roof and foundation.",
      features: ["Gutter Installation", "Gutter Cleaning", "Downspout Repair", "Gutter Guards"],
      imageKey: "gutterServiceImage",
      iconColor: "bg-sigma-gold"
    },
    {
      icon: Zap,
      title: "Storm Damage",
      description: "Rapid response storm damage repair services with insurance claim assistance and emergency protection.",
      features: ["Emergency Tarping", "Insurance Claims", "Hail Damage Repair", "Wind Damage Restoration"],
      imageKey: "stormDamageImage",
      iconColor: "bg-sigma-emerald"
    }
  ];
  
  // Placeholder for service images - can be replaced with actual image URLs or an image service
  let serviceImages = {};
  let imagesLoaded = false;
  
  onMount(() => {
    // Simulate image loading - replace this with actual image loading logic if needed
    setTimeout(() => {
      imagesLoaded = true;
    }, 100);
  });
  
  function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<section id="services" class="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="font-bold text-4xl text-sigma-charcoal mb-4">Our Services</h2>
      <p class="text-xl text-sigma-light-gray max-w-2xl mx-auto">
        From residential roofing to exterior painting, we provide comprehensive home improvement solutions for all your needs.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#if imagesLoaded}
        {#each services as service}
          <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-sigma-emerald overflow-hidden">
            <!-- Image header (optional - remove if no images available) -->
            {#if serviceImages[service.imageKey]}
              <div class="h-48 overflow-hidden relative">
                <img 
                  src={serviceImages[service.imageKey]}
                  alt={service.title}
                  class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            {/if}
            
            <div class="p-8">
              <div class="{service.iconColor} w-16 h-16 rounded-lg flex items-center justify-center mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
                <svelte:component this={service.icon} class="text-white" size={32} />
              </div>
              <h3 class="font-bold text-xl mb-4 text-sigma-charcoal">{service.title}</h3>
              <p class="text-sigma-light-gray mb-6">{service.description}</p>
              <ul class="text-sm text-sigma-light-gray space-y-2 mb-6">
                {#each service.features as feature}
                  <li class="flex items-center">
                    <CheckCircle class="text-sigma-emerald mr-2" size={16} />
                    {feature}
                  </li>
                {/each}
              </ul>
              <button 
                on:click={scrollToContact}
                class="bg-sigma-emerald hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300"
              >
                Get Help
              </button>
            </div>
          </div>
        {/each}
      {:else}
        <!-- Loading skeleton -->
        {#each Array(6) as _, i}
          <div class="bg-white rounded-lg shadow-md border-l-4 border-l-sigma-emerald overflow-hidden">
            <div class="h-48 bg-gray-200 animate-pulse"></div>
            <div class="p-8">
              <div class="w-16 h-16 bg-gray-200 animate-pulse rounded-lg mb-6"></div>
              <div class="h-6 bg-gray-200 animate-pulse rounded mb-4"></div>
              <div class="h-4 bg-gray-200 animate-pulse rounded mb-2"></div>
              <div class="h-4 bg-gray-200 animate-pulse rounded w-3/4"></div>
            </div>
          </div>
        {/each}
      {/if}
    </div>
  </div>
</section>