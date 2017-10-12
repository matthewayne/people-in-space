// Copyright 2017, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const http = require('http');
const functions = require('firebase-functions');

const host = 'api.open-notify.org';
const path = '/astros.json'

exports.peopleInSpace = functions.https.onRequest((req, res) => {
  // Call the people in space API
  callPeopleInSpaceApi().then((output) => {
    // Return the results of the people in space API to API.AI
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ 'speech': output, 'displayText': output }));
  }).catch((error) => {
    // If there is an error let the user know
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ 'speech': error, 'displayText': error }));
  });
});

function callPeopleInSpaceApi () {
  return new Promise((resolve, reject) => {
    console.log('API Request: ' + host + path);

    // Make the HTTP request to get the weather
    http.get({host: host, path: path}, (res) => {
      let body = ''; // var to store the response chunks
      res.on('data', (d) => { body += d; }); // store each response chunk
      res.on('end', () => {
        // After all the data has been received parse the JSON for desired data
        let response = JSON.parse(body);
        let numPeopleInSpace = response['number']
        let peopleInSpace = response['people']

        // Create response
        let output = `Currently there are ${numPeopleInSpace} people in space.`;

        // Resolve the promise with the output text
        console.log(output);
        resolve(output);
      });
      res.on('error', (error) => {
        let errorMessage = 'Error connecting to the people in space API';
        reject(errorMessage);
      });
    });
  });
}
