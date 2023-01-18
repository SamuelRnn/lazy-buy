import Profile from ".";
import profileMiddleware from "../../utils/profileMiddleware";
import UserProfile from "../../components/Profile/UserProfile";

const Record = ({ user }) => {
  return (
    <UserProfile user={user} title="Record">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
        voluptatum.
      </div>
    </UserProfile>
  );
};
export default Record;

export async function getServerSideProps(context) {
  return await profileMiddleware(context);
}
