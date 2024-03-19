import "../Components/Navbar.css";

export default function Navbar() {
  return (
    <div>

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Property.</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link ml-5"  href="#">Home <span className="sr-only">(current)</span></a>
      </li>

      <li className="nav-item active">
        <a className="nav-link ml-5" href="#">About <span className="sr-only">(current)</span></a>
      </li>

      <li className="nav-item active">
        <a className="nav-link ml-5 " href="https://www.propertyfinder.ae/en/find-agent">Broker <span className="sr-only">(current)</span></a>
      </li>

      <li className="nav-item active">
        <a className="nav-link ml-5" href="#">Projects <span className="sr-only">(current)</span></a>
      </li>

      <li className="nav-item active">
        <a className="nav-link ml-5" href="#">Contact us<span className="sr-only">(current)</span></a>
      </li>
     
    </ul>
  </div>
</nav>
</div>

  )
}
