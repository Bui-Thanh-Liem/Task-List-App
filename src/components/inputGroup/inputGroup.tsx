import {Form} from "react-bootstrap";
import {useState, useEffect} from "react";

//
import styles from "./index.module.scss";

type propTypes = {
    label: string;
    placeholder: string;
    onChange: (str: string) => void;
    value?: string;
}

const InputGroup = (props:propTypes) => {
    const {label, placeholder, onChange, value = ""} = props;

    const [val, setVal] = useState<string>(value)
    useEffect(() => {
        onChange(val)
    },[val, onChange])
    
    return (
        <Form.Group className={styles["inputGroup-container"]}>
            <Form.Label className={styles["inputGroup-label"]}>{label}</Form.Label>
            <Form.Control 
                type="text" 
                value={val}
                className={styles["inputGroup-input"]}
                placeholder={placeholder} 
                onChange={(e) => setVal(e.target.value)}
            />
        </Form.Group>
    )
}

export default InputGroup;