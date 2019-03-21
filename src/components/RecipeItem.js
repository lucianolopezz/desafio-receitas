import React from 'react'

const RecipeItem = ({ recipe, higlight, searchString }) => (
    <div className="col-sm-3 mt-4">
        <div className="card">
            <img className="card-img-top img-fluid" src={recipe.thumbnail} alt="" />
            <div className="card-body">
                <h5 className="card-title">{higlight(recipe.title, searchString)}</h5>
                <p className="card-text">
                    <strong>Ingredients: </strong>{higlight(recipe.ingredients, searchString)}
                </p>
            </div>
        </div>
    </div>
)

export default RecipeItem;