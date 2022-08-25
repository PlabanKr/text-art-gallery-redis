import { Heart } from "react-bootstrap-icons";
import styles from "../styles/Card.module.css";

const Card = () => {
    let book = `
     _______
    /      /,
   /      //
  /______//
 (______(/
             
    `;
    return (
        <div className={styles.cardBody}>
            <div className={styles.cardArt}>
                <pre>
                    {book}
                </pre>
            </div>
            <div className={styles.cardInfo}>
                <p>@PlabanKrMondal</p>
                <div className={styles.cardLike}>
                    <p className={styles.likeBtn}>
                        <Heart />
                    </p>
                    <p className={styles.likeCount}>
                        100
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;