<script>
  import { browser } from '$app/environment';
  
  // Form data
  let firstName = '';
  let lastName = '';
  let email = '';
  let phone = '';
  let address = '';
  let serviceType = '';
  
  // Validation state
  let emailValid = false;
  let phoneValid = false;
  let addressSuggestions = [];
  let showSuggestions = false;
  let isSubmitting = false;
  let successMessage = '';
  
  // Real-time validation
  $: emailValidation = validateEmail(email);
  $: phoneValidation = validatePhone(phone);
  $: emailValid = emailValidation.valid;
  $: phoneValid = phoneValidation.valid;
  
  // Auto-format phone number
  $: if (phone) {
    phone = formatPhoneNumber(phone);
  }
  
  function validateEmail(email) {
    if (!email) return { valid: false, message: '' };
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      return { valid: false, message: 'Please enter a valid email address' };
    }
    
    const fakeDomains = ['test.com', 'example.com', 'fake.com', 'temp.com'];
    const domain = email.split('@')[1]?.toLowerCase();
    if (fakeDomains.some(fake => domain?.includes(fake))) {
      return { valid: false, message: 'Please use a real email address' };
    }
    
    return { valid: true, message: '✓ Valid email address' };
  }
  
  function validatePhone(phone) {
    if (!phone) return { valid: false, message: '' };
    
    const cleanPhone = phone.replace(/\D/g, '');
    
    if (cleanPhone.length < 10) {
      return { valid: false, message: 'Phone number must be at least 10 digits' };
    }
    
    if (cleanPhone.length > 11) {
      return { valid: false, message: 'Phone number too long' };
    }
    
    const phoneNumber = cleanPhone.length === 11 ? cleanPhone.slice(1) : cleanPhone;
    
    if (phoneNumber[0] === '0' || phoneNumber[0] === '1') {
      return { valid: false, message: 'Invalid area code' };
    }
    
    if (phoneNumber[3] === '0' || phoneNumber[3] === '1') {
      return { valid: false, message: 'Invalid phone number format' };
    }
    
    if (/^(\d)\1{9}$/.test(phoneNumber)) {
      return { valid: false, message: 'Please enter a real phone number' };
    }
    
    return { valid: true, message: '✓ Valid phone number' };
  }
  
  function formatPhoneNumber(value) {
    const phone = value.replace(/\D/g, '');
    if (phone.length <= 3) return phone;
    if (phone.length <= 6) return `(${phone.slice(0, 3)}) ${phone.slice(3)}`;
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
  }
  
  // Address autocomplete
  let addressTimeout;
  async function searchAddresses() {
    if (!browser || address.length < 1) {
      showSuggestions = false;
      return;
    }
    
    clearTimeout(addressTimeout);
    addressTimeout = setTimeout(async () => {
      try {
        const response = await fetch(`/api/address-suggestions?q=${encodeURIComponent(address)}`);
        const data = await response.json();
        
        if (data.success && data.suggestions?.length > 0) {
          addressSuggestions = data.suggestions;
          showSuggestions = true;
        } else {
          showSuggestions = false;
        }
      } catch (error) {
        console.error('Address search error:', error);
        showSuggestions = false;
      }
    }, 200);
  }
  
  function selectAddress(suggestion) {
    address = suggestion.formatted_address;
    showSuggestions = false;
  }
  
  // Form submission
  async function handleSubmit() {
    if (!firstName || !lastName || !email || !phone || !address || !serviceType) {
      alert('Please fill in all required fields.');
      return;
    }
    
    if (!emailValid) {
      alert('Please enter a valid email address.');
      return;
    }
    
    if (!phoneValid) {
      alert('Please enter a valid phone number.');
      return;
    }
    
    isSubmitting = true;
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          address,
          serviceType
        })
      });
      
      const result = await response.json();
      
      if (response.ok) {
        successMessage = result.message;
        
        // Store data for Calendly
        const formData = { firstName, lastName, email, phone, address, serviceType };
        
        // Reset form
        firstName = lastName = email = phone = address = serviceType = '';
        
        // Open Calendly popup
        setTimeout(() => {
          if (window.Calendly) {
            window.Calendly.initPopupWidget({
              url: 'https://calendly.com/aescalante-oksigma/new-meeting',
              text: 'Schedule your roofing consultation',
              prefill: {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                customAnswers: {
                  a1: `Phone: ${formData.phone} | Service: ${formData.serviceType} | Address: ${formData.address}`
                }
              }
            });
          }
        }, 1500);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      isSubmitting = false;
    }
  }
</script>

<section id="contact" class="py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <div class="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-8 rounded-lg text-center mb-8">
        <h2 class="text-3xl font-bold mb-2">Get Your Free Estimate</h2>
        <p class="text-lg">Professional Roofing Services in Oklahoma</p>
      </div>
      
      <div class="bg-white rounded-lg shadow-md p-8">
        <p class="text-gray-600 mb-6">Fill out our streamlined form and we'll contact you within 24 hours to schedule your consultation.</p>
        
        <form on:submit|preventDefault={handleSubmit}>
          <!-- Name fields -->
          <div class="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <input 
                type="text" 
                bind:value={firstName} 
                placeholder="First Name*" 
                required
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <input 
                type="text" 
                bind:value={lastName} 
                placeholder="Last Name*" 
                required
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
              />
            </div>
          </div>
          
          <!-- Email field -->
          <div class="mb-4">
            <input 
              type="email" 
              bind:value={email} 
              placeholder="Email Address*" 
              required
              class="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
              class:border-emerald-500={emailValid && email}
              class:border-red-500={email && !emailValid}
              class:border-gray-200={!email}
            />
            {#if email && emailValidation.message}
              <div class="mt-2 text-sm px-3 py-1 rounded" 
                class:bg-green-50={emailValid}
                class:text-green-700={emailValid}
                class:bg-red-50={!emailValid}
                class:text-red-700={!emailValid}>
                {emailValidation.message}
              </div>
            {/if}
          </div>
          
          <!-- Phone field -->
          <div class="mb-4">
            <input 
              type="tel" 
              bind:value={phone} 
              placeholder="Phone Number (e.g., 405-555-0123)*" 
              required
              class="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors"
              class:border-emerald-500={phoneValid && phone}
              class:border-red-500={phone && !phoneValid}
              class:border-gray-200={!phone}
            />
            {#if phone && phoneValidation.message}
              <div class="mt-2 text-sm px-3 py-1 rounded"
                class:bg-green-50={phoneValid}
                class:text-green-700={phoneValid}
                class:bg-red-50={!phoneValid}
                class:text-red-700={!phoneValid}>
                {phoneValidation.message}
              </div>
            {/if}
          </div>
          
          <!-- Address field -->
          <div class="mb-4 relative">
            <input 
              type="text" 
              bind:value={address} 
              on:input={searchAddresses}
              placeholder="Property Address (Oklahoma)*" 
              required
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
            />
            {#if showSuggestions && addressSuggestions.length > 0}
              <div class="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg mt-1 max-h-48 overflow-y-auto shadow-lg z-50">
                {#each addressSuggestions as suggestion}
                  <div 
                    class="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0" 
                    on:click={() => selectAddress(suggestion)}
                    on:keydown={(e) => e.key === 'Enter' && selectAddress(suggestion)}
                    tabindex="0"
                    role="button"
                  >
                    {suggestion.formatted_address}
                  </div>
                {/each}
              </div>
            {/if}
          </div>
          
          <!-- Service type -->
          <div class="mb-6">
            <select bind:value={serviceType} required
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors bg-white">
              <option value="">Select Service Type*</option>
              <option value="roof-repair">Roof Repair</option>
              <option value="storm-damage">Storm Damage Assessment</option>
              <option value="emergency-repair">Emergency Repair</option>
              <option value="roof-replacement">Roof Replacement</option>
              <option value="inspection">Roof Inspection</option>
            </select>
          </div>
          
          <button type="submit" disabled={isSubmitting}
            class="w-full bg-emerald-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed">
            {isSubmitting ? 'Submitting...' : 'Submit Free Estimate Request'}
          </button>
        </form>
        
        {#if successMessage}
          <div class="mt-6 p-4 bg-green-50 border-2 border-green-500 rounded-lg text-green-700">
            ✅ {successMessage}
          </div>
        {/if}
      </div>
      
      <div class="bg-gradient-to-r from-red-600 to-red-700 text-white text-center p-10 rounded-lg mt-8">
        <h3 class="text-2xl font-bold mb-2">Emergency Storm Damage?</h3>
        <p class="mb-4">Call us now for immediate help:</p>
        <button type="button" 
          on:click={() => window.location.href='tel:+14059021826'}
          class="bg-white text-red-600 font-bold py-4 px-8 rounded-lg text-xl hover:bg-gray-100 transition-colors">
          📞 (405) 902-1826
        </button>
      </div>
    </div>
  </div>
</section>