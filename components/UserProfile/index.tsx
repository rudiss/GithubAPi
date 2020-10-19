/* eslint-disable camelcase */
import React from 'react';

import {
  Container,
  UserContainer,
  Avatar,
  Name,
  UserName,
  FollowContainer,
} from "./styles";

import Folder from '../../images/FolderIcon';
import FollowIcon from '../../images/FollowIcon';
import FollowersIcon from '../../images/FollowersIcon';
import User from '../../pages/user/[id]';
import UsernameIcon from '../../images/UsernameIcon';

// <Icon src={userProfile?.avatar_url} />
//   <p>{userProfile?.name}</p>
//   <p>{userProfile?.login}</p>

const UserProfile: React.FC = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <UserContainer>
        <Avatar src={data?.avatar_url} />
        <Name>{data?.name}</Name>
        <UserName>
          <UsernameIcon /> {data?.login}
        </UserName>
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

export default UserProfile;
