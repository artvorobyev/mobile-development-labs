import { createStore } from 'redux';
import callHistoryReducer from './reducers/CallHistoryReducer';

export const store = createStore(callHistoryReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
