import classNames from "classnames";
import React from "react";

import Time from "../time";
import "./DialogItem.scss";

const getAvatar = (avatar) => {
  if (avatar) {
    return (
      <img
        src="https://sun1-26.userapi.com/s/v1/if1/f3yDqSOixn09ckDvA4ea7CSIvO7zGhHBMG5fj02C4MdRIZeHkuvgDEBLDvn1e_I9ioJ5pDsU.jpg?size=100x100&quality=96&crop=0,349,1536,1536&ava=1"
        alt=""
      ></img>
    );
  } else {
    //avat
  }
};

const DialogItem = ({ user, message, unriaded }) => (
  <div
    className={classNames("dialogs__item", {
      "dialogs__item--online": user.isOnline,
    })}
  >
    <div className="dialogs__item-avatar">
      {/* <img src={user.avatar} alt="User_avatar"></img> */}
      {getAvatar(
        "https://sun1-26.userapi.com/s/v1/if1/f3yDqSOixn09ckDvA4ea7CSIvO7zGhHBMG5fj02C4MdRIZeHkuvgDEBLDvn1e_I9ioJ5pDsU.jpg?size=100x100&quality=96&crop=0,349,1536,1536&ava=1"
      )}
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>Антон Павлович</b>
        <span>
          13.02
          {/* <Time /> */}
        </span>
      </div>

      <div className="dialogs__item-info-button">
        <p>
          писатель с образованием врача, создал более 300 произведений. В наши
          дни его пьесы ставят и экранизируют не только в России, но и за
          рубежом.
        </p>
        {unriaded > 0 && (
          <div className="dialogs__item-info-button-count">{unriaded}</div>
        )}
      </div>
    </div>
  </div>
);

export default DialogItem;
