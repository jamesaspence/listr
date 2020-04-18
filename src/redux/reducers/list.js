export const DEFAULT_LIST_ID = 12345;

export const DEFAULT_STATE = {
  lists: {
    [DEFAULT_LIST_ID]: [
      {
        text: 'Pizza',
        checked: false
      },
      {
        text: 'Bacon',
        checked: true
      }
    ]
  }
};

const listReducer = (state = DEFAULT_STATE, action) => {
  return state;
};

export default listReducer;