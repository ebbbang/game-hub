import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App.tsx";
import useGenre from "../hooks/useGenre.ts";
import usePlatform from "../hooks/usePlatform.ts";

type Props = {
  gameQuery: GameQuery;
};

export const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);

  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};
