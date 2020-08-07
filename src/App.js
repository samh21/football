import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';
import LeagueTable from './Components/LeagueTable';
import useFetchData from './useFetchData';
import Search from './Components/Search';
import './App.css';

const API_KEY = process.env.REACT_APP_KEY;

const leagueNamesUrl =
  'https://api-football-v1.p.rapidapi.com/v2/leagues/season/2019';

function App() {
  const { data } = useFetchData(leagueNamesUrl, API_KEY);
  const [leagueData, setLeagueData] = useState();
  const [league, setLeague] = useState({
    id: 524,
    name: 'Premier League',
    country: 'England',
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios(
          `https://api-football-v1.p.rapidapi.com/v2/leagueTable/${league.id}`,
          {
            headers: {
              'x-rapidapi-key': API_KEY,
            },
          }
        );
        setLeagueData(res.data.api.standings[0]);
      } catch (error) {
        setLeagueData([]);
      }
    };

    getData();
  }, [league]);

  return (
    <Container maxWidth="lg">
      <div className="wrapper">
        <Search setLeague={setLeague} data={data}></Search>
      </div>
      {leagueData && (
        <LeagueTable clubData={leagueData} league={league}></LeagueTable>
      )}
    </Container>
  );
}

export default App;
