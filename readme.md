# HTTP.js

HTTP.js is a simple JavaScript library for making HTTP requests. It provides methods for performing GET, POST, PUT, and DELETE requests using the fetch API.

## Getting Started

To use HTTP.js in your JavaScript project, you can follow these steps:

1. Download or clone the `HTTP.js` file from this repository.

2. Include the `HTTP.js` file in your project:

```html
<script src="path/to/HTTP.js"></script>
```
3.Use the provided methods to make HTTP requests. Here are some examples:
```js
// Make a GET request
HTTP.get('https://jsonplaceholder.typicode.com/posts')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });

// Make a POST request
const post = { title: 'Hello', body: 'World', userId: 1 };
HTTP.post('https://jsonplaceholder.typicode.com/posts', post)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });

// Make a PUT request
const updatedPost = { title: 'Updated Post', body: 'This post has been updated.', userId: 1 };
HTTP.put('https://jsonplaceholder.typicode.com/posts/1', updatedPost)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });

// Make a DELETE request
HTTP.delete('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
