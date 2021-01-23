import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { signOut } from "../firebase/auth";

import icon from "../assets/profile.svg";
import logout from "../assets/logout.svg";
import "./ProfileIcon.css";
const ProfileIcon = (props) => {
  const [showBody, setShowBody] = useState(false);

  const onShow = (e) => {
    setShowBody(!showBody);
  };

  return (
    <div className="profile-icon">
      <img src={icon} alt="Profile svg icon" onClick={onShow} />
      {showBody && (
        <div
          className="profile-icon-body"
          onClick={() => {
            setShowBody(false);
          }}
        >
          <ul className="profile-icon-actions">
            <li>Profile</li>
            <li>
              <Link
                to="/favorites"
                style={{ display: "block", textDecoration: "none" }}
              >
                <div>Favorites</div>
              </Link>
            </li>
            <li className="profile-logout">
              <img src={logout} className="logout-icon" />
              <span onClick={signOut}>Logout</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

ProfileIcon.propTypes = {};

export default ProfileIcon;
