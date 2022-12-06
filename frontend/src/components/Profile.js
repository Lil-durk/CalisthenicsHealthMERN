import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navibar from "./Navibar.jsx";

const backgrImg = {
  backgroundImage: `url(https://wallpapercave.com/wp/wp2346419.jpg)`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "absolute",
};

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div style={backgrImg}>
      <Navibar />

      <div style={{backgroundColor: 'silver'}}>
        {isAuthenticated && (
          <article className="column">
            {user?.picture && <img src={user.picture} alt={user?.name} />}
            <h5>{user?.name}</h5>
            <ul>
              {Object.keys(user).map((objKey, i) => (
                <li key={i}>
                  {objKey}: {user[objKey]}
                </li>
              ))}
            </ul>
          </article>
        )}
      </div>
    </div>
  );
};

export default Profile;
