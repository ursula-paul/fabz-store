import DirectoryItem from './componets/directory-items/diretory-componet';


import './categories.styles.scss'


const App = () => {
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'ladies',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'gents',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];

  return <DirectoryItem categories={categories} />;
};







export default App;
