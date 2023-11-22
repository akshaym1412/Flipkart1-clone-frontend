import React from "react";
import {increaseQuantity, decreaseQuantity} from '../Redux/Slice3';
import { useDispatch} from 'react-redux';
import { ButtonGroup, Button, styled } from "@mui/material";

const Component = styled(ButtonGroup)`
    margin-top: 30px;
    border-color:black;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
    border-color:black;
`;

const GroupButton = ({data}) => {
    const dispatch=useDispatch();


    return (
        <Component>
            <StyledButton onClick={() => dispatch(decreaseQuantity(data))} disabled={data.quantity === 1}>-</StyledButton>
            <Button >{data.quantity}</Button>
            <StyledButton onClick={() =>dispatch(increaseQuantity(data)) }>+</StyledButton>
        </Component>
    );
}

export default GroupButton;