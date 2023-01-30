import  React from "react"
import {  ResetPassword } from "../Pages/ResetPassword/ResetPassword";
// import ResetComponent from "../components/ResetPassword/ResetPassword";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import { Login } from "../Pages/Login/Login";
import { Details } from "../Pages/MainPage/Details/Details";
import  {MainPage}  from "../Pages/MainPage/MainPage";
import { Reports } from "../Pages/MainPage/Reports/Reports";

import { PageNotFound } from "../Pages/PageNotFound/PageNotFound";

export const RoutesData = [
  {
    path: "/",
    component: Login,
  },
  {
    path:'/resetPassword/:id',
    component:ResetPassword
  },
  {
   path:"/forgotPassword",
   component:ForgotPassword
  },
  {
    path:'/*',
    component: PageNotFound
  },
  {
    path: "/mainPage",
    component: MainPage,
    children: [
      {
        path: "details",
        component: Details,
      },
      {
        path: "reports",
        component: Reports,
      }
    ],
  },
];
