import React, { Component } from 'react';
class Counter extends Component {

    componentDidUpdate(prevProps, prevState){
        console.log('prevprops', prevProps);
        console.log('prevstate', prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
        }
    }
    componentWillUnmount(){
        console.log('counter unmount');
    }
    commentThis(product, count){
        console.log(product + count);
    }
    render() { 
        console.log('counter rendered');
        return  (
        <div>
            <div className='product'>
            <h2>{ this.formatTitle() }</h2>
           
            <button onClick={() => this.props.onIncrement(this.props.counter)}
            className = "btn btn-secondary btn-l">+</button>
              <span className={this.getBadgeClasses()}>{ this.formatCount() } </span>
             <button onClick={() => this.props.onIncrementMinus(this.props.counter)}
            className = "btn btn-secondary btn-l">-</button>
            <button onClick = { () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Verwijder product</button>

            </div>
        </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount(){
        const { value: count } = this.props.counter;
        return count === 0 ? 'Nul': count + 'x';
    }

    formatTitle(){
        return this.props.counter.product_naam;
    }
}
 
export default Counter;
// https://www.youtube.com/watch?v=Ke90Tje7VS0&feature=youtu.be&t=1348 1:01:40