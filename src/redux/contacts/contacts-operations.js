import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//https://63c08c2c3e974879a75d623e.mockapi.io/phonebook/contacts
axios.defaults.baseURL =
  'https://63c08c2c3e974879a75d623e.mockapi.io/phonebook';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      //   const result = await axios('/contacts');
      //   return result.data;
      const { data } = await axios('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/contacts`, contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
