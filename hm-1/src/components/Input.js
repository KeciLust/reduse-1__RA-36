import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { itemAdd } from '../reducers/listReducer';
import ButtonSave from './ButtonSave';
import ButtonSaveCancel from './ButtonSaveCancel';


function Input() {
    const dispatch = useDispatch();
    const item = useSelector((store => store.listSlice));
    let button =<ButtonSave/>;
    item.forEach(el => {
        if(el.rep){
             button = <ButtonSaveCancel />
             return;
        }else {
             button = <ButtonSave />
        }
    });
    const [state, setState] = useState({
        text: '',
        price: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(itemAdd(state))
        setState({
            text: '',
            price: '',
            rep: false
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(prev => ({ ...prev, [name]: value }))

    }

    return (<>
        <form className='inputBox' onSubmit={handleSubmit}>
            <input name='text' type='text' className='inputText' onChange={handleChange} value={state.text} required></input>
            <input name='price' type='number' className='inputPrice' onChange={handleChange} value={state.price} required></input>
            {button}
        </form>
    </>)
}



export default Input
