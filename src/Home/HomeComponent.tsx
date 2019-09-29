import React from "react";
import HomePresenter from "./HomePresenter";
import HomeMvpView from "./HomeMvpView";

export default class HomeComponent extends React.Component<HomeProps, HomeState> implements HomeMvpView {

    constructor(props: HomeProps) {
        super(props);
        this.state = {
            message: ""
        };
    }

    componentDidMount() {
        this.props.presenter.attachView(this);
    }

    componentWillUnmount() {
        this.props.presenter.detachView()
    }

    // HomeView

    showMessage(msg: string) {
        this.setState({
            message: msg
        });
    }

    showAction(action: string) {
    }

    // Render

    render() {        
        return (
            <p>{this.state.message}</p>
        );
    }
}

// State

interface HomeState {
    message: string;
}

// Props

interface HomeProps {
    presenter: HomePresenter;
}