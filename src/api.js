import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID REbEXv3XoEO_JBs49jAarUO4S7SvYkPsGJ6jA_EFBWA",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
