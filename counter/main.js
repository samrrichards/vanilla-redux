const DEFAULT_STATE = 0;

function reducer(state=DEFAULT_STATE, action) {
  if (action.type === "INCREMENT") return state + 1;

  if (action.type === "DECREMENT") return state - 1;

  return state;
}

const store = Redux.createStore(reducer);
const countValue = document.getElementById('count');

function render() {
  countValue.innerHTML = store.getState().toString();
}

store.subscribe(render);

document.getElementById('increment').addEventListener('click', () => store.dispatch({type: "INCREMENT"}));

document.getElementById('decrement').addEventListener('click', () => store.dispatch({type: "DECREMENT"}));
