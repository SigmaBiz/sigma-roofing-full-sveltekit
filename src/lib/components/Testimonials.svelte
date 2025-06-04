<script>
  import { Star } from 'lucide-svelte';
  
  const reviews = [
    {
      name: "Jenna Goodner",
      role: "Verified Customer",
      rating: 5,
      review: "If I could give 100 stars, I absolutely would. From start to finish, this company was exceptional to work with. They not only did everything they promised — they went above and beyond in every way. In today's world, it's rare to find a team this honest, thorough, and committed to true customer service. I had the pleasure of working with Antonio, and he has truly restored my faith in humanity.",
      date: "3 weeks ago",
      initials: "JG"
    },
    {
      name: "Marlene Musgrave", 
      role: "Verified Customer",
      rating: 5,
      review: "I highly recommend BBAV Roofing, LLC. Antonio Escalante was awesome to work with. Their quality of work is great. They replaced my roof, gutters, garage door and did some painting and I am 100 percent happy with everything. No high-pressure sales techniques, which was really nice after talking to some other roofing companies.",
      date: "2 months ago",
      initials: "MM"
    },
    {
      name: "Matthew Thornton",
      role: "Verified Customer", 
      rating: 5,
      review: "Antonio and his crew did an Outstanding job getting us back into our house after the November Tornado. He helped us with every aspect of the damage: drywall, roof, chimney, carpet, tile, garage door, and other interior needs. We are extremely pleased with the results and he is great to work with. Will never use anyone else.",
      date: "2 months ago",
      initials: "MT"
    },
    {
      name: "Shanna Gill",
      role: "Verified Customer",
      rating: 5,
      review: "I had tornado damage on November 3rd and they were next door putting a tarp on my neighbors house. Without hesitation they came to my assistance. They put a tarp up and reinforced my roof and patiently checked in on me while I had a public adjuster helping me fight the insurance company. Me and three of my neighbors are extremely grateful we have bbav as our roofing company.",
      date: "a month ago", 
      initials: "SG"
    },
    {
      name: "Jocelyn Sanchez",
      role: "Verified Customer",
      rating: 5,
      review: "I 100% recommend using BBAV Roofing! The crew is very knowledgeable and great to work with. I couldn't be happier with how everything turned out. They worked on my roof, ceiling, and even did some painting on the inside. Five stars all the way.",
      date: "2 months ago",
      initials: "JS"
    }
  ];
</script>

<section class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="font-bold text-4xl text-gray-800 mb-4">What Our Customers Say</h2>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Here are just some of our absolutely satisfied customers who have experienced our professional roofing services.
      </p>
      <div class="mt-4 flex items-center justify-center space-x-4">
        <div class="flex items-center">
          <div class="flex text-emerald-600">
            {#each Array(5) as _, i}
              <Star size={20} class="fill-current" />
            {/each}
          </div>
          <span class="ml-2 font-semibold text-gray-800">5.0 Star Rating</span>
        </div>
      </div>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each reviews as review}
        <div class="bg-white shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-emerald-600 rounded-lg p-8">
          <div class="flex items-center mb-4">
            <div class="flex text-emerald-600 text-lg">
              {#each Array(5) as _, i}
                <Star size={20} class={i < review.rating ? "fill-current" : ""} />
              {/each}
            </div>
            <span class="ml-2 text-sm text-gray-600">{review.date}</span>
          </div>
          <p class="text-gray-600 mb-6 italic">
            "{review.review}"
          </p>
          <div class="flex items-center">
            <div class="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
              <span class="text-white font-bold">{review.initials}</span>
            </div>
            <div>
              <div class="font-semibold text-gray-800">{review.name}</div>
              <div class="text-sm text-gray-600">{review.role}</div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>