<script>
  function scrollToSection(sectionId) {
    window.location.href = '/#' + sectionId;
  }
</script>

<svelte:head>
  <title>Sitemap - Sigma Roofing LLC</title>
  <meta name="description" content="Complete sitemap for Sigma Roofing LLC. Find all pages, services, and contact information." />
</svelte:head>

<div class="min-h-screen bg-white py-16">
  <div class="container mx-auto px-4 max-w-4xl">
    <h1 class="font-bold text-4xl text-gray-800 mb-8">Sitemap</h1>
    <div class="text-gray-600 space-y-8">
      
      <section>
        <h2 class="font-bold text-2xl text-gray-800 mb-4">Main Pages</h2>
        <ul class="space-y-2">
          <li><button on:click={() => scrollToSection("home")} class="text-yellow-600 hover:underline">Home</button></li>
          <li><button on:click={() => scrollToSection("services")} class="text-yellow-600 hover:underline">Services</button></li>
          <li><button on:click={() => scrollToSection("about")} class="text-yellow-600 hover:underline">About Us</button></li>
          <li><button on:click={() => scrollToSection("projects")} class="text-yellow-600 hover:underline">Recent Projects</button></li>
          <li><button on:click={() => scrollToSection("contact")} class="text-yellow-600 hover:underline">Contact & Free Estimates</button></li>
        </ul>
      </section>

      <section>
        <h2 class="font-bold text-2xl text-gray-800 mb-4">Our Services</h2>
        <ul class="space-y-2">
          <li>• Residential Roofing (Asphalt Shingles)</li>
          <li>• Exterior Painting</li>
          <li>• Roof Repairs & Maintenance</li>
          <li>• Roof Inspections</li>
          <li>• Gutter Services</li>
          <li>• Storm Damage Restoration</li>
        </ul>
      </section>

      <section>
        <h2 class="font-bold text-2xl text-gray-800 mb-4">Service Areas</h2>
        <ul class="space-y-2">
          <li>• Edmond, OK</li>
          <li>• Oklahoma City, OK</li>
          <li>• Moore, OK</li>
          <li>• Norman, OK</li>
          <li>• Yukon, OK</li>
          <li>• Mustang, OK</li>
          <li>• Guthrie, OK</li>
          <li>• Deer Creek, OK</li>
        </ul>
      </section>

      <section>
        <h2 class="font-bold text-2xl text-gray-800 mb-4">Legal Information</h2>
        <ul class="space-y-2">
          <li><a href="/privacy-policy" class="text-yellow-600 hover:underline">Privacy Policy</a></li>
          <li><a href="/terms-of-service" class="text-yellow-600 hover:underline">Terms of Service</a></li>
        </ul>
      </section>

      <section>
        <h2 class="font-bold text-2xl text-gray-800 mb-4">Contact Information</h2>
        <div class="space-y-2">
          <p><strong>Sigma Roofing LLC</strong></p>
          <p>16612 N Western Avenue, Edmond, OK 73012</p>
          <p>Phone: (405) 902-1826</p>
          <p>Email: ok.sigmaroofs@gmail.com</p>
          <p>License: LIC#80006734</p>
          <p>Available 24/7 for Emergency Services</p>
        </div>
      </section>
    </div>
  </div>
</div>