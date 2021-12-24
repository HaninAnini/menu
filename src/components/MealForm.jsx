import useFormState from "./useFormState";
import {useParams} from "react-router-dom";


const MealForm = ({setReFetch}) => {

  const {id} = useParams();

  const {
    meal,
    mealPriceRef,
    mealTypeRef,
    mealPhotoRef,
    mealNameRef,
    mealDescriptionRef,
    onChangeInput,
    onClickAddMeal
  } = useFormState({setReFetch})

  return (
    <>
      <form className={"form"}>
        <div className={"form-Field"}>
          <label className={"form-label"} htmlFor={"mealPhoto"}>Meal Photo link:</label>
          <br/>
          <input
            className={"form-input"}
            ref={mealPhotoRef}
            name="mealPhoto"
            type="text"
            id={"mealPhoto"}
            value={meal?.mealPhoto}
            onChange={onChangeInput}/>
        </div>

        <div className={"form-Field"}>
          <label className={"form-label"} htmlFor={"mealName"}>Name:</label>
          <br/>
          <input
            className={"form-input"}
            ref={mealNameRef}
            name="mealName"
            type="text"
            id={"mealName"}
            value={meal?.mealName}
            onChange={onChangeInput}/>
        </div>

        <div className={"form-Field"}>
          <label className={"form-label"} htmlFor={"mealType"}>Type:</label>
          <br/>
          <select
            className={"form-input"}
            ref={mealTypeRef}
            name="mealType"
            id={"mealType"}
            value={meal?.mealType}
            onChange={onChangeInput}>
            <option value={"Breakfast"}>Breakfast</option>
            <option value={"Lunch"}>Lunch</option>
            <option value={"Shakes"}>Shakes</option>
          </select>
        </div>

        <div className={"form-Field"}>
          <label className={"form-label"} htmlFor={"mealPrice"}> Price: </label>
          <br/>
          <input
            className={"form-input"}
            ref={mealPriceRef}
            name="mealPrice"
            type="text"
            id={"mealPrice"}
            value={meal?.mealPrice}
            onChange={onChangeInput}/>
        </div>

        <div className={"form-Field"}>
          <label className={"form-label"} htmlFor={"mealDescription"}> Description: </label>
          <br/>
          <input
            className={"form-input"}
            ref={mealDescriptionRef}
            name="mealDescription"
            type="text"
            id={"mealDescription"}
            value={meal?.mealDescription}
            onChange={onChangeInput}/>
        </div>

        <button className={"form-button"} type={"button"} onClick={onClickAddMeal}>
          {id ? "Update " : "Add "}Meal
        </button>
      </form>
    </>
  );
}

export default MealForm;
