import DisplayableUser from "./DisplayableUser";

interface UsersListViewContract {
  showUsers(users: DisplayableUser[]): void;
  showLoading(): void;
  hideLoading(): void;
}

export default UsersListViewContract;