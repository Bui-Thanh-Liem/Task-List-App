//
import { Row, Col } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

//
import styles from "./Header.module.scss";
import ButtonFc from "../Button";
import AddEditModal from "../AddEditModal";
import taskListSlice from "../ListTask/taskListSlice";

const Header = () => {
    const [showmodalAdd, setShowModalAdd] = useState<boolean>(false);

    const dispatch = useDispatch();

    const handleFormSubmit = (data: { nameTask: string; priority: string }) => {

        // Dispatch
        dispatch(taskListSlice.actions.addTask({...data, status: "Todo", id: uuid()}))
    };

    return (
        <>
            <Row className={styles["header-container"]}>
                <Col className={styles["header-title"]}>
                    <h1>Task List</h1>
                </Col>
                <Col className={styles["header-btn"]}>
                    <ButtonFc
                        icon={<Plus />}
                        title="Add task"
                        onClick={() => setShowModalAdd(true)}
                    />
                </Col>
            </Row>

            {/* Modal Add Task */}
            <AddEditModal
                showModal={showmodalAdd}
                handleCloseModal={() => setShowModalAdd(false)}
                title="Add Task"
                titleBtn="Add"
                handleFormSubmit={handleFormSubmit}
                btnCancel
            />
        </>
    );
};

export default Header;
