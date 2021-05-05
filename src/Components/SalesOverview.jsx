import React from 'react'

const SalesOverview = () => {
    return (
      <div className="col-lg-6">
        <div className="card" style={{ borderRadius: "0px", border: "none" }}>
          <div className="card-body ">
            <div className="d-flex">
              <div>
                <h5 className="card-title">Sales Overview</h5>
                <h6
                  className="card-subtitle text-muted"
                  style={{ fontWeight: "normal" }}
                >
                  Check the monthly sales{" "}
                </h6>
              </div>

              <div className="ml-auto selectDropdown">
                <select className="form-control b-0 selectDropdown">
                  <option className="selectDropdown">January</option>
                  <option value="1">February</option>
                  <option value="2">March</option>
                  <option value="3">April</option>
                </select>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div
              className="row"
              style={{ backgroundColor: "#F8F9FA", margin: "0px -20px" }}
            >
              <div className="col-6">
                <h3 style={{ fontWeight: "350" }}>January 2021</h3>
                <h5
                  className="font-light m-t-0"
                  style={{ fontWeight: "350", fontSize: "17px" }}
                >
                  Report for this month
                </h5>
              </div>
              <div className="col-6 align-self-center display-6 text-right">
                <h2 className="text-success" style={{ fontWeight: "400" }}>
                  $3,690
                </h2>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-hover no-wrap">
              <thead>
                <tr>
                  <th
                    className="text-center"
                    style={{ fontWeight: "500", fontSize: "15px" }}
                  >
                    #
                  </th>
                  <th style={{ fontWeight: "500", fontSize: "15px" }}>NAME</th>
                  <th style={{ fontWeight: "500", fontSize: "15px" }}>
                    STATUS
                  </th>
                  <th style={{ fontWeight: "500", fontSize: "15px" }}>DATE</th>
                  <th style={{ fontWeight: "500", fontSize: "15px" }}>PRICE</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: "15px" }}>
                <tr>
                  <td className="text-center">1</td>
                  <td className="txt-oflo">Elite admin</td>
                  <td>
                    <span className="badge badge-success badge-pill">sale</span>{" "}
                  </td>
                  <td className="txt-oflo">April 18, 2017</td>
                  <td>
                    <span className="text-success">$24</span>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">2</td>
                  <td className="txt-oflo">Real Homes</td>
                  <td>
                    <span className="badge badge-info badge-pill">extended</span>
                  </td>
                  <td className="txt-oflo">April 19, 2017</td>
                  <td>
                    <span className="text-info">$1250</span>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">3</td>
                  <td className="txt-oflo">Ample Admin</td>
                  <td>
                    <span className="badge badge-info badge-pill">extended</span>
                  </td>
                  <td className="txt-oflo">April 19, 2017</td>
                  <td>
                    <span className="text-info">$1250</span>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">4</td>
                  <td className="txt-oflo">Medical Pro</td>
                  <td>
                    <span className="badge badge-danger badge-pill">tax</span>
                  </td>
                  <td className="txt-oflo">April 20, 2017</td>
                  <td>
                    <span className="text-danger">-$24</span>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">5</td>
                  <td className="txt-oflo">Hosting press html</td>
                  <td>
                    <span className="badge badge-success badge-pill">sale</span>
                  </td>
                  <td className="txt-oflo">April 21, 2017</td>
                  <td>
                    <span className="text-success">$24</span>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">6</td>
                  <td className="txt-oflo">Digital Agency PSD</td>
                  <td>
                    <span className="badge badge-success badge-pill">sale</span>{" "}
                  </td>
                  <td className="txt-oflo">April 23, 2017</td>
                  <td>
                    <span className="text-danger">-$14</span>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">7</td>
                  <td className="txt-oflo">Helping Hands</td>
                  <td>
                    <span className="badge badge-warning badge-pill">member</span>
                  </td>
                  <td className="txt-oflo">April 22, 2017</td>
                  <td>
                    <span className="text-success">$64</span>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">8</td>
                  <td className="txt-oflo">Ample Admin</td>
                  <td>
                    <span className="badge badge-info badge-pill">extended</span>
                  </td>
                  <td className="txt-oflo">April 19, 2017</td>
                  <td>
                    <span className="text-info">$1250</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}

export default SalesOverview
