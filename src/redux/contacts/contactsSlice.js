import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContact,
  addContact,
} from './contacts-operations';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: { items: [], isLoading: false, error: null },
//   extraReducers: {
//     [fetchContacts.pending]: state => {
//       state.isLoading = true;
//     },
//     [fetchContacts.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.items = payload;
//       state.error = null;
//     },
//     [fetchContacts.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     },

//     [deleteContact.pending]: state => {
//       state.isLoading = true;
//     },
//     [deleteContact.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.items = state.items.filter(({ id }) => id !== payload);
//       state.error = null;
//     },
//     [deleteContact.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     },

//     [addContact.pending]: state => {
//       state.isLoading = true;
//     },
//     [addContact.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       //state.items = state.items.push(payload);
//       state.items = [...state.items, payload];
//       state.error = null;
//     },
//     [addContact.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     },
//   },
// });

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(({ id }) => id !== payload);
        state.error = null;
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
        state.error = null;
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export default contactsSlice.reducer;
