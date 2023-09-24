import { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [noFound, setNoFound] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const addedFavoriteItems = JSON.parse(localStorage.getItem("favorites"));
    if (addedFavoriteItems) {
      setFavorites(addedFavoriteItems);
      const totalPrice = addedFavoriteItems.reduce((p, c) => p + c.price, 0);
      console.log(totalPrice);
      setTotalPrice(totalPrice);
    } else {
      setNoFound("No data found");
    }
  }, []);
  console.log(favorites);
  const handleRemove = () => {
    localStorage.clear();
    setFavorites([]);
    setNoFound("No data found");
  };
  return (
    <div className='py-10'>
      {noFound ? (
        <p className='min-h-[100vh] text-center flex justify-center items-center'>
          {noFound}
        </p>
      ) : (
        <div className='flex justify-center pb-5'>
          {favorites.length > 0 && (
            <button
              onClick={handleRemove}
              className='bg-green-300 px-2 py-1 rounded-md'
            >
              Remove favorite items
            </button>
          )}
        </div>
      )}
      {
        <p className='p-10 text-xl font-semibold'>
          Total price: ${totalPrice.toFixed(2)}
        </p>
      }
      {isShow ? (
        <div className=' px-2 grid md:grid-cols-2 gap-5'>
          {favorites.map(phone => (
            <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>
          ))}
        </div>
      ) : (
        <div className=' px-2 grid md:grid-cols-2 gap-5'>
          {favorites.slice(0, 2).map(phone => (
            <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>
          ))}
        </div>
      )}
      <div className='flex justify-center p-5'>
        <button
          onClick={() => setIsShow(!isShow)}
          className='bg-green-300 px-2 py-1 rounded-md'
        >
          {isShow ? "See less" : "See more"}
        </button>
      </div>
    </div>
  );
};

export default Favorites;
