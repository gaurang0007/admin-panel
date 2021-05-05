import React from "react";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";

const NavbarDropdown = () => {
  return (
    <ul
      className="mega-dropdown-menu row"
      style={{ listStyleType: "none", marginLeft: "-21px" }}
    >
      <li className="col-lg-3 col-xlg-2 m-b-30">
        <h4
          className="m-b-20"
          style={{ fontSize: "18px", fontWeight: "375", margin: "20px 0px" }}
        >
          CAROUSEL
        </h4>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div
            className="carousel-inner"
            role="listbox"
            style={{ marginLeft: "-13px" }}
          >
            <div className="carousel-item active">
              <div className="container">
                {" "}
                <img
                  className="d-block img-fluid"
                  src={carousel1}
                  alt="First slide"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <img
                  className="d-block img-fluid"
                  src={carousel2}
                  alt="Second slide"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <img
                  className="d-block img-fluid"
                  src={carousel3}
                  alt="Third slide"
                />
              </div>
            </div>
          </div>
          {/* <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
            style={{ marginLeft: "-5px" }}
          >
            {" "}
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>{" "}
            <span className="sr-only">Previous</span>{" "}
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
            style={{ marginLeft: "-5px" }}
          >
            {" "}
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>{" "}
            <span className="sr-only">Next</span>{" "}
          </a> */}
        </div>
      </li>
      <li className="col-lg-3 m-b-30">
        <h4
          className="m-b-20"
          style={{ fontSize: "18px", fontWeight: "375", margin: "20px 0px" }}
        >
          ACCORDION
        </h4>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2
              className="accordion-header"
              id="headingOne"
              style={{ margin: "-5px" }}
            >
              <button
                className="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Collapsible Group Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="card-body" style={{ fontWeight: "350" }}>
                Anim pariatur cliche reprehenderit, enim eiusmod high.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2
              className="accordion-header"
              id="headingTwo"
              style={{ margin: "-5px" }}
            >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Collapsible Group Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="card-body" style={{ fontWeight: "350" }}>
                Anim pariatur cliche reprehenderit, enim eiusmod high.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2
              className="accordion-header"
              id="headingThree"
              style={{ margin: "-5px" }}
            >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Collapsible Group Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="card-body" style={{ fontWeight: "350" }}>
                Anim pariatur cliche reprehenderit, enim eiusmod high.
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="col-lg-3  m-b-30">
        <h4
          className="m-b-20"
          style={{ fontSize: "18px", fontWeight: "375", margin: "20px 0px" }}
        >
          CONTACT US
        </h4>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputname1"
              placeholder="Enter Name"
            />{" "}
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />{" "}
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleTextarea"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      </li>
      <li className="col-lg-3 col-xlg-4 m-b-30">
        <h4
          className="m-b-20"
          style={{ fontSize: "18px", fontWeight: "375", margin: "20px 0px" }}
        >
          List style
        </h4>
        <ul
          className="lastlist"
          style={{ listStyleType: "none", padding: "0px", fontWeight: "350" }}
        >
          <li className="liststyle">
            <p>
              <i className="fa fa-check text-success"></i> You can give link
            </p>
          </li>
          <li className="liststyle">
            <p>
              <i className="fa fa-check text-success"></i> Give link
            </p>
          </li>
          <li className="liststyle">
            <p>
              <i className="fa fa-check text-success"></i> Another Give link
            </p>
          </li>
          <li className="liststyle">
            <p>
              <i className="fa fa-check text-success"></i> Forth link
            </p>
          </li>
          <li className="liststyle">
            <p>
              <i className="fa fa-check text-success"></i> Another fifth link
            </p>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default NavbarDropdown;
