import { Button } from "@mui/material";
import React from "react";
import { Daum, Root } from "../extras/types";

const sampleURL =
  "https://i.ytimg.com/vi/QCtEe-zsCtQ/maxresdefault.jpg?v=631164ec";

function Thumbnail(props: Daum) {
  function downloadThumbnail() {
    if (props.thumbnail === "" || props.thumbnail.length < 20) {
      alert("Something went wrong while generating thumbnail URL..");
      return;
    }
    window.open(props.thumbnail, "_blank");
  }

  return (
    <div>
      <div className="border border-gray-400 shadow-lg p-4 mt-4 mb-2">
        <img className="w-full h-52 " alt="" src={props.thumbnail} />
        <Button
          onClick={downloadThumbnail}
          className="w-full"
          sx={{ marginTop: "5px", color: "blue", fontWeight: "bold" }}
          variant="outlined"
        >
          Download [{props.resolution}px]
        </Button>
        <Button
          onClick={downloadThumbnail}
          className="w-full"
          sx={{ marginTop: "5px", color: "white", fontWeight: "bold" }}
          variant="contained"
        >
          View Thumbnail
        </Button>
      </div>
    </div>
  );
}

export default Thumbnail;
