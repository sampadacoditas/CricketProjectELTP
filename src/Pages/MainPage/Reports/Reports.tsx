import React, { createContext, useState } from 'react'
// import { createContext } from 'vm';
import http from '../../../Services/Services';
import Filter from './Filter/Filter';
import Graph from './Graph/Graph';
import styles from "./Reports.module.scss"
 
export const ReportsContext=createContext({});
export const Reports = () => {
    const [data, setData] = useState();
    const [filter,setFilter]=useState();
  React.useEffect(() => {
    async function getData() {
      try {
        let data = await http.get(`player/report?field=${filter}`);
        console.log(data.data);
        setData(data.data);
        // console.log(data.data.result[0].users)
        // context.setData(data.data.result[0].users)
      } catch (err: any) {
        //   dispatch({type:ACTION_TYPES.FETCH_ERROR})
        console.log(err);
      }
    }
    getData();
  },[filter]);
  console.log(filter)
  return (
    <>
    <ReportsContext.Provider value={{filter,setFilter}}>
        <div className={styles.filter}>
          <span>Filter </span>
        <Filter/>
        </div>
    <div className={styles.graph}>
        <Graph data={data}/>
    </div>
    </ReportsContext.Provider>
    </>
    
  )
}
