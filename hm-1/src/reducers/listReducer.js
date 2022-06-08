import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const listSlice = createSlice({
    name: 'list',
    initialState: [],
    reducers: {
        itemAdd(state, actions) {
            state.push({
                id: nanoid(),
                text: actions.payload.text,
                price: actions.payload.price,
            })
        },
        itemDelete(state, actions) {
            const index = state.findIndex(item => item.id === actions.payload)
            state.splice(index, 1);
        },
        itemRepeat(state, actions) {
            const index = state.findIndex(item => item.id === actions.payload)
            state[index].rep = true;
        },
        itemChange(state, actions) {
            const { name, value } = actions.payload;
            return { ...state, [name]: value };

        }
    }
})

export default listSlice.reducer;
export const { itemAdd, itemDelete, itemRepeat, itemChange } = listSlice.actions;