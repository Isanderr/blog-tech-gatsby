import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/background-posts.png')`
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              textShadow: "2px 4px 6px #000000",
              backgroundColor: "rgba(254, 254, 254, 0.6)",
              color: "white",
              padding: "1rem",
              borderRadius: "20px"
            }}
          >
            Usiądź na chwilę i poczytaj...
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
