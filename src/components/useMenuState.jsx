import {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {UserContext} from "../App";

export const useMenuState = () => {
  const {setReFetch, reFetch} = useContext(UserContext)
  const navigate = useNavigate();

  const [menu, setMenu] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [editingMealId, setEditingMealId] = useState(null);
  const filteringButtons = ["All", "Breakfast", "Lunch", "Shakes"];

  const onClickUpdate = (id) => {
    setEditingMealId(id);
  }

  const afterUpdate = () => {
    setEditingMealId(null);
    setReFetch(true);
  }

  useEffect(() => {
    if (reFetch || menu?.length === 0) {
      fetch('http://localhost/meals')
        .then(response => response.json())
        .then(data => {
          setMenu(data)
          setIsLoading(false)
          setReFetch(false);
        })
    }
  }, [reFetch, menu?.length]);

  const filter = (mealType) => {
    let url = "http://localhost/meals";
    mealType !== "All" && (url += `?mealType=${mealType}`)


    fetch(url)
      .then(response => response.json())
      .then(data => {
          setMenu(data);
        }
      )
  }
  const onClickDelete = (id) => {
    prompt('are you sure to remove it?', 'yes/no') === 'yes'
    &&
    fetch(`http://localhost/meals/${id}`, {
      method: 'Delete'
    }).then(response => response.json()).then(() => {
      setReFetch(false);
      setReFetch(true)

    })
  }

  const updateInForm = (id) => {
    navigate(`/meal/${id}`);
  }


  return (
    {
      isLoading,
      filteringButtons,
      menu,
      editingMealId,
      filter,
      onClickDelete,
      onClickUpdate,
      afterUpdate,
      updateInForm,
    }
  );
};
