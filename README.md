gulp-bootstrap-template
==============


Note 
-------------------------
browserify必須是stream才能只用, 因此要用[vinyl-source-stream ](https://www.npmjs.com/package/vinyl-source-stream)

browserify-shim 可以用來set bootstrap depend on jQuery , jQuery就不需要是global了.