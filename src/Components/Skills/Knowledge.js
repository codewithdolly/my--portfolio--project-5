import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import { motion } from "framer-motion";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Knowledge = () => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 2, x: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "50px",
          paddingTop: "3rem",
        }}
      >
        My Skills(More) <br />
        ~~~~~~~~~~~~~~
      </motion.h1>

      <ImageList
        sx={{ width: "100%", height: "auto", px: 20, py: 10 }}
        cols={3}
        key="Subheader"
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} sx={{ m: ".8" }}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.use}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <FavoriteBorderIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default Knowledge;

const itemData = [
  {
    img: "./Images/html.jpg",
    title: "HTML5",
    use: "HyperText Markup Language",
    featured: true,
  },
  {
    img: "./Images/css.png",
    title: "CSS3",
    use: "Cascading Style Sheets ",
  },
  {
    img: "./Images/scss.jpg",
    title: "Sass/Scss",
    use: "Syntactically Awesome Style Sheet ",
  },

  {
    img: "./Images/js.png",
    title: "JavaScript",
    use: "Programming Language ",
  },
  {
    img: "./Images/es6.jpg",
    title: "ES6",
    use: "ECMAScript6",
  },
  {
    img: "./Images/dom.png",
    title: "DOM, BOM",
    use: "@Document Object Model, ",
    featured: true,
  },
  {
    img: "./Images/Bootstrap2.png",
    title: "Bootstrap",
    use: "Bootstrap is a free and open-source CSS framework.",
  },

  {
    img: "./Images/reactjs.jpg",
    title: " ReactJs",
    use: "ReactJS is a free and open-source front-end JavaScript library.",
  },
  {
    img: "./Images/redux2.png",
    title: " Redux",
    use: "Redux is an open-source JavaScript library for centralizing application state.",
  },
  {
    img: "./Images/redux thunk.png",
    title: " Github & Git",
    use: "Redux Thunk middleware allows you to write action creators that return a function instead of an action.",
  },
  {
    img: "./Images/router.png",
    title: " React Router",
    use: "React Router is a standard library for routing in React.",
  },
  {
    img: "./Images/mui2.png",
    title: " MUI(Material-ui)",
    use: "MUI is a simple and customizable component library.",
  },
  {
    img: "./Images/git2.png",
    title: " Github & Git",
    use: "Internet hosting for software development and version control using Git",
  },
  {
    img: "./Images/DevTool2.png",
    title: "DevTool",
    use: "Browser Object Model ",
  },

  {
    img: "./Images/nextjs.png",
    title: "NextJs",
    use: "Production grade React applications that scale. The world's leading companies use Next.js by Vercel to build static and dynamic websites",
  },
  {
    img: "./Images/motion2.png",
    title: " Framer Motion",
    use: " Framer Motion is a motion library for React on the web.",
  },
];
