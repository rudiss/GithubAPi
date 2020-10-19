import React from "react";
import UserRow from "../UserRow";

import { Container } from './styles';

const UserList: React.FC = ({ data }) => (
  <Container>
    <input placeholder="Pesquisar usuario" />
    <ul>
      {data.map(({ login, avatar_url }) => (
        <UserRow key={login} username={login} photo={avatar_url} />
      ))}
    </ul>
  </Container>
);

export default UserList;
