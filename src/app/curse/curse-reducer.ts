import { CAST_CURSE, REMOVE_CURSE } from './curse-actions';

export default function curse (state = 0, action) {
  console.log('state', state, ' / action', action);
  switch (action.type) {
    case CAST_CURSE:
      return state + 1;
    case REMOVE_CURSE:
      return state - 1;
    default:
      return state;
  }
}