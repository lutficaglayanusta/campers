import { Link } from "react-router-dom";
import logo from "../../assets/img/Logo.jpg";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
          <div className="container header-container">
              <Link to="/home">
                <img src={logo} alt="logo" />
              </Link>
              
              <Navbar/>
      </div>
    </header>
  );
};

export default Header;
