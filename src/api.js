import axios from "axios";

const getImages = async (searchTerm) => {
  const result = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID aoXhji4hMoye9nfk7xZc2-fUKKTZcvUHIWMlLkqJ3Mk",
    },
    params: {
      query: searchTerm,
    },
  });

  return result.data.results;
};

export default getImages;
