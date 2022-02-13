import React from "react";

import formatDistanceToNow from "date-fns/formatDistanceToNow";

import moment from "moment";

const Time = () => (
  <div> {moment().locale("ru").startOf("hour").fromNow()}</div>
);
export default Time;
