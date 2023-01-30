
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TextField } from "@mui/material";
import http from "../../../../Services/Services";
import { useContext, useState } from "react";
import { SortGridMenuItems } from "@mui/x-data-grid";
import { ReportsContext } from "../Reports";


export default function Filter() {
    let reportFilter:any=useContext(ReportsContext)
//   const [sort,setSort]=useState();

    // useEffect(() => {
    //   async function getData()  {
    //     try{
    //         // http://localhost:4000/player/?sortBy=country&limit=1&page=1&field=${name}&searchValue=R   
    //     let data = await http.get(`player/?sortBy=${sort}&limit=5&page=1`);
    //     console.log(data)
    //     console.log(data.data.result[0].users)
    //     context.setData(data.data.result[0].users)
    //     }
    //     catch(err:any)
    //     {
    //     //   dispatch({type:ACTION_TYPES.FETCH_ERROR})
    //      console.log(err)
    //     }
    //   }
    //   getData()
    // },[sort]);
    // console.log(sort)
    console.log(reportFilter.filter)
   
  return (
    <>
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e:any)=>setSearchValue(e.target.value)}/> */}
      {/* <InputLabel id="demo-simple-select-label">Filter</InputLabel> */}
      <Select
        labelId="demo-simple-select-disabled-label"
        id="demo-simple-select-disabled"
        value={reportFilter.filter}
        label="Filter"
        onChange={(e:any)=>reportFilter.setFilter(e.target.value)}
        // onChange={handleChange}
      >
        <MenuItem value="None">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"name"}>Name</MenuItem>
        <MenuItem value={"country"}>Country</MenuItem>
        <MenuItem value={"totalScore"}>TotalScore</MenuItem>
        <MenuItem value={"type"}>Type</MenuItem>
      </Select>
    </>
     
  );
}