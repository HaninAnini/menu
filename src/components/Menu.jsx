import React from 'react';
import {useMenuState} from "./useMenuState";
import {FaTrashAlt} from "react-icons/fa";
import {AiFillEdit} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

const Menu = ({setReFetch, reFetch}) => {
  const navigate = useNavigate();
  const {menu, filteringButtons, filter, onClickDelete} = useMenuState(reFetch, setReFetch);

  const onClickUpdate = (mealId) => {
    navigate(`/meal/${mealId}`);
  }

  return (
    <div>
      <nav className={"row mb-3"}>
        {
          filteringButtons.map(buttonText => (
            <button className={"col-sm btn btn-outline-success me-2"}
                    type={"button"}
                    onClick={() => filter(buttonText)}
                    key={buttonText}
            >
              {buttonText}
            </button>
          ))
        }
      </nav>
      <article className={"row mt-5"}>
        {menu.map(meal => {
          const {mealPrice, id, mealName, mealPhoto, mealDescription} = meal
          return (
            <main id={'demo'} className={"col-sm-6 d-flex"} key={id}>
              <img className={"rounded flex-column w-50 h-auto me-2 mb-5"} src={mealPhoto} alt={""}/>
              <section className={"flex-column"}>
                <div className={"row"}>
                  <h4 className={"col-sm-10"}>{mealName}</h4>
                  <button className={"col-sm-1 btn border-0  text-dark"} onClick={() => onClickDelete(id)}>
                    <FaTrashAlt/>
                  </button>
                  <button className={"col-sm-1 btn border-0  text-dark"} type={"button"}
                          onClick={() => onClickUpdate(id)}>
                    <AiFillEdit/>
                  </button>
                </div>
                <h5 className={"row"}>{mealPrice}</h5>
                <hr/>
                <p className={"flex-row"}>{mealDescription}</p>
              </section>
            </main>
          )
        })}
      </article>
    </div>
  );
};

export default Menu;