//
import { useState, ChangeEvent, useEffect, memo } from "react";
import { Row, Col } from "react-bootstrap";
import classNames from "classnames/bind";
import { useDispatch } from "react-redux";

//
import styles from "./Filters.module.scss";
import InputGroup from "../inputGroup/inputGroup";
import Status from "../Status";
import filterSlice from "./filterSlice";

//
const cx = classNames.bind(styles);

const Filters = memo(() => {
    const [nameTask, setNameTask] = useState<string>("");
    const [prioritys, setPriority] = useState<string[]>([
        "High",
        "Medium",
        "Low",
    ]);
    const [status, setStatus] = useState<string>("All");

    // Two way binding
    const [high, setHigh] = useState<boolean>(true);
    const [medium, setMedium] = useState<boolean>(true);
    const [low, setLow] = useState<boolean>(true);

    const dispatch = useDispatch();

    //
    const priorityHandlChange = (e: ChangeEvent<HTMLInputElement>) => {
        const priority = e.target.id;

        if (e.target.checked && !prioritys.includes(priority)) {
            setPriority((prev) => [...prev, e.target.id]);
        } else {
            setPriority((prev) => {
                const arr: string[] = [...prev];

                arr.splice(arr.indexOf(priority), 1);
                return arr;
            });
        }

        switch (priority) {
            case "Low":
                setLow(!low);
                break;
            case "Medium":
                setMedium(!medium);
                break;
            case "High":
                setHigh(!high);
        }
    };

    const statusHandleClick = (str: string) => {
        setStatus(str);
    };

    // Dispatch
    useEffect(() => {
        dispatch(filterSlice.actions.filterChange({ prioritys, nameTask, status }));
    }, [prioritys, nameTask, status, dispatch]);

    return (
        <Row className={styles["filters-container"]}>
            <Col>
                <InputGroup
                    label="Name task"
                    value={nameTask}
                    placeholder="enter name task..."
                    onChange={(val) => setNameTask(val)}
                />
            </Col>
            <Col className={cx("priority-container")}>
                <input
                    onChange={priorityHandlChange}
                    type="checkbox"
                    name=""
                    checked={high}
                    id="High"
                />
                <label htmlFor="High" className={cx("label", "high")}>
                    High
                </label>

                <input
                    onChange={priorityHandlChange}
                    type="checkbox"
                    name=""
                    checked={medium}
                    id="Medium"
                />
                <label htmlFor="Medium" className={cx("label", "medium")}>
                    Medium
                </label>

                <input
                    onChange={priorityHandlChange}
                    type="checkbox"
                    name=""
                    checked={low}
                    id="Low"
                />
                <label htmlFor="Low" className={cx("label", "low")}>
                    Low
                </label>
            </Col>
            <Col>
                <Status
                    listdata={["All", "Todo", "Progress", "Done"]}
                    onClick={statusHandleClick}
                />
            </Col>
        </Row>
    );
});

export default Filters;
