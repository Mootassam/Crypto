import React from "react";
import "../styles/styles.css";
function Profile() {
  return (
    <div>
      <div className="app__profile">
        <h3>Account</h3>

        <div className="profile__box">
          <span>Detaills</span>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <label htmlFor="">Account Details</label>
            </div>
          </div>
        </div>

        <div className="profile__box">
          <span>Settings</span>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <label htmlFor="">Currency</label>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <label htmlFor=""> language</label>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <label htmlFor="">Theme Details</label>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <label htmlFor="">Hide balances</label>
            </div>
          </div>
        </div>

        <div className="profile__box">
          <span>Support</span>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <label htmlFor="">Contact Supports</label>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <label htmlFor="">Visit Support Center</label>
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
