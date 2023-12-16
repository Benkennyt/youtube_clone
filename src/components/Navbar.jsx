import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction='row' 
    alignItems='center' 
    p={2} 
    sx={{ position: 'sticky', 
          background: '#009698', 
          top: 0, 
          justifyContent: 'space-between'
    }}
  >
    <Link to='/' style={{ display: 'flex', alignItems: 'center'}}>
      <h1 style={{color: 'white', margin: 0, fontFamily: 'Roboto, Helvetica, Arial'}}>Youtube Clone</h1>
    </Link>
    <SearchBar/>
  </Stack>
)
export default Navbar