import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Link } from "react-router-dom";

const WriteReviewIcon = ({ tvseries }) => {
  return (
    <Link
      to={'/reviews/form'}
      state={{
          tvseriesId: tvseries.id,
        }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WriteReviewIcon;