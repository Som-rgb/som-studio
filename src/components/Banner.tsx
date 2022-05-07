import { useState } from "react";

import styles from "./Banner.module.scss";
import Close from "../images/Close.svg";

const Banner = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div onClick={() => setShow((prev) => !prev)}>
        {show && (
          <div className={styles["banner-container"]}>
            Som made this site using React, Typescript, CSS and GitHub
            <img src={Close} />
          </div>
        )}
      </div>
    </>
  );
};

export default Banner;
