// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
const https = require('https');
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function createWidget(agent) {
     const widgetName = agent.parameters.widgetname;
     const location = agent.parameters.location;
     const tags = agent.parameters.tags;
      const options = {
      method: 'PUT',
      hostname: 'pa-service.horizonint.cloud',
      path: '/api/v1/partitions/f2157293-160d-4efb-8c3e-92c6ac5f2bcd/dashboards/7ba8ffe9-09f3-4622-9633-bcdea1eabcfd',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJEWTBNVEkyTVRNMVJqWkRNVGc1TVRBNFJEQkVSRFV5UWpORE9EZEZRVEpHUkRZd016bERSQSJ9.eyJodHRwczovL3NpZW1lbnMuY29tL2FhbCI6IjMiLCJpc3MiOiJodHRwczovL3NpZW1lbnMtcWEtYnQtMDE1LmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJvYXV0aDJ8bWFpbi10ZW5hbnQtb2lkY3xzYW1scHxTaWVtZW5zfFowMDRBMFVXIiwiYXVkIjpbImh0dHBzOi8vaG9yaXpvbmludC5jbG91ZCIsImh0dHBzOi8vc2llbWVucy1xYS1idC0wMTUuZXUuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTcxMDEzMDI1NCwiZXhwIjoxNzEwMjE2NjU0LCJhenAiOiIzU0NIYTFvcjdIYjF4TVRNb2p1cDRsVDUxVk92MHc2MyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJwZXJtaXNzaW9ucyI6W119.lPDO54kh1r9PRF_0gJz2-q9GGMLKSIWRL0bfMdLtrWlmvKqwTUa8XIdtMyz0_N0S7VFrXqAdU9oavc7MKYb-0lAyEXanoDOVyLCi3Ki4oj9580dnsZ8L8ZrG5tStAK_FIQGDjBJfQ2AsF6wieowwVoU4Db8Vo9W2qjvHfTuLslk99WFiczOSs_LIs-DBBqIw7GQ8XjmZyuCWu23-_CGjrygEEHPAE0mMYgAnSmsxrbHsckBUzRI6TCu-RLUgnqv0O8ERkj9b2PokqBoHsRHO-AO_gMKOHdsutG5rTrnb5cjifA2Zx0MvVgo0JayoRVBqeRR6BjwmEQYyHlhoqK8b_g'
      }
    };
       console.log('options', JSON.stringify(options));
      const body = `{
    "id": "7ba8ffe9-09f3-4622-9633-bcdea1eabcfd",
    "name": "Widget create bot",
    "partitionId": "f2157293-160d-4efb-8c3e-92c6ac5f2bcd",
    "createdDate": "2024-03-11T07:27:39.913Z",
    "description": "",
    "updatedDate": "2024-03-11T07:27:39.913Z",
    "createdBy": "DvUser",
    "updatedBy": "DvUser",
    "isDefault": false,
    "useGlobalFilter": true,
    "order": null,
    "widgets": [
        {
            "heading": "Analyzer widget",
            "widgetId": "cc951be3-9396-4868-b36f-230d50c65a10",
            "minWidth": 3,
            "height": 5,
            "width": 12,
            "payload": {
                "filter": {
                    "timeRange": {
                        "range": {
                            "point1": "now",
                            "point2": 604800000,
                            "range": "before"
                        }
                    },
                    "location": [
                        {
                            "id": "f739fbdc-1040-4f95-8846-08cc299be0bf",
                            "label": "HB1",
                            "partitionId": "f2157293-160d-4efb-8c3e-92c6ac5f2bcd",
                            "breadCrumb": "HB1"
                        }
                    ]
                },
                "widgetName": "analyzer-widget",
                "globalFilter": true,
                "partitionIDs": [
                    "72016488-8e78-4cf7-9f4d-e7005384fe8b"
                ],
                "accessiblePartitionIDs": [
                    "f2157293-160d-4efb-8c3e-92c6ac5f2bcd",
                    "72016488-8e78-4cf7-9f4d-e7005384fe8b"
                ],
                "widgetFilter": {
                    "timeRange": {
                        "range": {
                            "point1": "now",
                            "point2": 604800000,
                            "range": "before"
                        }
                    },
                    "location": [
                        {
                            "id": "ef729010-da43-45a6-a684-6a51a6f37cd0",
                            "label": "ROOM 1 - Raviraj Test",
                            "partitionId": "72016488-8e78-4cf7-9f4d-e7005384fe8b",
                            "breadCrumb": "New Building one/Floor 1/ROOM 1 - Raviraj Test"
                        }
                    ]
                },
                "selectedCriteria": [
                    {
                        "tags": [
                            {
                                "name": "RMT",
                                "value": ""
                            }
                        ],
                        "userDefinedName": "RMT:",
                        "minThreshold": "",
                        "maxThreshold": "",
                        "tagChartType": "line",
                        "tagId": "f81e7141-42c3-56a1-329a-4ba1a8fea157",
                        "yAxisIndex": 0
                    }
                ],
                "selectedDataPoints": [],
                "heading": "Analyzer widget",
                "isGlobalLocationFilterEnabled": false,
                "mode": "view",
                "isEditorValid": true
            },
            "id": "3ac4dc8d-7c4b-604e-3832-38ddb098cda4",
            "x": 0,
            "y": 0
        }
    ]
}`;
     // Create the request
    const req = https.request(options, (res) => {
      // Handle the response
      let data = '';
      res.on('data', (chunk) => {
        // Concatenate the data chunks
        data += chunk;
        console.log('response', JSON.stringify(data));
      });
      res.on('end', () => {
        // Parse the data as JSON
         agent.add(`Widget created for ${location}`);
     });
    });
    // End the request
      console.log('req', JSON.stringify(req));
    req.write(body);
    req.end();   
  }

  // // Uncomment and edit to make your own intent handler
  // // uncomment `intentMap.set('your intent name here', yourFunctionHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function yourFunctionHandler(agent) {
  //   agent.add(`This message is from Dialogflow's Cloud Functions for Firebase editor!`);
  //   agent.add(new Card({
  //       title: `Title: this is a card title`,
  //       imageUrl: 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
  //       text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
  //       buttonText: 'This is a button',
  //       buttonUrl: 'https://assistant.google.com/'
  //     })
  //   );
  //   agent.add(new Suggestion(`Quick Reply`));
  //   agent.add(new Suggestion(`Suggestion`));
  //   agent.setContext({ name: 'weather', lifespan: 2, parameters: { city: 'Rome' }});
  // }

  // // Uncomment and edit to make your own Google Assistant intent handler
  // // uncomment `intentMap.set('your intent name here', googleAssistantHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function googleAssistantHandler(agent) {
  //   let conv = agent.conv(); // Get Actions on Google library conv instance
  //   conv.ask('Hello from the Actions on Google client library!') // Use Actions on Google library
  //   agent.add(conv); // Add Actions on Google library responses to your agent's response
  // }
  // // See https://github.com/dialogflow/fulfillment-actions-library-nodejs
  // // for a complete Dialogflow fulfillment library Actions on Google client library v2 integration sample

  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('create.widget', createWidget);
  // intentMap.set('your intent name here', yourFunctionHandler);
  // intentMap.set('your intent name here', googleAssistantHandler);
  agent.handleRequest(intentMap);
});
