import commentsReducer from '../commentsReducer';
import { SAVE_COMMENT } from '../../actions/actionTypes';

it('handles actions with type: SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'new comment'
  };

  const newState = commentsReducer([], action);
  expect(newState).toEqual(['new comment']);
});

it('handles actions with unknown types', () => {
  const newState = commentsReducer([], { type: 'DDDFFF' });
  expect(newState).toEqual([]);
});
