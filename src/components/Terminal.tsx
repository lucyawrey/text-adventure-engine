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
            cursorEnd();
        }
    }

    function cursorEnd() {
        if (inputRef.current) {
            inputRef.current.selectionStart = model.input.length;
            inputRef.current.selectionEnd = model.input.length;
        }
    }

    function keyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        switch (event.key) {
            case "Enter":
                model.submit();
                break;
            case "ArrowUp":
                model.history();
                cursorEnd();
                break;
            default:
                return;
        }
    }

    return (
        <div className={styles.terminal} onClick={focus}>
            {items}

            <span className={styles.line}>
                &gt;&nbsp;
                <input ref={inputRef} className={styles.input} type="text" value={model.input} onChange={e => model.setInput(e.target.value)} onKeyDown={keyDown}></input>
            </span>
        </div>
    );
});

export default Terminal;
