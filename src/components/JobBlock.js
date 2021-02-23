import React, { useState } from "react";
import PropTypes from "prop-types";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaLanguage, FaRegFileWord } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import JobIcon from "./JobIcon";
import "./JobBlock.css";
import seoImage from "../assets/job-seo.jpg";
import Button from "./Button";

const dataDefault = {
  icons: [
    {
      Icon: require("react-icons/hi").HiOutlineDesktopComputer,
      placeholder: "Requires advanced pc skills",
    },
    {
      Icon: require("react-icons/fa").FaLanguage,
      placeholder: "Requires English language",
    },
    {
      Icon: require("react-icons/fa").FaRegFileWord,
      placeholder: "Be profi at MS Word",
    },
    {
      Icon: require("react-icons/gi").GiNetworkBars,
      placeholder: "Knowledge to build bars",
    },
  ],
  title: "SEO optimization expert",
  description: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse maxime, eos doloribus illum, delectus quibusdam deleniti mollitia commodi dolor quis, iste magni animi ratione incidunt.`,
  image: require("../assets/job-seo.jpg"),
};

const JobBlock = ({ data = dataDefault }) => {
  const [showApplyBlock, setShowApplyBlock] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const applyToJob = ({ target }) => {
    console.log("click");
    setShowApplyBlock(!showApplyBlock);
  };

  const submitForJob = (e) => {
    e.preventDefault();
    console.log("submitted");

    setSubmitted(true);
    setTimeout(() => {
      setShowApplyBlock(false);
    }, 3000);
  };

  const applyBlock = (
    <div className="apply-block">
      {submitted && "Thank You! We will consider You!"}
      {!submitted && (
        <>
          <div className="apply-block-close">
            <Button
              type=" md"
              clas
              onClick={applyToJob}
              className="apply-close"
            >
              close
            </Button>
          </div>
          <form className="job-submit-cv" onSubmit={submitForJob}>
            <label htmlFor="job-title">Job Title</label>
            <input type="text" id="job-title" value={data.title} disabled />
            <label htmlFor="cv">Choose Your CV file</label>
            <input type="file" accept=".pdf" name="cv" id="cv" />
            <Button type="md" className="job-submit-btn">
              Submit
            </Button>
          </form>
        </>
      )}
    </div>
  );

  return (
    <div className="job-block">
      {showApplyBlock && applyBlock}
      <div className="job-column1 job-column">
        <h1 className="job-title">{data.title}</h1>
        <p className="job-desc">{data.description}</p>
        <ul className="job-icons">
          {data?.icons?.map((data, index) => {
            return <JobIcon {...data} key={data?.placeholder + index} />;
          })}
        </ul>
        <Button
          type="rounded md primary"
          className="job-apply"
          onClick={applyToJob}
        >
          Apply
        </Button>
      </div>
      <div className="job-column2 job-column">
        <img src={seoImage} alt="apply for seo job " className="job-image" />
      </div>
    </div>
  );
};

JobBlock.propTypes = {};

export default JobBlock;
