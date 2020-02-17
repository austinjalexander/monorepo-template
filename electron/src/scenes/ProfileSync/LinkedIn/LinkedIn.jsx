import React from 'react';
import logo from './LinkedIn.png';
import './LinkedIn.css';

const LinkedIn = () => {
  const clientID = '';
  const clientSecret = '';
  const stateSecret = '';

  const redirectURI = 'http://dev.nicewrk.com:3000/profile-sync';
  const responseType = 'code';
  const scope = 'r_basicprofile';

  const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=${responseType}&client_id=${clientID}&client_secret=${clientSecret}&redirect_uri=${redirectURI}&state=${stateSecret}&scope=${scope}`

  return (
    <div>
      <a href={url}>
        <img className="logo" src={logo} alt="LinkedIn Logo" />
      </a>
    </div>
  );
};

export default LinkedIn;
