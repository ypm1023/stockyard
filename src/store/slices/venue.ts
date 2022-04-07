// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'utils/axios';

import { dispatch } from '../index';
// types
import { DefaultRootStateProps } from 'types';

// ----------------------------------------------------------------------

const initialState: DefaultRootStateProps['venue'] = {
    error: null,
    venueS1: []
};

const slice = createSlice({
    name: 'venue',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // GET USERS STYLE 1
        getVenueListSuccess(state, action) {
            console.log('action', action);
            state.venueS1 = action.payload;
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getVenueList() {
    return async () => {
        try {
            const response = await axios.get('/api/venue/list');
            console.log('response---------->', response);
            dispatch(slice.actions.getVenueListSuccess(response.data.venue_s1));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}
