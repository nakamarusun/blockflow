import { combineReducers } from 'redux';
import notes from './noteReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  notes,
  authors
});

export default rootReducer;