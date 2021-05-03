import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
     const data = [
       {
         name: "2012",
         iPhone: 50,
         iPad: 80,
         'iPad Touch': 20,
       },
       {
         name: "2013",
         iPhone: 130,
         iPad: 100,
         'iPad Touch': 80,
       },
       {
         name: "2014",
         iPhone: 80,
         iPad: 60,
         'iPad Touch': 70,
       },
       {
         name: "2015",
         iPhone: 70,
         iPad: 200,
         'iPad Touch': 140,
       },
       {
         name: "2016",
         iPhone: 180,
         iPad: 150,
         'iPad Touch': 140,
       },
       {
         name: "2017",
         iPhone: 105,
         iPad: 100,
         'iPad Touch': 80,
       },
       {
         name: "2018",
         iPhone: 250,
         iPad: 150,
         'iPad Touch': 200,
       },
     ];
    return (
      <div className="col-sm-12 col-md-8 col-lr-8">
        <div
          className="card"
          style={{
            borderRadius: "0px",
            border: "none",
            height: "460px",
            width: "100%",
          }}
        >
          <div className="card-body">
            <div style={{ display: "flex" }}>
              <h6>YEARLY SALES</h6>

              <div
                style={{
                  marginLeft: "auto",
                  display: "flex",
                  fontSize: "13px",
                }}
              >
                <i class="fa fa-circle" style={{ color: "#01C0C8" }}></i>&nbsp;
                <p style={{ marginTop: "-5px" }}>Iphone</p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa fa-circle" style={{ color: "#FB9678" }}></i>&nbsp;
                <p style={{ marginTop: "-5px" }}>Ipad</p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa fa-circle" style={{ color: "#AB8CE4" }}></i>&nbsp;
                <p style={{ marginTop: "-5px" }}>Ipad</p>
              </div>
            </div>
            <br />
            <ResponsiveContainer height="90%">
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 10,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3 3" vertical={false} />
                <XAxis
                  dataKey="name"
                  dataKey="name"
                  axisLine={false}
                  tick={{ fill: "gray" }}
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                  dy={7}
                  activeDot={{ r: 5 }}
                />
                <YAxis
                  tick={{ fill: "gray" }}
                  tick={{ fontSize: 12 }}
                  tickCount={77}
                  interval={18}
                  axisLine={false}
                  tickLine={false}
                  dx={-5}
                />
                <Tooltip cursor={false} />
                <Line />
                <Line
                  type="monotone"
                  dataKey="iPhone"
                  stroke="#01C0C8"
                  dot={{ fill: "#01C0C8" }}
                  activeDot={{ r: 5 }}
                />{" "}
                <Line
                  type="monotone"
                  dataKey="iPad Touch"
                  stroke="#AB8CE4"
                  dot={{ fill: "#AB8CE4" }}
                  activeDot={{ r: 5 }}
                />
                <Line
                  type="monotone"
                  dataKey="iPad"
                  stroke="#FB9678"
                  dot={{ fill: "#FB9678" }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
}

export default Chart
