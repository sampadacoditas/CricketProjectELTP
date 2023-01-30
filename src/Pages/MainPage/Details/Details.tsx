import React, { createContext,  useEffect, useReducer, useState } from "react";
import CustomizedTables from "./Table/Table";
import styles from "./Details.module.scss";
import http from "../../../Services/Services";
import { INITIAL_STATE, Reducer, ACTION_TYPES } from "../Reducer/Reducer";
import { Datagrid } from "./DataGrid/Datagrid";
import BasicSelect from "./DropDown/DropDown";
import { TextField } from "@mui/material";
import SortDropDown from "./SortDropDown/SortDropDown";
import  CheckboxesGroup from "./SelectMultipleDropDown/SelectMultipleData"
// import {SortDropDown}from "./SortDropDown/SortDropDown"
export const DetailsContext = createContext({});

export const Details = () => {
  const [data,setData]=useState()
  // const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  // const [data, setData] = useState<any>();
  // const [page, setPage] = useState(1);
  // const [rows, setRows] = useState([]);
  // const [previousPage, setPreviousPage] = useState();
  // const [nextPage, setNextPage] = useState();
  // // const [totalRows, setTotalRows] = useState(20);
  // const [totalRows, setTotalRows] = useState(20);
  // const [rowsPerPage, setRowsPerPage] = useState(1);
  // const [field,setField]=useState("name")
  // const [searchValue,setSearchValue]=useState("r")

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       // let data = await http.get(`player?page=${page}&limit=${rowsPerPage}`);
  //       let data=await http.get(`player/?sortBy=country&limit=${rowsPerPage}&page=${page}&field=${field}&searchValue=${searchValue}`)
  //       console.log(data)
  //       setTotalRows(data.data.totalCount)
  //       setData(data.data.result[0].users)
  //       setPreviousPage(data.data.previouspage)
  //       setNextPage(data.data.nextPage)
  //       console.log(data.data.result[0].users)
  //     } catch (err: any) {
  //       // dispatch({type:ACTION_TYPES.FETCH_ERROR})
  //       console.log(err);
  //     }
  //   }
  //   getData();
  // }, [page, rowsPerPage,field,searchValue]);



  return (
    <>
      <DetailsContext.Provider value={{setData,data}}>
        <div className={styles.details}>
          <div className={styles.select}>
            <span>
              <BasicSelect />
            </span>
            <span className={styles.sort}>
              SortBy
              <SortDropDown />
            </span>
          </div>
          <CustomizedTables />
        </div>
        <div className={styles.pagination}></div>
      </DetailsContext.Provider>
    </>
  );
};
