import styles from "./Input.module.css"
import type { CSSProperties } from "react";

interface InputProps {
    type: "text" | "number" | "password" | "date" | "email";
    style?: CSSProperties;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    labelName: string;
}

export default function Input({type, style, placeholder, onChange, value, labelName}: InputProps) {   
    return (
        <>
            <label className={styles.labelName}>{labelName}</label>
            <input type={type} style={style} className={styles.inputStyle} placeholder={placeholder} onChange={onChange} value={value}></input>
        </>
    );
}