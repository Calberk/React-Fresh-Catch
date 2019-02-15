import React from 'react';
import Header from './header';
import Inventory from './inventory';
import Order from './order';


class App extends React.Component {
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                </div>
                <Inventory/>
                <Order/>
            </div>
        )
    }
}

export default App