import { useState } from 'react'
import './App.css'
import { Users } from './components/User/Users'
import { Paper, InputBase, Divider, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {debounce} from "lodash"

function App() {
  const [name,setName] = useState("rick")
  const handleChange = (e) => {
    console.log("App Component function")
   const deb= debounce(()=>setName(e.target.value),1000);
   deb();
  };
  
  return (
    <div className="App">
      
      <Paper
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
        className="search"
      >
        <IconButton sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search for a contact"
          onChange={handleChange}
        />
      </Paper>
      <Users name={name}/>
      </div>
  )
}

export default App
