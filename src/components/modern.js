import React from "react";
import "./modern.css";

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

        <div className="box">
          <div>
            <h1>Congratulations Julia</h1>
            <h1 className="font-bold ">$39,358</h1>
            <span>
              <i class="fa-solid fa-arrow-left"></i>+9%
            </span>
            <button>Download</button>
          </div>
        </div>
        <div className="box">
          <h1>Congratulations Julia</h1>
          <h1>
            $39,358{" "}
            <span>
              <i class="fa-solid fa-arrow-left"></i>+9%
            </span>
          </h1>
          <button>Download</button>
        </div>
      </div>
    </div>
  );
};

export default Modern;
