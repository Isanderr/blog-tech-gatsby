import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import "prism-themes/themes/prism-atom-dark.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

class JustComments extends React.Component {
  constructor(...args) {
    super(...args);
    this.ref = React.createRef();
  }
  render() {
    return (
      <div
        ref={this.ref}
        className="just-comments"
        data-apikey="6a8a621c-9148-4d6d-8e2e-f73e3f45ff3d"
      />
    );
  }
  componentDidMount() {
    const s = document.createElement("script");
    s.src = "//just-comments.com/w.js";
    s.setAttribute("data-timestamp", +new Date());
    this.ref.current.appendChild(s);
  }
}

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <JustComments />
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};
export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
