import { GOOGLE_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
  try {
    const query = url.searchParams.get('q');
    
    if (!GOOGLE_API_KEY || !query || query.length < 1) {
      // Fallback Oklahoma cities
      const fallbackSuggestions = [
        { formatted_address: "Oklahoma City, OK, USA", place_id: "fallback_okc" },
        { formatted_address: "Edmond, OK, USA", place_id: "fallback_edmond" },
        { formatted_address: "Norman, OK, USA", place_id: "fallback_norman" },
        { formatted_address: "Moore, OK, USA", place_id: "fallback_moore" },
        { formatted_address: "Midwest City, OK, USA", place_id: "fallback_mwc" },
        { formatted_address: "Yukon, OK, USA", place_id: "fallback_yukon" },
        { formatted_address: "Mustang, OK, USA", place_id: "fallback_mustang" },
        { formatted_address: "Deer Creek, OK, USA", place_id: "fallback_deer_creek" }
      ].filter(city => 
        city.formatted_address.toLowerCase().includes(query.toLowerCase())
      );
      
      return json({ 
        success: true, 
        suggestions: fallbackSuggestions, 
        source: 'fallback' 
      });
    }

    // Google Places API call
    const apiUrl = new URL('https://maps.googleapis.com/maps/api/place/autocomplete/json');
    apiUrl.searchParams.set('input', `${query} Oklahoma`);
    apiUrl.searchParams.set('types', 'address');
    apiUrl.searchParams.set('components', 'country:us');
    apiUrl.searchParams.set('key', GOOGLE_API_KEY);
    
    const response = await fetch(apiUrl.toString());
    const data = await response.json();
    
    if (data.status === "OK") {
      const suggestions = data.predictions?.slice(0, 5).map(pred => ({
        formatted_address: pred.description,
        place_id: pred.place_id
      })) || [];
      
      return json({ 
        success: true, 
        suggestions, 
        source: 'google_places' 
      });
    } else {
      throw new Error('Google API error');
    }
    
  } catch (error) {
    console.error('Address API error:', error);
    
    // Fallback suggestions on error
    const fallbackSuggestions = [
      { formatted_address: "Oklahoma City, OK, USA", place_id: "fallback_okc" },
      { formatted_address: "Edmond, OK, USA", place_id: "fallback_edmond" },
      { formatted_address: "Norman, OK, USA", place_id: "fallback_norman" },
      { formatted_address: "Moore, OK, USA", place_id: "fallback_moore" }
    ];
    
    return json({ 
      success: true, 
      suggestions: fallbackSuggestions, 
      source: 'fallback' 
    });
  }
}