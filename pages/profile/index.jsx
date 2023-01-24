import UserProfile from "../../components/Profile/UserProfile";
import Home from "../../components/Profile/Home";
import profileMiddleware from "../../utils/profileMiddleware";

const HomePage = ({ user }) => {
  return (
    <UserProfile user={user}>
      <Home />
    </UserProfile>
  );
};

export default HomePage;

export async function getServerSideProps(context) {
  return await profileMiddleware(context);
}
