import React from 'react';

class EditFishForm extends React.Component {

    handleChange = event => {
        //1. update fish (take a copy of state)
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name] : event.currentTarget.value   
        };
        this.props.updatedFish(this.props.index, updatedFish)
    }

    render() {
        return <div className="fish-edit">
            <input type="text" onChange={this.handleChange} name="name" value={this.props.fish.name}/>
            <input type="text" onChange={this.handleChange} name="price" value={this.props.fish.price}/>
            <select type="text" onChange={this.handleChange} name="status"value={this.props.fish.status}>
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold Out!</option>
            </select>
            <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc}/>
            <input type="text" onChange={this.handleChange} name="image" value={this.props.fish.image}/>
            <button onClick={()=> this.props.deleteFish(this.props.index)}>Remove Fish</button>
        </div>;
    }
}

export default EditFishForm;