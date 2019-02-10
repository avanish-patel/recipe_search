import React from 'react';

class Recipes extends React.Component {
    render(){
        return(

        <div className="container">
            <div className="row">
                {this.props.recipes.map( recipe => {
                    return(
                        <div key={recipe.recipe_id} className="card-deck col-sm-4">
                            <div className="card">
                                <img src={recipe.image_url} alt={recipe.title} className="card-img-top"/>
                                <div className="card-body">
                                <h5 className="card-title">{recipe.title}</h5>
                                <p className="publisher">Publisher: {recipe.publisher}</p>
                                <button>VIEW RECIPE</button>
                                </div>
                            </div>
                        </div>
                    ); 
                })
                }
            </div>
        </div>
        );
    }
}

export default Recipes;