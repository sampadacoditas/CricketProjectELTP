import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TextField } from "@mui/material";
import http from "../../../../Services/Services";
import { useContext, useState } from "react";
import { DetailsContext } from "../Details";
import { SortGridMenuItems } from "@mui/x-data-grid";

export default function SortDropDown() {
  let context: any = useContext(DetailsContext);
  // const [field,setField]=useState()
  // const [searchValue,setSearchValue]=useState()
  const [sort, setSort] = useState();

  React.useEffect(() => {
    async function getData() {
      try {
        let data = await http.get(`player/?sortBy=${sort}&limit=5&page=1`);
        console.log(data);
        console.log(data.data.result[0].users);
        context.setData(data.data.result[0].users);
      } catch (err: any) {
        console.log(err);
      }
    }
    getData();
  }, [sort]);
  console.log(sort);
  // console.log(searchValue)

  return (
    <>
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e:any)=>setSearchValue(e.target.value)}/> */}
      <Select
        labelId="demo-simple-select-disabled-label"
        id="demo-simple-select-disabled"
        value={sort}
        label="Sort"
        onChange={(e: any) => setSort(e.target.value)}
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
