import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ShelfItem(item){
    return (
        
        <li>
        {item.description} 
        <img src= {item.image_url} />
        </li>
        
    )
}
export default ShelfItem; 