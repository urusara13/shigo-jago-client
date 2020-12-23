import React from "react";
import Nav from './components/nav';
import Search from './components/search';
import Sitemap from './components/sitemap';
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="bg_image">
          <Nav />
          <Search />
          <Sitemap />
        </div>
      </Router>
    );
  };
}


export default App;