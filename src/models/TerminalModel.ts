import { makeAutoObservable } from "mobx"

export class TerminalModel {
    public input: string = "";

    public lines: string[] = [
        "Text Adventure Engine",
        "(<3) Lucy Awrey",
        "",
    ];

    constructor() {
        makeAutoObservable(this);
    }

    public submit() {
        this.lines.push(this.input);
        this.setInput("");
    }

    public setInput(input: string) {
        this.input = input;
    }

    public push(newline: string) {
        this.lines.push(newline);
    }
}
