import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';


class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    }

    addFish = fish =>  {
        // 1. take copy of existing state
        // object spread
        const fishes = {...this.state.fishes};
        // 2. add our new fish to our fishes
        fishes[`fish${Date.now()}`] = fish;
        // 3. set new fishes object to state
        this.setState({
            fishes
        })
        // this.state.fishes.push(fish)
        console.log("adding that fish");

    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Shang is Cool"/>
                </div>
                <Order />
                <Inventory addFish={this.addFish} />
            </div>
        )
    }

}

export default App;