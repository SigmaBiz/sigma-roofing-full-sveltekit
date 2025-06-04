<script>
  import { Calendar, MapPin, Phone, Star, AlertTriangle, Wind, Clock, CheckCircle } from 'lucide-svelte';
  
  let formData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "Tornado Damage Assessment",
    description: "",
    preferredDate1: "",
    preferredTime1: "",
    preferredDate2: "",
    preferredTime2: ""
  };

  let tornadoData = {
    city: "Oklahoma City",
    date_of_loss: new Date().toLocaleDateString(),
    storm_type: "tornado",
    wind_speed: "EF1-EF2"
  };

  let isSubmitting = false;
  let submitMessage = "";

  const reviews = [
    {
      name: "Matthew Thornton",
      initials: "MT",
      rating: 5,
      review: "Antonio and his crew did an Outstanding job getting us back into our house after the November Tornado. He helped us with every aspect of the damage."
    },
    {
      name: "Shanna Gill",
      initials: "SG",
      rating: 5,
      review: "I had tornado damage on November 3rd and they were next door putting a tarp on my neighbors house. Without hesitation they came to my assistance."
    },
    {
      name: "Jenna Goodner",
      initials: "JG",
      rating: 5,
      review: "From start to finish, this company was exceptional to work with. They not only did everything they promised — they went above and beyond in every way."
    }
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    isSubmitting = true;
    
    // Redirect to main contact form
    window.location.href = '/#contact';
  }
</script>

<svelte:head>
  <title>Tornado Damage Restoration - Sigma Roofing LLC</title>
  <meta name="description" content="Emergency tornado damage assessment and restoration in Oklahoma. Professional inspection, insurance assistance, and immediate repairs available 24/7." />
</svelte:head>

<div class="min-h-screen bg-gray-50">
  <!-- Header -->
  <header class="bg-white shadow-sm border-b">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-lg">Σ</span>
          </div>
          <div>
            <h1 class="text-xl font-bold text-gray-900">Sigma Roofing LLC</h1>
            <p class="text-sm text-gray-600">Licensed #80006734</p>
          </div>
        </div>
        <div class="text-right">
          <p class="text-lg font-semibold text-emerald-600">(405) 902-1826</p>
          <p class="text-sm text-gray-600">24/7 Emergency Service</p>
        </div>
      </div>
    </div>
  </header>

  <div class="container mx-auto px-4 py-8">
    <!-- Alert Banner -->
    <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
      <div class="flex items-start">
        <AlertTriangle size={24} class="text-red-500 mt-1 mr-3 flex-shrink-0" />
        <div>
          <h2 class="text-xl font-bold text-red-800 mb-2">
            Tornado Damage Alert: {tornadoData.city} Area
          </h2>
          <p class="text-red-700 text-lg">
            Recent {tornadoData.wind_speed} tornado activity on {tornadoData.date_of_loss} may have caused structural damage. 
            <strong> Professional inspection is critical even if damage isn't immediately visible.</strong>
          </p>
        </div>
      </div>
    </div>

    <div class="grid lg:grid-cols-2 gap-8">
      <!-- Left Column - Information -->
      <div>
        <!-- Tornado Damage Info -->
        <div class="bg-white rounded-lg shadow-md mb-8 p-6">
          <div class="flex items-center mb-4">
            <Wind size={24} class="text-red-600 mr-3" />
            <h3 class="text-2xl font-bold text-gray-900">Hidden Tornado Damage Risks</h3>
          </div>
          
          <div class="space-y-4">
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <p class="text-yellow-800 font-semibold">
                Tornadoes create unique damage patterns through debris impact, uplift forces, and pressure changes that may not be immediately visible.
              </p>
            </div>
            
            <ul class="space-y-3">
              <li class="flex items-start">
                <CheckCircle size={20} class="text-red-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span class="font-semibold">Debris Impact Damage:</span>
                  <p class="text-gray-600 text-sm">Flying objects can puncture or crack shingles, creating entry points for water</p>
                </div>
              </li>
              <li class="flex items-start">
                <CheckCircle size={20} class="text-red-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span class="font-semibold">Wind Uplift Forces:</span>
                  <p class="text-gray-600 text-sm">High winds can lift and reseal shingles, weakening their attachment without visible damage</p>
                </div>
              </li>
              <li class="flex items-start">
                <CheckCircle size={20} class="text-red-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span class="font-semibold">Building Envelope Failure:</span>
                  <p class="text-gray-600 text-sm">Pressure changes can compromise seals around vents, flashing, and penetrations</p>
                </div>
              </li>
              <li class="flex items-start">
                <CheckCircle size={20} class="text-red-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <span class="font-semibold">Structural Stress:</span>
                  <p class="text-gray-600 text-sm">Tornado forces can shift or stress roof decking and structural components</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Urgency Section -->
        <div class="bg-white rounded-lg shadow-md mb-8 p-6">
          <div class="flex items-center mb-4">
            <Clock size={24} class="text-orange-600 mr-3" />
            <h3 class="text-xl font-bold text-gray-900">Why Immediate Inspection Matters</h3>
          </div>
          
          <div class="space-y-4">
            <div class="bg-orange-50 border border-orange-200 p-4 rounded-lg">
              <h4 class="font-semibold text-orange-800 mb-2">Time-Sensitive Issues:</h4>
              <ul class="space-y-2 text-orange-700">
                <li>• Compromised seals may allow gradual water infiltration</li>
                <li>• Loosened materials can become projectiles in future storms</li>
                <li>• Insurance adjusters need to document damage while it's fresh</li>
                <li>• Weather exposure can worsen existing damage quickly</li>
              </ul>
            </div>
            
            <div class="bg-emerald-50 border border-emerald-200 p-4 rounded-lg">
              <h4 class="font-semibold text-emerald-800 mb-2">Professional Assessment Identifies:</h4>
              <ul class="space-y-2 text-emerald-700">
                <li>• Micro-fractures in shingles from debris impact</li>
                <li>• Lifted or shifted materials that may fail</li>
                <li>• Compromised flashing and penetration seals</li>
                <li>• Gutter and downspout damage affecting drainage</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Customer Reviews -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center mb-6">
            <Star size={24} class="text-yellow-500 mr-3" />
            <div>
              <h3 class="text-xl font-bold text-gray-900">Customer Reviews</h3>
              <div class="flex items-center mt-1">
                <div class="flex text-yellow-400">
                  {#each Array(5) as _}
                    <Star size={16} class="fill-current" />
                  {/each}
                </div>
                <span class="ml-2 text-sm text-gray-600">5.0/5 (50+ reviews)</span>
              </div>
            </div>
          </div>
          
          <div class="grid gap-4">
            {#each reviews as review}
              <div class="border-l-4 border-emerald-500 pl-4">
                <div class="flex items-center mb-2">
                  <div class="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                    {review.initials}
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">{review.name}</p>
                    <div class="flex text-yellow-400">
                      {#each Array(review.rating) as _}
                        <Star size={12} class="fill-current" />
                      {/each}
                    </div>
                  </div>
                </div>
                <p class="text-gray-700 text-sm">{review.review}</p>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <!-- Right Column - Contact Form -->
      <div>
        <div class="bg-white rounded-lg shadow-md sticky top-8 p-6">
          <div class="text-center mb-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">🔍 Schedule Your Free Roof Assessment</h2>
            <p class="text-gray-600">Professional tornado damage inspection with insurance claim assistance</p>
            <div class="flex items-center justify-center mt-3">
              <Clock size={16} class="text-emerald-600 mr-2" />
              <span class="text-sm text-emerald-600 font-semibold">Emergency response available</span>
            </div>
          </div>

          <form on:submit|preventDefault={handleSubmit} class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                bind:value={formData.firstName}
                required
                class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                bind:value={formData.lastName}
                required
                class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            
            <input
              type="email"
              placeholder="Email Address"
              bind:value={formData.email}
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            
            <input
              type="tel"
              placeholder="Phone Number"
              bind:value={formData.phone}
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            
            <input
              type="text"
              placeholder="Property Address"
              bind:value={formData.address}
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            
            <select
              bind:value={formData.serviceType}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="Tornado Damage Assessment">Tornado Damage Assessment</option>
              <option value="Emergency Structural Inspection">Emergency Structural Inspection</option>
              <option value="Insurance Claim Assistance">Insurance Claim Assistance</option>
              <option value="Emergency Temporary Repairs">Emergency Temporary Repairs</option>
            </select>
            
            <textarea
              placeholder="Describe any visible damage, debris impact, or structural concerns..."
              bind:value={formData.description}
              rows="3"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>

            <div class="space-y-3">
              <p class="text-sm font-semibold text-gray-700">Preferred Inspection Times:</p>
              <div class="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  bind:value={formData.preferredDate1}
                  min={new Date().toISOString().split('T')[0]}
                  class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <select
                  bind:value={formData.preferredTime1}
                  class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">Select Time</option>
                  <option value="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</option>
                  <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                  <option value="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</option>
                  <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
                  <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              class="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg font-semibold rounded-md flex items-center justify-center transition-colors"
            >
              <Calendar size={20} class="mr-2" />
              Schedule Free Assessment
            </button>
          </form>

          <div class="mt-6 pt-6 border-t border-gray-200 text-center">
            <p class="text-sm text-gray-600 mb-3">Emergency situation? Call now:</p>
            <button
              on:click={() => window.open("tel:(405)902-1826")}
              class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold flex items-center justify-center w-full transition-colors"
            >
              <Phone size={20} class="mr-2" />
              Emergency: (405) 902-1826
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>