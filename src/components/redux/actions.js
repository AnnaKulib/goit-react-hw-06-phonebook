import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add');

export const deleteContact = createAction('contacts/delete');

export const changeFilter = createAction('filter/changeFilter');
// import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

// const initialState = {
//     items: [],
//     filter: '',
// };

// const contactsSlice = createSlice({
//     name: 'contacts'
//     initialState,
//     reducers: {
//         addContact(state, {payload}) {
//             state.items.push(payload);
//         },
//         deleteContact(state, {payload}) {
//             state.items = state.items.filter(({id}) => id !== payload);
//         },
//         changeFilter(state, {payload}) {
//             state.filter = payload;
//         },
//     },
// });

// export const {addContact, deleteContact, changeFilter} = contactsSlice.actions;

// export default contactsSlice.reducer;
