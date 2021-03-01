import { Create, FiberManualRecord } from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div className='sidebar__info'>
          <h2>Developer Workspace</h2>
          <h3>
            <FiberManualRecord />
            Sjoerd Vink
          </h3>
        </div>
        <Create />
      </div>
    </div>
  );
}
