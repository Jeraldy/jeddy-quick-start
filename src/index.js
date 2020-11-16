import { Jeddy, StatefulWidget } from "jeddy";
import Div from "jeddy/dom/Div";
import Center from "jeddy/layouts/Center";
import Button from "jeddy/dom/Button";
import Br from "jeddy/dom/Br";
import './index.css';

class Main extends StatefulWidget {
    constructor() {
        super()
        this.state = { counter: 0 }
    }

    handleIncrement() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    handleDecrement() {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return Center({
            child: Div({
                children: [
                    Div({
                        children: ['Counter', Br(), `${this.state.counter}`,],
                        style: {
                            textAlign: 'center',
                            fontSize: '6rem',
                            fontWeight: 'bold'
                        }
                    }),
                    Div({
                        children: [
                            Button({
                                class: 'btn',
                                children: ["Increment"],
                                onClick: () => this.handleIncrement()
                            }),
                            Button({
                                class: 'btn',
                                children: ["Decrement"],
                                onClick: () => this.handleDecrement()
                            }),
                        ]
                    })
                ]
            })
        })
    }
}

Jeddy.Init({ app: new Main() });