import React from "react";
import Link from "next/link";
import { Container, Avatar, UserName } from "./styles";

type UserRowProps = {
  photo: string;
  username: string;
};
const UserRow: React.FC<UserRowProps> = ({ photo, username }) => (
  <Container>
    <Avatar src={photo} />
    <Link href={`/user/${username}`}>
      <UserName>{username}</UserName>
    </Link>
  </Container>
);

export default UserRow;
