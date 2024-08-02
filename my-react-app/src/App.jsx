
import './App.css'
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleCard from './components/ArticleCard';
import TutorialCard from './components/TutorialCard';

const articles = [
  {
    image: 'https://picsum.photos/200',
    title: 'Article 1',
    description: 'Description of article 1',
    rating: 5,
    author: 'Author 1'
  },

  {
    image: 'https://picsum.photos/210',
    title: 'Article 2',
    description: 'Description of article 2',
    rating: 5,
    author: 'Author 2'
  },

  {
    image: 'https://picsum.photos/215',
    title: 'Article 3',
    description: 'Description of article 3',
    rating: 5,
    author: 'Author 3'
  },

];

const tutorials = [
  {
    image: 'https://picsum.photos/230',
    title: 'Tutorial 1',
    description: 'Description of tutorial 1',
    rating: 5,
    username: 'Username 1'
  },
  
  {
    image: 'https://picsum.photos/240',
    title: 'Tutorial 2',
    description: 'Description of tutorial 2',
    rating: 5,
    username: 'Username 2'
  },

  {
    image: 'https://picsum.photos/245',
    title: 'Tutorial 3',
    description: 'Description of tutorial 3',
    rating: 5,
    username: 'Username 3'
  },
];

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <section className="hero-image">
          <img src="https://picsum.photos/800/300" alt="Hero" />
        </section>
        <section>
          <h2>Featured Articles</h2>
          <div className="article-list">
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
          <button className="view-all">See all articles</button>
        </section>
        <section>
          <h2>Featured Tutorials</h2>
          <div className="tutorial-list">
            {tutorials.map((tutorial, index) => (
              <TutorialCard key={index} tutorial={tutorial} />
            ))}
          </div>
          <button className="view-all">See all tutorials</button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
