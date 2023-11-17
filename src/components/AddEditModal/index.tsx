//
import { CloseButton } from "react-bootstrap";
import { useState } from "react";

//
import styles from "./onHideModal.module.scss";
import ModalFc from "../Modal";
import InputGroup from "../inputGroup/inputGroup";
import Prioritys from "../PrioritysRadio";
import ButtonFc from "../Button";

//
type dataSubmitTypes = {
    nameTask: string;
    priority: string;
}

type propTypes = {
    showModal: boolean;
    handleCloseModal: () => void;
    
    title: string;
    titleBtn: string;
    btnCancel?: boolean;
  
    handleFormSubmit: (data: dataSubmitTypes) => void;
    prioprityVal?: string;
    nameTaskVal?: string;
}

const AddEditModal = (props: propTypes) => {
    const { title, 
            titleBtn, 
            btnCancel,
            handleFormSubmit, 
            nameTaskVal = "", 
            prioprityVal = "Medium", 
            showModal,
            handleCloseModal
        } = props;


    //
    const [nameTask, setNameTask] = useState<string>("");
    const [prio, setPriority] = useState<string>("Medium");

    //
    const resetFieldData = ():void => {
        setNameTask("");
        setPriority("High");
        handleCloseModal();
    };

    // Events handlers
    const handleIconCloseClick = ():void => {
        resetFieldData();
    }

    const handleBtnCloseClick = ():void => {
        resetFieldData();
    }
    
    const handleBtnPrimaryClick = () => {
        resetFieldData();
        handleFormSubmit({nameTask, priority: prio})
    }

    return (
            <ModalFc show={showModal}  handleOutClick={handleCloseModal}>
                <div className={styles["modal-header"]}>
                    <h2 className={styles["modal-header-title"]}>{title}</h2>
                    <p className={styles["modal-header-closeBtn"]}>
                        <CloseButton onClick={handleIconCloseClick} />   
                    </p>
                </div>
                <div className={styles["modal-content"]}>
                    <div className={styles.nameTask}>
                        <InputGroup
                            label="Name Task"
                            placeholder="Enter task name..."
                            value={nameTaskVal}
                            onChange={(val) => setNameTask(val)}
                        />
                    </div>
                    <div className={styles.priority}>
                        <label className={styles['priority-title']}>Priority</label>
                        <Prioritys 
                            priorityVal={prioprityVal}
                            outLine 
                            onClick={(value) => setPriority(value)} 
                        />
                    </div>
                </div>
                <div className={styles["modal-footer"]}>
                    {btnCancel && <ButtonFc 
                        title="Cancel"
                        outLine
                        onClick={handleBtnCloseClick}
                    />}
                    <ButtonFc 
                        title={titleBtn}
                        disabled={nameTask.trim() !== "" ? false : true}
                        onClick={handleBtnPrimaryClick}
                    />
                </div>
            </ModalFc>
    )
}

export default AddEditModal;