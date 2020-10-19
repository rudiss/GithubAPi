import React from 'react';
import ReactPlaceholder from "react-placeholder";
import { getUserList } from "../services/githubApi";
import UserList from "../components/UserList";
import "react-placeholder/lib/reactPlaceholder.css";
import {
  TextBlock,
  MediaBlock,
  TextRow,
  RectShape,
  RoundShape,
} from "react-placeholder/lib/placeholders";

// import { Container } from './styles';

const Users: React.FC = () => {
  const [usersList, setUserList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const rows = [1, 2, 3, 4, 5];
  React.useEffect(() => {
    const fetchUsers = async () => {
      const users = await (await getUserList()).json();
      setUserList(users);
      setIsLoading(false);
    };
    fetchUsers();
  }, []);

  const awesomePlaceholder = (
    <div
      style={{
        margin: '15px 16px',
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
      {rows.map(() => (
        <div
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
      {/* {isLoading ? <div>loading</div> : <UserList data={usersList} />} */}
      <ReactPlaceholder
        delay={2000}
        type="media"
        rows={1}
        showLoadingAnimation
        ready={!isLoading}
        customPlaceholder={awesomePlaceholder}
      >
        <UserList data={usersList} />
      </ReactPlaceholder>
    </React.Fragment>
  );
};

export default Users;
