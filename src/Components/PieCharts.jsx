import React from 'react'
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import {  Cell} from "recharts";



const PieCharts = () => {
    const data01 = [
      { name: "Group A", value: 330 },
      { name: "Group B", value: 450 },
      { name: "Group C", value: 230 },
    ];

    const COLORS = ["#EAECEE", "#7D5AB6", "#01FFFF"];
    return (
      <div className="col-md-12 mt-4">
        <div
          className="card bg-purple text-white"
          style={{
            backgroundColor: "#AB8CE4",
            borderRadius: "0px",
            border: "none",
          }}
        >
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: "18px", fontWeight: "500" }}
            >
              VISIT STATASTICS
            </h5>

            <div className="row">
              <div className="col-6" style={{ marginTop: "40px" }}>
                <h1 className="text-white" style={{ fontWeight: "350" }}>
                  $347
                </h1>
                <p className="light_op_text">APRIL 2021</p>
                <b className="text-white" style={{ fontWeight: "400" }}>
                  (150 Sales)
                </b>
              </div>
              <div className="col-6">
                <div
                  id="sales1"
                  className="text-right"
                  style={{ height: "230px", width: "100%", position:'absolute', top:'-45%', left:'10%' }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={100} height={100}>
                      <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx="50%"
                        cy="50%"
                        outerRadius={55}
                        fill="red"
                        stroke="none"
                      >
                        {data01.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>

                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default PieCharts
