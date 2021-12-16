import React from "react";
import "./HomeService.scss";

import { motion } from "framer-motion";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import PermDataSettingIcon from "@mui/icons-material/PermDataSetting";
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import InsightsIcon from '@mui/icons-material/Insights';

const services = [
  {
    icon: <ImportantDevicesIcon className="homeService--cards--icon" />,
    header: "Web Development",
    about:
      "Sed eleifend sed nibh nec fringilla. Donec eu cursus sem vitae tristique ante ibero",
  },

  {
    icon: <PermDataSettingIcon className="homeService--cards--icon" />,
    header: "SEO",
    about:
      "Sed eleifend sed nibh nec fringilla. Donec eu cursus sem vitae tristique ante ibero",
  },
  {
    icon: <LeaderboardIcon className="homeService--cards--icon" />,
    header: "Google Analytics",
    about:
      "Sed eleifend sed nibh nec fringilla. Donec eu cursus sem vitae tristique ante ibero",
  },

  {
    icon: <InsightsIcon className="homeService--cards--icon" />,
    header: "Search Console",
    about:
      "Sed eleifend sed nibh nec fringilla. Donec eu cursus sem vitae tristique ante ibero",
  },
  {
    icon: <PhotoCameraIcon className="homeService--cards--icon" />,
    header: "Photography",
    about:
      "Sed eleifend sed nibh nec fringilla. Donec eu cursus sem vitae tristique ante ibero",
  },

  {
    icon: <VideoLibraryIcon className="homeService--cards--icon" />,
    header: "Video Editing",
    about:
      "Sed eleifend sed nibh nec fringilla. Donec eu cursus sem vitae tristique ante ibero",
  },

  
];

const HomeService = () => {
  return (
    <>
      <div className="homeService">
        <motion.h2
          animate={{ x: 0 }}
          initial={{ x: -300 }}
          transition={{ duration: 1 }}
          className="homeService--service"
        >
          My Services
        </motion.h2>
        <p className="homeService--border">~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
        {services.map((service) => (
          <>
            <div
              className="homeService--cards"
            >
              <p>{service.icon}</p>
              <h2 className="homeService--cards--header">{service.header}</h2>
              <p className="homeService--cards--abt">{service.about}</p>
            </div>
          </>
        ))}
      </div>
      

    </>
  );
};

export default HomeService;
