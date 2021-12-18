import React from "react";
import useFormState from "./useFormState";
import {useParams} from "react-router-dom";


const MealForm = ({setReFetch}) => {
  const {mealId} = useParams();

  const {
    meal,
    mealPriceRef,
    mealTypeRef,
    mealPhotoRef,
    mealNameRef,
    mealDescriptionRef,
    onChangeInput,
    onClickButton
  } = useFormState(setReFetch)

  return (
    <>
      <form className={" container w-50"}>
        <div>
          <label className={"form-label"} htmlFor={"mealPhoto"}>Meal Photo link:</label>
          <input
            className={"form-control"}
            ref={mealPhotoRef}
            name="mealPhoto"
            type="text"
            id={"mealPhoto"}
            value={meal?.mealPhoto}
            onChange={onChangeInput}/>
        </div>
        <div>
          <label className={"form-label"} htmlFor={"mealName"}>Name:</label>
          <input
            className={"form-control"}
            ref={mealNameRef}
            name="mealName"
            type="text"
            id={"mealName"}
            value={meal?.mealName}
            onChange={onChangeInput}/>
        </div>
        <div>
          <label className={"form-label"} htmlFor={"mealType"}>Type:</label>
          <input
            className={"form-control"}
            ref={mealTypeRef}
            name="mealType"
            list={"type"}
            id={"mealType"}
            value={meal?.mealType}
            onChange={onChangeInput}/>
          <datalist id={"type"}>
            <option value={"Breakfast"}/>
            <option value={"Lunch"}/>
            <option value={"Shakes"}/>
          </datalist>
        </div>

        <div>
          <label className={"form-label"} htmlFor={"mealPrice"}> Price: </label>
          <input
            className={"form-control"}
            ref={mealPriceRef}
            name="mealPrice"
            type="text"
            id={"mealPrice"}
            value={meal?.mealPrice}
            onChange={onChangeInput}/>
        </div>

        <div>
          <label className={"form-label"} htmlFor={"mealDescription"}> Description: </label>
          <input
            className={"form-control"}
            ref={mealDescriptionRef}
            name="mealDescription"
            type="text"
            id={"mealDescription"}
            value={meal?.mealDescription}
            onChange={onChangeInput}/>
        </div>

        <button className={"btn btn-outline-primary mt-3 mb-3"} type={"button"} onClick={onClickButton}>
          {mealId ? "Update" : "Add"} Meal
        </button>
      </form>
    </>
  );
}

export default MealForm;
