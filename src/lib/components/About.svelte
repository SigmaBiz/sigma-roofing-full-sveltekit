<script>
  // For now, we'll use placeholder images
  const teamPhoto = "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600";
  const visionImage = "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600";
</script>

<section id="about" class="py-20 bg-sigma-emerald">
  <div class="container mx-auto px-4">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="font-bold text-4xl text-white mb-6">About Sigma Roofing LLC</h2>
        <p class="text-lg text-gray-200 mb-6">
          Right after graduating from The University of Oklahoma with an engineering degree our founder entered the roofing industry and in the span of ten years discovered it's far more sophisticated than most realize—from the extensive range of materials and systems available to today's storm restoration processes that demand specialized expertise-roofing is our calling and we can proudly say we are an Oklahoma Local Roofing Contractor.
        </p>
        <p class="text-lg text-gray-200 mb-6">
          Roofing is hard work but we make it easy for you. These core values are what we believe in and drive our process.
        </p>
        
        <div class="text-center mb-6">
          <h3 class="text-2xl font-bold text-white mb-4">CARING • CRAFTSMANSHIP • COMMITMENT</h3>
        </div>
        
        <div class="space-y-4">
          <p class="text-lg text-gray-200">
            <span class="font-bold text-white">Caring</span> for our homeowners is what allows us to see their "vision" and we are just there to bring it to life.
          </p>
          <p class="text-lg text-gray-200">
            <span class="font-bold text-white">Craftsmanship</span> is a display of the pride we take in our work as a production focused company.
          </p>
          <p class="text-lg text-gray-200">
            <span class="font-bold text-white">Commitment</span> means we say what we mean and we mean what we say. Nothing more, nothing less.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Values Image -->
        <div class="space-y-2">
          <img
            src={teamPhoto}
            alt="Professional roofing team at work"
            class="rounded-lg shadow-lg w-full h-64 object-cover"
            loading="lazy"
          />
          <p class="text-center text-gray-200 text-sm font-semibold">Our Values</p>
        </div>
        
        <!-- Vision Image -->
        <div class="space-y-2">
          <img
            src={visionImage}
            alt="Professional roofing vision and goals"
            class="rounded-lg shadow-lg w-full h-64 object-cover"
            loading="lazy"
          />
          <p class="text-center text-gray-200 text-sm font-semibold">Our Vision</p>
        </div>
      </div>
    </div>
  </div>
</section>