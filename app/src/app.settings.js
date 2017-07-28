define(() => {
    'use strict';

    const ASSETS_PATH = '/assets/';

    const defaultIconSizes = {
        verticalOffset: {
            screenLength: 150,
            maxWorldLength: 5000,
            minWorldLength: 50
        },
        symbolSize: 25,
        calloutSize: 4
    };
    const brandPrimaryColor = [ 30, 136, 229 ];

    return {
        access: {
            server: 'https://route.arcgis.com/arcgis/rest/services',
            token: 'g9dW2EOansLis3Ek0j6P3SZ-FXZtQZ-yFnUo0k9gmoI0UzO1r39BIXqgR4KNLxFFWwIB6grDavlYAM8W4K7OvfxQ3UrLc5rK8prmvzfC5YOLNjx8_NVYQAqNOGkdIEz-ql-Fsa4S7e7ZXiF84rrLUg..'
        },
        locations: {
            PICKUP: 'PICKUP',
            DELIVERY: 'DELIVERY',
            INTERMEDIATE: 'INTERMEDIATE'
        },
        camera: {
            DEFAULT_ZOOM: 14,
            INITIAL_TILT: 0,
            ROUTE_TILT: 70,
            TOTAL_VIEW_TILT: 30,
            HEADING_TARGET_POINTS_COUNT: 50,
            SCALE_TARGET_POINTS_COUNT: 30,
            POINTS_COUNT_PER_CAMERA_POSITION: 4,
            SPEED_FACTOR: 4,
            INITIAL_TRANSITION_DURATION: 8000,
            FRAME_DURATION: 200,
            TOTAL_VIEW_TRANSITION_DURATION: 12000
        },
        route: {
            MAX_POINTS_COUNT: 1000
        },
        colors: {
            BRAND_PRIMARY: brandPrimaryColor,
            LOCATIONS: {
                NONE: [ 30, 136, 229 ],
                //PICKUP: [ 61, 224, 61 ],
                //DELIVERY: [ 187, 0, 0 ],
                //INTERMEDIATE: [176, 236, 255]
            }
        },
        routeBuilder: {
            URL: 'https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World',
            MAX_POINTS_COUNT: 150,  // api limitation
            POINTS_PERCENT_TO_PROCESS: 50,
            MIN_POINTS_COUNT: 2
        },
        assets: {
            LOCATION_PIN: {
                PICKUP: _assetsPrefixed('svg/location-pin-pickup.svg'),
                DELIVERY: _assetsPrefixed('svg/location-pin-delivery.svg'),
                INTERMEDIATE: _assetsPrefixed('svg/location-pin-intermediate.svg')
            }
        },
        iconSizes: {
            PICKUP: defaultIconSizes,
            DELIVERY: defaultIconSizes,
            INTERMEDIATE: {
                verticalOffset: {
                    screenLength: 30,
                    maxWorldLength: 2000,
                    minWorldLength: 20
                },
                symbolSize: 25,
                calloutSize: 1
            }
        }
    };

    function _assetsPrefixed(path) {
        return ASSETS_PATH + path;
    }
});
