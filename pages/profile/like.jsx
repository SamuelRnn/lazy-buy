import Profile from ".";
import profileMiddleware from '../../utils/profileMiddleware'

const Like = ({user}) => {
    return (
            <Profile user={user}>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatum.</div>
            </Profile>
    );
  };
  export default Like;


  export async function getServerSideProps(context) {
    return await profileMiddleware(context)
  }