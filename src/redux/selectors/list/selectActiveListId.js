import { DEFAULT_LIST_ID } from '../../reducers/list';

const selectActiveListId = state => state.list.activeList || DEFAULT_LIST_ID;

export default selectActiveListId;