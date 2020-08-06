import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchData(url, api_key) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        const response = await axios(url, {
          headers: {
            'x-rapidapi-key': api_key,
          },
        });

        setData(
          response.data.api.leagues
            .filter((league) => league.type === 'League')
            .filter((league) => league.type === 'League')
            .filter((league) => league.standings !== 0)
            .filter((league) => league.is_current === 1)
            .map((league) => {
              return {
                name: league.name,
                id: league.league_id,
                flag: league.flag,
                country: league.country,
              };
            })
        );
      } catch (error) {}
    };

    // load from live API
    fetchData();
  }, [url, api_key]);

  return { data };
}
