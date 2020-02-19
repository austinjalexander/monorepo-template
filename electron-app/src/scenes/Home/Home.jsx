import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = (props) => {
  return (
      <div className="Home">
        <nav className="Home-header">
          <Link className="Home-link" to="/profile-sync">Profile Sync</Link>
        </nav>
      </div>
  );
};

export default Home;
