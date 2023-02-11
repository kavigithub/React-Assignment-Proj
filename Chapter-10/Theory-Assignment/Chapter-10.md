#  Explore all the ways of writing css.
Native CSS - all components's styles in a single file index.css
SCSS - Syntactical CSS - it is then converted to css
Inline - style attribute - pass object - {{backgroundColor : "red"}}
Component Library - MaterialUI, Bootstrap, Base Web UI, Ant design, chakra UI
Styled Components
CSS Framework - Tailwind

# 2. How do we configure tailwind?
## Tailwind CLI tool : Install Tailwind CSS
 ```python
    npm install -D tailwindcss
    npx tailwindcss init
 ```
##  Configure PostCSS
   ```css
    {
  "plugins": {
    "tailwindcss": {}
  }
}
   ```

## Configure your template paths
    Add the paths to all of your template files in your tailwind.config.js file.
```css
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
## Add the Tailwind directives to your CSS
    ```python
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
**Start your build process**
    Run your build process with npx parcel src/index.html.
    ```python
    npx parcel src/index.html
    ```

# 3. In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?
## Content
    The content section of your tailwind.config.js file is where you configure the paths to all of your HTML templates, JavaScript components, and any other source files that contain Tailwind class names.
    Eg: tailwind.config.js
```python
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  // ...
}
```
## Theme
The theme section of your tailwind.config.js file is where you define your project’s color palette, type scale, fonts, breakpoints, border radius values, and more.
```python
module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}
```

## Extends
If you’d like to preserve the default values for a theme option but also add new values, add your extensions under the extend key in the theme section of your configuration file.
  ```python
    module.exports = {
  theme: {
    extend: {
      // Adds a new breakpoint in addition to the default breakpoints
      screens: {
        '3xl': '1600px',
      }
    }
  }
}
  ```
## Plugins
Plugins let you register new styles for Tailwind to inject into the user’s stylesheet using JavaScript instead of CSS.

To get started with your first plugin, import Tailwind’s plugin function from tailwindcss/plugin. Then inside your plugins array, call the imported plugin function with an anonymous function as the first argument.

```python
const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
```
# 4. Why do we have .postcssrc file?
PostCSS is a tool for transforming CSS with JavaScript plugins. It provides features via its extensive plugin ecosystem to help improve your CSS writing experience. Generally, PostCSS plugins allow you to write plain CSS as you normally would, and once invoked, they scan through the code to perform the desired transformations.

Create a '.postcssrc' file in project root, and enable the tailwindcss plugin.
```python
{
  "plugins": {
    "tailwindcss": {}
  }
}
```

# Ref Site
<ul>
	<li>https://styled-components.com/</li>
	<li>https://tailwindcss.com/</li>
	<li>https://getbootstrap.com/</li>
	<li>Material UI - https://mui.com/ </li>
</ul>




