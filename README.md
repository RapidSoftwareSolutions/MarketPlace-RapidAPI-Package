[create]:https://github.com/RapidSoftwareSolutions/Marketplace-RapidAPI-Package/blob/master/instructions/logo-blue.png?raw=true

[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/RapidAPI/functions?utm_source=RapidAPIGitHub_RapidAPIFunctions&utm_medium=button&utm_content=RapidAPI_GitHub)



# RapidAPI Package
This package allows you to search which APIs exist in RapidAPI


![](https://storage.googleapis.com/rapid_connect_static/images/rapid-logo-rectangle.png)

## RapidAPI.getAll
Return all APIs that exist in RapidAPI

| Field            | Type             | Description  |
| -------------    |-------------     | -----|
| `limit`          |string            | The limit number for showing APIs. |
| `offset`         |string            | The offset number for showing APIs.|
| `sortBy`         |string            | The attribute that you want to sort the results with. |

#### Request example
```json
{
	"limit": "2",
	"offset": "0",
	"sortBy": "installsAllTime"
}
```
#### Response example
```json
{
  "callback": "success",
  "contextWrites": {
    "to": [
      {
        "followers": 13,
        "healthy": 1,
        "installsAllTime": 3008,
        "installsDaily": 144,
        "installsMonthly": 2511,
        "installsWeekly": 1215,
        "name": "GoogleTranslate",
        "lastUpdated": "2016-08-17T06:48:11.000Z",
        "createdAt": "2016-08-15T06:48:11.000Z",
        "updatedAt": "2017-02-14T12:07:34.000Z",
        "metadata": "http://localhost:8081/v2/public/getApiByName/GoogleTranslate"
      },
      {
        "followers": 9,
        "healthy": 1,
        "installsAllTime": 2193,
        "installsDaily": 289,
        "installsMonthly": 2126,
        "installsWeekly": 1821,
        "name": "SpotifyPublicAPI",
        "lastUpdated": "2016-09-24T16:39:40.000Z",
        "createdAt": "2016-09-24T16:39:44.000Z",
        "updatedAt": "2017-01-15T13:02:03.000Z",
        "metadata": "http://localhost:8081/v2/public/getApiByName/SpotifyPublicAPI"
      }
    ]
  }
}
```

## RapidAPI.getApiByCategory
Return all APIs by the given category`s name.

| Field            | Type             | Description  |
| -------------    |-------------     | -----|
| `limit`          |string            | The limit number for APIs. |
| `offset`         |string            | The offset number.|
| `sortBy`         |string            | The attribute that you want to sort the results with. |
| `category`       |string            | Required: The category name. |

#### Request example
```json
{
	"limit": "2",
	"offset": "0",
	"sortBy": "installsAllTime",
	"cetegory": "music"
}
```
#### Response example
```json
{
  "callback": "success",
  "contextWrites": {
    "to": [
      {
        "followers": 9,
        "healthy": 1,
        "installsAllTime": 2193,
        "installsDaily": 289,
        "installsMonthly": 2126,
        "installsWeekly": 1821,
        "name": "SpotifyPublicAPI",
        "lastUpdated": "2016-09-24T16:39:40.000Z",
        "createdAt": "2016-09-24T16:39:44.000Z",
        "updatedAt": "2017-01-15T13:02:03.000Z",
        "category": "Music",
        "metadata": "http://localhost:8081/v2/public/getApiByName/SpotifyPublicAPI"
      },
      {
        "followers": 0,
        "healthy": 1,
        "installsAllTime": 116,
        "installsDaily": 0,
        "installsMonthly": 58,
        "installsWeekly": 0,
        "name": "SpotifyUserAPI",
        "lastUpdated": "2016-09-24T17:08:16.000Z",
        "createdAt": "2016-09-24T17:08:18.000Z",
        "updatedAt": "2016-10-07T22:12:36.000Z",
        "category": "Music",
        "metadata": "http://localhost:8081/v2/public/getApiByName/SpotifyUserAPI"
      }
    ]
  }
}
```

## RapidAPI.getApiByName
Return API by the given name.

| Field            | Type   | Description  |
| -------------    |-------------     | -----|
| `packageName`    |string  | Required: The package name. |

#### Request example
```json
{
	"packageName": "Googletranslate"
}
```
#### Response example
```json
{
  "callback": "success",
  "contextWrites": {
    "to": {
      "followers": 13,
      "healthy": 1,
      "installsDaily": 144,
      "installsWeekly": 1215,
      "installsMonthly": 2511,
      "installsAllTime": 3008,
      "name": "GoogleTranslate",
      "createdAt": "2016-08-15T06:48:11.000Z",
      "updatedAt": "2017-02-14T12:07:34.000Z",
      "lastUpdated": "2016-08-17T06:48:11.000Z",
      "tagline": "Google Translate API Wrapper",
      "keywords": [
        "API",
        "English",
        "Google",
        "language",
        "languages",
        "translate",
        "translation",
        "travel"
      ],
      "description": "This blocks allows you to translates a sting of text from one language to another",
      "image": "https://upload.wikimedia.org/wikipedia/commons/d/db/Google_Translate_Icon.png",
      "repo": "https://github.com/RapidSoftwareSolutions/marketplace-googletranslate-package",
      "accounts": {
        "domain": "google.com",
        "credentials": [
          "apiKey"
        ]
      },
      "blocks": [
        {
          "name": "translate",
          "description": "Translate `string` from `sourceLanguage` to `targetLanguage`",
          "args": [
            {
              "name": "apiKey",
              "type": "credentials",
              "info": "The api key obtained from Google Cloud.",
              "required": true
            },
            {
              "name": "string",
              "type": "String",
              "info": "The string to translate.",
              "required": true
            },
            {
              "name": "targetLanguage",
              "type": "String",
              "info": "The ISO 639-1 language code to translate the input to.",
              "required": true
            },
            {
              "name": "sourceLanguage",
              "type": "String",
              "info": "The ISO 639-1 language code the source input is written in.",
              "required": false
            }
          ],
          "callbacks": [
            {
              "name": "error",
              "info": "Error"
            },
            {
              "name": "success",
              "info": "Success"
            }
          ]
        }
      ],
      "events": []
    }
  }
}
```
