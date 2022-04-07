// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'utils/axios';

import { dispatch } from '../index';
// types
import { DefaultRootStateProps } from 'types';

// ----------------------------------------------------------------------

const initialState: DefaultRootStateProps['log'] = {
    error: null,
    logS1: []
};

const slice = createSlice({
    name: 'log',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // GET USERS STYLE 1
        getLogListSuccess(state, action) {
            state.logS1 = action.payload;
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getLogList() {
    return async () => {
        try {
            console.log('~~~~~~~~~~');
            const response = await axios.get('/api/log/list');
            console.log('response-------------->', response);
            dispatch(slice.actions.getLogListSuccess(response.data.log_s1));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}
