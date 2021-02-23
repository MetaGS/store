import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

const ScrollToTop = ({ history }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, [history.location.pathname]);
  return null;
};

export default withRouter(ScrollToTop);
