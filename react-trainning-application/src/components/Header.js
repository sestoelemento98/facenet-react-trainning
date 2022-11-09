import './Header.css'
function Header(props) {
    return(
        <div className="main">
            {props.name}
        </div>
    );
}

Header.defaultProps={
    headerProp:"Hello",
    contentProp: "World"
  }
  
export default Header;