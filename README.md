Smooth-Scroll
=============

Adds smooth scrolling to anchor links within a page without any framework dependency.

Demo
===
http://gabrieldelepine.github.io/smooth-scroll/

Dependencies
===
None ! Smooth scroll is a framework-free standalone function (ie : You do not need to include any other file in your page such as jQuery)

How To Use
===
Include the `smooth-scroll.js` file to your web page. All anchor links will scroll smoothly.

If your layout includes a `position: fixed` header, your anchors will be hidden behind your header.
To fix-it, change the `height_fixed_header` parameter within `smooth-scroll.js` to `1`.

Bower
===
If you are using bower, just run `bower  install smooth-scroll`

Npm
===
Just run `npm install @gabriel-delepine/smooth-scroll`

Compatibility
===
Smooth scroll is compatible with modern browsers only because it use the [history API](http://caniuse.com/history).
For older browsers, it might be possible to get compatibility with https://github.com/browserstate/history.js

Size
===

The size of the minified version is 432 bytes ! (After gzip)
