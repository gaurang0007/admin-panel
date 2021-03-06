import React from 'react'
import {
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

export const BarCharts = () => {
    const data = [
      {
        name: "Page A",
        uv: 2390,
        amt: 2400,
      },
      {
        name: "Page B",
        uv: 1890,
        amt: 2210,
      },
      {
        name: "Page C",
        uv: 2780,
        amt: 2290,
      },
      {
        name: "Page D",
        uv: 2000,
        amt: 2000,
      },
      {
        name: "Page E",
        uv: 3000,
        amt: 2181,
      },
      {
        name: "Page F",
        uv: 4000,
        amt: 2500,
      },
    ];
    return (
      <div className="col-md-12">
        <div className="card" style={{ borderRadius: "0px", border: "none" }}>
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: "18px", fontWeight: "500" }}
            >
              SALES DIFFERENCE
            </h5>
            <div className="row">
              <div className="col-6" style={{ marginTop: "40px" }}>
                <h1 className="text-info" style={{ fontWeight: "350" }}>
                  $647
                </h1>
                <p className="text-muted">APRIL 2017</p>
                <b style={{ fontWeight: "400" }}>(150 Sales)</b>{" "}
              </div>
              <div className="col-6">
                <div
                  id="sparkline2dash"
                  className="text-right barchart"
                  style={{ height: "150px" }}
                >
                  <ResponsiveContainer width="80%" height="110%">
                    <BarChart
                      width={200}
                      height={200}
                      data={data}
                      barCategoryGap={5}
                    >
                      <Bar dataKey="uv" fill="#25A6F7" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
