import React from 'react'
import SideBar from '../components/Sidebar/SideBar';
import { LoginCheck } from './AuthCheck';
export default function ProtectedRoutes(props) {
    LoginCheck();
    const {Component} = props;
  return (
    <>
    <SideBar/>
    <Component/>
    </>
  )
}
