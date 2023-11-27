import React from "react";
import "../History.css";

const Dashboard = ({ parkedData }) => {
  return (
    <div className="dashboard">
      <div className="data-table">
        <div className="data-table-head">
          <div>Car ID</div>
          <div>License No.</div>
          <div>Account ID</div>
          <div>Entry Time</div>
          <div>Exit Time</div>
          <div>Entry Date</div>
          <div>Exit Date</div>
        </div>
        <div className="data-table-objects">
          <div className="data-table-object">
            <div>A1</div>
            <div>ODOZBE8497</div>
            <div>123 456 789 1011</div>
            <div>09:39:39</div>
            <div>02:30:0</div>
            <div>2023-11-24</div>
            <div>2023-11-24</div>
          </div>
          <div className="data-table-object">
            <div>A1</div>
            <div>ODOZBE8497</div>
            <div>123 456 789 1011</div>
            <div>09:39:39</div>
            <div>02:30:0</div>
            <div>2023-11-24</div>
            <div>2023-11-24</div>
          </div>
          <div className="data-table-object">
            <div>A1</div>
            <div>ODOZBE8497</div>
            <div>123 456 789 1011</div>
            <div>09:39:39</div>
            <div>02:30:0</div>
            <div>2023-11-24</div>
            <div>2023-11-24</div>
          </div>
          <div className="data-table-object">
            <div>A1</div>
            <div>ODOZBE8497</div>
            <div>123 456 789 1011</div>
            <div>09:39:39</div>
            <div>02:30:0</div>
            <div>2023-11-24</div>
            <div>2023-11-24</div>
          </div>
          <div className="data-table-object">
            <div>A1</div>
            <div>ODOZBE8497</div>
            <div>123 456 789 1011</div>
            <div>09:39:39</div>
            <div>02:30:0</div>
            <div>2023-11-24</div>
            <div>2023-11-24</div>
          </div>
          <div className="data-table-object">
            <div>A1</div>
            <div>ODOZBE8497</div>
            <div>123 456 789 1011</div>
            <div>09:39:39</div>
            <div>02:30:0</div>
            <div>2023-11-24</div>
            <div>2023-11-24</div>
          </div>
          <div className="data-table-object">
            <div>A1</div>
            <div>ODOZBE8497</div>
            <div>123 456 789 1011</div>
            <div>09:39:39</div>
            <div>02:30:0</div>
            <div>2023-11-24</div>
            <div>2023-11-24</div>
          </div>
          <div className="data-table-object">
            <div>A1</div>
            <div>ODOZBE8497</div>
            <div>123 456 789 1011</div>
            <div>09:39:39</div>
            <div>02:30:0</div>
            <div>2023-11-24</div>
            <div>2023-11-24</div>
          </div>
          <div className="data-table-object">
            <div>A1</div>
            <div>ODOZBE8497</div>
            <div>123 456 789 1011</div>
            <div>09:39:39</div>
            <div>02:30:0</div>
            <div>2023-11-24</div>
            <div>2023-11-24</div>
          </div>
        </div>
        {/* {parkedData ? parkedData.map((parkingData, index) =>                 
                <div className="data-table-objects" key={index}>
                    <div>{parkingData.car_id}</div>
                    <div>{parkingData.license_no}</div>
                    <div>{parkingData.account_id}</div>
                    <div>{parkingData.entry_time}</div>
                </div>
            ) 
            : ""} */}
      </div>
    </div>
  );
};

export default Dashboard;
