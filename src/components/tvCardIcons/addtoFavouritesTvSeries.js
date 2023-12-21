import React, { useContext } from "react";
import { TVSeriesContext } from "../../contexts/tvSeriesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavouritesIcon = ({ tvseries }) => {
  const context = useContext(TVSeriesContext);

  const handleAddToFavourites = (e) => {
    e.preventDefault();
    context.addToFavourites(tvseries);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;