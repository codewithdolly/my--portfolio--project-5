import React from "react";
import "./FactsAndStats.scss";
import DvrIcon from '@mui/icons-material/Dvr';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';

let states = [
  {
    icon:  <DvrIcon className="factsAndStats--work--details--icon" />,
    number: "15+",
    done:"Website Developed",
  },
  {
    icon:  <IntegrationInstructionsOutlinedIcon className="factsAndStats--work--details--icon" />,
    number: "30K+",
    done:"Lines Of Code",
  },
  {
    icon:  <EmojiEventsOutlinedIcon className="factsAndStats--work--details--icon" />,
    number: "2",
    done:"Design Awards",
  },
  {
    icon:  <EngineeringOutlinedIcon className="factsAndStats--work--details--icon" />,
    number: "875+",
    done:"Working hours",
  },
  
];

const FactsAndStats = () => {
  return (
    <>
      <div className="factsAndStats">
        <h2>Facts & Stats</h2>
        <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>

        {states.map((state) => {
          return (
            <div className="factsAndStats--work">
              <div className="factsAndStats--work--details">
               {state.icon}
                <div>
                  <h3>{state.number}</h3>
                  <p>{state.done}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FactsAndStats;
