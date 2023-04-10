import { Details } from '../../api/PokemonApi/types';

type Props = {
  data: Details;
};

function PokemonDetails({ data }: Props) {
  return (
    <div className='flex flex-col container max-w-sm mx-auto gap-6 uppercase'>
      <div className='flex bg-teal-800 p-3 rounded-md items-center justify-between  text-white'>
        <p>{data.name}</p>
        <p>No. {data.id}</p>
      </div>
      <div className='flex bg-slate-200 rounded-md shadow-md'>
        <div className='flex flex-col gap-2 p-4 basis-1/2 justify-center items-center border-r-2 border-gray-400'>
          <span>Type</span>
          <span>Height</span>
          <span>Weight</span>
        </div>
        <div className='flex flex-col gap-2 p-4 basis-1/2 justify-center items-center'>
          <span>{data.types[0].type.name}</span>
          <span>{data.height} m</span>
          <span>{data.weight} kg</span>
        </div>
      </div>
      <div className='flex bg-gray-700 text-white rounded-md shadow-md'>
        <div className='flex flex-col gap-2 p-4 basis-1/2 justify-center items-center border-r-2 border-gray-400'>
          <span>Hp</span>
          <span>Attack</span>
          <span>Defense</span>
        </div>
        <div className='flex flex-col gap-2 p-4 basis-1/2 justify-center items-center'>
          <span>{data.stats[0].base_stat}</span>
          <span>{data.stats[1].base_stat}</span>
          <span>{data.stats[2].base_stat}</span>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
