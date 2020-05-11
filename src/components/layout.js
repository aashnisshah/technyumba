import React from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";
import "../styles/main.css";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    );
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        <h3>Subscribe to my Newsletter</h3>
        <form
          netlify
          name="contact"
          data-netlify-honeypot="bot-field"
          action="success"
        >
          <input
            class="form-control valid"
            name="name"
            id="name"
            type="text"
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = 'Enter your Name'"
            placeholder="Enter your Name"
          />
          <input
            class="form-control valid"
            name="email"
            id="email"
            type="email"
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = 'Enter your Email'"
            placeholder="Enter your Email"
          />
          <input
            class="hidden"
            name="bot-field"
            placeholder="Don't fill this out if you're a human"
          />
          <button type="submit" class="button button-contactForm boxed-btn">
            Sign Up
          </button>
        </form>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
