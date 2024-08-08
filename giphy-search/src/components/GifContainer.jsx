import { useState, useEffect } from "react";
import API_KEY from "../../config";

const GiphyTrending = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const doFetch = async () => {
      try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`);
        const result = await response.json();
        setData(result.data);
      } catch (err) {
        setError(err.message);
      }
    };
    doFetch();
  }, [])
  return (
    <div>
      {error && <p>Error: {error}</p>}
      <ul>
        {data.map((gif) => (
          <li key={gif.id}>
            <img src={gif.images.fixed_height.url} alt={gif.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GiphyTrending;
