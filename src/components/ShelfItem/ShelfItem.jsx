import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ShelfItem(item){
    return (
        <>
        <li>
            {item.id} 
            {item.description} 
           <img src= {item.image_url} />
            {item.user_id}
        </li>
        </>
    )
}
export default ShelfItem; 