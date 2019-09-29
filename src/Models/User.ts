interface User {
  readonly identifier: string,
  readonly name: string,
  readonly surname: string,
  readonly age: number,
  readonly imageUrl: string
}

const UserFactory: () => ((identifier: string, name: string, surname: string, age: number, imageUrl: string) => User) = () => {
  return (identifier: string, name: string, surname: string, age: number, imageUrl: string) => {
    return {
      identifier: identifier,
      name: name,
      surname: surname,
      age: age,
      imageUrl: imageUrl
    }
  }
}

export default User;
export { UserFactory };