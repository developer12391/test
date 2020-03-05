import React, {Component} from 'react';
import s from "./Search.module.css"
class Filters extends Component {
    constructor(props) {
        super();
        this.input = React.createRef();
    }

    find() {
        this.props.getProducts(this.input.current.value);
    }

    render() {
        return (
             <div className={s.searchForm}>
                <label className={s.labelText} for="n">Search:
                <input placeholder="Name of product..." onChange={()=>this.find()} ref={this.input} type="text" className={s.searchInput} />
                </label>
               
            </div>
                            
        );
    }
}

export default Filters;