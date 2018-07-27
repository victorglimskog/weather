const initialState = {
    forecast: [
        {
            "date": "2018-07-14",
            "date_epoch": 1531526400,
            "day": {
                "maxtemp_c": 20.5,
                "maxtemp_f": 68.9,
                "mintemp_c": 14.1,
                "mintemp_f": 57.4,
                "avgtemp_c": 17.4,
                "avgtemp_f": 63.3,
                "maxwind_mph": 13.6,
                "maxwind_kph": 22.0,
                "totalprecip_mm": 0.0,
                "totalprecip_in": 0.0,
                "avgvis_km": 18.7,
                "avgvis_miles": 11.0,
                "avghumidity": 75.0,
                "condition": {
                    "text": "Partly cloudy",
                    "icon": "//cdn.apixu.com/weather/64x64/day/116.png",
                    "code": 1003
                },
                "uv": 6.0
            },
            "astro": {
                "sunrise": "04:44 AM",
                "sunset": "09:43 PM",
                "moonrise": "06:20 AM",
                "moonset": "10:39 PM"
            }
        },
        {
            "date": "2018-07-15",
            "date_epoch": 1531612800,
            "day": {
                "maxtemp_c": 22.7,
                "maxtemp_f": 72.9,
                "mintemp_c": 15.2,
                "mintemp_f": 59.4,
                "avgtemp_c": 18.2,
                "avgtemp_f": 64.8,
                "maxwind_mph": 11.0,
                "maxwind_kph": 17.6,
                "totalprecip_mm": 0.0,
                "totalprecip_in": 0.0,
                "avgvis_km": 19.9,
                "avgvis_miles": 12.0,
                "avghumidity": 74.0,
                "condition": {
                    "text": "Partly cloudy",
                    "icon": "//cdn.apixu.com/weather/64x64/day/116.png",
                    "code": 1003
                },
                "uv": 6.2
            },
            "astro": {
                "sunrise": "04:45 AM",
                "sunset": "09:42 PM",
                "moonrise": "07:45 AM",
                "moonset": "11:11 PM"
            }
        },
        {
            "date": "2018-07-16",
            "date_epoch": 1531699200,
            "day": {
                "maxtemp_c": 27.0,
                "maxtemp_f": 80.6,
                "mintemp_c": 17.6,
                "mintemp_f": 63.7,
                "avgtemp_c": 20.9,
                "avgtemp_f": 69.5,
                "maxwind_mph": 10.7,
                "maxwind_kph": 17.3,
                "totalprecip_mm": 1.0,
                "totalprecip_in": 0.04,
                "avgvis_km": 19.6,
                "avgvis_miles": 12.0,
                "avghumidity": 68.0,
                "condition": {
                    "text": "Heavy rain at times",
                    "icon": "//cdn.apixu.com/weather/64x64/day/305.png",
                    "code": 1192
                },
                "uv": 6.2
            },
            "astro": {
                "sunrise": "04:47 AM",
                "sunset": "09:41 PM",
                "moonrise": "09:10 AM",
                "moonset": "11:36 PM"
            }
        },
        {
            "date": "2018-07-17",
            "date_epoch": 1531785600,
            "day": {
                "maxtemp_c": 19.9,
                "maxtemp_f": 67.8,
                "mintemp_c": 16.1,
                "mintemp_f": 61.0,
                "avgtemp_c": 18.5,
                "avgtemp_f": 65.2,
                "maxwind_mph": 9.4,
                "maxwind_kph": 15.1,
                "totalprecip_mm": 4.8,
                "totalprecip_in": 0.19,
                "avgvis_km": 15.8,
                "avgvis_miles": 9.0,
                "avghumidity": 83.0,
                "condition": {
                    "text": "Moderate or heavy rain shower",
                    "icon": "//cdn.apixu.com/weather/64x64/day/356.png",
                    "code": 1243
                },
                "uv": 4.3
            },
            "astro": {
                "sunrise": "04:48 AM",
                "sunset": "09:39 PM",
                "moonrise": "10:34 AM",
                "moonset": "11:57 PM"
            }
        },
        {
            "date": "2018-07-18",
            "date_epoch": 1531872000,
            "day": {
                "maxtemp_c": 22.7,
                "maxtemp_f": 72.9,
                "mintemp_c": 15.4,
                "mintemp_f": 59.7,
                "avgtemp_c": 19.4,
                "avgtemp_f": 67.0,
                "maxwind_mph": 15.7,
                "maxwind_kph": 25.2,
                "totalprecip_mm": 0.0,
                "totalprecip_in": 0.0,
                "avgvis_km": 18.1,
                "avgvis_miles": 11.0,
                "avghumidity": 76.0,
                "condition": {
                    "text": "Partly cloudy",
                    "icon": "//cdn.apixu.com/weather/64x64/day/116.png",
                    "code": 1003
                },
                "uv": 3.9
            },
            "astro": {
                "sunrise": "04:50 AM",
                "sunset": "09:38 PM",
                "moonrise": "11:56 AM",
                "moonset": "No moonset"
            }
        },
        {
            "date": "2018-07-19",
            "date_epoch": 1531958400,
            "day": {
                "maxtemp_c": 22.5,
                "maxtemp_f": 72.5,
                "mintemp_c": 14.8,
                "mintemp_f": 58.6,
                "avgtemp_c": 19.0,
                "avgtemp_f": 66.2,
                "maxwind_mph": 17.0,
                "maxwind_kph": 27.4,
                "totalprecip_mm": 0.0,
                "totalprecip_in": 0.0,
                "avgvis_km": 20.0,
                "avgvis_miles": 12.0,
                "avghumidity": 66.0,
                "condition": {
                    "text": "Partly cloudy",
                    "icon": "//cdn.apixu.com/weather/64x64/day/116.png",
                    "code": 1003
                },
                "uv": 39960.0
            },
            "astro": {
                "sunrise": "04:51 AM",
                "sunset": "09:37 PM",
                "moonrise": "01:14 PM",
                "moonset": "12:15 AM"
            }
        },
        {
            "date": "2018-07-20",
            "date_epoch": 1532044800,
            "day": {
                "maxtemp_c": 23.0,
                "maxtemp_f": 73.4,
                "mintemp_c": 16.0,
                "mintemp_f": 60.8,
                "avgtemp_c": 19.3,
                "avgtemp_f": 66.7,
                "maxwind_mph": 11.2,
                "maxwind_kph": 18.0,
                "totalprecip_mm": 0.0,
                "totalprecip_in": 0.0,
                "avgvis_km": 20.0,
                "avgvis_miles": 12.0,
                "avghumidity": 64.0,
                "condition": {
                    "text": "Partly cloudy",
                    "icon": "//cdn.apixu.com/weather/64x64/day/116.png",
                    "code": 1003
                },
                "uv": 39960.0
            },
            "astro": {
                "sunrise": "04:53 AM",
                "sunset": "09:35 PM",
                "moonrise": "02:29 PM",
                "moonset": "12:34 AM"
            }
        }
    ],
}


const weather = (state = initialState, action) => {
    return state
}

export default weather