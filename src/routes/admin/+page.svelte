<script>
  import { Home, Wrench, Users, Award, Image, Plus, Upload, Eye } from 'lucide-svelte';
  
  let activeTab = 'images';
  let currentProject = 'project1';
  
  // Project form data
  let formData = {
    title: '',
    description: '',
    imageUrl: '',
    category: '',
    location: ''
  };
  
  // Website images data
  let websiteImages = {
    heroBackground: '',
    residentialRoofingImage: '',
    roofRepairImage: '',
    roofInspectionImage: '',
    gutterServiceImage: '',
    stormDamageImage: '',
    paintingServiceImage: '',
    teamPhoto: '',
    visionImage: '',
    processStep1Image: '',
    processStep2Image: '',
    processStep3Image: '',
    processStep4Image: '',
    testimonialBackground: '',
    stormReportBackground: ''
  };
  
  const categories = [
    "Residential",
    "Commercial", 
    "Storm Damage",
    "Gutter Services",
    "Roof Repair",
    "New Installation",
    "Emergency Repair"
  ];
  
  // Placeholder functions
  function handleSaveWebsiteImages() {
    console.log('Saving website images...');
  }
  
  function saveCurrentProject() {
    console.log('Saving current project...');
  }
</script>

<div class="min-h-screen bg-gray-50 py-8">
  <div class="container mx-auto px-4 max-w-6xl">
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Sigma Roofing Website Manager</h1>
      <p class="text-gray-600">Control every image and project on your website from one place</p>
    </div>

    <!-- Tabs -->
    <div class="bg-white rounded-lg shadow-lg">
      <!-- Tab Navigation -->
      <div class="flex border-b">
        <button
          class="flex-1 px-4 py-3 flex items-center justify-center gap-2 font-medium transition-colors {activeTab === 'images' ? 'bg-emerald-50 text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-600 hover:text-gray-900'}"
          on:click={() => activeTab = 'images'}
        >
          <Image size={16} />
          Website Images
        </button>
        <button
          class="flex-1 px-4 py-3 flex items-center justify-center gap-2 font-medium transition-colors {activeTab === 'projects' ? 'bg-emerald-50 text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-600 hover:text-gray-900'}"
          on:click={() => activeTab = 'projects'}
        >
          <Plus size={16} />
          Project Gallery
        </button>
        <button
          class="flex-1 px-4 py-3 flex items-center justify-center gap-2 font-medium transition-colors {activeTab === 'upload' ? 'bg-emerald-50 text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-600 hover:text-gray-900'}"
          on:click={() => activeTab = 'upload'}
        >
          <Upload size={16} />
          Photo Manager
        </button>
      </div>

      <!-- Tab Content -->
      <div class="p-6">
        <!-- Website Images Tab -->
        {#if activeTab === 'images'}
          <div class="space-y-6">
            <!-- Hero Section -->
            <div class="border rounded-lg overflow-hidden">
              <div class="bg-emerald-600 text-white p-4">
                <h3 class="flex items-center gap-2 font-semibold">
                  <Home size={20} />
                  Hero Section Images
                </h3>
              </div>
              <div class="p-6 space-y-4">
                <div class="space-y-2">
                  <label class="text-sm font-medium">Hero Background Image</label>
                  <input
                    type="text"
                    bind:value={websiteImages.heroBackground}
                    placeholder="Paste Cloudinary URL here..."
                    class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <p class="text-xs text-gray-500">Main background image for your homepage hero section</p>
                </div>
              </div>
            </div>

            <!-- Services Section -->
            <div class="border rounded-lg overflow-hidden">
              <div class="bg-emerald-600 text-white p-4">
                <h3 class="flex items-center gap-2 font-semibold">
                  <Wrench size={20} />
                  Service Images
                </h3>
              </div>
              <div class="p-6">
                <div class="grid md:grid-cols-2 gap-6">
                  {#each [
                    { key: 'residentialRoofingImage', label: 'Residential Roofing Image', desc: 'Showcase your residential roofing installations' },
                    { key: 'roofRepairImage', label: 'Roof Repair Image', desc: 'Showcase your roof repair work' },
                    { key: 'roofInspectionImage', label: 'Roof Inspection Image', desc: 'Professional inspection process' },
                    { key: 'gutterServiceImage', label: 'Gutter Service Image', desc: 'Gutter installation or repair work' },
                    { key: 'stormDamageImage', label: 'Storm Damage Image', desc: 'Storm damage restoration work' },
                    { key: 'paintingServiceImage', label: 'Painting Service Image', desc: 'Professional painting services' }
                  ] as item}
                    <div class="space-y-2">
                      <label class="text-sm font-medium">{item.label}</label>
                      <input
                        type="text"
                        bind:value={websiteImages[item.key]}
                        placeholder="Paste Cloudinary URL here..."
                        class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      <p class="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  {/each}
                </div>
              </div>
            </div>

            <!-- About & Team Section -->
            <div class="border rounded-lg overflow-hidden">
              <div class="bg-emerald-600 text-white p-4">
                <h3 class="flex items-center gap-2 font-semibold">
                  <Users size={20} />
                  About & Team Images
                </h3>
              </div>
              <div class="p-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="text-sm font-medium">Our Values Image</label>
                    <input
                      type="text"
                      bind:value={websiteImages.teamPhoto}
                      placeholder="Paste Cloudinary URL here..."
                      class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <p class="text-xs text-gray-500">Image representing your company values and team</p>
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-medium">Our Vision Image</label>
                    <input
                      type="text"
                      bind:value={websiteImages.visionImage}
                      placeholder="Paste Cloudinary URL here..."
                      class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <p class="text-xs text-gray-500">Image representing your company vision and goals</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Process Section -->
            <div class="border rounded-lg overflow-hidden">
              <div class="bg-emerald-600 text-white p-4">
                <h3 class="flex items-center gap-2 font-semibold">
                  <Award size={20} />
                  Process & Background Images
                </h3>
              </div>
              <div class="p-6 space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  {#each [
                    { key: 'processStep1Image', label: 'Process Step 1 Image', desc: 'Initial consultation/inspection image' },
                    { key: 'processStep2Image', label: 'Process Step 2 Image', desc: 'Planning/preparation image' },
                    { key: 'processStep3Image', label: 'Process Step 3 Image', desc: 'Installation/work in progress' },
                    { key: 'processStep4Image', label: 'Process Step 4 Image', desc: 'Completion/quality check' }
                  ] as item}
                    <div class="space-y-2">
                      <label class="text-sm font-medium">{item.label}</label>
                      <input
                        type="text"
                        bind:value={websiteImages[item.key]}
                        placeholder="Paste Cloudinary URL here..."
                        class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      <p class="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  {/each}
                </div>
                <div class="space-y-2">
                  <label class="text-sm font-medium">Testimonials Background</label>
                  <input
                    type="text"
                    bind:value={websiteImages.testimonialBackground}
                    placeholder="Paste Cloudinary URL here..."
                    class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <p class="text-xs text-gray-500">Background image for customer testimonials section</p>
                </div>
              </div>
            </div>

            <!-- Landing Page Images -->
            <div class="border rounded-lg overflow-hidden">
              <div class="bg-emerald-600 text-white p-4">
                <h3 class="flex items-center gap-2 font-semibold">
                  <Image size={20} />
                  Landing Page Images
                </h3>
              </div>
              <div class="p-6">
                <div class="space-y-2">
                  <label class="text-sm font-medium">Storm Report Background Image</label>
                  <input
                    type="text"
                    bind:value={websiteImages.stormReportBackground}
                    placeholder="Paste Cloudinary URL here..."
                    class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <p class="text-xs text-gray-500">Background image for the Recent Storm Report section on the hail damage landing page</p>
                </div>
              </div>
            </div>

            <!-- Save Button -->
            <div class="flex justify-center">
              <button
                on:click={handleSaveWebsiteImages}
                class="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold flex items-center gap-2 transition-colors"
              >
                <Upload size={20} />
                Update All Website Images
              </button>
            </div>
          </div>
        {/if}

        <!-- Projects Tab -->
        {#if activeTab === 'projects'}
          <div class="space-y-6">
            <div class="border rounded-lg overflow-hidden">
              <div class="bg-emerald-600 text-white p-4">
                <h3 class="flex items-center gap-2 font-semibold">
                  <Plus size={20} />
                  Project Gallery (6 Slots)
                </h3>
              </div>
              <div class="p-6 space-y-6">
                <!-- Project Selector -->
                <div class="space-y-2">
                  <label class="text-sm font-medium flex items-center gap-2">
                    <Plus size={16} />
                    Select Project to Edit
                  </label>
                  <select
                    bind:value={currentProject}
                    class="w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="project1">Project 1</option>
                    <option value="project2">Project 2</option>
                    <option value="project3">Project 3</option>
                    <option value="project4">Project 4</option>
                    <option value="project5">Project 5</option>
                    <option value="project6">Project 6</option>
                  </select>
                  <p class="text-xs text-gray-500">
                    Editing: {currentProject.replace('project', 'Project ')} - Changes will save to this slot
                  </p>
                </div>

                <!-- Image URL Input -->
                <div class="space-y-2">
                  <label class="text-sm font-medium flex items-center gap-2">
                    <Upload size={16} />
                    Image URL *
                  </label>
                  <input
                    type="text"
                    bind:value={formData.imageUrl}
                    placeholder="Paste Cloudinary URL from Photo Manager tab"
                    class="w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <p class="text-xs text-gray-500">
                    Upload photos using the Photo Manager tab, then paste the URL here
                  </p>
                </div>

                <!-- Image Preview -->
                {#if formData.imageUrl}
                  <div class="space-y-2">
                    <label class="text-sm font-medium flex items-center gap-2">
                      <Eye size={16} />
                      Preview
                    </label>
                    <div class="border rounded-lg overflow-hidden">
                      <img 
                        src={formData.imageUrl} 
                        alt="Preview" 
                        class="w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                {/if}

                <!-- Project Details -->
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="text-sm font-medium">Project Title *</label>
                    <input
                      type="text"
                      bind:value={formData.title}
                      placeholder="e.g., Modern Family Home Roof Replacement"
                      class="w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  
                  <div class="space-y-2">
                    <label class="text-sm font-medium">Location</label>
                    <input
                      type="text"
                      bind:value={formData.location}
                      placeholder="e.g., Edmond, OK"
                      class="w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-medium">Project Category *</label>
                  <select
                    bind:value={formData.category}
                    class="w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">Select project category</option>
                    {#each categories as category}
                      <option value={category}>{category}</option>
                    {/each}
                  </select>
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-medium">Project Description *</label>
                  <textarea
                    bind:value={formData.description}
                    placeholder="Describe the project details, materials used, challenges overcome, etc."
                    rows="4"
                    class="w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  ></textarea>
                </div>

                <!-- Save Button -->
                <button
                  on:click={saveCurrentProject}
                  class="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Plus size={20} />
                  Save {currentProject.replace('project', 'Project ')}
                </button>
              </div>
            </div>
          </div>
        {/if}

        <!-- Photo Manager Tab -->
        {#if activeTab === 'upload'}
          <div class="text-center py-12">
            <Upload size={48} class="mx-auto text-gray-400 mb-4" />
            <h3 class="text-lg font-semibold text-gray-700 mb-2">Photo Manager</h3>
            <p class="text-gray-500">Photo upload functionality will be implemented here</p>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  /* Custom styles if needed */
</style>