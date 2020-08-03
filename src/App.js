import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';
import LeagueTable from './Components/LeagueTable';
import useFetchData from './useFetchData';
import './App.css';

const dummyData = require('./dummyData.json');

function App() {
  // const [clubData, setClubData] = useState(dummyData);
  const [leagueData, setLeagueData] = useState();
  const { data } = useFetchData(
    'https://api-football-v1.p.rapidapi.com/v2/leagues/season/2019'
  );
  console.log('tried');
  console.log(
    data.map((league) => {
      return { league: league.name, id: league.league_id };
    })
  );

  useEffect(() => {
    // const getData = async () => {
    //   try {
    //     const res = await axios(
    //       'https://api-football-v1.p.rapidapi.com/v2/leagueTable/582',
    //       {
    //         headers: {
    //           // Do I need this?
    //           // 'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    //           'x-rapidapi-key':
    //             '0352edca8bmshf62087d63a1a56bp144deejsnc0f05c2056ec',
    //         },
    //       }
    //     );
    //     console.log(res.data.api.standings[0]);
    //     setClubData(res.data.api.standings[0]);
    //   } catch (error) {
    //     console.log(error);
    //   }
    //   try {
    //     const res = await axios(
    //       'https://api-football-v1.p.rapidapi.com/v2/leagues/season/2019',
    //       {
    //         headers: {
    //           'x-rapidapi-key':
    //             '0352edca8bmshf62087d63a1a56bp144deejsnc0f05c2056ec',
    //         },
    //       }
    //     );
    //     console.log(
    //       res.data.api.leagues.filter((league) => league.type === 'League')
    //     );
    //   } catch (error) {}
    // };
    // not using real API during initial development
    // use dummyData file instead
    // getData();
  }, []);

  return (
    <Container maxWidth="md">
      <div>{data && <div>loaded</div>}</div>

      {/* {data ? <LeagueTable clubData={data}></LeagueTable> : <div>Loading</div>} */}
    </Container>
  );
}

export default App;

// League IDs from API

// 524 - PL
// 565 - CH
// 581 - L1
// 582 - L2
// 764 - National League
