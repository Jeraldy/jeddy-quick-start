import { Jeddy, StatefulWidget } from "jeddy";
import Center from "jeddy/layouts/Center";
import Button from "jeddy/dom/Button";

class App extends StatefulWidget {
  constructor() {
    super()
    this.state = { size: 100 }
    return this.connect()
  }

  render() {
    return Center({
      child: Button({
        children: [`Click:${this.state.size}px`],
        onclick: () => this.setState({ size: this.state.size + 50 }),
        style: {
          height: `${this.state.size}px`,
          width: `${this.state.size}px`,
          borderRadius: '100%',
          border: 'none',
          outlineColor: 'transparent',
          transition: 'height 0.3s, width 0.3s'
        },
      })
    })
  }
}

Jeddy.Init({ app: new App() });