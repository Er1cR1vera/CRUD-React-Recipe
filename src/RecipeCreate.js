import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const initialFormState = {
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation:"",
  };
  
  const [formData, setFormData] = useState ({ ...initialFormState });
  
  const onChange = ({ target }) => {
    const value = target.value;
    const keyName = target.name;
    setFormData({ ...formData, [keyName]: value });
  }
  
  
  
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({ ...initialFormState });
  };
  // TODO: Add the required input and textarea form elements.
  
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit} >
      <table>
        <tbody>
          <tr>
            <td> 
            <input 
              type="text" 
              name="name" 
              onChange={onChange} 
              value={formData.name} 
              placeholder="Name"
              />
            </td>
            
            <td> 
            <input 
              type="text" 
              name="cuisine" 
              onChange={onChange} 
              value={formData.cuisine} 
              placeholder="cuisine"
              />
            </td>
            
            <td> 
            <input 
              type="text" 
              name="photo" 
              onChange={onChange} 
              value={formData.photo}
              />
            </td>
            
            <td> 
            <textarea
              type="text" 
              name="ingredients" 
              onChange={onChange} 
              value={formData.ingredients} 
              placeholder="Ingredients"
              textarea="Ingredients"
              />
            </td>
            
            <td> 
            <textarea
              type="text" 
              name="preparation"
              onChange={onChange}
              value={formData.preparation}
              placeholder="preparation"
              />
            </td>
            
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
