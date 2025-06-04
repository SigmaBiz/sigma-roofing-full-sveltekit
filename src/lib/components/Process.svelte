<script>
  import { Users, FileEdit, Wrench, ClipboardCheck, DollarSign, Phone, Shield } from 'lucide-svelte';
  
  let activeTab = 'retail';
  
  const retailProcess = [
    {
      icon: Users,
      title: "Free Consult",
      description: "We meet with you to discuss your roofing needs and provide expert recommendations"
    },
    {
      icon: FileEdit,
      title: "Estimation & Proposal",
      description: "Detailed written estimate with transparent pricing and material specifications"
    },
    {
      icon: Wrench,
      title: "We do the work",
      description: "Professional installation with quality materials and expert craftsmanship"
    },
    {
      icon: ClipboardCheck,
      title: "Final Inspection",
      description: "Thorough quality check to ensure everything meets our high standards"
    },
    {
      icon: DollarSign,
      title: "Payment",
      description: "Simple payment process with flexible options for your convenience"
    }
  ];

  const insuranceProcess = [
    {
      icon: Phone,
      title: "Initial Contact",
      description: "Call us immediately after storm damage for emergency assessment and temporary repairs"
    },
    {
      icon: ClipboardCheck,
      title: "Damage Assessment",
      description: "Professional inspection and detailed documentation of all storm damage"
    },
    {
      icon: FileEdit,
      title: "Insurance Claim",
      description: "We assist with filing your claim and work directly with your insurance adjuster"
    },
    {
      icon: Shield,
      title: "Approval & Scheduling",
      description: "Once approved, we schedule your repairs and handle all paperwork"
    },
    {
      icon: Wrench,
      title: "Professional Restoration",
      description: "Complete repair using insurance-approved materials and methods"
    }
  ];
  
  $: currentProcess = activeTab === 'retail' ? retailProcess : insuranceProcess;
</script>

<section class="py-20 bg-sigma-cream">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="font-bold text-4xl text-sigma-charcoal mb-4">Our Process</h2>
      <p class="text-xl text-sigma-light-gray max-w-2xl mx-auto">
        Our process is simple and contains only a few straightforward steps, designed to make your roofing project stress-free.
      </p>
    </div>

    <div class="w-full">
      <!-- Tab buttons -->
      <div class="flex justify-center mb-12">
        <div class="inline-flex rounded-lg border-2 border-sigma-light-gray">
          <button
            class="px-6 py-3 text-lg font-medium rounded-l-lg transition-colors"
            class:bg-sigma-emerald={activeTab === 'retail'}
            class:text-white={activeTab === 'retail'}
            class:bg-white={activeTab !== 'retail'}
            class:text-sigma-charcoal={activeTab !== 'retail'}
            on:click={() => activeTab = 'retail'}
          >
            Retail Jobs
          </button>
          <button
            class="px-6 py-3 text-lg font-medium rounded-r-lg transition-colors"
            class:bg-sigma-emerald={activeTab === 'insurance'}
            class:text-white={activeTab === 'insurance'}
            class:bg-white={activeTab !== 'insurance'}
            class:text-sigma-charcoal={activeTab !== 'insurance'}
            on:click={() => activeTab = 'insurance'}
          >
            Insurance Jobs
          </button>
        </div>
      </div>
      
      <!-- Process Flow -->
      <div class="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-4">
        {#each currentProcess as step, index}
          <div class="flex flex-col items-center relative">
            <!-- Process Card -->
            <div class="bg-white border-2 border-gray-200 hover:border-sigma-emerald transition-all duration-300 hover:shadow-lg max-w-xs rounded-lg p-6 text-center">
              <div class="w-16 h-16 bg-sigma-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                <svelte:component this={step.icon} size={24} class="text-white" />
              </div>
              <h3 class="font-bold text-lg text-sigma-charcoal mb-2">{step.title}</h3>
              <p class="text-sm text-sigma-light-gray">{step.description}</p>
            </div>
            
            <!-- Arrow (hidden on last item) -->
            {#if index < currentProcess.length - 1}
              <div class="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2">
                <span class="text-2xl text-sigma-emerald">→</span>
              </div>
              <!-- Down arrow for mobile -->
              <div class="lg:hidden mt-4">
                <span class="text-2xl text-sigma-emerald">↓</span>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>