import React from "react";
import UserProfileCard from "./components/ProfileCard";

// Create our root App component => App component
function App() {
  const users = [
    {
    name: "Joy G",
    role: "Frontend Developer",
    bio: "A Frontend Developer",
    avatar: "https://www.w3schools.com/howto/img_avatar.png"
  },
   {
    name: "John Doe",
    role: "Backend Developer",
    bio: "A Backend Developer",
    avatar: "https://www.w3schools.com/howto/img_avatar.png"
  }
  ];

  const usersList = users.map(user => {
    return <div>
      <img src={user.avatar} alt="Avatar" style={{ width: 100 }} />
      <h3>{user.name}</h3>
      <p>{user.bio}</p>
        </div>
  })

  return (
    <section> 
      {usersList}
    </section>
  );
}

export default App;
