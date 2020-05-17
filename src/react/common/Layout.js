import React from 'react';
import './Layout.scss';
import Header from './Header';
import Footer from './Footer';
import ContentWrap from './ContentWrap';

const Layout = ({ children = null }) => {
  return (
    <div className="Layout">
      <Header />
      <div className="Layout__inner">
        <ContentWrap>
          {children}
        </ContentWrap>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;