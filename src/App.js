import searchImages from "./api.js";
import "./App.css";
import ImageList from "./compenent/imageList.js";
import SearchHeader from "./SearchHeader";
import { useState } from "react";

function App() {
  const [images, setimages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setimages(result);
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceholder={images} />
    </div>
  );
}

export default App;
