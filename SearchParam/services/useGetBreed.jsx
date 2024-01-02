// import React,{useState, useEffect} from "react";

import { useQuery } from "@tanstack/react-query";
import fetchBreed from "./fetchBreed";

// let localCache = {}

export default function useBreedList(animal) {
    // const [breed, setBreed] = useState([]);

    // useEffect(() => {
    //     if(!animal) {
    //         setBreed([]);
    //     }
    //     else if (localCache[animal]) {
    //         setBreed(localCache[animal]);
    //     }
    //     else {
    //         getBreedList();
    //     }

    //     async function getBreedList() {

    //         setBreed([])
    //         const data = await fetch(
    //             `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    //           );
    //         const response = await data.json();
    //         localCache[animal] = response.breeds || [];
    //         setBreed(localCache[animal]);
    //     }
    // }, [animal]);

    const result = useQuery({ queryKey: ["breed", animal], queryFn: fetchBreed});
    return result?.data?.breeds ?? [];
}