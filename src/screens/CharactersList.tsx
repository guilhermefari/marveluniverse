import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import server from "../server";
import { getMarvelAPIParameters } from "../util";
import { Character } from "../types/Characters";
import LoadingScreen from "../components/LoadingScreen";
import FailedScreen from "../components/FailedScreen";
import Spacer from "../components/Spacer";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const RESULTS_PER_PAGE = 20;

export default () => {
  const [total, setTotal] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(0);

  const numberOfPages = Math.ceil(total / RESULTS_PER_PAGE);
  const offset = currentPage * RESULTS_PER_PAGE;

  const queryClient = useQueryClient();
  const queryKey = "allCharacters";
  const { ts, apikey, hash } = getMarvelAPIParameters();
  const url = `/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&offset=${offset}`;
  const config = {
    method: "get",
    url,
  };

  const { data, isLoading, isError } = useQuery<{
    data: { results: Character[]; total: number };
  }>({
    queryKey,
    queryFn: () => server.request(config).then((response) => response.data),
    retry: 0,
  });

  const characters = data?.data?.results;

  useEffect(() => {
    if (data?.data?.total) setTotal(data.data.total);
  }, [data?.data?.total]);

  useEffect(() => {
    queryClient.invalidateQueries("allCharacters");
  }, [offset]);

  if (isLoading) return <LoadingScreen />;

  if (isError) return <FailedScreen />;

  return (
    <div style={styles.content}>
      <h2 style={styles.title}>Characters</h2>
      <Spacer size={16} />
      <Pagination
        numberOfPages={numberOfPages}
        selectedIndex={currentPage}
        onSelectItem={(index) => setCurrentPage(index)}
      />
      <Spacer size={32} />
      {characters &&
        characters.map((character) => {
          let comics = "";
          (character?.comics?.items || []).forEach(
            (element) => (comics += element.name + "")
          );

          let stories = "";
          (character?.stories?.items || []).forEach(
            (element) => (stories += element.name + "; ")
          );

          let events = "";
          (character?.events?.items || []).forEach(
            (element) => (events += element.name + "; ")
          );

          let series = "";
          (character?.series?.items || []).forEach(
            (element) => (series += element.name + "; ")
          );

          return (
            <>
              <Card
                title={character.name}
                items={{
                  Description: character.description,
                  Comics: comics,
                  Stories: stories,
                  Events: events,
                  Series: series,
                }}
              />
              <Spacer size={16} />
            </>
          );
        })}
    </div>
  );
};

const styles = {
  content: {
    padding: 16,
    flex: 1,
  },
  title: {
    alignSelf: "center",
  },
};
