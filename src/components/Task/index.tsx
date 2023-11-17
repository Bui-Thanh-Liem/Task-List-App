//
import classNames from "classnames/bind";
import { Container, Row, Col } from "react-bootstrap";
import { PencilSquare, Trash } from "react-bootstrap-icons";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

//
import styles from "./Task.module.scss";
import ProgressBar from "../ProgressBar";
import { useMemo } from "react";

//
const cx = classNames.bind(styles);

//
type propTypes = {
    nameTask: string;
    priority: string;
    status: string;
    onClickEdit: () => void;
    onClickDelete: () => void;
    handleStatusClick: () => void;
};

const Task = (props: propTypes) => {
    const {
        nameTask = "Clean The House",
        priority = "High",
        status = "Todo",
        onClickEdit,
        onClickDelete,
        handleStatusClick
    } = props;

    const perCent = useMemo<number>(() => {
        switch (status) {
            case "Progress":
                return 50;
            case "Done":
                return 100;
            default:
                return 0;
        }

    }, [status])


    return (
        <Container className={styles["listTaskItem-comtainer"]}>
            <Row className={styles["listTaskItem-row"]}>
                <Col lg={4}>
                    <div className={cx("nameTitle")}>Task</div>
                    <div className={cx("title")}>
                        <Tippy 
                            placement="left-start"
                            animation="scale"
                            content={nameTask}
                        >
                            <span>
                                {nameTask}
                            </span>
                        </Tippy>
                    </div>
                </Col>
                <Col>
                    <div className={cx("nameTitle")}>Priority</div>
                    <div
                        className={cx("priority", {
                            [priority]: priority,
                        })}
                    >
                        {priority}
                    </div>
                </Col>
                <Col className={cx("status-container")}>
                    <div className={cx("status")} onClick={handleStatusClick}>
                        <span>{status}</span>
                    </div>
                </Col>
                <Col className={cx("progress-container")}>
                    <ProgressBar percent={perCent} />
                </Col>
                <Col className={cx("container-btn")}>
                    <span onClick={onClickEdit} className={cx("edit-btn")}>
                        <PencilSquare />
                    </span>
                    <span onClick={onClickDelete} className={cx("delete-btn")}>
                        <Trash />
                    </span>
                </Col>
            </Row>
        </Container>
    );
};

export default Task;
