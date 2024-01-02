import { useQuery } from "@tanstack/react-query";
import React, { Children, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import fetchPet from "../services/fetchpet";
import Modals from "./Modals";
import contextData from "./createContextData";

const Detail = () => {
  const { id } = useParams();
  const results = useQuery({ queryKey: ["detail", id], queryFn: fetchPet });
  const [showModal, setShowModal] = useState(false);
  let [contextStateValue, setContextValue] = useContext(contextData);
  console.log('Contenxt value: ' + contextStateValue);

  if (results.isLoading) {
    return <h1> Loading... </h1>;
  }
  const pet = results.data.pets[0];

  return (
    <>
      <img src={pet.images[0]} alt="" srcSet={pet.images[0]} />
      <h1> {pet.name} </h1>
      <p>Breed: {pet.breed}</p>
      <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
      { showModal ?
      <Modals>
          <div className="adopt-modal">
            <h1>Please Adopt Me {pet.name} </h1>
            <button onClick={() => setShowModal(false)}> Close Modal</button>
          </div>
      </Modals> : ''}

      <button onClick={() => setContextValue(true)}> Change the context to true. </button>
      { contextStateValue ? <h2> Context Value changed to True </h2> : <h2> Context value set to false</h2>}
      <p> {pet.description} </p>
    </>
  );
};

export default Detail;
