import React from 'react'
import { styled } from "@mui/styles";
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    backgroundColor:'#fff',
    marginLeft: 10,
    width: '38%',
    display:'flex',
  }));
  
  const SearchIconWrapper = styled('div')(() => ({
    padding: 7,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'blue',
  }));
  
  const StyledInputBase = styled(InputBase)(() => ({
      padding:20,
      width:"100%",
      height:'35px',
  }));

// const useStyles = makeStyles(() =>
//   createStyles({
//       search:{

//       }
//   }))
const SearchInput = () => {
    return (
        <Search>
            <StyledInputBase
              placeholder="Search for products, brands and more"
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIconWrapper>
            <SearchIcon/>
          </SearchIconWrapper>
          </Search>
    )
}

export default SearchInput;
