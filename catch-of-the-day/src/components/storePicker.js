import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component{
    // constructor(){
    //     super(); //references to follow React.Component
    //     this.goToStore = this.goToStore.bind(this); //binding method to component
    // }

    myInput = React.createRef();  //creating a ref

    goToStore = event => {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. get the text from the input
        const storeName = this.myInput.current.value;
        // 3. Change the page to /store/name-entered
        this.props.history.push(`/store/${storeName}`);
    }

    render(){
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input 
                type="text" 
                ref={this.myInput}
                placeholder="Store Name"
                defaultValue={getFunName()}
                />
                <button type="submit">Visit Store →</button>
            </form>
        )
    }
}

export default StorePicker;