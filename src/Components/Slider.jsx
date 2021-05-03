import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.png";

const Slider = () => {
    return (
      <div className="col-md-12">
        <div
          className="card mt-4"
          style={{
            backgroundColor: "#FB9678",
            color: "white",
            borderRadius: "0px",
          }}
        >
          <div className="card-body">
            <Carousel controls={false} interval={3000} indicators={false}>
              <Carousel.Item>
                <h4
                  style={{
                    height: "110px",
                    fontSize: "19px",
                    fontWeight: "normal",
                    width: "90%",
                  }}
                >
                  My Acting blown Your Mind and you also laugh at the moment
                </h4>
                <div class="d-flex">
                  <span>
                    <img
                      style={{ borderRadius: "50%" }}
                      src={img1}
                      alt="user"
                      width="50"
                      class="img-circle"
                    />
                  </span>
                  <span style={{ marginLeft: "10px" }}>
                    <h4
                      class="text-white"
                      style={{
                        fontSize: "18px",
                        marginBottom: "0px",
                        fontWeight: "normal",
                      }}
                    >
                      Govinda
                    </h4>
                    <p class="text-white" style={{ fontSize: "15px" }}>
                      Actor
                    </p>
                  </span>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <h4
                  style={{
                    height: "110px",
                    fontSize: "19px",
                    fontWeight: "normal",
                    width: "90%",
                  }}
                >
                  My Acting blown Your Mind and you also laugh at the moment
                </h4>
                <div class="d-flex no-block">
                  <span>
                    <img
                      style={{ borderRadius: "50%" }}
                      src={img2}
                      alt="user"
                      width="50"
                      class="img-circle"
                    />
                  </span>
                  <span style={{ marginLeft: "10px" }}>
                    <h4
                      class="text-white"
                      style={{
                        fontSize: "18px",
                        marginBottom: "0px",
                        fontWeight: "normal",
                      }}
                    >
                      Govinda
                    </h4>
                    <p class="text-white" style={{ fontSize: "15px" }}>
                      Actor
                    </p>
                  </span>
                </div>
              </Carousel.Item>
             
              <Carousel.Item>
                <h4
                  style={{
                    height: "110px",
                    fontSize: "19px",
                    fontWeight: "normal",
                    width: "90%",
                  }}
                >
                  My Acting blown Your Mind and you also laugh at the moment
                </h4>
                <div class="d-flex no-block">
                  <span>
                    <img
                      style={{ borderRadius: "50%" }}
                      src={img3}
                      alt="user"
                      width="50"
                      class="img-circle"
                    />
                  </span>
                  <span style={{ marginLeft: "10px" }}>
                    <h4
                      class="text-white"
                      style={{
                        fontSize: "18px",
                        marginBottom: "0px",
                        fontWeight: "normal",
                      }}
                    >
                      Govinda
                    </h4>
                    <p class="text-white" style={{ fontSize: "15px" }}>
                      Actor
                    </p>
                  </span>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    );
}

export default Slider
