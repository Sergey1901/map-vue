export const accessToken = 'pk.eyJ1IjoiZXZnZW5peTc5NCIsImEiOiJjbGV1M2JlcWsxbWZ3NDFvMTI4MW01NWR3In0.nUJIAf3XEarPW4QLipGGiQ';

export const SourceKrasnogorsk = {
    type: 'geojson',
    data: {
        type: 'FeatureCollection',
        features: [{
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'Polygon',
                coordinates:[
                    [
                        [37.282114, 55.832734],
                        [37.399502, 55.818757],
                        [37.397126, 55.766809],

                    ]
                ]
            }
        }]
    }
};

export const mapLayers = [
    {
        id: 'krasnogorsk',
        type: 'fill',
        source: SourceKrasnogorsk,
        paint: {
            'fill-color': '#088',
            'fill-opacity': 0.4
        }
    }
];
