import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOps';

const contactsInitialState = {
  items: [],
  loading: false,
  error: null,
};

const isPending = action =>
  typeof action.type === 'string' && action.type.endsWith('/pending');
const isRejected = action =>
  typeof action.type === 'string' && action.type.endsWith('/rejected');

const contactsPending = state => {
  state.loading = true;
  state.error = null;
};
const contactsRejected = state => {
  state.loading = false;
  state.error = true;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })

      .addMatcher(isPending, contactsPending)
      .addMatcher(isRejected, contactsRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;

// Select

export const selectContactsLoading = state => state.contacts.loading;
export const selectContactsError = state => state.contacts.error;

const selectContacts = state => state.contacts.items;
const selectNameFilter = state => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filters) => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filters.toLowerCase())
    );
  }
);
