const Header = () => {
  return (
    <>
      <nav>
        <div className="left-nav">
          <h2>
            <span>snap</span>
          </h2>
          <ul>
            <li>Features</li>
            <li>Company</li>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </div>
        <div className="right-nav">
          <p>Login</p>
          <p className="register-btn">Register</p>
        </div>
      </nav>
    </>
  );
};

export default Header;
