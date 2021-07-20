import styles from "../styles/Terminal.module.scss";
import { observer } from "mobx-react-lite";
import { TerminalModel } from "../models/TerminalModel";
import { useRef } from "react";

interface TerminalProps {
    model: TerminalModel;
}

const Terminal = observer(({ model }: TerminalProps) => {
    const inputRef = useRef<any>(null);

    const items: JSX.Element[] = [];

    for (let line of model.lines) {
        items.push(<><span className={styles.line}>{line}</span><br /></>);
    }

    function focus() {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    function enter(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            model.submit();
        }
    }

    return (
        <div className={styles.terminal} onClick={focus}>
            {items}

            <span className={styles.line}>
                &gt;&nbsp;
                <input ref={inputRef} className={styles.input} type="text" value={model.input} onChange={e => model.setInput(e.target.value)} onKeyDown={enter}></input>
            </span>
        </div>
    );
});

export default Terminal;
