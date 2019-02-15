import React from 'react';
import Header from './header';
import Inventory from './inventory';
import Order from './order';
import sampleFishes from '../sample-fishes';
import Fish from './fish';

class App extends React.Component {

    state = {
        fishes: {},
        order: {}
    };

    addFish = fish => {

        //1. Take a copy of existing this.state.
        const fishes = {...this.state.fishes};
        //2. Add our new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish; 
        //3. Set the new fishes object to state
        this.setState = ({
            fishes : fishes
        })
    }

    loadSampleFishes = () => {
        this.setState({ 
            fishes: sampleFishes
        });
    }

    addToOrder = (key) => {
        //1. Take a copy of this.state.
        const order = {...this.state.order}
        //2. Either add to order or update quantity in order
        order[key] = order[key] + 1 || 1; 
        //3. call setstate to update our this.state.
        this.setState({
            order
        });

    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => 
                        <Fish 
                        key = {key} 
                        index = {key}
                        details = {this.state.fishes[key]}
                        addToOrder={this.addToOrder}/>
                        )}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order}/>
                <Inventory addFish = {this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>
        )
    }
}

export default App