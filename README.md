# node-js-cluster

This project demonstrates how to create a REST API and how to start in cluster mode. 

"A single instance of Node.js runs in a single thread. To take advantage of multi-core systems, the user will sometimes want to launch a cluster of Node.js processes to handle the load.
The cluster module allows easy creation of child processes that all share server ports." (Node.js documentation)

## Usage

$ npm install

### Start the server in normal mode:
$ node .\index.js

### Start the server in cluster mode:
$ node .\index.cluster.js
