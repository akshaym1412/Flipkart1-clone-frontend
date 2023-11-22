
import styled from '@emotion/styled';
import { useState } from 'react';
import {AppBar,Box,Toolbar, Typography,IconButton,Drawer, List} from '@mui/material';
import CustomButtons from './CustomButtons';
import Search from './Search';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';

const Mainbar=styled(AppBar)`
    background:#2874f0;
    height:55px;
    position:stickey
    
    `;
const Component=styled(Box)`
margin-left:12%;
line-height:0;
`
const SubHeading=styled(Typography)`
font-size:10px;
font-style:italic;
`;

const Plusimage=styled('img')(
    {
        width:10,
        height:10,
        marginLeft:2

    }
)
const CustomButtonWrapper = styled(Box)(({ theme }) => ({ 
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));
const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        marginLeft:"30%",
        display: 'block'
    }
}));


const Header=()=>{
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }


    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <listItem button>
                    <CustomButtons />
                </listItem>
            </List>
        </Box>
    );
    return(
        <>
        <Mainbar>
            <Toolbar>
                <Component >
                <Link to={"/"}><img src={logoURL} alt='Flipkart logo' style={{width:75}}/></Link>
               <Box style={{display:'flex'}}>
                <SubHeading>Explore&nbsp;
                    <Box component="span" style={{color:'#FFE500'}}>Plus</Box>
                </SubHeading>
                <Plusimage src={subURL} alt="plus"></Plusimage>
               </Box>
               </Component>
               <Search/>
               <CustomButtonWrapper>
                  <CustomButtons />
                </CustomButtonWrapper>
               <MenuButton
                    color="inherit"
                    onClick={handleOpen}
                >
                    <Menu />
                </MenuButton>
                <Drawer open={open} anchor='right' onClose={handleClose}>
                    {list()}
                </Drawer>
            </Toolbar>
        </Mainbar>
        
        </>
    )
}

export default Header;