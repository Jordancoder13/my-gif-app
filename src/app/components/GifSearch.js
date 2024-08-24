'use client';

import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image'; // Import Image from next/image

const GIPHY_API_KEY = 'GlVGYHkr3WSBnllca54iNt0yFbjz7L65';

const GifSearch = () => {
  const [query, setQuery] = useState('');
  const [gifs, setGifs] = useState([]);

  const searchGifs = async () => {
    try {
      const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
        params: {
          api_key: GIPHY_API_KEY,
          q: query,
          limit: 10
        }
      });
      setGifs(response.data.data);
    } catch (error) {
      console.error('Error fetching GIFs:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchGifs}>Search</button>
      <div>
        {gifs.map((gif) => (
          <Image
            key={gif.id}
            src={gif.images.fixed_height.url}
            alt={gif.title}
            width={gif.images.fixed_height.width}
            height={gif.images.fixed_height.height}
          />
        ))}
      </div>
    </div>
  );
};

export default GifSearch;
