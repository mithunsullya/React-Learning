import React, { useEffect, useState } from "react";
import useBreedList from "../services/useGetBreed";
import Results from "./Results";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "../services/fetchSearch";
const searchParam = () => {
  // const [location, setLocation] = useState("");
  const animals = ["Luna", "Dog", "Cow", "Rabbit"];
  const [animal, setAnimal] = useState("");
  // const [breed, setBreed] = useState("");
  const breeds = useBreedList(animal.toLowerCase());
  // const [pets, setPets] = useState([]);

  const [searchObj, setSearchObj] = useState({
    animal: '',
    location: '',
    breed: ''
  })

  // useEffect(() => {
  //   getPetList();
  // }, []);

  // async function getPetList() {
  //   const data = await fetch(
  //     `http://pets-v2.dev-apis.com/pets?animal=${animal.toLowerCase()}&location=${location.toLowerCase()}&breed=${breed}`
  //   );
  //   const response = await data.json();
  //   setPets(response.pets);
  // }

  const result = useQuery({ queryKey: ['search', searchObj], queryFn: fetchSearch});
  const pets = result?.data?.pets || []

  const handleSubmit = (e) => {
    e.preventDefault();
    // getPetList();

    let formData = new FormData(e.target);
    setSearchObj({
      animal: formData.get('animal'),
      breed: formData.get('breed'),
      location: formData.get('location')
    })
  };

  return (
    <div className="search-param">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="location">
          Location
          <input
            type="text"
            name="location"
            id="location"
            // value={location}
            // onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label htmlFor="animal">
          Animals
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {animals.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            name="breed"
            // value={breed}
            // onChange={(e) => setBreed(e.target.value)}
            // onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>

      <Results pets={pets}></Results>
    </div>
  );
};

export default searchParam;
