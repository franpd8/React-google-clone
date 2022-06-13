import "./Search.css";
import MicroImg from "../../assets/micro.svg";
import LupaImg from "../../assets/search.svg";

const GoogleLogo =
  "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";

const Search = (search) => {
  return (
    <div className="GoogleContainer">
      <img src={GoogleLogo} />
      <div className="InputContainer">
        <img className="search" src={LupaImg} />
        <input type="text" autoFocus />
        <img className="micro" src={MicroImg} />
      </div>
      <div className="buttonsContainer">
        {/* ver opcion de hacer con map */}
        <button>{search.items.buttons.button1}</button>
        <button>{search.items.buttons.button2}</button>
      </div>
      <div className="languageContainer">
        <span>Ofrecido por google en:</span>
        {/* ver opcion de hacer con map */}
        <a href="">{search.items.languages.language1}</a>
        <a href="">{search.items.languages.language2}</a>
        <a href="">{search.items.languages.language3}</a>
      </div>
    </div>
  );
};
export default Search;
