import './App.css';
import React from 'react'
import axios from 'axios';
import PageWrapper from './Components/PageWrapper.js';
import MainWrap from './Components/MainWrap.js';
import S1Wrap from './Components/S1Wrap.js';
import Menu from './Components/Menu.js';
import Header from './Components/Header.js';
import Profile from './Components/Profile';
import Week52 from './Components/Week52';
import Indicator from './Components/Indicator.js';
//import PriceChart from './Components/PriceChart.js';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    }
  };

  componentDidMount() {
      axios
        .get("http://localhost:8000/api/quotes/")
        .then((res) => { console.log(res); this.setState({data: res.data, isLoaded: true})})
        .catch((err) => console.log(err))
    console.log(this.state);
  }


  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      return (
        <PageWrapper>
          <Menu />
          <MainWrap>
            <Header />
            <S1Wrap>
              <Profile data={data} />
              <Week52 data={data} />
              <Indicator data={data} />
            </S1Wrap>
          </MainWrap>
        </PageWrapper>
      );
    }  
  }
  }

export default App;
