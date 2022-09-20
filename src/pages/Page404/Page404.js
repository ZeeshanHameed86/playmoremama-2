import React from "react";
import "./page404.css";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <section className="page-404">
      <div>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </section>
  );
};

export default Page404;
