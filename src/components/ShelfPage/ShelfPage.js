import React from 'react';
import { useEffect, useDispatch } from 'react';
import ShelfItem from '../ShelfItem/ShelfItem';
import {useSelector} from 'react-redux';



function ShelfPage() {
  const items = useSelector((store) => store.shelf)

  const dispatch = useDispatch();

  // useEffect to fetch shelf on page load
  useEffect(() => {
    dispatch({
      type: "FETCH_SHELF"
    })
  }, [])

  return (
    <>
    <div className="container">
      <h2>Shelf</h2>
      <ul>
        {items.map( item => {
          return (
            
              <ShelfItem key={item.id} item={item}/>
            
          )}

        )}
      </ul>
    
      
      
    </div>
    </>
  );
}

export default ShelfPage;
