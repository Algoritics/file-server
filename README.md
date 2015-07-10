# file-server

## EDUCATIONAL PURPOSES ONLY. NOT FOR PRODUCTION.

### To run:
`
npm install
node index.js
`

### Description
This module should allow for a file upload with the POST method at the root URI:
`
POST http://example.com 
`
File should be saved to a direcotry on the server with a UUID (https://github.com/broofa/node-uuid) filename. A corrisponding JSON file should also be saved and should include meta information such as the original filename and the time of the upload. Example:
`
/data/7dc73a35-3c76-4670-a4ef-de7376d8cdc9.bin  <-- Uploaded file contents
/data/7dc73a35-3c76-4670-a4ef-de7376d8cdc9.json <-- File meta data
`
`
{
  "name":"file.png",
  "time":"2012-04-23T18:25:43.511Z"
}
`
An uploaded file should be downloadable with the GET method. Example:
`
GET http://example.com/7dc73a35-3c76-4670-a4ef-de7376d8cdc9
`
According the example above, the URI should send a file named "file.png". If the file does not exists on server, then send a 404 not found error.
