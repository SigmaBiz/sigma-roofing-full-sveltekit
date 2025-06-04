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

<section id="projects" class="py-20 bg-gray-900">
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
        <div class="bg-white overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-emerald-600 rounded-lg">
          <div class="h-48 relative overflow-hidden">
            <img 
              src={project.image}
              alt={project.title}
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div class="p-6">
            <h3 class="font-bold text-xl text-gray-900 mb-2">{project.title}</h3>
            <p class="text-gray-600 mb-4">{project.description}</p>
            <div class="flex justify-between items-center">
              <span class="text-sm text-green-600 font-semibold bg-green-500/10 px-3 py-1 rounded-full">{project.category}</span>
              <button class="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                View Details →
              </button>
            </div>
          </div>
        </div>
      {/each}
    </div>
    
    <div class="text-center mt-12">
      <button class="bg-emerald-600 text-white hover:bg-emerald-700 text-lg px-8 py-4 rounded-lg shadow-lg transition-colors">
        View All Projects
      </button>
    </div>
  </div>
</section>