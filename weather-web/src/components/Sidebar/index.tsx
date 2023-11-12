import "./sidebar.scss";
import Logo from "../../assets/images/logo.png";
import Weather from "../../assets/images/sunny-rainy.png";
import Explore from "../../assets/images/explore.png";
import Cities from "../../assets/images/location-sm.png";
import Settings from "../../assets/images/settings.png";

interface ISidebarProps {
  placeholder?: string;
}

const Sidebar: React.FC<ISidebarProps> = ({ placeholder }) => {
  return (
    <div className="sidebar">
      <img src={Logo} alt="weather" />
      <div className="sidebar__list">
        <img src={Weather} alt="weather" />
        <h3>weather</h3>
      </div>
      <div className="sidebar__list disabled">
        <img src={Explore} alt="weather" />
        <h3>explore</h3>
      </div>
      <div className="sidebar__list disabled">
        <img src={Cities} alt="weather" />
        <h3>cities</h3>
      </div>
      <div className="sidebar__list disabled">
        <img src={Settings} alt="weather" />
        <h3>settings</h3>
      </div>
    </div>
  );
};

export default Sidebar;
