const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 bg-dark shadow-md">
      <p className="col-md-4 mt-1 text-white ps-3 justify-content-between align-items-center">
        Love
        <i className="bi bi-balloon-heart-fill text-danger"></i>
        App &copy; {new Date().getFullYear()}
      </p>

      <a
        href="/"
        className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <span className="align-items-center mb-3 mb-md-0 text-decoration-none">
          <i className="bi bi-bullseye"></i>
        </span>
      </a>

      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-muted">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-muted">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-muted">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-muted">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-muted">
            About
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
