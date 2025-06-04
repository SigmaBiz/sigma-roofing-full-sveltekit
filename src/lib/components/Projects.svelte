<script>
  import { onMount } from 'svelte';
  
  let projects = [
    {
      title: "Complete Roof Replacement",
      description: "Full roof replacement with GAF Timberline HDZ shingles",
      category: "Residential",
      date: "November 2024",
      image: "https://via.placeholder.com/400x300/34D399/ffffff?text=Roof+Replacement"
    },
    {
      title: "Storm Damage Restoration",
      description: "Emergency repairs and full restoration after tornado damage",
      category: "Storm Damage",
      date: "October 2024",
      image: "https://via.placeholder.com/400x300/34D399/ffffff?text=Storm+Restoration"
    },
    {
      title: "Commercial Flat Roof",
      description: "TPO membrane installation on commercial building",
      category: "Commercial",
      date: "September 2024",
      image: "https://via.placeholder.com/400x300/34D399/ffffff?text=Commercial+Roof"
    },
    {
      title: "Historical Home Renovation",
      description: "Cedar shake replacement preserving historical character",
      category: "Specialty",
      date: "August 2024",
      image: "https://via.placeholder.com/400x300/34D399/ffffff?text=Historical+Renovation"
    },
    {
      title: "Multi-Family Complex",
      description: "Complete re-roofing of 12-unit apartment complex",
      category: "Multi-Family",
      date: "July 2024",
      image: "https://via.placeholder.com/400x300/34D399/ffffff?text=Multi-Family+Complex"
    },
    {
      title: "Metal Roof Installation",
      description: "Standing seam metal roof for modern farmhouse",
      category: "Specialty",
      date: "June 2024",
      image: "https://via.placeholder.com/400x300/34D399/ffffff?text=Metal+Roof"
    }
  ];
  
  let loading = false;
  
  onMount(() => {
    // Placeholder for future functionality
    // Could load projects from an API or admin panel
  });
</script>

<section class="py-20 bg-gray-900">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="font-bold text-4xl text-white mb-4">Recent Projects</h2>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        Take a look at some of our recent roofing projects across Oklahoma. 
        Quality craftsmanship and attention to detail in every job.
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each projects as project}
        <div class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
          <div class="h-48 bg-gray-200 relative overflow-hidden">
            <img 
              src={project.image}
              alt={project.title}
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div class="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {project.category}
            </div>
          </div>
          <div class="p-6">
            <h3 class="font-bold text-xl text-gray-800 mb-2">{project.title}</h3>
            <p class="text-gray-600 mb-4">{project.description}</p>
            <p class="text-sm text-gray-500">{project.date}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>