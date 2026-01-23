import React from 'react';
import BlogList from '../components/BlogList';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

function Blog() {
  return (
    <div className="App">
      <Nav />
      <BlogList />
      <Footer />
    </div>
  );
}

export default Blog;

