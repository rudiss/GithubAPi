import React from "react";
import ReactPlaceholder from "react-placeholder";
import { TextBlock, RoundShape } from "react-placeholder/lib/placeholders";
import { getUserList } from "../services/githubApi";
import UserList from "../components/UserList";
import "react-placeholder/lib/reactPlaceholder.css";
import Navigation from "../components/Navigation";

const Users: React.FC = () => {
  const [usersList, setUserList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const rows = [1, 2, 3, 4, 5];

  const fetchUsers = async (pagination?) => {
    const users = await (await getUserList(pagination)).json();
    setUserList(users);
    setIsLoading(false);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const placeholder = (
    <div
      style={{
        margin: "15px 16px",
      }}
    >
      <TextBlock
        color="#eee"
        rows={1}
        lineSpacing={35}
        style={{
          marginBottom: 42,
        }}
      />
      {rows.map((item) => (
        <div
          key={item}
          style={{
            padding: "15px 0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "15px",
              borderBottom: "0.5px solid #eee",
            }}
          >
            <RoundShape
              color="#eee"
              style={{
                maxWidth: 50,
                height: 50,
                marginRight: 22,
              }}
            />
            <TextBlock rows={1} color="#eee" />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <React.Fragment>
      <Navigation label="Lista de Usuários" to="/" />
      <ReactPlaceholder
        delay={2000}
        showLoadingAnimation
        ready={!isLoading}
        customPlaceholder={placeholder}
      >
        <UserList data={usersList} fetchUsers={fetchUsers} />
      </ReactPlaceholder>
    </React.Fragment>
  );
};

export default Users;
