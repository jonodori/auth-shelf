import {useState} from 'react'
import {useDispatch} from 'react-redux'

function ShelfForm () {
    const [desc, setDesc] = useState('')
    const [imgSrc, setImgSrc] = useState('')
    const dispatch = useDispatch();
   
    const handleSubmit = () => {
        dispatch({
            type:'ADD_SHELF_ITEM',
            payload: {desc, imgSrc}
        })

        setDesc('');
        setImgSrc('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Description
                <input type='text' value={desc} required onChange={evt => setDesc(evt.target.value)}/>
            </label>
            <label>
                Image Source
                <input type='text' value={imgSrc} required onChange={evt => setImgSrc(evt.target.value)}/>
            </label>
           <input type='submit' value='submit'/>
        </form>
    )
}


export default ShelfForm