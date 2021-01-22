import { useState, useEffect } from 'react'

import { Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import styled from 'styled-components'

import HomePage from './pages/HomePage'

import { fetchStarships } from './services/starwars-api'

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex-grow: 1;
  }

`;

function Layout() {

  useEffect(()=> {
    getAppData();
  },[])

  const [appState, setAppState] = useState({
    sampleStarships: [],
    allStarships: {}
  });

  async function getAppData() {
    const data = await fetchStarships();
    console.log(data);
  }

  return (
    <StyledLayout>
      <Header/>
        <Switch>
          <Route exact path="/" render={props=> 
            <HomePage/>
          }/>
        </Switch>
      <Footer/>
    </StyledLayout>
  );
}

export default Layout;
