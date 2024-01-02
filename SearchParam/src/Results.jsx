import React from "react";
import Listing from "./Listing";

const Results = ({pets}) => {
  return (
    pets.map((pet) => <Listing name={pet.name} id={pet.id} image={pet.images} description={pet.description} />)
  )
}

export default Results