# ReactPress

## Chris Hutchinson, 2015

A simple React app built using the WordPress REST API. Initialised using the Yeoman `react-webpack` [generator](https://github.com/newtriks/generator-react-webpack).

### Current functionality

* List posts
* View single post
* List category
* View comments

### Running

- Run `npm install`
- Copy `/src/config.default.json` to `/src/config.json` and fill in the values
- Run `grunt serve`

### Building

Run `grunt build` to build into the `/dist` folder. This can then be used to integrate this as a WordPress theme (`index.php` / `style.css` files will be required)