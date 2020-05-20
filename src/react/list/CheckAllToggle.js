import React from 'react';
import './CheckAllToggle.scss';
import Checkbox from '../common/Checkbox';
import { useSelector, useDispatch } from 'react-redux';
import selectActiveListAllChecked from '../../redux/selectors/list/selectActiveListAllChecked';
import selectActiveListId from '../../redux/selectors/list/selectActiveListId';
import { toggleAllChecked } from '../../redux/actions/list';

const CheckAllToggle = ({ id }) => {
  const activeList = useSelector(selectActiveListId);
  const allChecked = useSelector(selectActiveListAllChecked);
  const dispatch = useDispatch();

  const onChange = () => {
    dispatch(toggleAllChecked(activeList));
  };

  return (
    <div className="CheckAllToggle">
      <Checkbox
        checked={allChecked}
        id={id}
        onChange={onChange}
      />
      <div className="CheckAllToggle__textWrap">
        <label htmlFor={id} className="CheckAllToggle__textLabel" onClick={onChange}>
          Check / uncheck all
        </label>
      </div>
    </div>
  );
};

export default CheckAllToggle;