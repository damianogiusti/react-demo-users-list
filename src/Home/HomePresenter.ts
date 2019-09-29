import HomeMvpView from "./HomeMvpView";
import Presenter from "../Mvp/contracts";

export default class HomePresenter implements Presenter<HomeMvpView> {

    view: HomeMvpView | null = null;
    
    private counter = 0;
    private timerState = "started"
    private timeoutToken: NodeJS.Timeout | null = null;

    attachView(v: HomeMvpView): void {
        this.view = v;
        this.view.showMessage(this.nextValueMessage());
        this.view.showAction(this.getAction());        
        this.timeoutToken = this.setupTimer();
    }

    detachView(): void {
        this.view = null;
        this.timeoutToken && clearTimeout(this.timeoutToken);
    }

    handleAction() {
        if (this.timerState === "started") {
            this.timerState = "stopped";
            this.timeoutToken && clearInterval(this.timeoutToken);
        } else {
            this.timerState = "started";
            this.timeoutToken = this.setupTimer();
        }
        this.view && this.view.showAction(this.getAction());
    }

    // Private methods

    private nextValueMessage(): string {
        return "Current value is: " + ++this.counter;
    }

    private setupTimer(): NodeJS.Timeout {
        return setInterval(() => {
            this.view && this.view.showMessage(this.nextValueMessage())
        }, 1000);
    }

    private getAction(): string {
        if (this.timerState === "started") {
            return "Stop";
        } else {
            return "Start";
        }
    }
}