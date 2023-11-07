import { FC } from "react";
import { useRouter } from "next/router";
import { ResultAuthors } from "@/src/api/useFetchAuthors";
import { ResultLocations } from "@/src/api/useFetchLocations";
import { ResultPaintings } from "@/src/api/useFetchPaintings";
import styles from "./PaintingsFilters.module.scss";

type PaintingsFiltersTypes = {
  authors: ResultAuthors[] | undefined;
  locations: ResultLocations[] | undefined;
  paintings: ResultPaintings[] | undefined;
};

const PaintingsFilters: FC<PaintingsFiltersTypes> = ({
  authors,
  locations,
  paintings,
}) => {
  const router = useRouter();

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    router.push({ query: { ...router.query, [name]: value } });
  };

  return (
    <form placeholder={"name"} action="" className={styles.paintingsFilters}>
      <input type="text" className={styles.paintingsFiltersInput} />
      <select
        className={styles.paintingsFiltersSelect}
        name="authorId"
        id="author"
        onChange={handleInputChange}
      >
        <option value={""}>All authors</option>
        {authors?.map((author) => (
          <option value={author?.id} key={author?.id}>
            {author?.name}
          </option>
        ))}
      </select>
      <select
        className={styles.paintingsFiltersSelect}
        name="locationId"
        id="location"
        onChange={handleInputChange}
      >
        <option value={""}>All locations</option>
        {locations?.map((location) => (
          <option value={location?.id} key={location?.id}>
            {location?.location}
          </option>
        ))}
      </select>
      <select
        className={styles.paintingsFiltersSelect}
        name="created"
        id="created"
        onChange={handleInputChange}
      >
        <option value={""}>All years</option>
        {paintings?.map((painting) => (
          <option value={painting?.created} key={painting?.id}>
            {painting.created}
          </option>
        ))}
      </select>
      <div></div>
    </form>
  );
};

export default PaintingsFilters;
