import React from "react";

const Greetings = () => <p>Hello there! Good morning</p>;


// Avatar component....
const Avatar = () => (
  <div className="card-image">
    <img
      className="card-image"
      src="https://www.w3schools.com/howto/img_avatar.png"
      alt="Avatar"
      style={{ width: 100 }}
    />
  </div>
);

// Profile card....
const UserProfileCard = () => (

  <div className="card">
    <Avatar/>
    <div className="card-name">Joy</div>
    <div>Joy is a Frontend Developer</div>
  </div>
);

// A list item component....
const ListItem = (props) => (
  <li>
    Ford
    Tesla
    Volvo
    Mercedes
    Fiat
  </li>
)

// List item components...
function ListCompontent () {
  return <li>Tesla</li>
}
// Create our root App component => App component
function App() {
  return (
    <ol>
      <ListCompontent />
      <ListCompontent />
      <ListCompontent />
      <ListCompontent />
      <ListCompontent />
    </ol>
  )
};

export default App;
