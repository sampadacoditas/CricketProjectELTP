import { Button } from "@mui/material";
import { Component, createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import MenuAppBar from "../../components/Header/Header";
import ButtonAppBar from "../../components/Header/Header";
import Logout from "../../components/Logout/Logout";


import http from "../../Services/Services";
import styles from "./MainPage.module.scss";
import SideBar from "./SideBar/SideBar";

export const MainPage = () => {
  return (
    <>
      <div className={styles.header}>
        <Header/>
        <div className={styles.sideBarButtons}>
          <ul className={styles.unorderedList}>
            <div className={styles.Link}>
              <SideBar />
             
            </div>
          </ul>
        </div>
        <main className={styles.main}>
          <Outlet/>
        </main>
      </div>
    </>
  );
};