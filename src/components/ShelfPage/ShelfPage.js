import React from 'react';
import { useEffect, useDispatch } from 'react';

const items = useSelector((store) => store.shelf)

function ShelfPage() {
  const dispatch = useDispatch();

  // useEffect to fetch shelf on page load
  useEffect(() => {
    dispatch({
      type: "FETCH_SHELF"
    })
  }, [])

  return (
    <div className="container">
      <h2>Shelf</h2>
      
    {items.map (item => (
      <ul>
      <ShelfPage key={item.id} item={item}/>
      </ul>
     
      ))}
    </div>
  );
}

export default ShelfPage;
