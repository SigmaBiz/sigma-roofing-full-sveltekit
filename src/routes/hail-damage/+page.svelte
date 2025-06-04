<script>
  import { onMount } from 'svelte';
  
  // Form data
  let formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    serviceType: 'Storm Damage Assessment',
    description: '',
    preferredDate1: '',
    preferredTime1: '',
    preferredDate2: '',
    preferredTime2: ''
  };

  // Form state
  let errors = {};
  let isSubmitting = false;
  let submitMessage = null;

  // Hail data (simplified - no API call)
  let hailData = {
    city: 'Oklahoma City',
    date_of_loss: new Date().toLocaleDateString(),
    hail_size: '2.5',
    damage_likely: true,
    verified: true
  };

  // Sample reviews
  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      rating: 5,
      review: 'BBAV Roofing did an amazing job after the hail storm. They handled everything with our insurance company and the new roof looks fantastic!',
      date: '2 weeks ago',
      initials: 'SJ'
    },
    {
      name: 'Mike Chen',
      role: 'Property Manager',
      rating: 5,
      review: 'Professional, timely, and fair pricing. They completed our roof replacement ahead of schedule and the quality is excellent.',
      date: '1 month ago',
      initials: 'MC'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Homeowner',
      rating: 5,
      review: 'The team was courteous and cleaned up perfectly after the job. Highly recommend for any roofing needs!',
      date: '3 weeks ago',
      initials: 'LR'
    }
  ];

  // Validation functions
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return false;
    
    const domain = email.split('@')[1]?.toLowerCase();
    const allowedDomains = [
      'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
      'icloud.com', 'protonmail.com', 'live.com', 'msn.com', 'comcast.net',
      'verizon.net', 'sbcglobal.net', 'att.net', 'cox.net', 'charter.net'
    ];
    
    return allowedDomains.includes(domain);
  }

  function validatePhone(phone) {
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone.length === 10;
  }

  function validateForm() {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Property address is required';
    
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = 'Invalid email or domain not allowed';
    }
    
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }
    
    errors = newErrors;
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (!validateForm()) {
      submitMessage = {
        type: 'error',
        text: 'Please fill in all required fields correctly.'
      };
      return;
    }
    
    isSubmitting = true;
    submitMessage = null;

    try {
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      submitMessage = {
        type: 'success',
        text: "Request submitted successfully! We'll contact you within 2 hours to schedule your free inspection."
      };
      
      // Reset form
      formData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        serviceType: 'Storm Damage Assessment',
        description: '',
        preferredDate1: '',
        preferredTime1: '',
        preferredDate2: '',
        preferredTime2: ''
      };
      errors = {};
      
    } catch (error) {
      submitMessage = {
        type: 'error',
        text: 'Submission failed. Please try again or call us directly at (405) 902-1826'
      };
    } finally {
      isSubmitting = false;
    }
  }

  function updateFormData(field, value) {
    formData[field] = value;
    // Clear error when user starts typing
    if (errors[field]) {
      delete errors[field];
      errors = errors;
    }
    // Clear submit message when user starts typing
    if (submitMessage) {
      submitMessage = null;
    }
  }
</script>

<svelte:head>
  <title>Hail Damage Roof Inspection - BBAV Roofing LLC</title>
  <meta name="description" content="Free hail damage roof inspection in Oklahoma City. Recent storm with 2.5 inch hail may have damaged your roof. Insurance claim assistance available." />
</svelte:head>

<div class="min-h-screen bg-gray-50">
  <!-- Header -->
  <header class="bg-white shadow-sm border-b">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-lg">B</span>
          </div>
          <div>
            <h1 class="text-xl font-bold text-gray-900">BBAV Roofing LLC</h1>
            <p class="text-sm text-gray-600">Licensed & Insured</p>
          </div>
        </div>
        <div class="text-right">
          <p class="text-lg font-semibold text-emerald-600">(405) 902-1826</p>
          <p class="text-sm text-gray-600">24/7 Emergency Service</p>
        </div>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <div class="relative bg-gradient-to-b from-slate-50 to-white">
    <div class="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <!-- Alert Banner -->
      <div class="max-w-4xl mx-auto mb-16">
        <div class="bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 rounded-3xl p-8 lg:p-12">
          <div class="flex items-start space-x-6">
            <div class="flex-shrink-0">
              <div class="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center">
                <svg class="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            <div class="flex-1">
              <h1 class="text-3xl lg:text-4xl font-light text-gray-900 mb-6 leading-tight">
                Hail Damage Alert: {hailData.city} Area
              </h1>
              <p class="text-xl text-gray-700 leading-relaxed">
                Recent {hailData.hail_size}" hail event on {hailData.date_of_loss} may have damaged roofs in your area. 
                <span class="font-medium text-red-700"> Insurance claims must be filed within policy timeframes.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <div class="bg-white">
    <div class="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div class="grid lg:grid-cols-5 gap-16">
        <!-- Left Column - Information -->
        <div class="lg:col-span-3 space-y-16">
          <!-- Hail Damage Info -->
          <div class="space-y-8">
            <div class="text-center lg:text-left">
              <div class="inline-flex items-center space-x-3 mb-6">
                <div class="w-10 h-10 bg-emerald-100 rounded-2xl flex items-center justify-center">
                  <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 class="text-2xl lg:text-3xl font-light text-gray-900">Why {hailData.hail_size}" Hail Matters</h2>
              </div>
            </div>
            
            <div class="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-2xl p-8">
              <p class="text-lg text-amber-800 font-medium leading-relaxed">
                Hail {hailData.hail_size}" and larger typically causes significant roof damage that qualifies for insurance replacement.
              </p>
            </div>
            
            <div class="grid gap-6">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">Free Professional Inspection</h3>
                  <p class="text-gray-600">Our certified inspectors will assess all damage and document findings for your insurance claim.</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">Time-Sensitive Claims</h3>
                  <p class="text-gray-600">Most insurance policies require claims to be filed within one year of the damage date.</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">Insurance Claim Assistance</h3>
                  <p class="text-gray-600">We work directly with your insurance company to ensure your claim is properly documented and processed.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Customer Reviews -->
          <div class="space-y-8">
            <div class="text-center lg:text-left">
              <div class="inline-flex items-center space-x-3 mb-6">
                <div class="w-10 h-10 bg-emerald-100 rounded-2xl flex items-center justify-center">
                  <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h2 class="text-2xl lg:text-3xl font-light text-gray-900">What Our Customers Say</h2>
              </div>
            </div>
            
            <div class="grid gap-6">
              {#each reviews as review}
                <div class="border-0 shadow-sm bg-gray-50 rounded-lg">
                  <div class="p-6">
                    <div class="flex items-start space-x-4">
                      <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <span class="text-emerald-600 font-semibold">{review.initials}</span>
                      </div>
                      <div class="flex-1">
                        <div class="flex items-center space-x-2 mb-2">
                          <h4 class="font-semibold text-gray-900">{review.name}</h4>
                          <div class="flex">
                            {#each Array(5) as _}
                              <svg class="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            {/each}
                          </div>
                        </div>
                        <p class="text-gray-600 mb-2">"{review.review}"</p>
                        <p class="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>

        <!-- Right Column - Contact Form -->
        <div class="lg:col-span-2">
          <div class="sticky top-8">
            <div class="border-0 shadow-xl bg-white rounded-lg">
              <div class="p-8">
                <div class="text-center mb-8">
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">Free Storm Damage Inspection</h3>
                  <p class="text-gray-600">Get your roof assessed by certified professionals</p>
                </div>

                <!-- Submit Message -->
                {#if submitMessage}
                  <div class="mb-6 p-4 rounded-lg {submitMessage.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'}">
                    {submitMessage.text}
                  </div>
                {/if}

                <form on:submit={handleSubmit} class="space-y-6">
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium mb-2" for="firstName">First Name *</label>
                      <input
                        id="firstName"
                        type="text"
                        bind:value={formData.firstName}
                        on:input={(e) => updateFormData('firstName', e.target.value)}
                        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 {errors.firstName ? 'border-red-500' : 'border-gray-300'}"
                      />
                      {#if errors.firstName}
                        <p class="text-red-500 text-sm mt-1">{errors.firstName}</p>
                      {/if}
                    </div>
                    <div>
                      <label class="block text-sm font-medium mb-2" for="lastName">Last Name *</label>
                      <input
                        id="lastName"
                        type="text"
                        bind:value={formData.lastName}
                        on:input={(e) => updateFormData('lastName', e.target.value)}
                        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 {errors.lastName ? 'border-red-500' : 'border-gray-300'}"
                      />
                      {#if errors.lastName}
                        <p class="text-red-500 text-sm mt-1">{errors.lastName}</p>
                      {/if}
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-medium mb-2" for="email">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      bind:value={formData.email}
                      on:input={(e) => updateFormData('email', e.target.value)}
                      placeholder="test@gmail.com"
                      class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 {errors.email ? 'border-red-500' : 'border-gray-300'}"
                    />
                    <p class="text-xs text-gray-500 mt-1">Value: "{formData.email}"</p>
                    {#if formData.email}
                      {#if validateEmail(formData.email)}
                        <p class="text-green-600 text-sm">✓ Valid email</p>
                      {:else}
                        <p class="text-red-500 text-sm">✗ Invalid email or domain not allowed</p>
                      {/if}
                    {/if}
                    {#if errors.email}
                      <p class="text-red-500 text-sm mt-1">{errors.email}</p>
                    {/if}
                  </div>

                  <div>
                    <label class="block text-sm font-medium mb-2" for="phone">Phone Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      bind:value={formData.phone}
                      on:input={(e) => updateFormData('phone', e.target.value)}
                      placeholder="(555) 123-4567"
                      class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 {errors.phone ? 'border-red-500' : 'border-gray-300'}"
                    />
                    <p class="text-xs text-gray-500 mt-1">Value: "{formData.phone}"</p>
                    {#if formData.phone}
                      {#if validatePhone(formData.phone)}
                        <p class="text-green-600 text-sm">✓ Valid phone</p>
                      {:else}
                        <p class="text-red-500 text-sm">✗ Phone must be 10 digits</p>
                      {/if}
                    {/if}
                    {#if errors.phone}
                      <p class="text-red-500 text-sm mt-1">{errors.phone}</p>
                    {/if}
                  </div>

                  <div>
                    <label class="block text-sm font-medium mb-2" for="address">Property Address *</label>
                    <input
                      id="address"
                      type="text"
                      bind:value={formData.address}
                      on:input={(e) => updateFormData('address', e.target.value)}
                      placeholder="Street address, City, State"
                      class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 {errors.address ? 'border-red-500' : 'border-gray-300'}"
                    />
                    {#if errors.address}
                      <p class="text-red-500 text-sm mt-1">{errors.address}</p>
                    {/if}
                  </div>

                  <div>
                    <label class="block text-sm font-medium mb-2" for="serviceType">Service Needed</label>
                    <select
                      id="serviceType"
                      bind:value={formData.serviceType}
                      on:change={(e) => updateFormData('serviceType', e.target.value)}
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="Storm Damage Assessment">Storm Damage Assessment</option>
                      <option value="Insurance Claim Support">Insurance Claim Support</option>
                      <option value="Roof Replacement">Roof Replacement</option>
                      <option value="Emergency Repairs">Emergency Repairs</option>
                    </select>
                  </div>

                  <div>
                    <label class="block text-sm font-medium mb-2" for="description">Additional Details</label>
                    <textarea
                      id="description"
                      bind:value={formData.description}
                      on:input={(e) => updateFormData('description', e.target.value)}
                      placeholder="Describe any visible damage or concerns..."
                      rows="3"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    class="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-md transition duration-200"
                  >
                    {isSubmitting ? 'Submitting...' : 'Schedule Free Inspection'}
                  </button>

                  <div class="text-center">
                    <p class="text-sm text-gray-500 mb-2">Or call us directly:</p>
                    <a href="tel:4059021826" class="text-lg font-semibold text-emerald-600 hover:text-emerald-700">
                      (405) 902-1826
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  /* Additional styles if needed */
</style>