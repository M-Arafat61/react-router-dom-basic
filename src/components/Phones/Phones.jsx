import PhonesCard from "./PhonesCard";

const Phones = ({ phonesData }) => {
  //   console.log(phonesData);
  return (
    <div className='m-auto py-10 relative  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {phonesData.map(phone => (
        <PhonesCard key={phone.id} phone={phone}></PhonesCard>
      ))}
    </div>
  );
};

export default Phones;
