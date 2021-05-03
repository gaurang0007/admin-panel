import React from 'react'

const SalesOverview = () => {
    return (
      <div className="col-lg-6">
        <div className="card" style={{ borderRadius: "0px", border: "none" }}>
          <div className="card-body ">
            <div className="d-flex">
              <div>
                <h5 class="card-title">Sales Overview</h5>
                <h6
                  class="card-subtitle text-muted"
                  style={{ fontWeight: "normal" }}
                >
                  Check the monthly sales{" "}
                </h6>
              </div>

              <div class="ml-auto selectDropdown">
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
              class="row"
              style={{ backgroundColor: "#F8F9FA", margin: "0px -20px" }}
            >
              <div class="col-6">
                <h3 style={{ fontWeight: "350" }}>January 2021</h3>
                <h5
                  class="font-light m-t-0"
                  style={{ fontWeight: "350", fontSize: "17px" }}
                >
                  Report for this month
                </h5>
              </div>
              <div class="col-6 align-self-center display-6 text-right">
                <h2 class="text-success" style={{ fontWeight: "400" }}>
                  $3,690
                </h2>
              </div>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table table-hover no-wrap">
              <thead>
                <tr>
                  <th
                    class="text-center"
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
                  <td class="text-center">1</td>
                  <td class="txt-oflo">Elite admin</td>
                  <td>
                    <span class="badge badge-success badge-pill">sale</span>{" "}
                  </td>
                  <td class="txt-oflo">April 18, 2017</td>
                  <td>
                    <span class="text-success">$24</span>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">2</td>
                  <td class="txt-oflo">Real Homes</td>
                  <td>
                    <span class="badge badge-info badge-pill">extended</span>
                  </td>
                  <td class="txt-oflo">April 19, 2017</td>
                  <td>
                    <span class="text-info">$1250</span>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">3</td>
                  <td class="txt-oflo">Ample Admin</td>
                  <td>
                    <span class="badge badge-info badge-pill">extended</span>
                  </td>
                  <td class="txt-oflo">April 19, 2017</td>
                  <td>
                    <span class="text-info">$1250</span>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">4</td>
                  <td class="txt-oflo">Medical Pro</td>
                  <td>
                    <span class="badge badge-danger badge-pill">tax</span>
                  </td>
                  <td class="txt-oflo">April 20, 2017</td>
                  <td>
                    <span class="text-danger">-$24</span>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">5</td>
                  <td class="txt-oflo">Hosting press html</td>
                  <td>
                    <span class="badge badge-success badge-pill">sale</span>
                  </td>
                  <td class="txt-oflo">April 21, 2017</td>
                  <td>
                    <span class="text-success">$24</span>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">6</td>
                  <td class="txt-oflo">Digital Agency PSD</td>
                  <td>
                    <span class="badge badge-success badge-pill">sale</span>{" "}
                  </td>
                  <td class="txt-oflo">April 23, 2017</td>
                  <td>
                    <span class="text-danger">-$14</span>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">7</td>
                  <td class="txt-oflo">Helping Hands</td>
                  <td>
                    <span class="badge badge-warning badge-pill">member</span>
                  </td>
                  <td class="txt-oflo">April 22, 2017</td>
                  <td>
                    <span class="text-success">$64</span>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">8</td>
                  <td class="txt-oflo">Ample Admin</td>
                  <td>
                    <span class="badge badge-info badge-pill">extended</span>
                  </td>
                  <td class="txt-oflo">April 19, 2017</td>
                  <td>
                    <span class="text-info">$1250</span>
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
