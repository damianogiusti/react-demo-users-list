import React, { useEffect, useState, Props } from 'react';
import HomePresenter from './HomePresenter';
import HomeView from './HomeView';

interface HomeViewControllerProps {
  readonly presenter: HomePresenter
}

const HomeViewController = (props: HomeViewControllerProps) => {
  const { presenter } = props;
  const [state, setState] = useState({
    message: "",
    actionText: ""
  });

  const view = {
    showMessage: (msg: string) => setState(prevState => {
      return {
        ...prevState,
        message: msg
      }
    }),
    showAction: (action: string) => setState(prevState => {
      return {
        ...prevState,
        actionText: action
      }
    })
  };

  useEffect(() => {
    presenter.attachView(view)
    return () => presenter.detachView()
  }, [presenter]);

  return (
    <HomeView
      message={state.message}
      actionText={state.actionText}
      onAction={() => { presenter.handleAction() }}
    />
  );
}

export default HomeViewController;