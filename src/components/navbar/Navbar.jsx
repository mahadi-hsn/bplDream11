import dollarImage from '../../assets/DoubleDollar.jpg'
import logo from '../../assets/logo.png'
const Navbar = ({coin}) => {
  return (
    <div>
      <div className="navbar bg-base-100  w-9/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <img src={logo} alt="" />
          </div>
        </div>
        
        <div className="navbar-end">
          <a className="btn">{coin} Coins
            <img src={dollarImage} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
