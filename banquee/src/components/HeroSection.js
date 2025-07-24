import Image from "next/image";
import styles from "./HeroSection.module.scss";
import { FaCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import OpenAccountButton from "./common/OpenAccountButton";

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.gridContainer}>
        <div className={styles.title}>
          Banking <br />
          starts here.
        </div>
        <div className={styles.subTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </div>
        <div className={styles.listItems}>
          <div className={styles.items}>
            <div className={styles.girdItems}>
              <div>
                <span className={styles.icon}>
                  <FaCircle color="#5bb5a2" />
                </span>
                <span>Instant Transfer</span>
              </div>
              <div>
                <span className={styles.icon}>
                  <FaCircle color="#5bb5a2" />
                </span>
                <span>Saving accounts</span>
              </div>
            </div>
            <div className={styles.girdItems}>
              <div>
                <span className={styles.icon}>
                  <FaCircle color="#5bb5a2" />
                </span>
                <span>Payments worldwide</span>
              </div>
              <div>
                <span className={styles.icon}>
                  <FaCircle color="#5bb5a2" />
                </span>
                <span>100% mobile banking</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <OpenAccountButton />
          <button className={styles.textButton}>
            Compare Cards
            <span className={styles.iconButton}>
              <FaArrowRight color="#5bb5a2" />
            </span>
          </button>
        </div>
      </div>
      <div className={styles.cards}>
        <Image
          src="/cards.png"
          width={400}
          height={577}
          alt=""
          style={{ maxWidth: "100%", height: "auto" }}
          priority
        ></Image>
      </div>
    </div>
  );
};
export default HeroSection;
