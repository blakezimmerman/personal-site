---
title: "Zero-Runtime CSS-in-JS"
pubDate: 2023-05-25
description: "Let's review currently popular ways of authoring stylesheets and then walk through how we can implement type-safe, zero-runtime CSS generation in TypeScript with Vanilla Extract."
tags: ["Vanilla Extract", "CSS", "TypeScript", "React", "web development"]
author: "Blake Zimmerman"
---

Since the creation of CSS, developers have waded through a sea of various methodologies and tools for authoring it. The two tools I've been drawn to the most since I began web development are CSS Modules and CSS-in-JS. They both solve common problems with CSS like global scope, but they come with different sets of pros and cons. However, there's a new tool that combines the pros of each without bringing too many drawbacks with it. Before I show you how to achieve zero-runtime stylesheets in Typescript, let's review the strengths and weaknesses that CSS Modules and CSS-in-JS brought before it.

## CSS Modules

[CSS Modules](https://github.com/css-modules/css-modules) let you create CSS files where all of the class names and animation names are locally scoped by default. You can then import these CSS modules into your JS/TS files as objects and access the class names you defined as properties on the imported style object.

Most frameworks support CSS Modules out of the box, but if you're rolling your own toolchain, you're likely just one plugin away from using it in your web site/app. For example, if you're using `webpack`, you'll need to add `css-loader` to your `webpack` config.

To better understand CSS Modules, let's review some usage examples with React and TypeScript:

### Basic Styling

```css
/* styles.module.css */

.greeting {
  padding: 16px;
  background-color: lightgray;
  color: black;
}
```

```tsx
/* Component.tsx */

import React from "react";
import styles from "./styles.modules.css";

export const Component = () => {
  return <div className={styles.greeting}>Hello World</div>;
};
```

CSS Modules accomplishes local scoping by introducing a build step that processes all of our CSS files and rewrites the class names to include hashes so that they won't clash in the global scope. After processing, our TypeScript file might look something like this:

```tsx
/* Component.tsx */

import React from "react";

export const Component = () => {
  return <div className="_styles_greeting_492817391">Hello World</div>;
};
```

### Variants

When building re-usable components or interactive apps, the need for style variants is inevitable. CSS Modules doesn't do us too many favors in this department, but the solution isn't too complex or tedious.

Let's create a simple button with two variants using CSS Modules:

```css
/* button.module.css */

.base {
  padding: 8px 16px;
  border-radius: 4px;
}

.primary {
  /* CSS Modules does help us out a bit with this nifty
     composition property */
  composes: base;
  background-color: blue;
}

.secondary {
  composes: base;
  background-color: grey;
}
```

```tsx
/* Button.tsx */

import React from "react";
import styles from "./button.module.css";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps {
  variant?: ButtonVariant;
}

export const Button = ({ variant = "primary" }: ButtonProps) => {
  return <button className={styles[variant]}>Click Me</button>;
};
```

The biggest issue with implementing variants with CSS Modules is that accessing class names from our `styles` object is not type safe. This means that we have to manually keep our `ButtonVariant` type and CSS class names in sync. This becomes even more prone to bugs when you start introducing compound variants into your components. An example of this might be a button that can have a `primary` and `small` variant active at the same time.

### Theming

Theming is a great way to build uniformity in your app by ensuring that consistent design tokens are used across your stylesheets – this can include values like colors, spacing, radii, border widths, etc.

Since CSS Modules are just regular CSS files, the most straightforward way to implement theming is by using CSS variables.

```css
/* theme.css */

/* Define CSS vars in a global CSS file and apply them to the root of
   the document */
:root {
  --colors-surface: lightgray;
  --colors-text: black;
}
```

```css
/* styles.module.css */

.greeting {
  /* Since we defined our CSS variables globally, we can freely use them
     in any of our CSS modules */
  background-color: var(--colors-surface);
  color: var(--colors-text);
}
```

```tsx
/* Component.tsx */

import React from "react";
// Import global CSS file
// (We only need to do this once in our app)
import "theme.css";
import styles from "./styles.module.css";

export const Component = () => {
  return <div className={styles.greeting}>Hello World</div>;
};
```

### Responsive Design

In the modern age, users expect web sites/apps to display properly on a wide variety of devices such as phones, tablets, and desktops. It is imperative that we develop for the web with responsive design in mind. The most useful tool to achieve responsive design in many cases is to use media queries.

The following example should feel very familiar if you've used media queries in standard CSS before:

```css
/* styles.module.css */

.header {
  padding: 16px;
}

@media screen and (min-width: 768px) {
  .header {
    padding: 24px;
  }
}

@media screen and (min-width: 1024px) {
  .header {
    padding: 32px;
  }
}
```

```tsx
/* Component.tsx */

import React from "react";
import styles from "./styles.module.css";

export const Component = () => {
  return <header className={styles.header}>My Cool App</header>;
};
```

### Pros

CSS Modules' biggest strength is that it's just the standard CSS that we've grown to love (or maybe hate), but without having to worry about the woes that come with a global scope. And if you're not a huge fan of standard CSS, you're welcome to pair CSS Modules with one of the many mature CSS pre-processors like Sass, Less, Stylus, or PostCSS.

Since the syntax is totally standard, you can copy CSS snippets wholesale from StackOverflow or other sources on the web. While you probably shouldn't be copying all of your CSS from StackOverflow, this is incredibly handy if you're still learning the language or if you need a weird CSS snippet to pull off a neat visual trick.

Additionally, all of your styles are served as static CSS files at runtime so you won't incur any of the performance penalties that come with CSS-in-JS solutions (we'll get to those in a bit). Once your page's HTML document is parsed, your JS and CSS will be downloaded and parsed in parallel thus leading to a faster first paint. And since your stylesheets are served as static assets, they can even by cached by the browser.

### Cons

Out of the box, CSS Modules doesn't support many styling features that developers have come to expect like nesting and utility functions that introduce logic into our stylesheets. However, since pre-processors can be paired with CSS Modules, I won't harp on this point too much.

However, the biggest downside to using CSS Modules is it's handling of dynamic styling (or lack thereof). In today's landscape, web sites are becoming more and more interactive and dynamic and it's important that our stylesheets can keep up too.

In the style variants section above, we saw that CSS Modules are less than ideal for styling components that need to support many variants. This is made even worse when coupled with the fact that accessing class names from CSS Modules is not type-safe. If you're frequently updating components that can switch between many classes, it won't be long before you run into a bug. While this can be mitigated by adding a package like [`typed-css-modules`](https://github.com/Quramy/typed-css-modules) that watches for changes in your CSS files and emits type definitions, it would be a lot nicer if CSS Modules were type-safe out of the box.

One other downside to using CSS Modules is that all of our styles must be written in a file separate from the rest of our component. While some might argue that this is a good thing because it promotes a separation of concerns, my qualm with this is that you're not given a choice whether you want to separate your logic/markup and styles into separate files. Sometimes if I'm writing a very simple component, it's much simpler to have one 40 line file rather than having two 20 line files.

With all of this in mind, let's take a look at the CSS-in-JS paradigm that addresses most of these downsides (while sadly bringing some new downsides with it).

## CSS-in-JS

The CSS-in-JS paradigm changed the way that many developers authored their styles and led to a proliferation of new libraries. In fact, it's been my preferred way of authoring stylesheets for the past 5 years.

For the rest of this blog post, we'll be using [`styled-components`](https://styled-components.com/) for all of our CSS-in-JS code examples. `styled-components` is currently one of the most popular CSS-in-JS solutions and has ~5.3 million weekly downloads on NPM at the time of writing.

With CSS-in-JS solutions, you write all of your CSS in JS or TS files — usually in tagged template literals although some libraries have you define your CSS in standard JS objects. At runtime, executed CSS-in-JS code parses your style definitions into vanilla CSS and then injects these styles into the DOM (Document Object Model) using `style` blocks.

> _Note:_
>
> Tagged template literals are a more advanced form of template literals that allow you to parse template literals with a function. styled-components uses them to unlock some "magic" that we'll explore in some of our code examples.
>
> If you want to read more about how tagged template literals work, you should check out this [section in the MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates).

To get a better understanding of what CSS-in-JS looks like, let's take a look at a simple example:

### Basic Styling

```tsx
import React from "react";
import styled from "styled-components";

export const Component = () => {
  return <Greeting>Hello World</Greeting>;
};

const Greeting = styled.div`
  padding: 16px;
  background-color: lightgray;
  color: black;
`;
```

When looking at this example, you might be asking yourself, "Are you people really just writing all of your CSS as JS strings?". And while the answer is technically yes, it's not as bad as it looks on the surface.

Most editors have a plugin available that will detect usage of the `styled` tagged template literal in your code and then use CSS syntax highlighting for text within it. Additionally, you can still use [`stylelint`](https://stylelint.io/) with libraries like `styled-components` to flag CSS errors and help enforce conventions. With all this tooling set up, you'll quickly forget that you're writing your style rules in what is effectively a JS string.

Unfortunately, I don't have an easy way to set all of this up with my blog's syntax highlighter so the rest of the examples in this blog post will continue to lack CSS syntax highlighting within `styled` tagged template literals.

### Variants

Since the full power of JavaScript is available at your fingertips, style variants are much easier to implement in CSS-in-JS libraries compared to CSS Modules. And since we're using TypeScript in our examples, our styles are type-safe out of the box.

Here's the same example from the CSS Modules' variants section above, but this time implemented with styled-components:

```tsx
import React from "react";
import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps {
  variant?: ButtonVariant;
}

export const Button = ({ variant = "primary" }: ButtonProps) => {
  return <StyledButton $variant={variant}>Click Me</StyledButton>;
};

const StyledButton = styled.button<{ $variant: ButtonVariant }>`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: ${(props) => {
    switch (props.$variant) {
      case "primary":
        return "blue";
      case "secondary":
        return "grey";
    }
  }};
`;
```

Just like regular React components, styled components may also accept props that can be accessed from your template literal to conditionally change your styles. In the example above, prefixing our variant prop with `$` signals to styled-components that it should not forward our `$variant` prop to the DOM as an HTML attribute. It's a good practice to do this so that we don't muddy our DOM with unneeded attributes or risk clashing with valid HTML attributes that have the same name as our prop (the `color` HTML attribute would be a good example of this).

### Theming

While you could simply use CSS variables for theming like we did in the CSS Modules example earlier, styled-components provides us with a `ThemeProvider` component that can help us out a bit.

The `ThemeProvider` component accepts an object via its `theme` prop where we can define all of our design tokens like colors, spacing, radii, border widths, etc. If we want to switch over to a dark theme, we simply need to swap that theme object out for a new one and all of our components will be re-rendered with the new theme we've been provided.

Let's take a quick look at a basic usage of this component.

```tsx
import React from "react";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    surface: "lightgray",
    text: "black",
  },
};

export const App = () => {
  return (
    // Theme Provider should be placed at the root of your app so that
    // its theme context will be available to all of your components.
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>
  );
};

const Component = () => {
  return <Greeting>Hello World</Greeting>;
};

const Greeting = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.text};
`;
```

`ThemeProvider` makes a `theme` property available on all of its descendent styled components' props that can be accessed in an embedded function in our tagged template literal. This can be set up to be completely type-safe in TypeScript thus allowing for autocomplete on the `theme` object.

If you're willing to write a simple helper, you can even shorten the somewhat verbose

```tsx
(props) => props.theme.colors.surface;
```

to a more concise and just as type-safe

```tsx
getColor("surface");
```

### Responsive Design

While the styles we write in our tagged template literals may look like standard CSS, the CSS parser that styled-components uses — [Stylis](https://stylis.js.org/) (Not to be confused with [Stylus](https://stylus-lang.com/)) — supports some additional features not present in vanilla CSS. One of these features is style nesting which we can use to nest media queries in our styles to implement responsive designs.

```tsx
import React from "react";
import styled from "styled-components";

export const Component = () => {
  return <Header>My Cool App</Header>;
};

const Header = styled.header`
  padding: 16px;

  @media screen and (min-width: 768px) {
    padding: 24px;
  }

  @media screen and (min-width: 1024px) {
    padding: 32px;
  }
`;
```

And since we can freely use JS in these templates, there's nothing stopping you from writing a helper function to refactor this into something more concise like the following:

```tsx
import React from "react";
import styled from "styled-components";
import { media } from "./helpers"; // A media query helper you could write

export const Component = () => {
  return <Header>My Cool App</Header>;
};

const Header = styled.header`
  padding: 16px;
  ${media.tablet.css`padding: 24px;`}
  ${media.desktop.css`padding: 32px;`}
`;
```

### Pros

Having the ability to dynamically define CSS with the full power of JS, gives a level of control and freedom that's hard to beat. Implementing style variants becomes much more simple as you can use `switch` statements directly in your styles rather than needing to create a myriad of classes and sort them out later on the JS side.

Also, since the syntax mostly standard CSS, it's easy to pick up for first time users and makes it really convenient to copy in styles from third party sources.

And finally, while this next point might be controversial to some, I see the ability to co-locate styles with the rest of logic and markup very beneficial. When I have a small component that only needs a few lines of CSS, it's nice to be able to keep the whole component in one short file rather than having to create two incredibly short files. Also, when deleting components that are no longer needed, having co-located styles reduces the risk that unused styles are left behind since styles are tied directly to the component with most CSS-in-JS solutions. However, if you firmly believe in separation of concerns, there's nothing stopping you from storing all of your styled components in another file separate from your component's logic and markup.

### Cons

CSS-in-JS's greatest feature is also it's largest fault. Dynamic runtime styles have a cost. Since CSS-in-JS solutions generate all of the CSS at runtime, your first paint will be blocked until your JS is downloaded, parsed, and executed — and during that execution, your JS must parse yours styles into vanilla CSS and inject them into the DOM. Additionally, if you're making heavy use of dynamic styling and frequently recalculating your styles, you'll be putting additional load on the main thread while your users use your site/app.

For some use cases, this additional overhead may be acceptable. If you're writing an internal web app and you know that all of your users will be running it on a reasonably powerful laptop, you likely won't mind this overhead at all. However, if you're building a consumer site/app that will likely be run on someone's mid-range smartphone from 2-3 years ago, you'll care a lot more about time to first paint and may want to evaluate other options. Faster page speeds can also improve SEO (Search Engine Optimization) so optimizing time to first paint may be even more important to you.

To summarize what we've covered so far, CSS Modules can be somewhat limiting and tedious at times but are performant, and CSS-in-JS solutions are convenient and powerful but comparatively slow. However, there is a relatively new styling option that serves as an excellent middle ground, and achieves zero-runtime CSS-in-JS.

## Vanilla Extract

[Vanilla Extract](https://vanilla-extract.style/) is a relatively new styling library that was created by [Mark Dalgleish](https://twitter.com/markdalgleish) — one of the CSS Modules co-creators. It's a framework agnostic library that uses TypeScript as a pre-processor to statically generate CSS at build time. This static generation process gives it all of the strong performance characteristics of CSS Modules while its pleasant TypeScript API delivers a developer experience that is reminiscent of many CSS-in-JS solutions.

To use Vanilla Extract you first have to set up one of their bundler integrations. At the time of writing, they have integrations for the following bundlers/frameworks:

- vite
- esbuild
- webpack
- next
- parcel
- rollup
- gatsby

With this wide range of integrations, you should have no trouble setting up Vanilla Extract in your project.

Once you set up your integration of choice, you can start authoring styles by adding files to your project that end in the `.css.ts` extension. Let's take a look at a basic example of using Vanilla Extract with React to understand what this looks like in practice.

### Basic Styling

```ts
/* styles.css.ts */

import { style } from "@vanilla-extract/css";

export const greeting = style({
  padding: "16px",
  backgroundColor: "lightgray",
  color: "black",
});
```

```tsx
/* Component.tsx */

import React from "react";
// Most environments don't require specifying the .ts extension when
// importing a module written in TypeScript so that's why this import
// ends in .css instead of .css.ts
import { greeting } from "./styles.css";

export const Component = () => {
  return <div className={greeting}>Hello World</div>;
};
```

In the example above, we define our CSS properties using JS object notation and pass this object to Vanilla Extract's `style` function. We then export the result of this function call from our `.css.ts` file and import it in our component's file where we then pass that result to our `div`'s `className` prop.

Under the hood, Vanilla Extract's bundler plugin processes our `.css.ts` file by generating a CSS class containing all of the styles passed to the `style` function and then the result of that `style` function call is set to the name of the generated class. The name of the generated class is a hash so we get local scoping by default and don't have to worry about colliding with other classes throughout our project. However, Vanilla Extract does provide a `globalStyle` function if we do want to declare global styles.

While this example does look very similar to our example of basic styling with CSS Modules, we'll soon see that Vanilla Extract provides lots of features that make implementing complex styles a breeze compared to CSS Modules.

### Variants

Vanilla Extract provides a function called `styleVariants` that allows us to create style variants by defining a collection of named style rules that can extend as many base sets of styles as needed.

```ts
/* button.css.ts */

import { style, styleVariants } from "@vanilla-extract/css";

const base = style({
  padding: "8px 16px",
  borderRadius: "4px",
});

export const button = styleVariants({
  primary: [base, { backgroundColor: "blue" }],
  secondary: [base, { backgroundColor: "grey" }],
});
```

```tsx
/* Button.tsx */

import React from "react";
import { button } from "./button.css";

// We can create a type from our style variants definition
export type ButtonVariant = keyof typeof button;

export interface ButtonProps {
  variant?: ButtonVariant;
}

export const Button = ({ variant = "primary" }: ButtonProps) => {
  return <button className={button[variant]}>Click Me</button>;
};
```

The example above is very similar to the variants example we implemented with CSS Modules, except this one is actually type-safe.

If you're building a component that involves compound variants, there's a first-party optional package named [Recipes](https://vanilla-extract.style/documentation/packages/recipes/) built on Vanilla Extract that makes compound variants simple to implement.

First install `@vanilla-extract/recipes`, and then you can create components with variants like this:

```ts
/* button.css.ts */

import { recipe } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    padding: "8px 16px",
    borderRadius: "4px",
  },
  variants: {
    color: {
      primary: { backgroundColor: "blue" },
      secondary: { backgroundColor: "grey" },
    },
    size: {
      small: { padding: 12 },
      medium: { padding: 16 },
      large: { padding: 24 },
    },
  },
  compoundVariants: [
    {
      variants: {
        color: "primary",
        size: "large",
      },
      style: {
        // Apply a different color when the primary and large variants
        // are both active
        background: "purple",
      },
    },
  ],
  defaultVariants: {
    color: "primary",
    size: "medium",
  },
});
```

```tsx
/* Button.tsx */

import React from "react";
import { RecipeVariants } from "@vanilla-extract/recipes";
import { button } from "./button.css";

/**
 * This type resolves to:
 *
 * type ButtonProps = {
 *  color?: "primary" | "secondary";
 *  size?: "small" | "medium" | "large";
 * }
 */
export type ButtonProps = RecipeVariants<typeof button>;

export const Button = (props: ButtonProps) => {
  return <button className={button(props)}>Click Me</button>;
};
```

As we can see in this example, Recipes allows you to define many variants and even _compound_ variants with ease. And thanks to helper types like `RecipeVariants`, you can infer all of your component props from your defined styles so that you can keep your code type-safe without the hassle of manually writing types.

This method of defining variants is leagues better than what we can do with CSS Modules, and is arguably better than defining variants with older CSS-in-JS solutions like styled-components since this declarative API is much cleaner than using a bunch of `if/else` or `switch` statements.

### Theming

Theming in Vanilla Extract is similar to CSS Modules in that we define our theme as a list of CSS variables defined at the root of our document, however, Vanilla Extract provides a helper function named `createTheme` that streamlines the creation and consumption of these variables.

```ts
/* theme.css.ts */

import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    surface: "lightgray",
    text: "black",
  },
});
```

```ts
/* styles.css.ts */

import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const greeting = style({
  padding: "16px",
  backgroundColor: vars.colors.surface,
  color: vars.colors.text,
});
```

```tsx
/* App.tsx */

import React from "react";
import { themeClass } from "./theme.css";
import { greeting } from "./styles.css";

export const App = () => {
  return (
    <div className={themeClass}>
      <Component />
    </div>
  );
};

const Component = () => {
  return <div className={greeting}>Hello World</div>;
};
```

In the example above, we pass our theme in an object structure to `createTheme`, and returned to us is a tuple containing two values:

1. The name of a generated class that defines all of our theme values as CSS variables.
2. An object with the same shape of our theme object, but all the values replaced with references to the generated CSS variables.

Next, we pass our `themeClass` to the root element of our app which allows us to be able to access our CSS variables from our `vars` object in all of our child elements.

Now you may be wondering why we're doing this extra work to use CSS variables when we can more easily just import a constant theme object into all of our `.css.ts` files. Well by using CSS variables, we can redefine the values at runtime to switch themes — like light mode to dark mode.

Here's a modified version of the example above that implements a light and dark theme with the ability to toggle between them at runtime:

```ts
/* theme.css.ts */

import { createTheme } from "@vanilla-extract/css";

export const [lightThemeClass, vars] = createTheme({
  color: {
    surface: "lightgray",
    text: "black",
  },
});

export const darkThemeClass = createTheme(vars, {
  color: {
    surface: "black",
    text: "lightgray",
  },
});
```

```tsx
/* App.tsx */

import React from "react";
import { lightThemeClass, darkThemeClass } from "./theme.css";

export const App = () => {
  const [themeClass, setThemeClass] = useState(lightThemeClass);

  const toggleTheme = () => {
    setThemeClass((prev) =>
      prev === lightThemeClass ? darkThemeClass : lightThemeClass,
    );
  };

  return (
    <div className={themeClass}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
```

### Responsive Styles

Vanilla Extract allows you to embed media queries in your style definitions by defining an `@media` property on the object you pass to their `style` function.

```ts
/* styles.css.ts */

import { style } from "@vanilla-extract/css";

export const header = style({
  padding: "16px",
  "@media": {
    "screen and (min-width: 768px)": {
      padding: "24px",
    },
    "screen and (min-width: 1024px)": {
      padding: "32px",
    },
  },
});
```

```tsx
/* Component.tsx */

import React from "react";
import { header } from "./styles.css";

export const Component = () => {
  return <div className={header}>My Cool App</div>;
};
```

And with a little bit of extra TypeScript we can write a utility function to help streamline responsive styles across our codebase:

```ts
/* utils.ts */

export interface ResponsiveStyleArgs {
  mobile?: StyleRule;
  tablet?: StyleRule;
  desktop?: StyleRule;
}

export const responsiveStyle = ({ mobile, tablet, desktop }) => ({
  ...mobile,
  "@media": {
    "screen and (min-width: 768px)": tablet,
    "screen and (min-width: 1024px)": desktop,
  },
});
```

```ts
/* styles.css.ts */

import { style } from "@vanilla-extract/css";
import { responsiveStyle } from "./utils.ts";

export const header = style(
  responsiveStyle({
    mobile: { padding: "16px" },
    tablet: { padding: "24px" },
    desktop: { padding: "32px" },
  }),
);
```

### Atomic CSS

Atomic CSS is a CSS architecture that involves using small single-purpose utility classes to style your elements. Each one of these utility classes represents a visual function that is usually implemented by one (or maybe 2-3) CSS properties.

With a more standard CSS architecture, we might style an element like this:

```html
<style>
  .greeting {
    color: "#000";
    background-color: "#D3D3D3";
    padding-left: 16px;
    padding-right: 16px;
  }
</style>
<div class=".greeting">Hello World</div>
```

However, with atomic CSS, we would style the same element like this:

```html
<style>
  .color-black {
    color: "#000";
  }

  .bg-lightgrey {
    background-color: "#D3D3D3";
  }

  .px-16 {
    padding-left: 16px;
    padding-right: 16px;
  }
</style>
<div class=".color-black .bg-lightgrey .px-16">Hello World</div>
```

At a first glance, the atomic CSS approach seems slightly less readable and more tedious. However, this approach scales better as your site/app grows large and continually adds many more screens and widgets.

In a standard CSS architecture there are many CSS properties that get repeated in multiple classes across various elements in your site/app. Just imagine how many times `display: flex;` or something like `border-radius: 4px;` appear in your stylesheet. With this architecture your stylesheet grows proportionally with your markup. However, with atomic CSS the size of your stylesheet remains relatively static as your markup grows once you've defined enough utility classes to cover all of your styling needs. At some point, all of your new elements will accomplish their styling by composing utility classes that already exist in your stylesheet.

To some, another benefit of atomic CSS is that you can spend less time naming classes since all of your class names should be formulaic and simply state what they do rather than needing to be something semantic like `.dashboard-header`. Additionally, your styles are effectively co-located with your markup which means less jumping around between files.

Defining an exhaustive collection of CSS utility classes is an incredibly tedious process, so most atomic CSS is implemented with the help of tools like [Atomizer](https://acss.io/) or CSS frameworks like [Tailwind](https://tailwindcss.com/). However, Vanilla Extract provides a zero-runtime atomic CSS framework called Sprinkles that can be layered on top of the base package.

[Sprinkles](https://vanilla-extract.style/documentation/packages/sprinkles/) allows you to generate a static set of custom CSS utility classes that can compose either statically at build-time or dynamically at runtime. To get started, first install the `@vanilla-extract/sprinkles` package. Then create a `sprinkles.css.ts` file somewhere in your project and start defining your Sprinkles config:

```ts
import {
  createSprinkles,
  defineProperties
} from "@vanilla-extract/sprinkles";
import { vars } from "./theme.css";

const breakpoints = {
  tablet: "screen and (min-width: 768px)",
  desktop: "screen and (min-width: 1024px)",
};

const flexAlignments = [
  "stretch",
  "flex-start",
  "center",
  "flex-end",
  "space-between",
  "space-around",
];

const spaces = {
  0: "0px",
  2: "2px",
  4: "4px",
  8: "8px",
  12: "12px",
  16: "16px",
  20: "20px",
  24: "24px",
  32: "32px",
  40: "40px",
  48: "48px",
  60: "60px",
  64: "64px",
  96: "96px",
  160: "160px",
  240: "240px",
};

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {}, // This is the base condition so no media query is needed
    tablet: { "@media": breakpoints.tablet },
    desktop: { "@media": breakpoints.desktop },
  },
  defaultCondition: "mobile",
  // This will allow us to use an array to specify which values to apply
  // at each breakpoint.
  responsiveArray: ["mobile", "tablet", "desktop"],
  properties: {
    display: ["none", "block", "inline", "flex"],
    flexDirection: ["row", "column"],
    flexWrap: ["wrap", "wrap-reverse", "nowrap"],
    justifyContent: flexAlignments,
    alignItems: flexAlignments,
    justifySelf: flexAlignments,
    alignSelf: flexAlignments,
    color: vars.colors,
    backgroundColor: vars.colors,
    height: spaces,
    width: spaces,
    gap: spaces,
    paddingTop: spaces,
    paddingBottom: spaces,
    paddingLeft: spaces,
    paddingRight: spaces,
    marginTop: spaces,
    marginBottom: spaces,
    marginLeft: spaces,
    marginRight: spaces,
  },
  shorthands: {
    bg: ["backgroundColor"],
    size: ["height", "width"],
    // This will allow us to set all four padding properties at once
    p: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    m: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
  },
});

// This sprinkles function is what we'll be using to apply styles
// in the rest of our application
export const sprinkles = createSprinkles(responsiveProperties);
```

In the above configuration, we define all of our media query configurations, provide arrays of possible values for each CSS property we want to generate atomic classes for, and even define shorthands for individual or sets of properties.

In practice, your Sprinkles configuration will likely be longer than the one above, but this should give you an idea of what can be configured through Sprinkles.

There's two main ways you can use your `sprinkles` to apply styles in your project:

- Statically at build-time in `.css.ts` files

```ts
/* styles.css.ts */

import { sprinkles } from "./styles.css";

export const header = sprinkles({
  bg: "surface",
  // Sets padding to 16px for mobile, 32px for tablet, and 48px for desktop
  p: [16, 24, 32],
});
```

```tsx
/* Component.tsx */

import React from "react";
import { header } from "./styles.css";

export const Component = () => {
  return <div className={header}>My Cool App</div>;
};
```

- Dynamically at runtime in your `.tsx` files

```tsx
/* List.tsx */

import React from "react";
import { sprinkles } from "./sprinkles.css";

interface ListProps {
  direction: "column" | "row";
  children: React.ReactNode;
}

export const List = ({ direction, children }: ButtonProps) => {
  return (
    <div
      className={sprinkles({
        display: "flex",
        flexDirection: direction, // This can be changed at runtime
        gap: 8,
      })}
    >
      {children}
    </div>
  );
};
```

Calling `sprinkles` at runtime allows you to co-locate your styles with your logic and markup, and apply styles dynamically in a similar fashion to most CSS-in-JS solution. However, unlike most CSS-in-JS solutions, the actual CSS classes are generated at build time and the only work being done at runtime is the switching of class names on elements.

In my opinion, Sprinkles is the most compelling aspect of Vanilla Extract and makes it feel like a true CSS-in-JS solution rather than simply a modern take on CSS Modules. If you're using Vanilla Extract in your project, I highly recommend adding a healthy dose of Sprinkles where it makes sense.

### Dynamic Styles

While Sprinkles allows you to dynamically swap styles at runtime, you're still limited to values that you defined at dev-time. What if your app contains a color picker and you want to display an arbitrary hex color as a swatch?

Well for situations like this, Vanilla Extract provides another auxiliary package you can install called `@vanilla-extract/dynamic`. This package contains a < 1kB (compressed) runtime that allows you to perform dynamic styling at runtime by dynamically assigning CSS variables created using Vanilla Extract's APIs (`createVar`, `createTheme`, etc.). Let's look at a quick example:

```ts
/* colorSwatch.css.ts */

import { createVar, style } from "@vanilla-extract/css";

// This creates a reference to a new CSS variable
export const swatchColor = createVar();

export const colorSwatch = style({
  // This applies our CSS variable to the background-color property
  backgroundColor: swatchColor,
  height: "200px",
  width: "200px",
  borderRadius: "4px",
});
```

```tsx
/* ColorSwatch.tsx */

import React from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { colorSwatch, swatchColor } from "./colorSwatch.css";

interface ColorSwatchProps {
  // A hex color that will change at runtime
  userSelectedColor: string;
}

export const ColorSwatch = ({ userSelectedColor }: ColorSwatchProps) => {
  return (
    <div
      className={colorSwatch}
      style={assignInlineVars({ [swatchColor]: userSelectedColor })}
    />
  );
};
```

In the example above, we use `assignInlineVars` to dynamically update the value of our `swatchColor` CSS variable on the `style` attribute of our element. When the CSS variable is re-assigned, the styles defined by our element's class(es) will also update.

This accomplishes most of the behaviors you'd want to use CSS-in-JS solutions for. However, unlike most CSS-in-JS solutions, we're only re-assigning CSS variables so there still is not any CSS generation at runtime. The only downside to this approach is that you still need to at least know which CSS properties you want to re-assign at runtime — other CSS-in-JS solutions allow your CSS properties to be fully dynamic too. Needing dynamic CSS properties (not just dynamic values) would be a fairly niche use case though so I wouldn't worry about this downside too much.

### Pros

As we saw in the examples above, Vanilla Extract combines the best aspects of CSS Modules and CSS-in-JS solutions like styled-components while avoiding most of the pitfalls.

By statically generating all of our CSS at build-time, we can make our site/app more performant by not blocking the first paint with a runtime CSS parser. And since all of our CSS is generated as static assets, the browser can even cache our stylesheets so that our site/app loads even faster on return visits.

Thanks to the TypeScript pre-processor and ergonomic APIs provided by Vanilla Extract, defining compound variants and responsive styles is a breeze compared to most styling solutions.

While you can maintain separation of concerns by writing all of your styles in `.css.ts` files, you also have the choice of using Sprinkles runtime API to intermingle your styles with your logic and markup. Sprinkles also allows you to implement some level of dynamic styles with very little overhead.

If your styles need to be arbitrarily dynamic, then you can make use of `@vanilla-extract/dynamic` to get all of the way there while still refraining from any runtime CSS generation.

And thanks again to the TypeScript pre-processor, all of your styles are type-safe so you can spend less timing worry about bugs caused by typos or oversights while refactoring your code.

### Cons

While I think Vanilla Extract is great, like most things in life, it's not perfect.

Vanilla Extract relies on a bundler plugin to do all of the heavy lifting so a build step is mandatory. While you're likely using TypeScript and already have a build step in your toolchain, you do need to make sure there's actually a plugin available for the bundler you chose. While Vanilla Extract does currently maintain bundler plugins for all of the major bundlers, one day you could find yourself waiting on support for a major version release of your bundler or some new bleeding edge bundler that isn't widely supported.

Additionally, one other drawback to Vanilla Extract is the syntax. Rather than authoring your styles in the vanilla CSS syntax, you're instead using a light abstraction over CSS syntax with JS objects. As you build out your site/app, you'll likely get used to this very quickly, but it does pose a small learning curve to new developers in your codebase.

## TL/DR

For a while now there's been two camps of CSS development, CSS Modules and CSS-in-JS. CSS modules brings performance at the cost of flexibility and convenience, and CSS-in-JS brings flexibility and convenience at the cost of performance. By drawing inspiration from both methodologies, Vanilla Extract brings the best parts of each while leaving behind their downsides. It turns out you can have flexibility, convenience, and good performance when authoring stylesheets.
