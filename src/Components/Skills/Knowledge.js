import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Knowledge=()=> {
  return (
    <ImageList sx={{ width: "100%", height: "auto", p:20 }} cols={3}  key="Subheader" >
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{m:1}} >
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
          
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <FavoriteBorderIcon />
             
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default Knowledge;

const itemData = [
  {
    img: './Images/html.jpg',
    title: 'HTML5',
    author: 'HyperText Markup Language',
    featured: true,
  },
  {
    img: './Images/css.png',
    title: 'CSS3',
    author: 'Cascading Style Sheets ',
  },
  {
    img: './Images/scss.jpg',
    title: 'Sass/Scss',
    author: 'Syntactically Awesome Style Sheet ',
  },

  {
    img: './Images/js.png',
    title: 'JavaScript',
    author: 'Programming Language ',
  },
  {
    img: './Images/es6.jpg',
    title: 'ES6',
    author: 'ECMAScript6',
  },
  {
    img: './Images/dom.png',
    title: 'DOM, BOM',
    author: '@Document Object Model, ',
    featured: true,
  },
  {
    img: './Images/DevTool2.png',
    title: 'DevTool',
    author: 'Browser Object Model ',
  },
  {
    img: './Images/git2.png',
    title: ' Github & Git',
    author: 'Internet hosting for software development and version control using Git',
  },
  {
    img: './Images/reactjs.jpg',
    title: ' ReactJs',
    author: 'ReactJS is a free and open-source front-end JavaScript library.',
  },
  {
    img: './Images/redux2.png',
    title: ' Redux',
    author: 'Redux is an open-source JavaScript library for centralizing application state.',
  },
  {
    img: './Images/mui2.png',
    title: ' MUI(Material-ui)',
    author: 'MUI is a simple and customizable component library.',
  },
  {
    img: './Images/Bootstrap2.png',
    title: 'Bootstrap',
    author: 'Bootstrap is a free and open-source CSS framework.',
  },
  {
    img: './Images/router.png',
    title: ' Rear Router',
    author: 'React Router is a standard library for routing in React.',
  },
  
  {
    img: './Images/motion2.png',
    title: ' Framer Motion',
    author: ' Framer Motion is a motion library for React on the web.',
  }
];
