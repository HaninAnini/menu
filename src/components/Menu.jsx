import {useMenuState} from "./useMenuState";
import {FaTrashAlt} from "react-icons/fa";
import {AiFillEdit} from "react-icons/ai";
import Loader from 'react-loader'
import UpdateMeal from "./UpdateMeal";


const Menu = ({setReFetch, reFetch, setMeal}) => {
  const {
    menu,
    filteringButtons,
    editingMealId,
    isLoading,
    filter,
    onClickDelete,
    onClickUpdate,
    afterUpdate,
  } = useMenuState({reFetch, setReFetch, setMeal});


  if (isLoading) {
    return (
      <div>
        <Loader className="text-center"
                type="radio"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
        />
      </div>
    )
  }

  return (
    <div className={"menu"}>
      <h1 className={"menu-title"}>Your Menu</h1>
      <nav className={"filter-button-group"}>
        {
          filteringButtons.map(mealType => (
            <button className={"filter-button "}
                    type={"button"}
                    onClick={() => filter(mealType)}
                    key={mealType}
            >
              {mealType}
            </button>
          ))
        }
      </nav>

      <article className={"meals-list"}>
        {menu.map(meal => {
          const {mealPrice, id, mealName, mealPhoto, mealDescription} = meal
          return (
            <div className={"meal"} key={id}>
              {editingMealId === id ?
                <UpdateMeal editedMeal={meal} afterUpdate={afterUpdate}/>
                :
                <div>
                  <img className={"meal-image"} src={mealPhoto} alt={""}/>
                  <section>
                    <div className={"meal-title"}>
                      <h2 className={"meal-name"}>{mealName}</h2>
                      <button className={"meal-delete-button"} onClick={() => onClickDelete(id)}>
                        <FaTrashAlt/>
                      </button>
                      <button className={"meal-update-button"} type={"button"} onClick={() => onClickUpdate(id)}>
                        <AiFillEdit/>
                      </button>
                    </div>
                    <h4 className={"meal-price"}>{`${mealPrice} $`}</h4>
                    <hr/>
                    <p className={"meal-description"}>{mealDescription}</p>
                  </section>
                </div>}
            </div>
          )
        })}
      </article>
    </div>
  );
};

export default Menu;