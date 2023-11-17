//


//
import styles from "./ProgressBar.module.scss";
import "../../styles/_variable.scss";

//
type propTypes = {
    percent: number
}

const ProgressBar = (props:propTypes) => {
    const { percent = 50 } = props;
    return (
        <div
            className={styles["circle-wrap"]}
            style={{
                background: `conic-gradient(#713FFF ${percent}%, #f4f1f1 0)`,
            }}
        >
            <div className={styles["circle"]}></div>
        </div>
    );
};

export default ProgressBar;
