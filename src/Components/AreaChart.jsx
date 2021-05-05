import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AreaChart1 = () => {
      const data = [
        {
          name: "2013",
          'Site A': 0,
          'Site B': 0,
          amt: 2400,
        },
        {
          name: "2014",
          'Site A': 130,
          'Site B': 110,
          amt: 2210,
        },
        {
          name: "2015",
          'Site A': 80,
          'Site B': 60,
          amt: 2290,
        },
        {
          name: "2016",
          'Site A': 70,
          'Site B': 200,
          amt: 2000,
        },
        {
          name: "2017",
          'Site A': 180,
          'Site B': 150,
          amt: 2181,
        },
        {
          name: "2018",
          'Site A': 105,
          'Site B': 90,
          amt: 2500,
        },
        {
          name: "2019",
          'Site A': 250,
          'Site B': 150,
          amt: 2100,
        },
  ];
  

    return (
      <div className="col-lg-8 col-md-12">
        <div className="card" style={{ borderRadius: "0px", border: "none" }}>
          <div className="card-body">
            <div className="d-flex m-b-40 align-items-center no-block">
              <h5
                className="card-title "
                style={{ fontSize: "18px", fontWeight: "500" }}
              >
                SALES DIFFERENCE
              </h5>
              <div
                style={{
                  marginLeft: "auto",
                  display: "flex",
                  fontSize: "13px",
                }}
              >
                <i className="fa fa-circle" style={{ color: "#01C0C8" }}></i>&nbsp;
                <p style={{ marginTop: "-5px" }}>SITE A</p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fa fa-circle" style={{ color: "#FB9678" }}></i>&nbsp;
                <p style={{ marginTop: "-5px" }}>SITE B</p>
              </div>
            </div>
            <div style={{ height: "420px", width: "100%" }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  width={500}
                  height={400}
                  data={data}
                  margin={{
                    top: 50,
                    right: 10,
                    left: -10,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tick={{ fill: "gray",fontSize: 12 }}
                    tickLine={false}
                    dy={7}
                    activeDot={{ r: 5 }}
                  />
                  <YAxis
                    tick={{ fill: "gray", fontSize : 12 }}
                    tickCount={77}
                    interval={18}
                    axisLine={false}
                    tickLine={false}
                    dx={-5}
                  />
                  <Tooltip cursor={false} />
                  <Area
                    // type="monotone"
                    dataKey="Site A"
                    stroke="#e6e7e9"
                    fill="#e6e7e9"
                    activeDot={{
                      fill: "lightgray",
                      stroke: "#fff",
                      strokeWidth: 1,
                      r: 3,
                    }}
                  />
                  <Area
                    // type="monotone"
                    dataKey="Site B"
                    stroke="#97EBEF"
                    fill="#97EBEF"
                    activeDot={{
                      fill: "#01C0C8",
                      stroke: "#fff",
                      strokeWidth: 1,
                      r: 3,
                    }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AreaChart1
