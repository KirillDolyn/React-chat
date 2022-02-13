import React from "react";

import "./Message.scss";
import classNames from "classnames";
import { message } from "antd";
import Time from "../time";

const Message = ({ avatar, text, user, date, isMe, attachments, isTyping }) => (
  <div
    className={classNames("message", {
      "message--isme": isMe,
      "message--is-typing": isTyping,
      "message--image": attachments && attachments.length === 1,
    })}
  >
    <div className="message__avatar">
      <img src={avatar} alt={`avatar `}></img>
    </div>
    <div className="message__content">
      <div className="message__info">
        {(text || isTyping) && (
          <div className="message__buble">
            {text && <span className="message__text">{text}</span>}
            {isTyping && (
              <div className="message__typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>
        )}
        <div className="message__attachments">
          {attachments &&
            attachments.map((item) => (
              <div className="message__attachments-item">
                <img src={item.url} alt=""></img>
              </div>
            ))}
        </div>
      </div>
      {date && <spane className="message__date">{<Time />}</spane>}
    </div>
  </div>
);
Message.defaultProps = {
  user: {},
};
export default Message;
