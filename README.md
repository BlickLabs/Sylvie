# Sylvie
## Prerequirements
- NodeJS Installed (6.9.1) [Suggestion: Use nvm to avoid common installation errors]
- Gulp (global installation)
```
npm install -g gulp
```
- JSHint (global installation)
```
npm install -g jshint
```
- Stylus (global installation)
```
npm install -g stylus
```
- Bower (global installation)
```
npm install -g bower
```

## Before coding
Install local node dependencies
```
npm install
```
Install bower packages
```
bower install
```
Run gulp
```
gulp
```
Open your browser and write localhost:8080 in the url bar

## Project structure
Unless you need to change gulp default configuration, you will only need to work in the /src directory. This directory contains the following folders:
### templates
Nunjucks files (.njk), separated into /partials and /sections subfolders.

- **/partials** contains general components of the html structure (navbar, footer and css/js imports)
- **/sections** contains specific html code for each section (index, contact, etc.)

### styl
Stylus files, including /partials and /sections subfolders.

- **vars.styl** contains stylus global variables (color names and font weights)
- **mixins.styl** contains stylus mixins that are useful to avoid code repetition
  - **center-block()**: Centers a display:block element
  - **remify(pxsize)**: Transforms a pixel-based size into a rem-based one (useful for responsive styles)
  - **simple-border(side, width, colour, style)**: Generates element borders. It could receive 'all', 'top', 'bottom', 'left', 'right', 'topbottom', 'leftright', 'notop', 'nobottom', 'noleft', 'noright' values for side parameter. If it is not provided, style=solid
- **fonts.styl** contains declaration of custom fonts
- **utils.styl** contains css utility classes. By default, there are just two (.cover and .simple-parallax) and commented imports for some bootstrap code
- **base.styl** contains general styles for the website (buttons, links, lists, etc.)
- **main.styl** imports all the other files
- **partials** contains navbar.styl and footer.styl files
- **/sections** contains specific styles for each section

**base.styl and all the files inside /partials and /sections should contain their own respective media queries at the end of code**

### js
Contains all js files of the project (except libraries)

**JS code should be separated into small single files**

### fonts
Contains all font files used in /styl/fonts.styl

### img
Contains all image files. Suggestion: create separated folders, such as covers, icons, etc.

**favicon.ico must be placed directly inside of /src, not in /src/img**

## Stylus naming and usage
### Variables
In order to make it clear that you are using a stylus variable, they should be declared using the following format:
```
$red = #d23f31

// Usage
.some-class
  color $red
```

### Mixins
Mixins are declared with the following syntax:
```
mixin-name(parameter1, parameter2, ...)
  code
```
Once that they are declared you can use them by either brackets syntax or css-alike syntax.
```
// Brackets
.some-class
  mixin-name(parameter1, parameter2, ...)

// Css-alike
.some-class
  mixin-name parameter1 parameter2
```
There are two types of mixin, one that returns a value and the other that doesn't.
The first one must be used as a css property value and with brackets syntax, and the second one as a css propery name.
```
// If mixin returns a value
.some-class
  css-property mixin-name(parameter1, parameter2, ...)

// If mixin doesn't return a value
.some-class
  mixin-name(parameter1, parameter2, ...)
  // or
  mixin-name parameter1 parameter2
```
### Fonts
Fonts must be declared in the following way:

```
@font-face
  font-family 'Font Name'
  src url('../fonts/fontfile.extension')
  font-style normal
  font-weight $light
```

If a font family has more than one variant, each variant must be declared individually using the same syntax. In order to make it easier to set the font-weight value, there are some predefined variables in the vars.styl file.

## Nunjucks blocks
By default there are 3 blocks (meta, title and content) that can be used in every single nunjucks file that extends from /partials/base.njk (usually all files extends from it)

- **meta** (optional) contains the meta tags of the section (viewport and charset are already set in base.njk)
- **title** contains the text that will be displayed in the title html tag
- **content** contains the section code itself

You can create more blocks if you need them.
