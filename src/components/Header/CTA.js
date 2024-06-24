import React from "react";
import pdf from "../../image/Sibel Bouzo 2024.pdf";
import { Link } from "react-scroll";
const CTA = () => {
  return (
    <div className="CTA">
      <a href={pdf} download className="btn">
        DownLoad CV
      </a>
      <Link to="Contact" className="btn btn-primary">
        Let's Talk
      </Link>
    </div>
  );
};

export default CTA;
