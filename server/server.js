var express = require('express'),
    sys = require('sys'),
    path = require('path');

var bodyParser = require('body-parser'),
    morgan = require('morgan');

var app = express();

app.use(morgan('combined'));    // logger: not bundled with express
app.use(express.static( path.join(__dirname, '../dist') ));
app.use(bodyParser.json());     // body-parser: not bundled with express

var config = require('./data/config');
var contactsJson = require('./data/contacts-01');

app.get('/contact', function (request, response) {
    console.log('GET /contact');
    response.send(contactsJson);
});

app.get('/contact/:id', function (request, response) {
    console.log('GET /contact/:id');
    var contact = null;
    for(var i = 0; i<contactsJson.length; i++) {
        var currentContact = contactsJson[i];
        if (currentContact.id === request.params.id) {
            contact = currentContact;
            break;
        }
    }
    response.send(contact);
});

app.delete('/contact/:id', function(request, response) {
    console.log('DELETE /contact/:id');
    for(var i = 0; i<contactsJson.length; i++) {
        var currentContact = contactsJson[i];
        if (currentContact.id == request.params.id) {
            console.log("Deleting: " + currentContact);
            contactsJson.splice(i, 1);
            break;
        }
    }
    console.log("Contacts after removal of " + request.params.id + ":" +  contactsJson);
    response.send(request.params.id);
});

app.post('/contact', function (request, response) {
    console.log('POST /contact');
    var contact = request.body;
    contact.id = lastId++;
    contactsJson.push(contact);
    response.send(contact);
});

app.put('/contact/:id', function (request, response) {
    console.log('PUT /contact/:id');

    var incomingContact = request.body;
    var incomingContactId = request.params.id;

    for(var i = 0; i<contactsJson.length; i++) {
        var cuurentContact = contactsJson[i];
        if (cuurentContact.id == incomingContactId) {
            console.log("Contact Incoming: " + sys.inspect(incomingContact));
            contactsJson[i] = incomingContact;
            break;
        }
    }
    response.send(incomingContact);
});

app.listen(8000);
console.log('Express is listening on port 8000');