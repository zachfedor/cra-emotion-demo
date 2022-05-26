import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import logo from "./logo.svg";

// Older style using CSS prop that we're slowly moving away from
const buttonCSS = css({
  fontStyle: "italic",
});

function App() {
  const [isShowing, setIsShowing] = React.useState(true);

  const onClick = () => setIsShowing(!isShowing);

  return (
    <Wrapper>
      {/* Convention says to capitalize our custom components, so Wrapper and Header are clues that they're styled */}
      <Header>
        {/* But we can use plain HTML tags here too, and all attributes that are allowed on that element */}
        <img src={logo} alt="logo" />

        {/* Just note that this is _still_ JavaScript, even if it doesn't look it. Hence the funky comments */}
        <h1>React Demo</h1>
      </Header>

      <Main>
        <FancyP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
          orci semper, imperdiet urna et, tempor magna. Aenean eu ligula arcu.
          Proin varius, augue non interdum fermentum, arcu sem faucibus magna,
          accumsan vulputate odio justo in nisl. Maecenas luctus, libero non
          iaculis tempus, sem risus consectetur tortor, eget dignissim risus
          risus at libero. Proin commodo fermentum ex, vel sollicitudin eros
          lacinia vitae. Maecenas vulputate vehicula ullamcorper. Morbi quis
          lectus non justo porttitor fermentum non sit amet purus.
        </FancyP>

        <P data-name="test">
          Morbi varius lacus arcu,{" "}
          <Link href="#">quis consectetur urna hendrerit</Link> sit amet.
          Praesent convallis sit amet justo ac porta. Aliquam erat volutpat.
          Donec fringilla porta pellentesque. Sed ac pellentesque mauris. Sed
          lobortis sagittis tincidunt. Mauris semper ipsum purus, consequat
          congue mi tristique vel. Mauris urna eros, fermentum non aliquam ut,
          faucibus et dolor. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Etiam volutpat varius consequat. Sed eu nibh at est feugiat
          commodo. Nullam nulla neque, lacinia sit amet orci a, tincidunt
          euismod sem. Nulla consequat dictum sapien, sed congue arcu hendrerit
          vel.
        </P>

        <OtherP isShowing={isShowing}>Click the button to hide me</OtherP>

        <button css={buttonCSS} onClick={onClick} type="button">
          {isShowing ? "Hide" : "Show"} It
        </button>
      </Main>
    </Wrapper>
  );
}

// A styled component rendered as a <div> with the following style declarations
const Wrapper = styled.div({
  // Declarations the same `key: value` pair as CSS but in a JS Object with JS syntax rules
  display: "flex",
  // Most values will be stored in strings
  minHeight: "100vh",
  // Properties that have hyphens need to be converted from kebab-case to camelCase
  flexDirection: "column",
});

const Header = styled.header({
  // All valid CSS property values can be put in strings: colors, lengths, keywords, etc.
  background: "#262626",
  color: "white",
  display: "flex",
  // Unitless numbers default to pixels
  gap: 20,
  // Unitless numbers default to pixels
  paddingRight: "20px",
  // Shorthand properties like padding can be split into parts, but convert kebab-case to camelCase
  paddingLeft: 20,

  // Nesting is possible just like SASS, although usually it's preferred to make a new styled component
  // to avoid specificity issues or BEM-style class name conventions
  img: {
    width: "4rem",
  },
});

// Since this is plain old JavaScript, we can use all features of a programming language like variables
const spacing = 20;

const Main = styled.main({
  // And template strings that use those variables
  padding: `${spacing}px`,
});

// We can create objects like classes in CSS and compose them
const whiteText = { color: "white" };
const blackBG = { background: "black" };
const Link = styled.a(whiteText, blackBG);

// Once we create a styled component, we can create variants by styling it again
const P = styled.p({
  fontSize: "18px",
});
// FancyP inherits all of P's styles
const FancyP = styled(P)({
  color: "red",
});

// We can also use JS Functions to add custom properties which change the styles
// This component can take a custom prop called isShowing and use it to determine
// the right opacity, and we can use React features to change those props on the fly
const OtherP = styled(P)(({ isShowing }) => ({
  color: "blue",
  opacity: isShowing ? 1 : 0,
}));

export { App };
