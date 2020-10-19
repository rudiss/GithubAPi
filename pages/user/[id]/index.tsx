import React from "react";
import { useRouter } from "next/router";
import dynamic from 'next/dynamic';
import { Container } from './styles';
import { getUser, getUserRepos } from "../../../services/githubApi";

const UserProfile = dynamic(() => import("../../../components/UserProfile"), {
  ssr: false,
});

const User: React.FC = () => {
  const router = useRouter();
  const [userProfile, setUserProfile] = React.useState();

  const { id } = router.query;
  React.useEffect(() => {
    const fetchUser = async () => {
      const user = await (await getUser(id)).json();
      const userRepos = await (await getUserRepos(id)).json();
      console.log(user);
      console.log(userRepos);
      setUserProfile(user);
    };
    fetchUser();
  }, [id]);

  return (
    <Container>
      <UserProfile data={userProfile} />
    </Container>
  );
};

export default User;
