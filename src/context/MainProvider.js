import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';

function MainProvider({ children }) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [sendedEmail, setSendedEmail] = useState(false);

  const contextValue = {
    isNavbarOpen,
    setIsNavbarOpen,
    sendedEmail,
    setSendedEmail,
  };

  return (
    <MainContext.Provider value={ contextValue }>
      {children}
    </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainProvider;
