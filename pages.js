import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Users } from './users';
import { AddUser } from './addUser';  
import { UserDetail } from './userDetail';

export function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/userDetail" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}