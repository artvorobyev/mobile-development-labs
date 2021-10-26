import { combineReducers } from 'redux';

const INITIAL_STATE: IHistoryState = {
  history: [],
};

export interface IHistoryState {
  history: number[];
}

export interface IHistoryAction {
  type: 'PUSH_CALL' | 'GET_CALLS';
  payload: number;
}

const callHistoryReducer = (
  state = INITIAL_STATE,
  action: IHistoryAction
): IHistoryState => {
  switch (action.type) {
    case 'PUSH_CALL':
      const { history } = state;
      return { history: [action.payload, ...history] };
    default:
      return state;
  }
};

export default combineReducers({
  callHistory: callHistoryReducer,
});
