import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../ApiContext";
import { useParams } from "react-router-dom";


export default function CardSearchByName(){

    // search results

    const  [searchResults, setSearchResults] = useState();

    //api url
    const {api} = useContext(ApiContext)

    //route param for name
    const {pokemonName} = useParams();

    //api key
    let apiKey = "6189f660-5c8b-489a-ad60-a7ad36f35819";

    useEffect(() => {
        console.log("Card search component has mounted. Making a fetch request now");

        async function apiRequest(){
            let queryParams = new URLSearchParams({
                q: 'name'+pokemonName
            })
            let response = await fetch(api + 'cards?' + queryParams, {
                headers:{
                    'X-Api-Key' : apiKey
                }
            })
        }


    }, {})

    return(
        <div>
            <h1>Card Search</h1>
        </div>
    )
}