
const client_id = 'm-zM9nrqqdbjxLn5TIO8uQ';

const api_key = 'R6YudZbfw_vR4jr4CwNVX7GX8E9OTmYVg6TSnZK7aKPS0C1HZdekZPrGEv6k459Hxj1rPeUq8zvJWAsqAQzhJdYuOoOFfIuMt9TcnY-UimsRVq-JyGFEPnskcw-KXnYx';

const yelp = {
    search(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${api_key}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      });
    }
  };
  
  export default yelp;