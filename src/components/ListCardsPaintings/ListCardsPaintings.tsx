
import styles from './ListCardsPaintings.module.scss'
import useFetchAuthors from "@/src/api/useFetchAuthors";
import useFetchLocations from "@/src/api/useFetchLocations";
import CardPainting from "@/src/components/ListCardsPaintings/CardPainting/CardPainting";

const ListCardsPaintings = ({paintings, authors,locations}) => {
    console.log("painting " + paintings)

    return (
        <ul className={styles.listCards}>
            {paintings?.map(painting => {
                console.log("painting " + painting)
                const author = authors?.find(author => author?.id === painting?.authorId)
                const location = locations?.find(location => location?.id === painting?.locationId)
                return (
                    <CardPainting
                        {...painting}
                        author={author}
                        location={location}
                    />
                )
            })}
        </ul>
    );
}

export default ListCardsPaintings;
