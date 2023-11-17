//
import { useState, ChangeEvent, useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./PrioritysRadio.module.scss";

//
const cx = classNames.bind(styles);

//
type propTypes = {
    priorityVal: string;
    onClick: (value: string) => void;
    outLine?: boolean;
};

const PrioritysRadio = (props: propTypes) => {
    const { outLine, onClick, priorityVal = "Medium"} = props;
    const [priority, setPriority] = useState<string>(priorityVal);


    useEffect(() => {
        onClick(priority);
    },[priority, onClick])

    
    // Event handlers
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {        
        const val:string = e.target.id.slice(0, e.target.id.length -1);
        setPriority(val)
        
    }


    return (
        <div className={cx("prioritysRadio-container")}>
            <div className={cx("prioritys", { outLine })}>
                <div className="priority">
                    <input
                        onChange={handleInputChange}
                        type="radio"
                        name="radio-priority"
                        id="High/"
                        checked={priority === "High"}
                    />
                    <label htmlFor="High/" className={cx("label", "high")}>
                        High
                    </label>
                </div>
                <div className="priority">
                    <input
                        onChange={handleInputChange}
                        type="radio"
                        name="radio-priority"
                        id="Medium/"
                        checked={priority === "Medium"}
                    />
                    <label htmlFor="Medium/" className={cx("label", "medium")}>
                        Medium
                    </label>
                </div>
                <div className="priority">
                    <input
                        onChange={handleInputChange}
                        type="radio"
                        name="radio-priority"
                        id="Low/"
                        checked={priority === "Low"}
                    />
                    <label htmlFor="Low/" className={cx("label", "low")}>
                        Low
                    </label>
                </div>
            </div>
        </div>
    );
};

export default PrioritysRadio;
