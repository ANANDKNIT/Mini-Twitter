import * as React from 'react';
import './App.css';
import Tweets from './component/Tweets'
import Header from './component/AppBar'
import Showcomments from './component/ShowComments'
class App extends React.Component {

  render() {
    return (
      <div className="App">
      <Header />
      <Showcomments />
      <Tweets/>
      </div>
    );
  }
}

export default App;