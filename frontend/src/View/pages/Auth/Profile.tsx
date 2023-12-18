import React from "react";
import "../styles/styles.css";
function Profile() {
  return (
    <div>
      <div className="app__profile">
        <h3>Account</h3>

        <div className="profile__box">
          <span>Detaills</span>
          <div className="ligne__profile">
            <div className="account__circle">
              <img src="" alt="" />
            </div>
            <div className="circle__detail">
              <label htmlFor="">Account Details</label>

              <div>
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="profile__box">
          <span>Settings</span>
          <div className="ligne__profile">
            <div className="account__circle">
              <img src="" alt="" />
            </div>
            <div className="circle__detail">
              <label htmlFor="">Hide balances</label>

              <div>
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>

          <div className="ligne__profile">
            <div className="account__circle">
              <img src="" alt="" />
            </div>
            <div className="circle__detail">
              <label htmlFor="">Hide balances</label>

              <div>
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className="ligne__profile">
            <div className="account__circle">
              <img src="" alt="" />
            </div>
            <div className="circle__detail">
              <label htmlFor="">Hide balances</label>

              <div>
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>

          <div className="ligne__profile">
            <div className="account__circle">
              <img src="" alt="" />
            </div>
            <div className="circle__detail">
              <label htmlFor="">Hide balances</label>

              <div>
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
     

       

        <div className="profile__logout">
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
