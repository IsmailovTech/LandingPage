import React from "react";
import PropTypes from "prop-types";
import "../vedio/Vedio.css";

const Vedio = () => {
  return (
    <div className="video-responsive">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/2GonoPx9DgU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  );
};

Vedio.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default Vedio;
