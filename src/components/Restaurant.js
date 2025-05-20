import { RES_LOGO } from "../utils/constant";


const Restaurant = ({ resdata }) => {
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
      resdata.info;
     
    return (
      <div className="w-44 h-80 p-1 hover:bg-gray-200 sm:w-64 sm:h-96 sm:p-2 bg-gray-100">
        <div className="h-32">
          <img className="h-full w-full"
            src={
              RES_LOGO +
              cloudinaryImageId
            }
          ></img>
        </div>
        <div className="flex flex-col gap-1 text-sm sm:gap-2 sm:text-lg">
        <h2 className="font-bold text-lg sm:text-xl">{name}</h2>
        <h3>{cuisines.slice(0,5).join(", ")}</h3>
        <h3>{costForTwo}</h3>
        <h3>{avgRating}⭐</h3>
        </div>
      </div>
    );
  };

  export const WithlableRestaurant = (Restaurant) =>{
    return (props) =>{
      return(
        <>
        <label className="my-1 px-1 py-1 text-sm bg-green-700 text-white absolute rounded-lg shadow-xl shadow-black font-bold sm:my-2 sm:px-4 sm:py-2  ">Veg</label>
        <Restaurant {...props}/>
        </>
      )
    }
  }

  export default Restaurant;