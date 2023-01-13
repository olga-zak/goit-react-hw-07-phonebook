import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact } from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
      state.error = null;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(({ id }) => id !== payload);
      state.error = null;
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default contactsSlice.reducer;
