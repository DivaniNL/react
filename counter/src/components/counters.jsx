import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {

    render() { 
        console.log('counters rendered');
        const {onReset, onIncrement, counters, onDelete, onAdd, onIncrementMinus} = this.props;
        return ( 
        <div>
            <br></br>
            <button 
            onClick={onReset}
            className="btn btn-primary sizer btn-xl ">Leeg booschappenlijst</button>
            <button 
            onClick={onAdd}
            className="btn btn-primary btn-xl sizer">Voeg een product toe</button>

            {counters.map(counter => 
            <Counter 
            key={counter.id} 
            onDelete={onDelete} 
            onIncrement={onIncrement}
            onIncrementMinus={onIncrementMinus}
            onAdd={onAdd}
            counter={counter}
            />
             )}
        </div> 
        );
    }
}
 
export default Counters;