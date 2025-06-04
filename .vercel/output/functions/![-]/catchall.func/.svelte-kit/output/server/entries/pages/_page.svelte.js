import { n as sanitize_props, q as spread_props, t as slot, x as attr, y as ensure_array_like, m as pop, p as push, z as head } from "../../chunks/index.js";
import { I as Icon } from "../../chunks/Icon.js";
function Phone($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "phone" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Hero($$payload) {
  const oklahomaFlagUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Flag_of_Oklahoma.svg/120px-Flag_of_Oklahoma.svg.png";
  $$payload.out += `<section id="home" class="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-gray-800"><div class="container mx-auto px-4 relative z-10"><div class="max-w-4xl mx-auto text-white text-center"><h1 class="font-bold text-4xl lg:text-6xl mb-6 leading-tight"><span class="text-white">Stand firm.</span>  <span class="text-emerald-500">Brave the storm.</span>  <span class="text-white">Serve with heart.</span></h1> <p class="text-lg lg:text-xl mb-6 leading-relaxed text-gray-200 max-w-3xl mx-auto">Quality craftsmanship and down-to-earth, responsive customer service is what we do. Whether you need 
        major repairs or minor fixes, we work with you to find the best solution for your home's specific needs.</p> <p class="text-base lg:text-lg mb-8 leading-relaxed text-gray-300 max-w-3xl mx-auto font-medium">Schedule today for your on-site estimate or ask about our convenient digital estimates. Emergency storm 
        repairs like tarping and damage assessments are available upon request. Book today!</p> <div class="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 max-w-3xl mx-auto"><button class="bg-emerald-600 text-white hover:bg-emerald-700 text-lg px-8 py-4 shadow-lg transform hover:scale-105 transition-transform w-full sm:w-64 rounded-md font-medium flex items-center justify-center">`;
  Phone($$payload, { size: 20, class: "mr-2" });
  $$payload.out += `<!----> Call (405) 902-1826</button> <button class="bg-emerald-600 text-white hover:bg-emerald-700 text-lg px-8 py-4 shadow-lg transform hover:scale-105 transition-transform w-full sm:w-64 rounded-md font-medium">Free Estimate</button></div> <div class="mt-16 flex justify-between items-center max-w-3xl mx-auto"><div class="flex flex-col items-center"><img${attr("src", oklahomaFlagUrl)} alt="Oklahoma Flag" class="w-20 h-auto mb-2 rounded shadow-lg object-contain opacity-70" loading="lazy"/> <div class="text-sm text-gray-300 font-semibold">Operated</div></div> <div class="flex flex-col items-center"><img${attr("src", oklahomaFlagUrl)} alt="Oklahoma Flag" class="w-20 h-auto mb-2 rounded shadow-lg object-contain opacity-70" loading="lazy"/> <div class="text-sm text-gray-300 font-semibold">Founded</div></div> <div class="flex flex-col items-center"><img${attr("src", oklahomaFlagUrl)} alt="Oklahoma Flag" class="w-20 h-auto mb-2 rounded shadow-lg object-contain opacity-70" loading="lazy"/> <div class="text-sm text-gray-300 font-semibold">Licensed &amp; Insured</div></div></div></div></div></section>`;
}
function Services($$payload, $$props) {
  push();
  $$payload.out += `<section id="services" class="py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50"><div class="container mx-auto px-4"><div class="text-center mb-16"><h2 class="font-bold text-4xl text-gray-800 mb-4">Our Services</h2> <p class="text-xl text-gray-600 max-w-2xl mx-auto">From residential roofing to exterior painting, we provide comprehensive home improvement solutions for all your needs.</p></div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">`;
  {
    $$payload.out += "<!--[!-->";
    const each_array_2 = ensure_array_like(Array(6));
    $$payload.out += `<!--[-->`;
    for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
      each_array_2[i];
      $$payload.out += `<div class="bg-white rounded-lg shadow-md border-l-4 border-l-emerald-600 overflow-hidden"><div class="h-48 bg-gray-200 animate-pulse"></div> <div class="p-8"><div class="w-16 h-16 bg-gray-200 animate-pulse rounded-lg mb-6"></div> <div class="h-6 bg-gray-200 animate-pulse rounded mb-4"></div> <div class="h-4 bg-gray-200 animate-pulse rounded mb-2"></div> <div class="h-4 bg-gray-200 animate-pulse rounded w-3/4"></div></div></div>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div></div></section>`;
  pop();
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Sigma Roofing LLC - Professional Roofing Services in Edmond, OK</title>`;
    $$payload2.out += `<meta name="description" content="Sigma Roofing LLC provides quality roofing, repairs, and exterior services in Edmond, Oklahoma. Licensed contractor #80006734. Free estimates available."/>`;
  });
  Hero($$payload);
  $$payload.out += `<!----> `;
  Services($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
