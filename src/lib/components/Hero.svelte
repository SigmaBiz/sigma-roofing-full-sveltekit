<script>
  import { Phone } from 'lucide-svelte';
  import Button from './ui/Button.svelte';
  
  function scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  const oklahomaFlagUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Flag_of_Oklahoma.svg/120px-Flag_of_Oklahoma.svg.png";
  
  const flagStyle = `opacity: 0.7; filter: brightness(1.3) contrast(1.2); aspect-ratio: 3/2;`;
</script>

<section 
  id="home" 
  class="relative min-h-screen flex items-center hero-bg"
>
  <div class="container mx-auto px-4 relative z-10">
    <div class="max-w-4xl mx-auto text-white text-center">
      <h1 class="font-bold text-4xl lg:text-6xl mb-6 leading-tight">
        <span class="text-white">Stand firm.</span>{" "}
        <span class="text-sigma-emerald">Brave the storm.</span>{" "}
        <span class="text-white">Serve with heart.</span>
      </h1>
      <p class="text-lg lg:text-xl mb-6 leading-relaxed text-gray-200 max-w-3xl mx-auto">
        Quality craftsmanship and down-to-earth, responsive customer service is what we do. Whether you need 
        major repairs or minor fixes, we work with you to find the best solution for your home's specific needs.
      </p>
      <p class="text-base lg:text-lg mb-8 leading-relaxed text-gray-300 max-w-3xl mx-auto font-medium">
        Schedule today for your on-site estimate or ask about our convenient digital estimates. Emergency storm 
        repairs like tarping and damage assessments are available upon request. Book today!
      </p>
      <div class="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 max-w-3xl mx-auto">
        <Button
          size="lg"
          variant="emerald"
          className="text-lg px-8 py-4 shadow-lg transform hover:scale-105 transition-transform w-full sm:w-64"
          on:click={() => window.open("tel:(405)902-1826")}
        >
          <Phone size={20} class="mr-2" />
          Call (405) 902-1826
        </Button>
        <Button
          size="lg"
          variant="emerald"
          className="text-lg px-8 py-4 shadow-lg transform hover:scale-105 transition-transform w-full sm:w-64"
          on:click={scrollToContact}
        >
          Free Estimate
        </Button>
      </div>
      
      <div class="mt-16 flex justify-between items-center max-w-3xl mx-auto">
        <div class="flex flex-col items-center">
          <img 
            src={oklahomaFlagUrl}
            alt="Oklahoma Flag" 
            class="w-20 h-auto mb-2 rounded shadow-lg object-contain"
            style={flagStyle}
            loading="lazy"
          />
          <div class="text-sm text-gray-300 font-semibold">Operated</div>
        </div>
        <div class="flex flex-col items-center">
          <img 
            src={oklahomaFlagUrl}
            alt="Oklahoma Flag" 
            class="w-20 h-auto mb-2 rounded shadow-lg object-contain"
            style={flagStyle}
            loading="lazy"
          />
          <div class="text-sm text-gray-300 font-semibold">Founded</div>
        </div>
        <div class="flex flex-col items-center">
          <img 
            src={oklahomaFlagUrl}
            alt="Oklahoma Flag" 
            class="w-20 h-auto mb-2 rounded shadow-lg object-contain"
            style={flagStyle}
            loading="lazy"
          />
          <div class="text-sm text-gray-300 font-semibold">Licensed & Insured</div>
        </div>
      </div>
    </div>
  </div>
</section>