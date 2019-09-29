import User, { UserFactory } from '../Models/User';
import Axios from 'axios';

interface UsersRepository {
  getUsers: () => Promise<User[]>
}

const UsersRepositoryFactory: (() => () => UsersRepository) = () => () => {
  return {
    getUsers: async () => {
      const factory = UserFactory();
      const response = await Axios.get('https://randomuser.me/api/?results=50');
      const users = response.data.results as any[];
      return users.map(user => factory(
        user.login.uuid.toString(),
        user.name.first.toString(), 
        user.name.last.toString(), 
        parseInt(user.dob.age), 
        user.picture.large.toString()
      ));
    }
  }
}

export default UsersRepository;
export { UsersRepositoryFactory };