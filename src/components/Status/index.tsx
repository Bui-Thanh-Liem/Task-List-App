//
import { useState, useRef } from "react";

//
import styles from "./Status.module.scss";

//
type propTypes = {
    listdata: string[];
    onClick: (value: string) => void;
};

//
const Status = (props: propTypes) => {
    const { listdata, onClick } = props;

    //
    const [val, setVal] = useState<string>(listdata[0]);
    const currentIndex = useRef<number>(0);

    //
    const btnhandleClick = ():void => {
        if(currentIndex.current < listdata.length - 1) {
            currentIndex.current++;
        } else if(currentIndex.current === listdata.length - 1) {
            currentIndex.current = 0;
        }
        setVal(listdata[currentIndex.current]);
    }
    
    return (
        <div    
            className={styles["status-container"]}
            onClick={() => onClick(listdata[currentIndex.current])}
        >
            <button
                onClick={btnhandleClick}
                className={styles["status"]}
            >
                <span>{val}</span>
            </button>
        </div>
    );
};

export default Status;
