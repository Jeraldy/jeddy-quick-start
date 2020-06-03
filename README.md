## Quick-Start

```sh
# Clone the Quick Start repository
$ git clone https://github.com/Jeraldy/jeddy-quick-start

# Go into the repository
$ cd jeddy-quick-start

# Install the dependencies and run
$ npm install && npm start
```
Then open: [http://localhost:9000/](http://localhost:9000/)

## Counter Application

```js
import { Jeddy, StatefulWidget } from "jeddy";
import Center from "jeddy/layouts/Center";
import Button from "jeddy/widgets/Button";

class App extends StatefulWidget {
  constructor() {
    super()
    this.state = { value: 0 }
    return this.connect()
  }

  render() {
    return Center({
      child: Button({
        label: `Counter: ${this.state.value}`,
        onclick: () => this.setState({ value: this.state.value + 1 })
      })
    })
  }
}

Jeddy.Init(new App());
```

