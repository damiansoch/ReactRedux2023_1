import { useEffect, useState } from "react";
import getImages from "./api";
import ImageShow from "./components/ImageShow";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [picturesArray, setPicturesArray] = useState([]);
  console.log(picturesArray);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPicturesArray(await getImages(searchTerm));
    setSearchTerm("");
  };

  return (
    <>
      <SearchBar
        handleSubmit={handleSubmit}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <ImageShow picturesArray={picturesArray} />
    </>
  );
}

export default App;
