import {useContext, useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {UserContext} from "../App";

const useFormState = () => {

  const {setReFetch} = useContext(UserContext);
  const {id} = useParams();
  const navigate = useNavigate();
  const [meal, setMeal] = useState({});

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

  const onClickAddMeal = (e) => {
    e.preventDefault();
    if (!meal?.mealName) {
      mealNameRef.current.focus()
      return;
    }
    if (!meal?.mealType) {
      mealTypeRef.current.focus()
      return;
    }
    if (!meal?.mealPhoto) {
      mealPhotoRef.current.focus()
      return;
    }
    if (!meal?.mealDescription) {
      mealDescriptionRef.current.focus()
      return;
    }
    if (!meal?.mealPrice) {
      mealPriceRef.current.focus()
      return;
    }


    let url = 'http://localhost/meals';
    if (id) {
      url += `/${id}`;
    }

    fetch(url, {
      headers: {
        "Content-Type": "application/json"
      },
      method: id ? "PUT" : "POST",
      body: JSON.stringify(meal)
    }).then(_ => {
      setMeal({mealType: "", mealPhoto: "", mealDescription: "", mealName: "", mealPrice: ""})
      setReFetch(true);
      navigate("/menu");
    })

  }

  useEffect(() => {
    if (id) {
      fetch(`http://localhost/meals/${id}`)
        .then(response => response.json())
        .then(meal => setMeal(meal));
    }
  }, [id])


  return (
    {
      meal,
      mealPriceRef,
      mealNameRef,
      mealDescriptionRef,
      mealTypeRef,
      mealPhotoRef,
      onClickAddMeal,
      onChangeInput,
    }
  );
};

export default useFormState;