import React from "react";
import PropTypes from "prop-types";

const InputDetail = ({ Icon, label, children, labelId, className = "" }) => {
  return (
    <>
      <label for={labelId} className="order-form-label">
        {label}
      </label>
      <div className={`delivery-details ${className}`}>
        {Icon && <Icon className="detail-field-icon" />}
        {children}
      </div>
    </>
  );
};

InputDetail.propTypes = {};

export default InputDetail;
