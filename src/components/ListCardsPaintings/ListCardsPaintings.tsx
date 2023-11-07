import styles from "./ListCardsPaintings.module.scss";
import { ResultAuthors } from "@/src/api/useFetchAuthors";
import { ResultLocations } from "@/src/api/useFetchLocations";
import CardPainting from "@/src/components/ListCardsPaintings/CardPainting/CardPainting";
import { FC } from "react";
import { ResultPaintings } from "@/src/api/useFetchPaintings";

type CardPaintingProps = {
  authors: ResultAuthors[] | undefined;
  locations: ResultLocations[] | undefined;
  paintings: ResultPaintings[] | undefined;
};

const ListCardsPaintings: FC<CardPaintingProps> = ({
  paintings,
  authors,
  locations,
}) => {
  let author: ResultAuthors | undefined;
  let location: ResultLocations | undefined;
  return (
    <ul className={styles.listCards}>
      {paintings?.map((painting) => {
        if (authors != undefined) {
          author = authors?.find((author) => author.id === painting?.authorId);
        }
        if (locations != undefined) {
          location = locations?.find(
            (location) => location.id === painting?.locationId,
          );
        }
        return (
          <CardPainting
            key={painting.id}
            {...painting}
            author={author}
            location={location}
          />
        );
      })}
    </ul>
  );
};

export default ListCardsPaintings;
