import React from "react";
import Bar from "./bar";
import "./modern.css";
import Revenue from "./revenue";

const Modern = () => {
  return (
    <div className="modern">
      <div className="flex my-4 mx-8">
        <div className="box box1 flex">
          <div className="mr-40">
            <h1 className="text-lg">Congratulations Julia</h1>
            <h1 className="font-bold text-2xl my-6">
              $39,358{" "}
              <span className="relative top-2">
                <i class="arrow fa-solid fa-arrow-left"></i>+9%
              </span>
            </h1>
            <button className="download">Download</button>
          </div>
          <div className="img">
            <img src="https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/welcome-bg2-2x-svg.e15f0c3a.svg" />
          </div>
        </div>

        <div className="box box2 mx-8">
          <div className="flex">
            <h1 className="font-medium text-xl">Purchases</h1>
            <button className="shop ml-20">
              <i class="fa-solid fa-bag-shopping"></i>
            </button>
          </div>
          <div>
            <h1 className="font-bold text-2xl">2367</h1>
            <p className="text-slate-400 font-normal">Monthly Sales</p>
          </div>
        </div>
        <div className="box box3">
          <div className="flex">
            <h1 className="font-medium text-xl">Total Earnings</h1>
            <button className="dollar ml-20">
              <i class="fa-solid fa-dollar-sign"></i>
            </button>
          </div>
          <div>
            <h1 className="font-bold text-2xl">$93,438.78</h1>
            <p className="text-slate-400 font-normal">Monthly Revenue</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div>
          <Revenue />
        </div>
        <div>
          <div>
            <Bar />
          </div>
          <div>
            <Bar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modern;
