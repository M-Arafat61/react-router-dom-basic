import { Link } from "react-router-dom";

const PhonesCard = ({ phone }) => {
  //   console.log(phone);
  const { id, brand_name, phone_name, image, rating, price } = phone || {};
  return (
    <div className=''>
      <div className='flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'>
        <div className='h-96 relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700'>
          <img src={image} className='h-full w-full object-fill' />
        </div>
        <div className='p-6'>
          <p className='block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased'>
            {brand_name}
          </p>
          <div className='mb-2 flex items-center justify-between'>
            <p className='block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased'>
              {phone_name}
            </p>
            <p className='block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased'>
              ${price}
            </p>
          </div>
          <p className='block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75'>
            With plenty of talk and listen time, voice-activated siri access,
            and an available wireless charging case.
          </p>
        </div>
        <div className='p-6 pt-0'>
          <Link to={`/phones/${id}`}>
            <button
              className='block w-full select-none rounded-lg bg-gray-200 bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              type='button'
            >
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhonesCard;
