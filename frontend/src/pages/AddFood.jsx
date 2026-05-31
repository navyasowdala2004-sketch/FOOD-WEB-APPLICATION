import { useState } from "react";

function AddFood() {
  const [food, setFood] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setFood({
      ...food,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(food);

    alert("Food Added");
  };

  return (
    <div className="admin-form">
      <h1>Add Food</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Food Name"
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />

        <button type="submit">
          Add Food
        </button>
      </form>
    </div>
  );
}

export default AddFood;