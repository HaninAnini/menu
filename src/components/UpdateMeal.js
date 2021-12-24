import React, {useState} from 'react';

const UpdateMeal = ({editedMeal, afterUpdate}) => {

  const [meal, setMeal] = useState(editedMeal);

  const onChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMeal({...meal, [name]: value})
  }

  const onClickSubmit = () => {

    fetch(`http://localhost/meals/${meal.id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "PUT",
      body: JSON.stringify(meal)
    }).then(() => {
        afterUpdate();
      })

  }

  const {mealName, mealPrice, mealPhoto, mealDescription, mealType} = meal;
  return (
    <div>
      <div>
        <label className={"form-label-2"} htmlFor={"mealPhoto"}>Meal Photo link:</label>
        <br/>
        <input
          className={"form-input-2"}
          name="mealPhoto"
          type="text"
          id={"mealPhoto"}
          value={mealPhoto}
          onChange={onChangeInput}/>
      </div>

      <div className={"form-Field"}>
        <label className={"form-label-2"} htmlFor={"mealName"}>Name:</label>
        <br/>
        <input
          className={"form-input-2"}
          name="mealName"
          type="text"
          id={"mealName"}
          value={mealName}
          onChange={onChangeInput}/>
      </div>

      <div className={"form-Field-2"}>
        <label className={"form-label-2"} htmlFor={"mealType"}>Type:</label>
        <br/>
        <select
          className={"form-input-2"}
          name="mealType"
          id={"mealType"}
          value={mealType}
          onChange={onChangeInput}>
          <option value={"Breakfast"}>Breakfast</option>
          <option value={"Lunch"}>Lunch</option>
          <option value={"Shakes"}>Shakes</option>
        </select>
      </div>

      <div className={"form-Field-2"}>
        <label className={"form-label-2"} htmlFor={"mealPrice"}> Price: </label>
        <br/>
        <input
          className={"form-input-2"}
          name="mealPrice"
          type="text"
          id={"mealPrice"}
          value={mealPrice}
          onChange={onChangeInput}/>
      </div>

      <div className={"form-Field-2"}>
        <label className={"form-label-2"} htmlFor={"mealDescription"}> Description: </label>
        <br/>
        <input
          className={"form-input-2"}
          name="mealDescription"
          type="text"
          id={"mealDescription"}
          value={mealDescription}
          onChange={onChangeInput}/>
      </div>
      <button type={"button"} onClick={onClickSubmit}>Update</button>
    </div>

  );
};

export default UpdateMeal;