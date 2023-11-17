//
import { FC } from "react";
import classNames from "classnames/bind";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//
import styles from "./ListTask.module.scss";
import Task from "../Task";
import AddEditModal from "../AddEditModal";
import ModalFc from "../Modal";
import ButtonFc from "../Button";
import { taskListRemaining } from "../../redux/selectors";
import taskListSlice from "./taskListSlice";

//
const cx = classNames.bind(styles);

const ListTask: FC = () => {
    const [showEdit, setShowEdit] = useState<boolean>(false);
    const [showDelete, setShowDelete] = useState<boolean>(false);

    const [id, setId] = useState<number>(0);
    const [nameEdit, setNameEdit] = useState<string>("");
    const [prioEdit, setPrioEdit] = useState<string>("");

    const dispatch = useDispatch();
    const taskList = useSelector(taskListRemaining);

    const handleEditClick = (id: number): void => {
        setShowEdit(true);
        setId(id);

        for (const task of taskList) {
            if (task.id === id) {
                setNameEdit(task.nameTask);
                setPrioEdit(task.priority);
            }
        }
    };

    const handleDeleteClick = (id: number): void => {
        setShowDelete(true);
        setId(id);
    };

    // delete
    const handleDeleteFormClick = (): void => {
        setShowDelete(false);

        dispatch(taskListSlice.actions.deleteTask(id));
    };

    // edit
    const handleBtnAddFormSubmit = (val: {
        nameTask: string;
        priority: string;
    }): void => {
        // Dispatch
        dispatch(taskListSlice.actions.editTask({ ...val, id }));
    };

    const handleStatusClick = (id: number) => {
        console.log(id);
        dispatch(taskListSlice.actions.statusTaskTask(id));
    };

    return (
        <div className={cx("listTask-container")}>
            {taskList.length > 0 ? (
                taskList.map((task) => (
                    <Task
                        key={task.id}
                        nameTask={task.nameTask}
                        priority={task.priority}
                        status={task.status}
                        onClickEdit={() => handleEditClick(task.id as number)}
                        onClickDelete={() =>
                            handleDeleteClick(task.id as number)
                        }
                        handleStatusClick={() =>
                            handleStatusClick(task.id as number)
                        }
                    />
                ))
            ) : (
                <h1 className={cx("empty")}>Empty Task</h1>
            )}

            {/*  */}
            <AddEditModal
                showModal={showEdit}
                handleCloseModal={() => setShowEdit(false)}
                title="Edit Task"
                titleBtn="Edit"
                handleFormSubmit={handleBtnAddFormSubmit}
                btnCancel
                nameTaskVal={nameEdit}
                prioprityVal={prioEdit}
            />

            {/*  */}
            <ModalFc
                show={showDelete}
                handleOutClick={() => setShowDelete(false)}
            >
                <h1 className={styles["form-delete-title"]}>
                    Are you sure you want to delete this task?
                </h1>
                <div className={styles["form-delete-container-btn"]}>
                    <ButtonFc title="Delete" onClick={handleDeleteFormClick} />
                    <ButtonFc
                        title="Cancel"
                        outLine
                        onClick={() => setShowDelete(false)}
                    />
                </div>
            </ModalFc>
        </div>
    );
};

export default ListTask;
