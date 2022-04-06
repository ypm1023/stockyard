// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'utils/axios';

import { dispatch } from '../index';
// types
import { DefaultRootStateProps } from 'types';

// ----------------------------------------------------------------------

const initialState: DefaultRootStateProps['waring'] = {
    error: null,
    waringS1: []
};

const slice = createSlice({
    name: 'waring',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // GET USERS STYLE 1
        getWaringListSuccess(state, action) {
            state.waringS1 = action.payload;
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getWaringList() {
    return async () => {
        try {
            console.log('getWaringList');
            const response = await axios.get('/api/waring/list');
            console.log('response------------------>', response);
            dispatch(slice.actions.getWaringListSuccess(response.data.waring_s1));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}
