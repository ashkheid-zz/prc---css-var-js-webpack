
# Reading and manipulating css custom variables with JS

This is a practice project, The goal is:

> reading some custom `css-variable`s from a `*.css` file, adding it into a `.html` file , and make it interactively changeable

*<small>_for more information on `` read these two articles: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) | [CSS-Tricks](https://css-tricks.com/a-complete-guide-to-custom-properties/)</small>*

## File 01

```mermaid
graph LR
A((root)) --> B(01)
A --> C[index.html]
A --> D[style.css]
B --> E[step01.html]
B --> F[step01.js]
```

Here I'm just working with `style.css` containing some `css-variables`. the result is produced in `step01.html` file.

- The `step01.js` doesn't do anything but logging a description about what's going on.
- The `index.html` provided just for navigating between steps.

## File 02

```mermaid
graph LR
A((root)) --> B(02)
A --> C[index.html]
A --> D[style.css]
B --> E[step02.html]
B --> F[step02.js]
```

Here I'm actually creating a `link` element in `step02.js` file, attaching the `style.css` to it and adding it into the `step02.html` file.

## File 03

```mermaid
graph LR
A((root)) --> B(dist)
A --> C(src)
A --> D[package-lock.json]
A --> E[package.json]
A --> F[webpack.config.js]
B --> G[step03.html]
B --> H[step03.js]
C --> I[index.js]
A --> J[index.html]
A --> K[style.css]
```

With the help of webpack, I import the `style.css` in the `index.js` file and bundle it to the `dist/step03.html`.

## File 04
 
```mermaid
graph LR
A((root)) --> B(04)
A --> C[index.html]
A --> D[style.css]
B --> E[step04.css]
B --> F[step04.html]
B --> G[step04.js]
```
In this example, the `style.css` isn't use 'cause it's completely different markUp.

There're some `css-variable`s defined in `step04.css`. There's a `cssData` object  in `step04.js` which is an imaginary presentation of fetched `css-variable`s from `step04.css`.

Once a colored circle is clicked, the `cssData` is updated and the theme has changed

## File 05
 
```mermaid
graph LR
A((root)) --> B(05)
A --> C[index.html]
A --> D[style.css]
B --> E[step05.css]
B --> F[step05.html]
B --> G[step05.js]
```

The implementation of the former file was a little complicated. There's better solution for Implementing the `reColor()` function, which is using `setProperty` on the `root` element.