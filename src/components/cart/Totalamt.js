import { Box, Typography, styled } from '@mui/material';

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    borderBottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
    color: #878787;
`;

const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
`;
const Line=styled(Box)`
margin-bottom:20px

`

const Price = styled(Typography)`
    float: right;
`;

const Discount = styled(Typography)`
    font-size: 40px; 
    color: green;
`


const Totalamt = ({ price,discount,totalquantity,totalprice }) => {


    return (
        <Box>
            <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>
            <Container>
                <Line>Price ({totalquantity} items)
                    <Price component="span">₹{price}</Price>
                </Line>
                <Line>Discount
                    <Price component="span">-₹{discount}</Price>
                </Line>
                <Line>Delivery Charges
                    <Price component="span">₹40</Price>
                </Line>
                <Line>Total Amount
                    <Price>₹{totalprice + 40}</Price>
                </Line>
                <Discount style={{fontSize:"18px"}}>You will save ₹{discount - 40} on this order</Discount>
            </Container>
        </Box>
    )
}

export default Totalamt;
