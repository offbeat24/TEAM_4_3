/*global chrome*/
import React from 'react';
import { Router } from 'react-chrome-extension-router';
import { useState, useEffect } from 'react';
import AddComment from './components/AddComment';
import AuthLanding from './components/AuthLanding';

function ExtensionRouter () {
  const [token, setToken] = useState('');

  useEffect(()=> {
    chrome.storage?.local?.get(['token'], function(result) {
      if (result.token) {
        setToken(result.token);
      }
    });
  }, []);

  return (
    <>
      <Router>
        {
          token ?
          <AddComment token={token}/>
          :
          <AuthLanding />
        }
      </Router>
    </>
  )
}

export default ExtensionRouter;