export const setStateSelectBox = ({ nameState, payload, state }) => {
  const currentState = state[nameState];
  const newState = currentState.includes(payload)
    ? currentState.filter((item) => item !== payload)
    : [...currentState, payload];
  return {
    ...state,
    [nameState]: newState,
  };
};
