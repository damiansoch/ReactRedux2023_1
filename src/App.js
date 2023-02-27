import { useEffect, useState } from 'react';
import getImages from './api';
import ImageList from './components/ImageList';

import SearchBar from './components/SearchBar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [picturesArray, setPicturesArray] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPicturesArray(await getImages(searchTerm));
    setSearchTerm('');
  };

  return (
    <>
      <SearchBar
        handleSubmit={handleSubmit}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <ImageList picturesArray={picturesArray} />
    </>
  );
}

export default App;
