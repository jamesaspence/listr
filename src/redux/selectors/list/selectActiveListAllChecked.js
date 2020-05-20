import selectActiveList from './selectActiveList';
import { listAllChecked } from '../../../util/list';

const selectActiveListAllChecked = state => {
  const activeList = selectActiveList(state);

  if (activeList === null) {
    return false;
  }

  if (activeList.length === 0) {
    return false;
  }

  return listAllChecked(activeList);
};

export default selectActiveListAllChecked;