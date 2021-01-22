import { useState, useEffect } from 'react'

import { Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import styled from 'styled-components'

import HomePage from './pages/HomePage'
import IndexPage from './pages/IndexPage'

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
    allStarships: {
      next: null,
      previous: null,
      results: [],
      count: null
    }
  });

  async function getAppData() {
    const data = await fetchStarships();
    setAppState({
      allStarships: data,
      sampleStarships: data.results.slice(0, 3)
    })
  }

  return (
    <StyledLayout>
      <Header/>
        <Switch>
          <Route exact path="/" render={props=> 
            <HomePage sampleStarships={appState.sampleStarships}/>
          }/>
           <Route exact path="/starships" render={props=> 
            <IndexPage sampleStarships={appState.allStarships.results}/>
          }/>
        </Switch>
      <Footer/>
    </StyledLayout>
  );
}

export default Layout;
