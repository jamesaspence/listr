import React from 'react';
import { useSelector } from 'react-redux';
import selectActiveList from '../../redux/selectors/list/selectActiveList';
import ContentWrap from '../common/ContentWrap';
import NoListFallback from './NoListFallback';
import List from './List';

const ActiveListContainer = () => {
  const list = useSelector(selectActiveList);

  if (list == null) {
    return (
      <ContentWrap>
        <NoListFallback />
      </ContentWrap>
    );
  }

  const onCheck = event => {
    event.preventDefault();
    console.log('event', event);
  };

  console.log('activeList', list);
  return (
    <ContentWrap>
      <div className="ActiveListContainer">
        <List items={list} onCheck={onCheck} />
      </div>
    </ContentWrap>
  );
};

export default ActiveListContainer;