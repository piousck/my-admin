import React from "react";
import "./topbar.css";
import PaymentsIcon from "@mui/icons-material/Payments";
import { NotificationsNone} from "@mui/icons-material";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="topLogo">MyAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone/>
            <span className="topIconBadge">2</span>
          </div>
        </div>
      </div>
      Topbar
    </div>
  );
}
