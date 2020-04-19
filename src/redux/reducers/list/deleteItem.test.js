import { DEFAULT_STATE } from './index';

const expectedListId = '123';
const expectedItemId = '123123';
const TEST_STATE = {
  ...DEFAULT_STATE,
  lists: {
    [expectedListId]: [
      {
        id: '4321',
        text: 'apples',
        checked: false
      },
      {
        id: expectedItemId,
        text: 'oranges',
        checked: false
      },
      {
        id: '9999',
        text: 'almonds',
        checked: false
      }
    ]
  }
};

it.todo('short circuits if list id is invalid');
it.todo('short circuits if item id is invalid');
it.todo('correctly deletes item');