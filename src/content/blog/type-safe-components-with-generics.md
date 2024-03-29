---
title: "Write Type-safe React Component APIs with Generics"
pubDate: 2019-12-31
description: "Levergaing TypeScript's powerful generic types will enable you to make your component props more type-safe so that you can avoid bugs down the road."
tags: ["TypeScript", "React", "web development"]
author: "Blake Zimmerman"
---

When writing a shared React component for your organization (or for your future-self), it is important that the component's API is easy to understand and does what it can to prevent bugs. One way a component API can help prevent bugs is by leveraging the TypeScript compiler. TypeScript's type system is very expressive and allows you to articulate many relationships in a type-safe manner if you are familar with its features. In this post, I'm going to show how you can create a type-safe select component using generics, lookup types, and const assertions. Becoming familiar with these features and learning how to leverage them in component APIs will pay dividends as you continue to reuse your shared components over the life of your project's codebase.

Suppose you are creating a React component called `Select` to abstract an HTML construct like this:

```html
<select value="first" onChange="onChange()">
  <option value="first">first</option>
  <option value="second">second</option>
  <option value="third">third</option>
</select>
```

One of the first steps you might take is think about the component's API and write a type definition for it (or at least that's what I do). A naive approach to our `Select` component's API might look something like this:

```ts
type SelectProps = {
  options: string[];
  initialValue: string;
  onChange: (value: string) => void;
};
```

While this API will work, it allows the consumer to pass in an invalid configuration. The following example demonstrates what I mean by this.

```tsx
const App: React.FC = () => {
  return (
    <Select
      options={["first", "second", "third"]}
      initialValue="fourth" // This isn't a valid option
      onChange={(newValue) => {
        if (newValue === "42") {
          // This is unreachable code
        }
      }}
    />
  );
};
```

The mistakes made in the example above may seem like silly mistakes that you wouldn't make, however, they can creep up on you or your teammates in more complex examples. More importantly, why keep this opportunity for bugs available when we can remove it with the help of the TypeScript compiler?

To remove this opportunity for bugs from our component's API, we first have to examine the root of the issue. The problem is that `initialValue` and the `value` passed to `onChange` are dependent on what we pass for `options`. In our naive approach, we specify `initialValue` as a `string` when in reality it can only be one of the specific strings in the array we pass for `options` (in this case, `"first" | "second" | "third"`). How can we derive the type of one of our props from the type of another? The answer is generic types!

Generic types are one of my favorite features of TypeScript as they let you model very powerful abstractions and complex relationships. In this example, we need to represent `options` with a generic type that extends a string array and model the rest of our props' types using that generic type. Here's a good first pass at our new type:

```ts
type SelectProps<TOptions extends Array<string>> = {
  options: TOptions;
  initialValue: TOptions[number];
  onChange: (value: TOptions[number]) => void;
};
```

In the first line of this type definition, we give a type argument to `SelectProps` called `TOptions`. It's called `TOptions` because it represents the type of our `options` prop. The `T` that prefixs `TOptions` is a common convention that members of the community use to help identify which types are generics. It's similar to prefixing interface names with `I`. We then say that `TOptions` extends `Array<string>` because we want to confine what type of values get passed to `SelectProps`.

Next, in the type definitions for `initialValue` and `onChange`, we make use a type `TOptions[number]`. This is called a lookup type. It's syntax is identical to element access, but it works with types. What we are saying with this type is that we want the type of all the values that are indexed by `number` in `TOptions`. In our example of `["first", "second", "third"]` the type that this array indexes by `number` is `"first" | "second" | "third"` which is a string literal union that is much more narrow than `string`.

With this new props type, we can now pass a type argument to our `Select` component and receive error messages when we make the mistakes from our earlier example.

```tsx
const App: React.FC = () => {
  return (
    <Select<Array<"first" | "second" | "third">>
      options={["first", "second", "third"]}
      // Error: Type '"fourth"' is not assignable to type
      // '"first" | "second" | "third"'
      initialValue="fourth"
      onChange={(newValue) => {
        if (newValue === "42") {
          // Error: This condition will always return 'false' since
          // the types '"first" | "second" | "third"' and '"42"' have
          // no overlap.
        }
      }}
    />
  );
};
```

Great! We now get some descriptive error messages when we pass invalid values to some of our props. However, there's still one problem – we declare `"first"`, `"second"`, and `"third"` twice. We declare them once in the type argument passed to `Select` and again in the array we pass to `options`. What if we just didn't pass that type argument to `Select`? TypeScript has pretty good inference now, right? Unfortunately, removing the type argument makes our error messages go away. By hovering over the `options` prop in your editor, you can see that the TypeScript language server reports the inferred type of `options` as being `string[]` which is not narrow enough to make our error messages appear.

Luckily, we have one more trick up our sleeves to get our desired result – const assertions. A const assertion is a special kind of type assertion (introduced in TypeScript 3.4) that signals to the compiler that no literal types in the expression should be widened, object literals should get `readonly` properties, and array literals should become `readonly` tuples. Using a const assertion on our options array will change its inferred type from `string[]` to `readonly ["first", "second", "third"]`. The only change we need to make to our props type is to specify that `TOptions` should now extend `ReadonlyArray<string>` instead of a regular `Array<string>` since the const assertion will make our array `readonly`. Our final props type looks like this now:

```ts
type SelectProps<TOptions extends ReadonlyArray<string>> = {
  options: TOptions;
  initialValue: TOptions[number];
  onChange: (value: TOptions[number]) => void;
};
```

And our component usage will look like this

```tsx
const App: React.FC = () => {
  return (
    <Select
      options={["first", "second", "third"] as const} // const assertion
      // Error: Type '"fourth"' is not assignable to type
      // '"first" | "second" | "third"'
      initialValue="fourth"
      onChange={(newValue) => {
        if (newValue === "42") {
          // Error: This condition will always return 'false' since
          // the types '"first" | "second" | "third"' and '"42"' have
          // no overlap.
        }
      }}
    />
  );
};
```

Nice! All of those helpful error messages are still there and we didn't need to repeat ourselves anywhere.

Now, for the sake of having a full example, let's take a look at the full implementation of our `Select` component:

```tsx
import React from "react";

// Our props type
type SelectProps<TOptions extends ReadonlyArray<string>> = {
  options: TOptions;
  initialValue: TOptions[number];
  onChange: (value: TOptions[number]) => void;
};

// Declare `TOptions` and pass it to `SelectProps`
export const Select = <TOptions extends ReadonlyArray<string>>(
  props: SelectProps<TOptions>,
) => {
  const [value, setValue] = React.useState(props.initialValue);

  return (
    <select
      value={value}
      onChange={(event) => {
        // Cast the value of this event from `string` to our more
        // narrow type
        const newValue = event.currentTarget.value as TOptions[number];
        setValue(newValue);
        props.onChange(newValue);
      }}
    >
      {props.options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};
```

As we can see, the implementation of this `Select` component is pretty straightforward and the only change we have to make to the code to accommodate our special props type is to cast our `onChange` event's value from `string` to `TOption[number]` since we know it will definitely be of that type, and also because we need it to be of that type to satisfy the type definition of `props.onChange`.

I hope that this example helped you understand the power of TypeScript's generic types, lookup types, const assertions, and how they can be used together to create very type-safe React components. Thanks so much for reading!
