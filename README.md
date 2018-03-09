# People in Space for the Google Assistant
This is the code powering the Google Assistant app "People in space" which use's [Nathan Bergey](https://twitter.com/natronics)'s [Open Notify's People in Space API](http://open-notify.org/Open-Notify-API/People-In-Space/) to determine how many people are in space.

## Try it out
Say `Talk to people in space` to any Google Assistant device

## Dialogflow setup
1. [Sign up for or sign into Dialogflow](https://console.dialogflow.com/api-client/#/login)
1. [Create a Dialogflow agent](https://dialogflow.com/docs/getting-started/building-your-first-agent#create_an_agent)
1. [Restore the zip file `people-in-space.zip`](https://dialogflow.com/docs/agents#export_and_import)

## Fulfillment Setup: Dialogflow Inline Editor (option 1)

1. [Enable the Cloud Function for Firebase inline editor](https://dialogflow.com/docs/fulfillment#cloud_functions_for_firebase)
1. Copy this code in `functions/index.js` the `index.js` file in the Dialogflow Cloud Function for Firebase inline editor.
1. Copy this code in `functions/package.json` the `package.json` file in the Dialogflow Cloud Function for Firebase inline editor.
1. Click `Deploy`

## Fulfillment Setup: Firebase CLI (option 2)

1. `cd` to the `functions` directory
1. Run `npm install`
1. Install the Firebase CLI by running `npm install -g firebase-tools`
1. Login to your Google account with `firebase login`
1. Add your project to the sample with `firebase use [project ID]` [find your project ID here](https://dialogflow.com/docs/agents#settings)
1. Run `firebase deploy --only functions:dialogflowFirebaseFulfillment`
1. Paste the URL into your Dialogflow agent's fulfillment and click `Save`

## License
See LICENSE.md.
