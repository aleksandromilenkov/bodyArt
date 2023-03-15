import React from "react";
import { Typography, Box, Stack } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos) {
    return;
  }
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        alignItems="center"
        flexWrap="wrap"
        sx={{
          flexDirection: { lg: "row" },
          justifyContent: { lg: "center" },
          gap: { lg: "50px", xs: "30px" },
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, idx) => {
          return (
            <a
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              key={idx}
              className="exercise-video"
              target="_blank"
              rel="noreferrer"
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box>
                <Typography variant="h5" color="#000">
                  {item.video.title}
                </Typography>
                <Typography variant="h6" color="#000">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
