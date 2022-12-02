import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const styleNavi = {
    display: "flex",
    justifyContent: "center",
  };

  const styleLink = {
    textDecoration: "none",
    color: "#fff",
    fontSize: "30px",
  };



  return (
    <>
      <div className="container-fluid d-flex flex-row justify-content-center gap-5 bg-dark">
        <Link style={styleLink} to="/">
          Home
        </Link>
        <Link style={styleLink} to="/about">
          About
        </Link>
      </div>
      <Outlet className="container-fluid d-flex"/>
    </>
  );
};

export default Layout;
