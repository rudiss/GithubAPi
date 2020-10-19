import React from 'react';
import Link from "next/link";
import { Container, Avatar, UserName } from './styles';

const UserRow: React.FC = ({ photo, username }) => (
  <Container>
    <Avatar src={photo} />
    <Link href={`/user/${username}`}>
      <UserName>{username}</UserName>
    </Link>
  </Container>
);

export default UserRow;
