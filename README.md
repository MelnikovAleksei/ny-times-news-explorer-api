# NY-Times-News-Explorer-API

## Methods and Routes for [Top Stories NY Times API](https://developer.nytimes.com/docs/top-stories-product/1/overview)

Method | Route | Description
----- |------|---------
GET | `/articlesearch/:begin_date/:end_date/:fq/:page/:query/:sort` | Use the Article Search API to look up articles by keyword. You can refine your search using filters and facets. [Link to NY Times docs](https://developer.nytimes.com/docs/articlesearch-product/1/overview)

## Methods and Routes for [Top Stories NY Times API](https://developer.nytimes.com/docs/top-stories-product/1/overview)

Method | Route | Description
----- |------|---------
GET | `/topstories/:section` | The Top Stories API returns an array of articles currently on the specified section (arts, business, ...). [Link to NY Times docs](https://developer.nytimes.com/docs/top-stories-product/1/overview)

## Methods and Routes for [Most Popular NY Times API](https://developer.nytimes.com/docs/most-popular-product/1/overview)

Method | Route | Description
----- |------|---------
GET | `/mostpopular/:type/:amount` | Most Popular API provides services for getting the most popular articles on NYTimes.com based on emails, shares, or views. [Link to NY Times docs](https://developer.nytimes.com/docs/most-popular-product/1/overview)

## Methods and Routes for [Books NY Times API](https://developer.nytimes.com/docs/books-product/1/overview)

Method | Route | Description
----- |------|---------
GET | `/lists/names` | The Books API provides information about book reviews and The New York Times Best Sellers lists. The lists/names service returns a list of all the NYT Best Sellers Lists. [Link to NY Times docs](https://developer.nytimes.com/docs/books-product/1/routes/lists/names.json/get)
GET | `/lists/:date/:list` | The lists/{date}/{name} service returns the books on the best sellers list for the specified date and list name. [Link to NY Times docs](https://developer.nytimes.com/docs/books-product/1/routes/lists/%7Bdate%7D/%7Blist%7D.json/get)
GET | `/lists/overview/:date` | Get top 5 books for all the Best Sellers lists for specified date. [Link to NY Times docs](https://developer.nytimes.com/docs/books-product/1/routes/lists/overview.json/get)


## Methods and Routes for [Movie Reviews NY Times API](https://developer.nytimes.com/docs/movie-reviews-api/1/overview)

Method | Route | Description
----- |------|---------
GET | `/critics/:name` | Get movie critics. You can either specify the reviewer name or use "all", "full-time", or "part-time". [Link to NY Times docs](https://developer.nytimes.com/docs/movie-reviews-api/1/overview)
GET | `/reviews/:type/:offset/:order` | Get movie reviews. Can filter to only return Critics' Picks. Supports ordering results by-publication-date or by-opening-date. Use offset to paginate thru results, 20 at a time. [Link to NY Times docs](https://developer.nytimes.com/docs/movie-reviews-api/1/routes/reviews/%7Btype%7D.json/get)

Future revision will include the creation of routes for other parts of the [NY Times API](https://developer.nytimes.com/)
