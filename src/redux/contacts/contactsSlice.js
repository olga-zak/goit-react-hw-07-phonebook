import { createSlice, isAnyOf } from '@reduxjs/toolkit';
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
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContact.pending,
          addContact.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContact.fulfilled,
          addContact.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContact.rejected,
          addContact.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export default contactsSlice.reducer;
