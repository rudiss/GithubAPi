/* eslint-disable camelcase */
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { format } from "date-fns";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";
import { textTruncate } from "../util";
import HomeIcon from "../../images/HomeIcon";
import WebIcon from "../../images/WebIcon";
import { getUserRepos } from "../../services/githubApi";

type UserAboutProps = {
  about: {
    bio: string;
    location?: string;
    blog: string;
    html_url: string;
  };
};
const UserAbout: React.FC<UserAboutProps> = ({
  about: { bio, location, blog, html_url },
}) => {
  const router = useRouter();
  const { id } = router.query;

  const [reposList, setReposList] = React.useState([]);
  const [state, setState] = React.useState({ hasMore: true });

  const fetchProjects = React.useCallback(
    async (page?) => {
      const userRepos = await (await getUserRepos(id, page)).json();

      if (userRepos.length > 1) {
        setReposList(userRepos);
      }
    },
    [id]
  );

  const fetchMoreData = React.useCallback(async () => {
    if (reposList.length >= 10) {
      setState({ hasMore: false });
    }

    const userRepos = await (
      await getUserRepos(id, reposList.length + 8)
    ).json();
    setReposList([reposList, ...userRepos]);
  }, [reposList, id]);

  React.useEffect(() => {
    fetchProjects();
  }, []);

  const handleLanguageColor = (language: string) => {
    switch (language) {
      case "PHP":
        return "#BD0000";
      case "Ruby":
        return "#BD0000";
      case "Dart":
        return "#31BD00";
      case "Java":
        return "#FAFF0C";
      case "JavaScript":
        return "#B9BD00";
      case "C++":
        return "#00B2BD";
      default:
        return "#EEEEEE";
    }
  };

  return (
    <Tabs className="tabs">
      <TabList className="tabs__list">
        <Tab className="tabs__tab">Sobre</Tab>
        <Tab className="tabs__tab">Projetos</Tab>
      </TabList>

      <TabPanel className="tabs__panel">
        <h2>Bio</h2>
        <p>
          {bio ||
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet
          tincidunt erat ut dapibus. Sed vitae ante et dolor euismod fermentum
          eu vitae nunc. Sed eget massa ut eros condimentum tincidunt id quis
          enim. Suspendisse ipsum lectus, ullamcorper et fermentum id, sodales
          id elit. Nam ligula purus, volutpat at pellentesque vel, congue non
          purus. Phasellus quis ex dapibus, elementum ipsum ut, scelerisque
          elit. Duis eget metus eu enim hendrerit euismod. Quisque tortor odio,
          molestie ut hendrerit non, faucibus quis tortor.`}
        </p>
        <div className="tabs__panel__location">
          {location && (
            <span>
              <HomeIcon /> {location}
            </span>
          )}
          <a href={blog || html_url}>
            <WebIcon />
            {blog || html_url}
          </a>
        </div>
      </TabPanel>
      <TabPanel className="tabs__panel">
        <InfiniteScroll
          height={400}
          dataLength={reposList.length}
          next={() => fetchMoreData()}
          hasMore={state.hasMore}
          loader={<h4>Carregando mais projetos...</h4>}
          endMessage={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <p style={{ padding: 20, textAlign: "center" }}>
              <b>Yay! Você viu tudo..</b>
            </p>
          }
        >
          {reposList.map(({ name, description, language, updated_at }, i) => (
            <div key={name + i} className="tabs__panel__projects">
              <h2>{name}</h2>
              <p>{textTruncate(description)}</p>
              <div className="tabs__panel__projects__info">
                <div className="language">
                  <div
                    className="language__color"
                    style={{ backgroundColor: handleLanguageColor(language) }}
                  />
                  <span>{language || "Não espefificado"}</span>
                </div>
                <span className="language__updateAt">
                  {updated_at`Atualizado em ${format(
                    new Date(updated_at),
                    "dd/MM/yyyy"
                  )}`}
                </span>
              </div>
            </div>
          ))}
        </InfiniteScroll>
      </TabPanel>
    </Tabs>
  );
};

export default UserAbout;
