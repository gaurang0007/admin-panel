import React from "react";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";

const NavbarDropdown = () => {
  return (
    <ul
      class="mega-dropdown-menu row"
      style={{ listStyleType: "none", marginLeft: "-21px" }}
    >
      <li class="col-lg-3 col-xlg-2 m-b-30">
        <h4
          class="m-b-20"
          style={{ fontSize: "18px", fontWeight: "375", margin: "20px 0px" }}
        >
          CAROUSEL
        </h4>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div
            class="carousel-inner"
            role="listbox"
            style={{ marginLeft: "-13px" }}
          >
            <div class="carousel-item active">
              <div class="container">
                {" "}
                <img
                  class="d-block img-fluid"
                  src={carousel1}
                  alt="First slide"
                />
              </div>
            </div>
            <div class="carousel-item">
              <div class="container">
                <img
                  class="d-block img-fluid"
                  src={carousel2}
                  alt="Second slide"
                />
              </div>
            </div>
            <div class="carousel-item">
              <div class="container">
                <img
                  class="d-block img-fluid"
                  src={carousel3}
                  alt="Third slide"
                />
              </div>
            </div>
          </div>
          {/* <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
            style={{ marginLeft: "-5px" }}
          >
            {" "}
            <span
              class="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>{" "}
            <span class="sr-only">Previous</span>{" "}
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
            style={{ marginLeft: "-5px" }}
          >
            {" "}
            <span
              class="carousel-control-next-icon"
              aria-hidden="true"
            ></span>{" "}
            <span class="sr-only">Next</span>{" "}
          </a> */}
        </div>
      </li>
      <li class="col-lg-3 m-b-30">
        <h4
          class="m-b-20"
          style={{ fontSize: "18px", fontWeight: "375", margin: "20px 0px" }}
        >
          ACCORDION
        </h4>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2
              class="accordion-header"
              id="headingOne"
              style={{ margin: "-5px" }}
            >
              <button
                class="accordion-button"
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
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body" style={{ fontWeight: "350" }}>
                Anim pariatur cliche reprehenderit, enim eiusmod high.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2
              class="accordion-header"
              id="headingTwo"
              style={{ margin: "-5px" }}
            >
              <button
                class="accordion-button collapsed"
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
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body" style={{ fontWeight: "350" }}>
                Anim pariatur cliche reprehenderit, enim eiusmod high.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2
              class="accordion-header"
              id="headingThree"
              style={{ margin: "-5px" }}
            >
              <button
                class="accordion-button collapsed"
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
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body" style={{ fontWeight: "350" }}>
                Anim pariatur cliche reprehenderit, enim eiusmod high.
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="col-lg-3  m-b-30">
        <h4
          class="m-b-20"
          style={{ fontSize: "18px", fontWeight: "375", margin: "20px 0px" }}
        >
          CONTACT US
        </h4>
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="exampleInputname1"
              placeholder="Enter Name"
            />{" "}
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              placeholder="Enter email"
            />{" "}
          </div>
          <div class="form-group">
            <textarea
              class="form-control"
              id="exampleTextarea"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-info">
            Submit
          </button>
        </form>
      </li>
      <li class="col-lg-3 col-xlg-4 m-b-30">
        <h4
          class="m-b-20"
          style={{ fontSize: "18px", fontWeight: "375", margin: "20px 0px" }}
        >
          List style
        </h4>
        <ul
          class="lastlist"
          style={{ listStyleType: "none", padding: "0px", fontWeight: "350" }}
        >
          <li className="liststyle">
            <p>
              <i class="fa fa-check text-success"></i> You can give link
            </p>
          </li>
          <li className="liststyle">
            <p>
              <i class="fa fa-check text-success"></i> Give link
            </p>
          </li>
          <li className="liststyle">
            <p>
              <i class="fa fa-check text-success"></i> Another Give link
            </p>
          </li>
          <li className="liststyle">
            <p>
              <i class="fa fa-check text-success"></i> Forth link
            </p>
          </li>
          <li className="liststyle">
            <p>
              <i class="fa fa-check text-success"></i> Another fifth link
            </p>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default NavbarDropdown;
