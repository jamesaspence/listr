import { listExistsWithIndex, listExists, listExistsWithItem, getItemFromList, listAllChecked } from './list';

const createMockItem = (id, text, checked) => ({
  id,
  text,
  checked
});

describe('listExistsWithIndex util', () => {
  it('returns false if list does not exist', () => {
    const listId = 'list1234';
    const lists = {
      [listId]: [
        createMockItem('1234', 'Item', false),
        createMockItem('foo', 'Item', false)
      ]
    };

    expect(listExistsWithIndex(lists, 'invalidListId')).toBeFalsy();
  });

  it('checks list index correctly', () => {
    const listId = 'list1234';
    const lists = {
      [listId]: [
        createMockItem('1234', 'Item', false),
        createMockItem('foo', 'Item', false)
      ]
    };

    expect(listExistsWithIndex(lists, listId, 1)).toBeTruthy();
    expect(listExistsWithIndex(lists, listId, 55)).toBeFalsy();
  });
});

describe('listExists util', () => {
  it('detects lists correctly', () => {
    const listId = 'list1234';
    const lists = {
      [listId]: [
        createMockItem('1234', 'Item', false),
        createMockItem('foo', 'Item', false)
      ]
    };

    expect(listExists(lists, listId)).toBeTruthy();
    expect(listExists(lists, 'invalidListId')).toBeFalsy();
  });
});

describe('listExistsWithItem util', () => {
  it('returns false if list does not exist', () => {
    const id = 'id1234';
    const listId = 'list1234';
    const lists = {
      [listId]: [
        createMockItem('foo', 'Item', false),
        createMockItem(id, 'Item', false)
      ]
    };

    expect(listExistsWithItem(lists, listId, 'invalidId')).toBeFalsy();
  });

  it('detects item correctly', () => {
    const id = 'id1234';
    const listId = 'list1234';
    const lists = {
      [listId]: [
        createMockItem('foo', 'Item', false),
        createMockItem(id, 'Item', false)
      ]
    };
    expect(listExistsWithItem(lists, listId, id)).toBeTruthy();
    expect(listExistsWithItem(lists, 'invalidId', id)).toBeFalsy();
  });
});

describe('getItemFromList util', () => {
  it('finds item correctly', () => {
    const id = 'id1234';
    const item = createMockItem(id, 'Item', false);
    const list = [ item ];
    expect(getItemFromList(list, id)).toEqual(item);
    expect(getItemFromList(list, 'invalidId')).toBeNull();
  });
});

describe('listAllChecked util', () => {
  it('detects all checked vs. unchecked', () => {
    const checked = [
      createMockItem(1, '1', true),
      createMockItem(1, '1', true),
      createMockItem(1, '1', true),
      createMockItem(1, '1', true)
    ];
    expect(listAllChecked(checked)).toBeTruthy();
    const unchecked = [
      createMockItem(1, '1', false),
      createMockItem(1, '1', false),
      createMockItem(1, '1', false),
      createMockItem(1, '1', false)
    ];
    expect(listAllChecked(unchecked)).toBeFalsy();
    const mixed = [
      createMockItem(1, '1', true),
      createMockItem(1, '1', false),
      createMockItem(1, '1', false),
      createMockItem(1, '1', true)
    ];
    expect(listAllChecked(mixed)).toBeFalsy();
  });
});