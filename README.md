# Selectyle

Selectyle is a tiny javascript plugin to style `<select>` elements.
It's really tiny only 1kb minified, and 264 bytes gzipped.

## Getting Started
Download the [minified version][min] or the [development version][max], and the [stylesheet][css] *(required)*

[min]: https://raw.github.com/jeromesmadja/selectyle/master/dist/selectyle.min.js
[max]: https://raw.github.com/jeromesmadja/selectyle/master/dist/selectyle.js
[max]: https://raw.github.com/jeromesmadja/selectyle/master/selectyle.css

## Usage
Add selectyle.min.js and add selectyle.css to your document. Of course you can get the content from selectyle.css and add it to your own stylesheet that will avoid an extra request.

	<script src="PATH_TO_JAVACRIPT_DIR/selectyle.min.js"></script>
	<link rel="stylesheet" href="PATH_TO_JAVACRIPT_CSS_DIR/selectyle.css">

Once the dom has been loaded you can just do :

    Selectyle( 'select' );

`Selectyle()` accepts any css selector using `document.querySelectorAll()`.

For example you may want to have a class on the selects that you want to style :

    <select class="fancy">
        <option value="1">Red</option>
		<option value="2">Yellow</option>
		<option value="3">Blue</option>
		<option value="4">Green</option>
		<option value="5" selected="selected">Orange</option>
		<option value="6">Purple</option>
		<option value="6">Black</option>
		<option value="6">White</option>
    </select>
    <script>
    	Selectyle( '.fancy' );
    </script>

## Examples
_(Coming soon)_

## Why is Selectyle different ?
It doesn't rewrite the features that browsers / OS offer natively, the `<select>` element has to be usable using mouse, keyboard, and touch.
Therefore Selectyle is really *lightweight* : 1kb minified, and 258 bytes gzipped.

The benefits to keep the native dropdown are :
- keyboard accessibility :
-- navigate through the options using the arrow keys and ability to type the first charaters of an option to select it.
- touch devices :
-- select elements work differently on phones or tablets, you don't want to be zooming in to select your options

## What Selectlyle can not do ?
Selectyle does not style the dropdown for one simple reason : it shouldn't.
The dropdown that gets displayed is the one from the `<select>` element.
There are many Javascript plugins out there that will do that for you, but I've never been a fan of rewriting a browser / OS functionnality in Javascript. If it's already there we should use it.