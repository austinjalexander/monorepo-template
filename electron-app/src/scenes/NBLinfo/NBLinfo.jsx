import React from 'react';
import MetRate from '../../components/MetRate';
import './NBLinfo.css';

const NBLinfo = (props) => {
  return (
    <div className="NBLinfo">
      <header className="NBLinfo-header">
        <h1>NBL Informatics</h1>
      </header>
      <section>
        <MetRate />
      </section>
    </div>
  );
};

export default NBLinfo;
