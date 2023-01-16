import UserProfile from "../../components/Profile/UserProfile";

import profileMiddleware from "../../utils/profileMiddleware";

const Home = ({ user }) => {
  return <UserProfile user={user}></UserProfile>;
};

export default Home;

export async function getServerSideProps(context) {
  return await profileMiddleware(context);
}
