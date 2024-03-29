---
title: "Create SVG Components with React and TypeScript"
pubDate: 2019-12-08
description: "Learn how to easily convert SVG files to React components so you can use vector graphics as easily and with as much flexibility as any other component."
tags: ["SVG", "React", "TypeScript", "web development"]
author: "Blake Zimmerman"
---

SVGs (Scalable Vector Graphics) are a robust tool for creating beautiful UIs as they can be scaled up and down without sacrificing image quality while also being easily manipulated using CSS and HTML attributes.

However, using SVGs in React applications is not always a straightforward process as there are a few possible approaches for how to integrate these two technologies. One could do any of the following:

- Provide the SVG file as the `src` property for an `img` tag
- Use a third-party CLI or Webpack loader to convert the SVG file to a React component ([SVGR](https://github.com/smooth-code/svgr) being a good example of this approach)
- Manually convert the SVG file to a React component

Using an SVG file as the source for an image tag is a valid option, however, it is limiting as you cannot style the SVG using CSS. You can only style the image tag that is holding the SVG.

Tools like SVGR work well and are likely a good idea for teams working on a large application, however, manually converting an SVG file to a React component is not very difficult and provides much flexibility as you can add additional props to further manipulate your SVG. Also, by learning how to manually convert an SVG file to a React component, you'll gain a better understanding of what tools like SVGR are doing under the hood.

To start, we'll need an SVG file to convert into a component. Usually when I need icons for an application, I reach for one of the many Material Design icons. For this example, we'll be using their camera icon which can be found [here](https://material.io/resources/icons/?icon=photo_camera&style=baseline). If we open the file, we'll see the following:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="3.2"/>
  <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
  <path d="M0 0h24v24H0z" fill="none"/>
</svg>
```

Since SVGs can be inlined directly into HTML documents, we can treat this SVG markup similar to how we treat regular HTML tags like `div` or `img` in our React components. The bare minimum to turn this markup into a React component is to simply wrap it in a function like so:

```tsx
import React from "react";

export const CameraIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);
```

Wow, easier than expected, right? Before we get ahead of ourselves, it is definitely worth noting that if your SVG file makes use of kebab-case attributes like `fill-rule`, they have to be converted to camelCase (e.g. `fillRule`) since hyphens are not valid in JSX attributes.

While this component is ready for use, we can make it a lot more robust by adding some props to it so that it is configurable. Here's the same component but with the ability to accept props:

```tsx
import React from "react";

export const CameraIcon = ({
  height = "24px",
  width = "24px",
  color = "black",
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx="12" cy="12" r="3.2" fill={color} />
    <path
      d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
      fill={color}
    />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);
```

The first thing to note is that we're using TypeScript so we've added a type annotation for our component's props. In this case, React provides a type for the props that an `svg` tag can accept – `React.SVGProps<SVGSVGElement>`. The second thing to note is that we're deconstructing a few properties (`height`, `width`, `color`) off the `props` object so that we can set some default values. These props are then passed to the SVG that we render so that dynamic behavior can be achieved for our icon.

Now that our component is finished, we can call it like this from the rest of our application code:

```tsx
import React from "react";

const App = () => (
  <div>
    <CameraIcon />
    <CameraIcon height="48px" width="48px" color="red" />
    <CameraIcon height="96px" width="96px" color="blue" />
    <CameraIcon
      height="96px"
      width="96px"
      color="blue"
      style={{ opacity: 0.5 }}
    />
  </div>
);
```

As we see, we can choose to pass no props and rely on the default values we set, or we can fully customize our SVG using any of the properties available on `React.SVGProps<SVGSVGElement>`.

While this example only relies on the base props available to SVGs, we can augment our component with some custom props. Suppose we wanted this camera icon to have a different color for the inner circle than the rest of the icon. We can acheive this by doing the following:

```tsx
import React from "react";

export const CameraIcon = ({
  height = "24px",
  width = "24px",
  color = "black",
  secondaryColor,
  ...props
}: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx="12" cy="12" r="3.2" fill={secondaryColor || color} />
    <path
      d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
      fill={color}
    />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);
```

In the above iteration of `CameraIcon`, we extend our component's props type by intersecting (`&`) `React.SVGProps<SVGSVGElement>` with `{ secondaryColor?: string }` (our additional props object). We then deconstruct our new prop, `secondaryColor`, but we do not provide a default value because we want it to truly be an optional prop. Finally, we make sure to pass this new prop to the `fill` attribute of our inner `circle` if it is provided. Otherwise, we just fill our circle with the original `color` prop.

To easily play around with this code and see it live in action, I have provided a [CodeSandbox link](https://codesandbox.io/embed/optimistic-mirzakhani-0jw88?fontsize=14&hidenavigation=1&theme=dark) with the full example.

<iframe
  src="https://codesandbox.io/embed/optimistic-mirzakhani-0jw88?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="svg-component-example"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

I hope this post has provided you with a better understanding of how to effectively use SVGs in React for robust and scalable iconography. Have fun using SVGs in your current or future projects!
