

## Resources
Read or watch:

* [Selector
* [Get and set content](https://jquery-tutorial.net/dom-manipulation/getting-and-setting-content/)
* [Manipulate CSS classes](https://jquery-tutorial.net/dom-manipulation/getting-and-setting-css-classes/)
* [Manipulate DOM elements](https://jquery-tutorial.net/dom-manipulation/the-append-and-prepend-methods/)
* [Document ready](https://learn.jquery.com/using-jquery-core/document-ready/)
* [Introduction](https://jquery-tutorial.net/ajax/introduction/)
* [GET & POST request](https://jquery-tutorial.net/ajax/the-get-and-post-methods/)
* [HTTP access control (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## Import JQuery
```
<head>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
</head>
```

## Before starting the project…
You will work on a codebase using [Flasgger](), you will need to install it locally first before starting the RestAPI:
```
$ sudo apt-get install -y python3-lxml
$ sudo pip3 install flask_cors # if it was not installed yet
$ sudo pip3 install flasgger
```

## Expose ports from your Vagrant
In your Vagrantfile, add this line for each port forwarded
```
# I expose the port 5001 of my vm to the port 5001 on my computer
config.vm.network :forwarded_port, guest: 5001, host: 5001 
```

if you need to expose other ports, same line but you will need to replace the “guest port” (inside your vagrant) and your “host port” (outside your vagrant, used from your browser for example)

It’s important in your project, to use the AirBnB API with the port 5001

## Tasks

## [0. Last clone!](./)
