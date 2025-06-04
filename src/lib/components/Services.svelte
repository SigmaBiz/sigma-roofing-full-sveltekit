<script>
  import { onMount } from 'svelte';
  import { Home, PaintBucket, Hammer, ShieldCheck, Droplets, CloudRain, CheckCircle, Eye, Zap } from 'lucide-svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import CardHeader from '$lib/components/ui/CardHeader.svelte';
  import CardContent from '$lib/components/ui/CardContent.svelte';
  import { imageService } from '$lib/services/imageService';
  
  const services = [
    {
      icon: Home,
      title: "Residential Roofing",
      description: "Complete residential roofing services including new installations, repairs, and maintenance for all roof types.",
      features: ["Asphalt Shingles", "Metal Roofing", "Wood Shingles", "Storm Damage Repair"],
      imageKey: "residentialRoofingImage",
      iconColor: "bg-blue-500"
    },
    {
      icon: PaintBucket,
      title: "Exterior Painting", 
      description: "Professional exterior painting services to protect and beautify your home with quality materials and expert craftsmanship.",
      features: ["House Painting", "Trim & Siding", "Deck Staining", "Power Washing"],
      imageKey: "paintingServiceImage",
      iconColor: "bg-orange-500"
    },
    {
      icon: Hammer,
      title: "Roof Repairs",
      description: "Emergency and scheduled roof repairs to protect your property from water damage and structural issues.",
      features: ["Leak Detection & Repair", "Shingle Replacement", "Flashing Repair", "Emergency Services"],
      imageKey: "roofRepairImage",
      iconColor: "bg-red-500"
    },
    {
      icon: Eye,
      title: "Roof Inspections",
      description: "Comprehensive roof inspections to identify potential issues before they become costly problems.",
      features: ["Annual Inspections", "Storm Damage Assessment", "Insurance Claims Support", "Detailed Reports"],
      imageKey: "roofInspectionImage",
      iconColor: "bg-purple-500"
    },
    {
      icon: Droplets,
      title: "Gutter Services",
      description: "Complete gutter installation, repair, and maintenance services to protect your roof and foundation.",
      features: ["Gutter Installation", "Gutter Cleaning", "Downspout Repair", "Gutter Guards"],
      imageKey: "gutterServiceImage",
      iconColor: "bg-cyan-500"
    },
    {
      icon: Zap,
      title: "Storm Damage",
      description: "Rapid response storm damage repair services with insurance claim assistance and emergency protection.",
      features: ["Emergency Tarping", "Insurance Claims", "Hail Damage Repair", "Wind Damage Restoration"],
      imageKey: "stormDamageImage",
      iconColor: "bg-yellow-500"
    }
  ];
  
  let serviceImages = {};
  let imagesLoaded = false;
  
  onMount(() => {
    // Load images from the image service
    const allImages = imageService.getAllImages();
    serviceImages = allImages;
    imagesLoaded = true;
  });
  
  function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<section id="services" class="py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="font-bold text-4xl text-gray-800 mb-4">Our Services</h2>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        From residential roofing to exterior painting, we provide comprehensive home improvement solutions for all your needs.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#if imagesLoaded}
        {#each services as service}
          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-emerald-600 overflow-hidden">
            <!-- Image header -->
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
            
            <CardHeader className="pb-4">
              <div class="{service.iconColor} w-16 h-16 rounded-lg flex items-center justify-center mb-4 shadow-lg transform hover:scale-110 transition-transform duration-300">
                <svelte:component this={service.icon} class="text-white" size={32} />
              </div>
              <h3 class="font-bold text-xl text-gray-800">{service.title}</h3>
            </CardHeader>
            
            <CardContent>
              <p class="text-gray-600 mb-6">{service.description}</p>
              <ul class="text-sm text-gray-600 space-y-2 mb-6">
                {#each service.features as feature}
                  <li class="flex items-center">
                    <CheckCircle class="text-emerald-600 mr-2" size={16} />
                    {feature}
                  </li>
                {/each}
              </ul>
              <button 
                on:click={scrollToContact}
                class="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300"
              >
                Get Help
              </button>
            </CardContent>
          </Card>
        {/each}
      {:else}
        <!-- Loading skeleton -->
        {#each Array(6) as _, i}
          <Card className="border-l-4 border-l-emerald-600 overflow-hidden">
            <div class="h-48 bg-gray-200 animate-pulse"></div>
            <CardHeader>
              <div class="w-16 h-16 bg-gray-200 animate-pulse rounded-lg mb-4"></div>
              <div class="h-6 bg-gray-200 animate-pulse rounded"></div>
            </CardHeader>
            <CardContent>
              <div class="h-4 bg-gray-200 animate-pulse rounded mb-2"></div>
              <div class="h-4 bg-gray-200 animate-pulse rounded w-3/4 mb-4"></div>
              <div class="space-y-2">
                <div class="h-3 bg-gray-200 animate-pulse rounded"></div>
                <div class="h-3 bg-gray-200 animate-pulse rounded"></div>
                <div class="h-3 bg-gray-200 animate-pulse rounded"></div>
              </div>
            </CardContent>
          </Card>
        {/each}
      {/if}
    </div>
  </div>
</section>