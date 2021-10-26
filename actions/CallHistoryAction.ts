import { IHistoryAction } from '../reducers/CallHistoryReducer';

export const pushCallAction = (phone: number): IHistoryAction => ({
  type: 'PUSH_CALL',
  payload: phone,
});
