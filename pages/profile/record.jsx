import Profile from ".";
import profileMiddleware from "../../utils/profileMiddleware";

const Record = ({ user }) => {
  return <Profile user={user}></Profile>;
};
export default Record;

export async function getServerSideProps(context) {
  return await profileMiddleware(context);
}
