import React from "react";
import BookShelf from "./bookshelf";
import Nav from "./nav";
import SideBar from "./sidebar";

function Home() {
  return (
    <div className="homeContainer">
      
      <Nav />
      <div className="homeText">
        <h1>Keep the story going........</h1>
        <p>
          Don't let the story end just yet. Continue reading your last book and
          immerse yourself in the world of iterature.
        </p>
        <button>Start reading...</button>
      </div>
      <h3>Popular Now </h3>
      <BookShelf />
    </div>
  );
}

export default Home;
