import React from "react";
import "./FactsAndStats.scss";
import DvrIcon from '@mui/icons-material/Dvr';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

let states = [
  {
    icon:  <DvrIcon className="factsAndStats--work--details--icon" />,
    number: "20+",
    done:"Website Developed",
  },
  {
    icon:  <IntegrationInstructionsOutlinedIcon className="factsAndStats--work--details--icon" />,
    number: "30K+",
    done:"Lines Of Code",
  },
  {
    icon:  <EmojiEventsOutlinedIcon className="factsAndStats--work--details--icon" />,
    number: "5",
    done:"Design Awards",
  },
  {
    icon:  <AccessTimeIcon className="factsAndStats--work--details--icon" />,
    number: "1500+",
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
