import UserProfile from "../../components/Profile/UserProfile";
import profileMiddleware from "../../utils/profileMiddleware";
import { useGetWishListQuery } from "../../redux/userApi";
import FavoriteProduct from "../../components/Profile/FavoriteProduct";

const Like = ({ user }) => {
  const { isFetching, data } = useGetWishListQuery(user.email);
  console.log('Soy data', data)
  return (
    <UserProfile
      user={user}
      title="Likes"
      headerTitle="Your favorite products!"
    >
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
    </UserProfile>
  );
};
export default Like;

export async function getServerSideProps(context) {
  return await profileMiddleware(context);
}
