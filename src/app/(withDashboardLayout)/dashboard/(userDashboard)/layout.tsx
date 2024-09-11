import React from 'react';
import Dashboard from './page';
import NavBar from '@/app/(commonLayout)/components/shared/Navbar';

const UserLayout = () => {
  return (
    <div>
      {/* <h1>User Layout</h1> */}
      <NavBar></NavBar>
      <Dashboard></Dashboard>
    </div>
  );
};

export default UserLayout;