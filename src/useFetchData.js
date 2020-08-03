import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchData(url) {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setStatus('fetching');

      try {
        const response = await axios(url, {
          headers: {
            'x-rapidapi-key':
              '0352edca8bmshf62087d63a1a56bp144deejsnc0f05c2056ec',
          },
        });
        // setData(response.data.api.standings[0]);
        setData(
          response.data.api.leagues.filter((league) => league.type === 'League')
        );
      } catch (error) {
        setStatus('idle');
      }
    };

    fetchData();
  }, [url]);

  return { data };
}
