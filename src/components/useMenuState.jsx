import React, {useEffect, useState} from 'react';

export const useMenuState = (reFetch, setReFetch) => {
  const [menu, setMenu] = useState([])
  const filteringButtons = ["All", "Breakfast", "Lunch", "Shakes"];

  useEffect(() => {
    if (reFetch) {
      fetch('http://localhost/meals')
        .then(response => response.json())
        .then(data => {
          setMenu(data);
          setReFetch(false)
        })
    }

  }, [reFetch])

  const filter = (mealType) => {
    let url = "http://localhost/meals";
    if (mealType !== "All") {
      url += `?mealType=${mealType}`;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => setMenu(data))
  }
  const onClickDelete = (id) => {
    fetch(`http://localhost/meals/${id}`, {
      method: 'Delete'
    }).then(response => response.json()).then(() => {
      setReFetch(true);
    })
  }

  return (
    {
      filteringButtons,
      menu,
      filter,
      onClickDelete,
    }
  );
};
