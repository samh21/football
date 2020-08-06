import React, { useState, useEffect } from 'react';
import axios from 'axios';

const leagueNames = require('./dummyLeagueData.json');

export default function useFetchData(url, api_key) {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setStatus('fetching');

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
      } catch (error) {
        setStatus('idle');
      }
    };

    const loadDummyData = () => {
      setData(
        leagueNames
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
    };

    // load from dummy data file
    // loadDummyData();

    // load from live API
    fetchData();
  }, [url]);

  return { data };
}
