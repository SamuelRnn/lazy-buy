import UserProfile from "../../components/Profile/UserProfile";
import profileMiddleware from "../../utils/profileMiddleware";
import { useGetWishListQuery } from "../../redux/userApi";
import FavoriteProduct from "../../components/Profile/FavoriteProduct";
import Spinner from "../../components/Spinners/Spinner"

const Like = ({ user }) => {
  const { isFetching, data } = useGetWishListQuery(user.email);
  return (
    <UserProfile
      user={user}
      headerTitle="Your favorite products!"
    >
      {/* {console.log(data)} */}
   { data?.length   ? (
         
      <div className="grid gap-5 place-items-center">
        
        {data &&
          data.map((product) => (
            <FavoriteProduct
              product={product}
              key={product.id}
              email={user.email}
            />
          ))}
      </div>
      ) : (
        <div className='flex items-center justify-center mt-20 '>
      <Spinner/>
      </div>
      )}
    </UserProfile>
  );
};
export default Like;

export async function getServerSideProps(context) {
  return await profileMiddleware(context);
}
