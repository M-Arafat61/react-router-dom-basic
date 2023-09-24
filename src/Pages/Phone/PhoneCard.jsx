import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const PhoneCard = ({ phone }) => {
  const { id, brand_name, phone_name, image, rating, price } = phone || {};
  // console.log(phone);
  const handleAddToFavorite = () => {
    const favoriteItemsArray = [];
    const addedFavoriteItems = JSON.parse(localStorage.getItem("favorites"));
    console.log(addedFavoriteItems);
    if (!addedFavoriteItems) {
      favoriteItemsArray.push(phone);
      localStorage.setItem("favorites", JSON.stringify(favoriteItemsArray));
    } else {
      const isExist = addedFavoriteItems.find(phone => phone.id === id);
      // console.log(isExist);
      if (!isExist) {
        favoriteItemsArray.push(...addedFavoriteItems, phone);
        localStorage.setItem("favorites", JSON.stringify(favoriteItemsArray));
      } else {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Already added in favorites!",
        });
      }
    }
  };
  return (
    <div>
      <div className='relative flex w-full m-auto  max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'>
        <div className='relative m-0 w-1/3 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700'>
          <img src={image} alt='image' className='h-full w-full object-fill' />
        </div>
        <div className='p-6'>
          <h6 className='mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased'>
            {phone_name}
          </h6>

          <p className='font-semibold mb-8 block font-sans text-base leading-relaxed text-gray-700 antialiased'>
            Price: ${price}
          </p>
          <Link onClick={handleAddToFavorite} className='inline-block'>
            <button
              className='flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              type='button'
            >
              Add to favorite
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                aria-hidden='true'
                className='h-4 w-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
