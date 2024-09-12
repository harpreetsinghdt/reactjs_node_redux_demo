const redux = require("redux");

// reducer function
// accepts current state and action type to perform action as per type to current state and return the updated state object to store then subscriber of the store will be notifiy about the updated state and subscriber component will take appropriate action to update UI as per new state.
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

// redux store
const store = redux.createStore(counterReducer);

// console.log(store.getState());

// store subscriber function
// this subscriber function will be triggered soon the state changes and then we will get that latest state from the store with the getState() method that is available with the store

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// subscribe method
// the subscribe method takes a subscriber function as parameter
// the subscribe method expects a function which Redux will then execute for us whenever the data and the store changed

store.subscribe(counterSubscriber);

// distach method
// which execute an action on reducder function on the current state
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
