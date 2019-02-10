import React from 'react';


class Form extends React.Component {
    render(){
        return(
            <div className="form-field">
                <form onSubmit={this.props.getRecipe}>
                    <input type="text" name="recipeName" placeholder="Enter the name of Recipe"></input>
                    <button className="button-search">Search</button>
                </form>
            </div>
        );
    }
}

export default Form;