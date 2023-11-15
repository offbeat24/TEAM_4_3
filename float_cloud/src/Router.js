import React from 'react';
import { createMemoryRouter, RouteProvider } from 'react-router-dom';
import AddComment from './components/AddComment';
import AuthLanding from './components/AuthLanding';

function Router () {
  const router = createMemoryRouter([
    {
      path: "/landing",
      element: <AuthLanding />,
    },
    {
      path: "/",
      element: <AddComment />,
    }
  ])
  return (
    <>
      <RouteProvider router={router} />
    </>
  )
}

export default Router;