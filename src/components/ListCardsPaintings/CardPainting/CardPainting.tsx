import styles from './CardPainting.module.scss'
import Image from 'next/image'


interface CardPaintingProps {
    created: string;
    imageUrl: string;
    name: string;
    author: {id:number,name:string} | undefined;
    location: {id:number,location:string} | undefined;
}


const CardPainting = ({created,imageUrl,name,author,location}:CardPaintingProps) => {

    return(
        <li className={styles.mainContainerWithPainting}>
         <div className={styles.painting}>
                <Image
                    src={`https://test-front.framework.team${imageUrl}`}
                    alt={name}
                    fill
                />
                <div className={styles.paintingDescription}>
                  <span className={styles.descName}>{name} </span>
                  <div className={styles.hiddenDescription}>
                    <span className={styles.descAuthor}><b>author: </b>{author?.name} </span>
                    <span className={styles.descCreated}><b>created: </b>{created} </span>
                    <span className={styles.descLocation}><b> location: </b>{location?.location} </span>
                  </div>
                </div>
          </div>
      </li>)}

export default CardPainting