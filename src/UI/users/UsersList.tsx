import React from 'react';
import DisplayableUser from './DisplayableUser';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';

interface UsersListProps {
  readonly users: DisplayableUser[];
}

const UsersList = (props: UsersListProps) => {
  const items = props.users.map(user => (
    <ListItem key={user.identifier}>
      <ListItemAvatar>
        <Avatar src={user.imageUrl} />
      </ListItemAvatar>
      <ListItemText primary={user.displayName}></ListItemText>
    </ListItem>
  ));

  return (
    <List>{items}</List>
  );
}

export default UsersList;