import { MouseEventHandler, ReactNode } from "react";
import { Button } from "react-bootstrap";
import classNames from "classnames/bind";
import "bootstrap/dist/css/bootstrap.min.css";

//
import styles from "./Button.module.scss";

//
const cx = classNames.bind(styles);

type prosTypes = {
    title: string;
    icon?: ReactNode;
    outLine?: boolean;
    disabled?: boolean;
    onClick: MouseEventHandler;
    small?: boolean;
};

const ButtonFc = (props: prosTypes) => {
    const { title, icon, outLine, disabled, small, onClick } = props;

    return (
        <Button
            className={cx("button", {
                small,
            })}
            disabled={disabled}
            variant={outLine ? "outline-primary" : "primary"}
            onClick={onClick}
        >
            {icon && <span className={cx("icon")}>{icon}</span>}

            <span className="title">{title}</span>
        </Button>
    );
};

export default ButtonFc;
