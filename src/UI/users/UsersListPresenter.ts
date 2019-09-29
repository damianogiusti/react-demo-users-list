import UsersListViewContract from './UsersListViewContract';
import User from '../../Models/User';
import DisplayableUser from './DisplayableUser';
import UsersRepository from '../../Repositories/UsersRepository';

class UsersListPresenter {

  private view: UsersListViewContract | null = null

  constructor(private repository: UsersRepository) {
  }

  attachView(v: UsersListViewContract) {
    this.view = v;

    this.view.showLoading();
    this.repository.getUsers()
      .then((users) => this.onUsers(users))
      .catch((error) => this.handleError(error))
      .finally(() => this.view && this.view.hideLoading());
  }

  detachView() {
    this.view = null;
  }

  // Private methods

  private onUsers(users: User[]): void {
    const displayableUsers: DisplayableUser[] = users.map(user => ({
      identifier: user.identifier,
      displayName: user.name + ' ' + user.surname,
      imageUrl: user.imageUrl
    }));
    this.view && this.view.showUsers(displayableUsers);
  }

  private handleError(error: Error): void {
    console.log(error);
  }
}

export default UsersListPresenter;