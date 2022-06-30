import React from 'react';
import { useEffect, useDispatch } from 'react';

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
      <p>All of the available items can be seen here.</p>
    </div>
  );
}

export default ShelfPage;
