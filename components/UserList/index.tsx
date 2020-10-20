/* eslint-disable camelcase */
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import _ from "lodash";
import UserRow from "../UserRow";
import { Header, Container } from "./styles";
import { getUser } from "../../services/githubApi";

type UserListProps = {
  data: [];
  fetchUsers: (arg?) => void;
};

const UserList: React.FC<UserListProps> = ({ data, fetchUsers }) => {
  const [uList, setUList] = React.useState([]);
  const [inputText, setInputText] = React.useState("");
  const [userNotFound, setUserNotFound] = React.useState(false);
  const [loadingSearch, setLoadingSearch] = React.useState(true);
  const [searchData, setSearchData] = React.useState(null);
  const [state, setState] = React.useState({ hasMore: true });
  const inputRef = React.useRef();

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSearch = React.useCallback(async () => {
    setLoadingSearch(true);

    try {
      const result = await (await getUser(inputText)).json();

      if (result.message === "Not Found") {
        setLoadingSearch(false);
        setUserNotFound(true);
        return;
      }
      setSearchData(result);
      setUserNotFound(false);
      setLoadingSearch(false);
    } catch (error) {
      console.log(error);
    }
  }, [inputText]);

  const delayedQuery = React.useCallback(_.debounce(handleSearch, 500), [
    inputText,
  ]);

  React.useEffect(() => {
    if (localStorage.getItem("search")) {
      inputRef.current.value = localStorage.getItem("search");
      setInputText(localStorage.getItem("search"));
    }

    if (inputText.length > 0) {
      delayedQuery();
    }

    return delayedQuery.cancel, localStorage.removeItem("search");
  }, [inputText, delayedQuery]);

  const fetchMoreData = React.useCallback(async () => {
    if (uList.length >= 100) {
      setState({ hasMore: false });
      return;
    }
    await fetchUsers(data.length + 10);
    setUList([uList, ...data]);
  }, [data, fetchUsers, uList]);

  React.useEffect(() => {
    setUList(data);
  }, [data]);

  return (
    <Container>
      <Header>
        <h2>Search Results</h2>
        <input
          ref={inputRef}
          placeholder="Pesquisar usuario"
          name="search"
          onChange={onChange}
        />
      </Header>
      <ul>
        {inputText.length > 0 && loadingSearch && !userNotFound && (
          <p style={{ textAlign: "center", padding: 40 }}>
            <b>Loading...</b>
          </p>
        )}
        {inputText.length > 0 && !loadingSearch && !userNotFound && (
          <UserRow username={searchData.login} photo={searchData.avatar_url} />
        )}
        {inputText.length > 0 && !loadingSearch && userNotFound && (
          <p style={{ textAlign: "center", padding: 40 }}>
            <b>Usuário não encontrado</b>
          </p>
        )}
        {inputText.length === 0 && (
          <InfiniteScroll
            height={400}
            dataLength={uList.length}
            next={() => fetchMoreData()}
            hasMore={state.hasMore}
            loader={<h4>Carregando mais usuarios...</h4>}
            endMessage={
              <p style={{ padding: 20, textAlign: "center" }}>
                <b>Yay! Você viu tudo..</b>
              </p>
            }
          >
            {uList.map(({ login, avatar_url }, i) => (
              <UserRow key={login + i} username={login} photo={avatar_url} />
            ))}
          </InfiniteScroll>
        )}
      </ul>
    </Container>
  );
};

export default UserList;
