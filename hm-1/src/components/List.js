import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { itemDelete, itemRepeat } from '../reducers/listReducer';



function List() {
    const item = useSelector((store => store.listSlice))
    const dispatch = useDispatch()
    const rem = (id) => {

        dispatch(itemDelete(id))
    }
    const rep = (id) => {
        dispatch(itemRepeat(id));
        console.log(item)
    }

    return (<>
        <ul>
            {item.map(el =>
                <li key={el.id} className='li'> {el.text}  {el.price}
                    <button type='button' onClick={() => rep(el.id)}>&#128393;</button>
                    <button type='button' onClick={() => rem(el.id)}>&#215;</button>
                </li>
            )}
        </ul>
    </>)
}



export default List
