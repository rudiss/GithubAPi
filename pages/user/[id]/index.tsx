import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import ReactPlaceholder from "react-placeholder";
import {
  TextBlock,
  RectShape,
  RoundShape,
  TextRow,
} from "react-placeholder/lib/placeholders";
import { Container } from "./styles";
import { getUser } from "../../../services/githubApi";
import UserAbout from "../../../components/AboutUser";
import Navigation from "../../../components/Navigation";

const UserProfile = dynamic(() => import("../../../components/UserProfile"), {
  ssr: false,
});

const User: React.FC = () => {
  const router = useRouter();
  const [userProfile, setUserProfile] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const { id } = router.query;

  const fetchUser = React.useCallback(async () => {
    const user = await (await getUser(id)).json();
    setUserProfile(user);
    setIsLoading(false);
  }, [id]);

  React.useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const placeholder = (
    <div className="my-awesome-placeholder">
      <RectShape color="#E0E0E0" style={{ width: "100%", height: 145 }} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 40,
          alignItems: "center",
          transform: "translateY(-130px)",
        }}
      >
        <RoundShape color="#E0E0E0" style={{ width: 120, height: 120 }} />
        <TextRow color="#E0E0E0" style={{ width: 138, height: 37 }} />
        <TextRow color="#E0E0E0" style={{ width: 77, height: 22 }} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: "translateY(-130px)",
        }}
      >
        <RectShape color="#E0E0E0" style={{ width: 100, height: 50 }} />
        <RectShape color="#E0E0E0" style={{ width: 100, height: 50 }} />
        <RectShape color="#E0E0E0" style={{ width: 100, height: 50 }} />
      </div>
      <TextBlock color="#E0E0E0" rows={4} />
    </div>
  );
  return (
    <Container>
      <Navigation label="Perfil" to="/users" />
      <ReactPlaceholder
        delay={2000}
        showLoadingAnimation
        ready={!isLoading}
        customPlaceholder={placeholder}
      >
        <UserProfile data={userProfile} />
        <UserAbout about={userProfile} />
      </ReactPlaceholder>
    </Container>
  );
};

export default User;
