// @flow

import React, { useEffect, useContext } from 'react';
import Modal from 'react-modal';
import Header from 'components/Header/Header';
import Board from 'components/Board/Board';
import { Context } from 'Provider';
import Helmet from 'react-helmet';
import './Container.scss';

Modal.setAppElement('#root');

const Container = () => {
  const context = useContext(Context);
  const { isPathExist, clear } = context;

  useEffect(() => {
    if (!isPathExist) {
      clear();
    }
  }, [isPathExist, clear]);

  return (
    <>
      <Helmet>
        <title>Algorithm Visualizer</title>
        <meta property="og:title" content="Algorithm Visualizer" />
        <meta property="og:type" content="website" />
      </Helmet>
      <header className="header">
        <h1 className="header__title">Algorithm Visualizer</h1>
      </header>
      <Header />
      <Board />
    </>
  );
};

export default Container;
