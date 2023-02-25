export default interface Modal {
    show(): void;
    showWithData(data: object): void;
    hide(): void;
    onKeyEvent(e: any): void;
}
