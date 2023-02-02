import { INote } from './../../models/INote';
import { createSlice } from '@reduxjs/toolkit';

interface NoteState {
  notes: INote[];
};

const initialState: NoteState = {
  notes: [],
};

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {

  },
});

export default noteSlice.reducer;
