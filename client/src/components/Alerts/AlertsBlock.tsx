import React, { FC, useState } from "react";
import "./AlertsBlock.scss";
import editPen from "../../img/editPen.svg";
import { AlertT } from "../../graphql/Alerts/GetAlerts";
import { ModalEditAlert } from "./Modals/ModalEditAlerts";

export const AlertsBlock: FC<AlertT> = ({ number, status, color }) => {
  const [modalEditAlerts, setModalEditAlertsActive] = useState(false);

  const toggleEditModal = () => {
    setModalEditAlertsActive((store) => !store);
  };

  return (
    <div className="alerts_block">
      <div className="number_status">
        <span className="alerts_block_number">{number}</span>
        <span className="alerts_block_status">{status}</span>
      </div>
      <span
        className="alerts_block_color"
        style={{
          background: color,
          borderColor: color,
        }}
      ></span>
      <button className="alerts_block_edit">
        <img src={editPen} alt="" onClick={toggleEditModal} />
      </button>
      {modalEditAlerts && (
        <ModalEditAlert
          active={modalEditAlerts}
          setModalEditAlertsActive={setModalEditAlertsActive}
        ></ModalEditAlert>
      )}
    </div>
  );
};

export default AlertsBlock;
