import React from "react";

function RecipeList({ recipes, deleteRecipe}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  function handleDeleteOnClick(id){
    deleteRecipe(id);
  }
  
  let tableRows = recipes.map((recipe, id) => {
    return (
    <tr key={id}>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td>
          <img src={recipe.photo} alt="Recipe" />
        </td>
        <td className="content_td"> 
          <p>{recipe.ingredients}</p>
        </td>
        <td className="content_td">
          <p>{recipe.preparation}</p>
        </td>
        <td>
        <button name="delete" onClick={() => handleDeleteOnClick(id)}>Delete</button>
        </td>
      </tr>
    );
  });

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
