import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";

const useFormState = (setReFetch) => {
  const {mealId} = useParams();

  const [meal, setMeal] = useState({mealType: "", mealPhoto: "", mealDescription: "", mealName: "", mealPrice: ""});
  const mealTypeRef = useRef(null)
  const mealPhotoRef = useRef(null)
  const mealNameRef = useRef(null)
  const mealPriceRef = useRef(null)
  const mealDescriptionRef = useRef(null)

  const onChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMeal({...meal, [name]: value})
  }

  const onClickButton = (e) => {
    e.preventDefault();
    if (meal?.mealName === "") {
      mealNameRef.current.focus()
      return;
    }
    if (meal?.mealType === "") {
      mealTypeRef.current.focus()
      return;
    }
    if (meal?.mealPhoto === "") {
      mealPhotoRef.current.focus()
      return;
    }
    if (meal?.mealDescription === "") {
      mealDescriptionRef.current.focus()
      return;
    }
    if (meal?.mealPrice === "") {
      mealPriceRef.current.focus()
      return;
    }


    let url = 'http://localhost/meals';
    if (mealId) {
      url += `/${mealId}`;
    }

    fetch(url, {
      headers: {
        "Content-Type": "application/json"
      },
      method: mealId ? "PUT" : "POST",
      body: JSON.stringify(meal)
    }).then(_ => {
      setMeal({mealType: "", mealPhoto: "", mealDescription: "", mealName: "", mealPrice: ""})
      setReFetch(true)
    })
  }

  useEffect(() => {
    if (mealId) {
      fetch(`http://localhost/meals/${mealId}`)
        .then(response => response.json())
        .then(meal => setMeal(meal));
    }
  }, [mealId])


  return (
    {
      meal,
      mealPriceRef,
      mealNameRef,
      mealDescriptionRef,
      mealTypeRef,
      mealPhotoRef,
      onClickButton,
      onChangeInput,
    }
  );
};

export default useFormState;