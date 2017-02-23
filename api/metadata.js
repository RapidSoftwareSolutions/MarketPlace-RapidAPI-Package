module.exports.do = function(req, res){
    res.status(200).send({
        'package': 'RapidAPI',
        "tagline": "RapidAPI API Wrapper",
        "keywords": ["API", "RapidAPI"],
        "description": "This blocks allows you to search which APIs exist in RapidAPI",
        'image': 'LOGO',
        'repo': 'https://github.com/RapidSoftwareSolutions/marketplace-RapidAPI-Package',
        'accounts': {
            'domain': 'rapidapi.com',
            'credentials': []
        },
        'blocks': [{
            "name":"getAll",
            "description": "Return all APIs that exist in RapidAPI",
            "args":[
                {
                    name: "limit",
                    type: "String",
                    info: "The limit number for APIs.",
                    required: false
                },
                {
                    name: "offset",
                    type: "String",
                    info: "The offset number.",
                    required: false
                },
                {
                    name: "sortBy",
                    type: "String",
                    info: "The sortBy attribute that you want to sort the results with.",
                    required: false
                }
            ],
            'callbacks':[
                {
                    'name': 'error',
                    'info': 'Error'
                },
                {
                    'name': 'success',
                    'info': 'Success'
                }
            ]
        },

        {
            "name":"getApiByCategory",
            "description": "Return all APIs by the given category name.",
            "args":[
                {
                    name: "limit",
                    type: "String",
                    info: "The limit number for APIs.",
                    required: false
                },
                {
                    name: "offset",
                    type: "String",
                    info: "The offset number.",
                    required: false
                },
                {
                    name: "sortBy",
                    type: "String",
                    info: "The sortBy attribute that you want to sort the results with.",
                    required: false
                },
                {
                    name: "category",
                    type: "String",
                    info: "The category name.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name': 'error',
                    'info': 'Error'
                },
                {
                    'name': 'success',
                    'info': 'Success'
                }
            ]
        },

        {
            "name":"getApiByName",
            "description": "Return API by the given name.",
            "args":[
                {
                    name: "packageName",
                    type: "String",
                    info: "The package name.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name': 'error',
                    'info': 'Error'
                },
                {
                    'name': 'success',
                    'info': 'Success'
                }
            ]
        }]
    })
};
