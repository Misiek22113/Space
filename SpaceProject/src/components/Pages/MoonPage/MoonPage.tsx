import Card from "../../Card/Card";
import Navbar from "../../Navbar/Navbar";
import "./MoonPage.scss";

const MoonPage = () => {
  return (
    <div className="background-moon">
      <Navbar />
      <div className="card-section">
        <Card
          planet="THE SUN"
          overview="The Sun is the only one star in our Solar System. It is a yellow dwarf star, a hot ball of glowing gases. Is's gravity holds everythong from the biggest planets to tiny debris in its orbit."
          distance={150}
          weight={330000}
          age={4.5}
          planetImgPath="sun.png"
        />
      </div>

      {/* <h1>MoonPage</h1> */}
    </div>
  );
};

export default MoonPage;
