import React from 'react';
import _get from 'lodash/get';
import LinkedIn from './LinkedIn';
import './ProfileSync.css';

const ProfileSync = (props) => {
  const locationSearch = _get(props, 'location.search');
  const queryParams = new URLSearchParams(locationSearch);
  return (
    <div className="ProfileSync">
      <h1>Profile Sync</h1>
      <div>
        <h3>URL PARAMS</h3>
        <p>code: {queryParams.get("code")}</p>
        <p>state: {queryParams.get("state")}</p>
      </div>
      <LinkedIn />
    </div>
  );
};

export default ProfileSync;
