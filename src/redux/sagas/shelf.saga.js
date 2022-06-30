import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Saga will listen for 'FETCH_SHELF' action on page load


function* fetchShelf() {
    console.log('in fetchShelf saga');
    try {
        const response = yield axios.get('/api/shelf')
        yield put({
            type: 'SET_SHELF',
            payload: response.data
        })
    }
    catch (error) {
        console.log('Shelf GET request failed', error);

    }
}
function* deleteShelf(item) {
    try{
     const res= yield axios({
          method: 'DELETE', 
          url: `api/shelf/${item.payload}`,
    });
        yield put({ type:'FETCH_SHELF'})
    
} 
catch(err){
    console.log('shelf delete request failed', error);
}
}



function* addShelfItem (action) {
    try {
        const res = yield axios.post('/api/shelf', action.payload )
        yield put ({type: 'FETCH_SHELF'});
    }
    catch(err) {
        console.log('shelf POST failure', err )
    }
}

function* shelfSaga() {
    yield takeLatest ('ADD_SHELF_ITEM', addShelfItem)
    yield takeLatest('FETCH_SHELF', fetchShelf);
    yield takeLatest('DELETE_SHELF', deleteShelf);
}

export default shelfSaga;