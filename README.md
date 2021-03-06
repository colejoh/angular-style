# angular-style
Angular Module for Quick Styling

## Setup
To include angular-style in your app, add it as a module.
```javascript
angular.module('example', ['ngRoute', 'angularStyle']);
```

## Usage
Angular-style uses attribute directives to add styling to elements. Angular-style uses predefined pixel units of 4px. The arguments of the directives are the multiplier to the 4px.

### Margin
The general pattern for using margin is ```as-m-<direction>```. Angular-style supportst the following directions for margin:
* xy: Margin in all directions
* x: Margin left and right
* y: Margin top and bottom
* t: Margin top
* b: Margin bottom
* l: Margin left
* r: Margin right

The following would result in a div with margin of 16px in all directions.
```html
<div as-m-xy="4">
  Your Content
</div>
```

### Padding
The general pattern for using padding is ```as-p-<direction>```. Angular-style supports the following directions for padding:
* xy: Padding in all directions
* x: Padding left and right
* y: Padding top and bottom
* t: Padding top
* b: Padding bottom
* l: Padding left
* r: Padding right

The following would result in a div with padding of 16px in all directions.
```html
<div as-p-xy="4">
  Your Content
</div>
```
### Fonts
Angular style includes a font pattern too. The patter is as follows ```as-f='<size> <weight>'```. The following are weight and size combos.
#### Size:
* xs
* s
* m
* l
* xl

#### Weight:
* normal
* bold
* black

The following would result in large bold text:
```html
<div as-f="l bold">Test</div>
```

### Input
These are for a text input and a button:
```html
<input as-i-text>
<input as-i-button>
```
### Other Elements
#### Card
This is a card to view data.
```html
<div as-card></div>
```
