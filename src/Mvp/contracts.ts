export default interface Presenter<View> {
    view: View | null;
    attachView(v: View): void;
    detachView(): void;
}