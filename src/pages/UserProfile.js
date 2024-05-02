import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function UserProfile() {
  const [user, setUser] = useState({});
  const params = useParams();
  const userId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/users/${userId}`)
      .then((r) => r.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, [userId]);

  if (!user.name) {
    return <h1>Loading...</h1>;
  }
  console.log(params);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>User.name</h1>
      </main>
    </>
  );
}

export default UserProfile;
