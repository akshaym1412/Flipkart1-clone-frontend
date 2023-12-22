import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase,ListItem,List,Box,styled} from '@mui/material';
import data from '../images/data';
import { Link } from 'react-router-dom';

const Searchbox=styled(Box)(({theme})=>({
  background:"#fff",
  width:"580px",
  margin:"0 0 8px 10px",
  borderRadius:"2px",
  display:"flex",
  [theme.breakpoints.down("sm")]:{
    width:"300px",
  }
  }))
const InputSearchBase=styled(InputBase)(({theme})=>({
    paddingLeft:"20px",
    width:"100%",
    [theme.breakpoints.down("sm")]:{
      width:"100%",
    }
    }))
const SearchIconwrapper=styled(Box)`
color:blue;
padding:5px;
`
const ListWrapper = styled(List)(({theme})=>({
  position:"absolute",
  color: "#000",
  width:"580px",
  background: "#FFFFFF",
  marginTop:"43px",
  [theme.breakpoints.down("sm")]:{
    width:"235px",
  }
  }))

export default function Search() {
  const [ text, setText ] = useState();
  const [ open, setOpen ] = useState(true)

  const getText = (text) => {
      setText(text);
      setOpen(false)
  }
  return (
    <>
    <Searchbox>
    < InputSearchBase name="search" placeholder='Search for products and more' onChange={(e)=>{getText(e.target.value)}}/>
    <SearchIconwrapper>
    <SearchIcon/>
    </SearchIconwrapper>
    {
              text && 
              <ListWrapper hidden={open}>
                {
                  data.filter(product => product.title.toLowerCase().includes(text.toLowerCase())|| product.category.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link 
                        to={`/${product.category}/details/${product.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => setOpen(true)}  
                      >
                        {product.title}
                      </Link>
                    </ListItem>
                  ))
                }  
              </ListWrapper>
            }
    </Searchbox>
    </>
  )
}
