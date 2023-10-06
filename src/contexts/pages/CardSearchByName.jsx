
import { useContext, useEffect, useState } from "react"
import { ApiContext } from "../ApiContext";
import { useParams } from "react-router-dom";
import PokemonCard from "../../components/PokemonCard";


export default function CardSearchByName() {

	// search results 
	const [searchResults, setSearchResults] = useState([]);

	// api URL 
	const {api} = useContext(ApiContext);

	// route param for the pokemon name 
	const {pokemonName} = useParams();

	// api key 
	let apiKey = "6189f660-5c8b-489a-ad60-a7ad36f35819";

	useEffect(() => {
		console.log("Card search component has mounted! Making a fetch request now...");

		async function apiRequest(){
			let queryParams = new URLSearchParams({
				q: 'name:' + pokemonName
			})
			let response = await fetch(api + 'cards?' + queryParams, {
				headers: {
					'X-Api-Key': apiKey
				}
			});

			let responseData = await response.json();

			setSearchResults(responseData.data);
		}

		apiRequest();

	}, []);

	return (
		<div>
			<h1>Card Search</h1>
			{searchResults.length > 0 && 
			<div>
				<h1>{searchResults[0].name} - {searchResults[0].id}</h1>

                {searchResults.map(result => {
                    return <PokemonCard 
                    key={result.id} 
                    cardTitle ={result.name} 
                    imageUrl={result.images.small} 
                    cardDescription={result.flavorText} />
                })}

			</div>
			}
		</div>
	)
}