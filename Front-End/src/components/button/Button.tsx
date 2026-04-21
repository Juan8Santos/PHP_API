import type { CSSProperties } from "react";
import styles from "./Button.module.css"

interface ButtonProps {
    type: "submit" | "reset" | "button";
    style?: CSSProperties;
    onClick?: () => void;
    textContent: string | React.ReactNode;
    isLoading: boolean;
}

export default function Button({type, style, textContent, onClick, isLoading}: ButtonProps) {
    

    return <button type={type} className={!isLoading ? styles.buttonStyle : styles.buttonStyleLoading} style={style} onClick={onClick}>{textContent}</button>
}