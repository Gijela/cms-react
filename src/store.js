import { createStore, combineReducers } from 'redux';

const initialState = { 
  count: 0,
  username: ''
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer
});

const store = createStore(rootReducer);

export default store