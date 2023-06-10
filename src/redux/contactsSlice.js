import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  reducers: {
    addContact: {
      reducer(state, action) {
        if (state.find(contact => contact.name === action.payload.name)) {
          alert(`${action.payload.name} is already in contacts.`);
        } else {
          state.push(action.payload);
        }
      },
      prepare(text) {
        return {
          payload: {
            name: text.name,
            number: text.number,
            id: nanoid(),
          },
        };
      },
    },

    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
      // state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
