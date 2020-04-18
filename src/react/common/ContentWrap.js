import React from 'react';
import './ContentWrap.scss';

const ContentWrap = ({ children }) => (
  <div className="ContentWrap">
    { children }
  </div>
);

export default ContentWrap;