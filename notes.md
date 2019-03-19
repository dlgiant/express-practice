#### This makes the path used cross-platform
```javascript
var publicPath = path.resolve(__dirname, "public")
app.use(express.static(publicPath));
```

#### TODO:
ADD: connect-ratelimit
ADD: Helmet
ADD: cookie-parser
ADD: response-time