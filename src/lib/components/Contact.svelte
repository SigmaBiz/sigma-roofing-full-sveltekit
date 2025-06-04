<script>
  import { browser } from '$app/environment';
  import Input from '$lib/components/ui/Input.svelte';
  import Label from '$lib/components/ui/Label.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import { toast } from '$lib/stores/toast';
  
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
        toast.success('Form submitted successfully! Check your email for confirmation.');
        
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
      toast.error('Error: ' + error.message);
    } finally {
      isSubmitting = false;
    }
  }
</script>

<section id="contact" class="py-24 bg-gradient-to-br from-slate-50 to-white">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 mb-4">
        Get Your Free Roofing Estimate
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Professional roofing services in Oklahoma. Fill out our secure form for a detailed estimate within 24 hours.
      </p>
    </div>

    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-lg shadow-2xl border-0">
        <div class="p-8">
          <form on:submit|preventDefault={handleSubmit} class="space-y-8">
            <!-- Personal Information -->
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <Label forId="firstName" className="text-sm font-medium">
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  bind:value={firstName}
                  placeholder="Enter your first name"
                  required
                  className="h-12"
                />
              </div>
              
              <div class="space-y-2">
                <Label forId="lastName" className="text-sm font-medium">
                  Last Name *
                </Label>
                <Input
                  id="lastName"
                  bind:value={lastName}
                  placeholder="Enter your last name"
                  required
                  className="h-12"
                />
              </div>
            </div>
          
            <!-- Contact Information with Real-time Validation -->
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <Label forId="email" className="text-sm font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  bind:value={email}
                  placeholder="your.email@example.com"
                  required
                  className="h-12 {email && !emailValid ? 'border-red-500' : emailValid && email ? 'border-green-500' : ''}"
                />
                {#if email && emailValidation.message}
                  <p class="text-sm flex items-center {emailValid ? 'text-green-600' : 'text-red-500'}">
                    {emailValidation.message}
                  </p>
                {/if}
              </div>
              
              <div class="space-y-2">
                <Label forId="phone" className="text-sm font-medium">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  bind:value={phone}
                  placeholder="(405) 555-0123"
                  required
                  className="h-12 {phone && !phoneValid ? 'border-red-500' : phoneValid && phone ? 'border-green-500' : ''}"
                />
                {#if phone && phoneValidation.message}
                  <p class="text-sm flex items-center {phoneValid ? 'text-green-600' : 'text-red-500'}">
                    {phoneValidation.message}
                  </p>
                {/if}
              </div>
            </div>
          
            <!-- Smart Address Input with Oklahoma Suggestions -->
            <div class="space-y-2 relative">
              <Label forId="address" className="text-sm font-medium">
                Property Address in Oklahoma *
              </Label>
              <Input
                id="address"
                bind:value={address}
                on:input={searchAddresses}
                placeholder="Start typing your address... (e.g., 123 Main Street)"
                required
                className="h-12 {address && (!address.toLowerCase().includes('oklahoma') && !address.toLowerCase().includes('ok')) ? 'border-red-500' : address.toLowerCase().includes('ok') ? 'border-green-500' : ''}"
              />
              
              {#if showSuggestions && addressSuggestions.length > 0}
                <div class="absolute z-50 w-full bg-white border border-gray-300 rounded-md shadow-xl max-h-64 overflow-y-auto mt-1">
                  <div class="px-3 py-2 text-xs text-gray-500 bg-gray-50 border-b">
                    Verified Oklahoma addresses
                  </div>
                  {#each addressSuggestions as suggestion}
                    <button
                      type="button"
                      class="w-full text-left px-4 py-3 hover:bg-emerald-50 text-sm border-b border-gray-100 last:border-b-0 transition-colors"
                      on:click={() => selectAddress(suggestion)}
                    >
                      <div class="flex items-start">
                        <span class="text-gray-900">{suggestion.formatted_address}</span>
                      </div>
                    </button>
                  {/each}
                </div>
              {/if}
              
              {#if address && (!address.toLowerCase().includes('oklahoma') && !address.toLowerCase().includes('ok'))}
                <p class="text-red-500 text-sm">
                  We currently only serve properties in Oklahoma
                </p>
              {/if}
              
              {#if address.toLowerCase().includes('oklahoma') || address.toLowerCase().includes('ok')}
                <p class="text-green-600 text-sm">
                  ✓ Oklahoma address verified
                </p>
              {/if}
            </div>
          
            <!-- Service Type Selection -->
            <div class="space-y-2">
              <Label className="text-sm font-medium">Service Needed *</Label>
              <select bind:value={serviceType} required
                class="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <option value="">Select the service you need</option>
                <option value="roof-repair">Roof Repair</option>
                <option value="roof-replacement">Roof Replacement</option>
                <option value="roof-inspection">Roof Inspection</option>
                <option value="storm-damage">Storm Damage Assessment</option>
                <option value="gutter-services">Gutter Services</option>
                <option value="painting">Exterior Painting</option>
                <option value="emergency">Emergency Repair</option>
              </select>
            </div>

            <!-- Submit Button with Validation Status -->
            <div class="pt-6">
              <Button
                type="submit"
                disabled={isSubmitting || !firstName || !lastName || !email || !phone || !address || !serviceType || !emailValid || !phoneValid}
                variant="emerald"
                size="lg"
                className="w-full h-14 text-lg font-semibold"
              >
                {#if isSubmitting}
                  <div class="flex items-center">
                    <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </div>
                {:else}
                  Request Free Estimate
                {/if}
              </Button>
              
              {#if !firstName || !lastName || !email || !phone || !address || !serviceType || !emailValid || !phoneValid}
                <p class="text-center text-gray-500 text-sm mt-2">
                  Please complete all required fields to submit your request
                </p>
              {/if}
            </div>

            <!-- Trust Indicators -->
            <div class="text-center pt-4 border-t border-gray-200">
              <p class="text-sm text-gray-600">
                🔒 Your information is secure and will only be used to contact you about your roofing needs
              </p>
              <p class="text-xs text-gray-500 mt-1">
                Licensed Oklahoma Contractor #80006734 | Serving Edmond and surrounding areas
              </p>
            </div>
          </form>

          {#if successMessage}
            <div class="mt-6 p-4 bg-green-50 border-2 border-green-500 rounded-lg text-green-700">
              ✅ {successMessage}
            </div>
          {/if}
        </div>
      </div>

      <!-- Emergency Call Section -->
      <div class="bg-gradient-to-r from-red-600 to-red-700 text-white text-center p-10 rounded-lg mt-8 shadow-xl">
        <h3 class="text-2xl font-bold mb-2">Emergency Storm Damage?</h3>
        <p class="mb-4">Call us now for immediate help:</p>
        <Button
          type="button"
          on:click={() => window.location.href='tel:+14059021826'}
          variant="secondary"
          size="lg"
          className="bg-white text-red-600 font-bold hover:bg-gray-100"
        >
          📞 (405) 902-1826
        </Button>
      </div>
    </div>
  </div>
</section>