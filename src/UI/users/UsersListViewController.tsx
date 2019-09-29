import React, { useState, useEffect } from 'react';
import UsersList from './UsersList';
import TopProgressView from '../TopProgressView';
import UsersListPresenter from './UsersListPresenter';
import DisplayableUser from './DisplayableUser';
import UsersListViewContract from './UsersListViewContract';

interface UsersListVcProps {
  readonly presenter: UsersListPresenter;
}

const UsersListViewController = (props: UsersListVcProps) => {
  const { presenter } = props;
  const [state, setState] = useState({
    isLoading: false,
    users: new Array<DisplayableUser>()
  });

  const view: () => UsersListViewContract = () => ({
    showUsers: (newUsers: DisplayableUser[]) =>
      setState((prevState) => ({
        ...prevState,
        users: newUsers
      })),

    showLoading: () =>
      setState((prevState) => ({
        ...prevState,
        isLoading: true
      })),

    hideLoading: () =>
      setState((prevState) => ({
        ...prevState,
        isLoading: false
      }))
  });

  useEffect(() => {
    presenter.attachView(view());
    return () => presenter.detachView()
  }, [presenter]);

  const component = state.isLoading 
    ? <TopProgressView/>
    : <UsersList users={state.users} />;

  return component;
}

export default UsersListViewController;