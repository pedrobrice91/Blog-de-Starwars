function Navbar() {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="d-flex">
          <div class="">
            <a class="navbar-brand" href="#">
              <img border="0" src="pngwing.com.png" width="150" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            class="position-absolute top-0 end-0 navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 btn btn-primary">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <button type="button" class="btn btn-primary">
                    Favorites <span class="badge text-bg-secondary">4</span>
                  </button>
                </a>
                <ul class="dropdown-menu">
                  <li class="dropdown-item">
                    An item <i class="fa-solid fa-trash"></i>
                  </li>
                  <li class="dropdown-item">
                    A second item <i class="fa-solid fa-trash"></i>
                  </li>
                  <li class="dropdown-item">
                    A third item <i class="fa-solid fa-trash"></i>
                  </li>
                  <li class="dropdown-item">
                    A fourth item <i class="fa-solid fa-trash"></i>
                  </li>
                  <li class="dropdown-item">
                    And a fifth one <i class="fa-solid fa-trash"></i>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
