import FlipCard from "@/components/FlipCard";

const getPokemon = async (pokemonId) => {
  // SSR 사용을 위한 cache 설정
  const pokemonList = await fetch(
    "http://localhost:3000/api/pokemon/" + pokemonId + "/",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    }
  );
  const pokemon = await pokemonList.json();
  return { pokemon: pokemon.pokemonData };
};

export default async function Detail({ params }) {
  const { pokemonId } = params;
  const { pokemon } = await getPokemon(pokemonId);

  return (
    <div className="bg-white flex flex-col justify-center items-center border py-[30px] px-[60px] rounded-[10px] border-b-[8px] border-r-[8px] border-black">
      <div className="text-[28px] mb-[10px]">{pokemon.name}</div>
      <div className="whitespace-pre-wrap text-center">
        {pokemon.description}
      </div>
      <FlipCard front={pokemon.front} back={pokemon.back} />
    </div>
  );
}
