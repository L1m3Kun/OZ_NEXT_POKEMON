import Image from "next/image";
import DefaultImage from "@/assets/defaultImage.jpg";

const Card = ({ pokemon }) => {
  return (
    <section className="w-[200px] h-[200px] border border-gray-500 flex flex-col justify-center items-center gap-[10px] pb-[10px] rounded-[10px] border-b-[5px] border-b-black border-r-[5px] border-r-black">
      <Image
        src={pokemon.front}
        alt="포켓몬 사진"
        width={120}
        height={120}
        placeholder="blur"
        blurDataURL={pokemon.front}
      />
      <div>{pokemon.name}</div>
    </section>
  );
};

export default Card;
