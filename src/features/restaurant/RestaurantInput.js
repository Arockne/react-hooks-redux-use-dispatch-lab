import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRestaurant } from "./restaurantsSlice";

function RestaurantInput() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addRestaurant({ name, location }))
    setName("")
    setLocation("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          id="name"
          placeholder="restaurant name"
        />
      </p>
      <p>
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          id="location"
          placeholder="location"
        />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RestaurantInput;
