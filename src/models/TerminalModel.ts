import { makeAutoObservable } from "mobx"

export class TerminalModel {
    public input: string = "";

    public lines: string[] = [
        "Text Adventure Engine",
        "(<3) Lucy Awrey",
        "",
    ];

    private commands: string[] = [];

    private commandIter: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    public resetIter() {
        this.commandIter = this.commands.length - 1;
    }

    public submit() {
        this.commands.push(this.input);
        this.pushLine("> " + this.input);
        this.setInput("");
        this.commandIter = this.commands.length - 1;
    }

    public history() {
        if (this.commandIter < 0)
            return;
        this.setInput(this.commands[this.commandIter]);
        this.commandIter--;
    }

    public setInput(input: string) {
        this.input = input;
    }

    public pushCommand(newline: string) {
        this.commands.push(newline);
        this.resetIter();
    }

    public pushLine(newline: string) {
        this.lines.push(newline);
    }
}
