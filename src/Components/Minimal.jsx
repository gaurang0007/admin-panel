import React from "react";
import Card from "./Card";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
import AreaChart1 from "./AreaChart";
import Temperature from "./Temperature";
import Slider from "./Slider";
import Chart from "./Chart";
import SalesOverview from "./SalesOverview";
import Comments from "./Comments";
import { BarCharts } from "./BarCharts";
import PieCharts from "./PieCharts";
import Messages from "./Messages";
import Chat from "./Chat";
import ToDoList from "./ToDoList";
import MinimalHeader from "./MinimalHeader";

const Minimal = () => {
  return (
    <div id="minimal">
      <MinimalHeader />

      <div className="mainContant" >
        <div className="card-group" >
          <Card
            fontColor="#FB9678"
            count="23"
            title="MYNEW CLIENTS"
            icon={<DesktopWindowsIcon />}
          />
          <Card
            fontColor="#01C0C8"
            count="169"
            title="NEW PROJECTS"
            icon={<BookOutlinedIcon />}
          />
          <Card
            fontColor="#AB8CE4"
            count="157"
            title="NEW INVOICES"
            icon={<InsertDriveFileOutlinedIcon />}
          />
          <Card
            fontColor="#00C292"
            count="431"
            title="All PROJECTS"
            icon={<LocalMallOutlinedIcon />}
          />
        </div>
      </div>

      <div className="row mt-4">
        <Chart />
        <div className=" col-sm-12 col-md-4 col-lr-4">
          <div className="row">
            <Temperature />
            <Slider />
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <Comments />
        <SalesOverview />
      </div>

      <div className="row mt-4">
        <AreaChart1 />
        <div className="col-lg-4 col-md-12">
          <div className="row">
            <BarCharts />
            <PieCharts />
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <ToDoList />
        <Messages />
        <Chat />
      </div>

      <footer class="footer">© 2021 Adminpanal by Gaurang Ghadiya</footer>
    </div>
  );
};

export default Minimal;
