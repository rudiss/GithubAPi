/* eslint-disable camelcase */
import React from "react";

import {
  Container,
  UserContainer,
  Avatar,
  Name,
  UserName,
  FollowContainer,
  BackContainer,
  NameContainer,
} from "./styles";

import Folder from "../../images/FolderIcon";
import FollowIcon from "../../images/FollowIcon";
import FollowersIcon from "../../images/FollowersIcon";
import UsernameIcon from "../../images/UsernameIcon";

type UserProfileProps = {
  data: Record<string, unknown>;
};
const UserProfile: React.FC<UserProfileProps> = ({ data }) => {
  return (
    <Container>
      <BackContainer />
      <UserContainer>
        <Avatar src={data?.avatar_url} />
        <NameContainer>
          <Name>{data?.name}</Name>
          <UserName>
            <UsernameIcon /> {data?.login}
          </UserName>
        </NameContainer>
        <FollowContainer>
          <span>
            <div>
              <FollowIcon /> {data?.following}
            </div>
            seguindo
          </span>
          <span>
            <div>
              <Folder /> {data?.public_repos}
            </div>
            projetos
          </span>
          <span>
            <div>
              <FollowersIcon /> {data?.followers}
            </div>
            Seguidores
          </span>
        </FollowContainer>
      </UserContainer>
    </Container>
  );
};

export default React.memo(UserProfile);
