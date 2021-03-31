# NY-Times-News-Explorer-API

## Methods and Routes

Method | Route | Description
----- |------|---------
GET | `/topstories/:section` | The Top Stories API returns an array of articles currently on the specified section (arts, business, ...). [Link to NY Times docs](https://developer.nytimes.com/docs/top-stories-product/1/overview)
GET | `/mostpopular/:type/:amount` | Most Popular API provides services for getting the most popular articles on NYTimes.com based on emails, shares, or views. [Link to NY Times docs](https://developer.nytimes.com/docs/most-popular-product/1/overview)
GET | `/lists/names` | The Books API provides information about book reviews and The New York Times Best Sellers lists. The lists/names service returns a list of all the NYT Best Sellers Lists. [Link to NY Times docs](https://developer.nytimes.com/docs/books-product/1/overview)
GET | `/lists/:date/:list` | The lists/{date}/{name} service returns the books on the best sellers list for the specified date and list name. [Link to NY Times docs](https://developer.nytimes.com/docs/books-product/1/overview)

Future revision will include the creation of routes for other parts of the [NY Times API](https://developer.nytimes.com/)
