import React from 'react';
import UsersListViewController from './UI/users/UsersListViewController';
import Toolbar from './UI/Toolbar';
import UsersListPresenter from './UI/users/UsersListPresenter';
import { UsersRepositoryFactory } from './Repositories/UsersRepository';

const App: React.FC = () => {
  const factory = UsersRepositoryFactory();
  const presenter = new UsersListPresenter(factory());
  return (
    <div className="App">
      <Toolbar/>
      <UsersListViewController presenter={presenter}/>
    </div>
  );
}

export default App;
