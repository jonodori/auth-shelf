import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ShelfItem({items}){
    const dispatch = useDispatch();
    const deleteFunction = ()=>{
        dispatch({
            type: 'DELETE_SHELF',
            payload: items.id
        });
    }
    return (
        <>
        <li> {items.description}</li>
        <img src= {items.image_url}/>
        <button onClick = {deleteFunction}> Delete</button>
        </>
    )
}
export default ShelfItem; 