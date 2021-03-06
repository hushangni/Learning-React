import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';


class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

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
    };

    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        })
    };

    addToOrder = (key) => {
        // take copy of state
        const order = {...this.state.order};
        // either add to order or update number in order
        order[key] = order[key] + 1 || 1;
        // call setstate to update our state object
        this.setState({order});
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Shang is Cool"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]}/>)}
                    </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} addToOrder={this.addToOrder}/>
            </div>
        )
    }

}

export default App;