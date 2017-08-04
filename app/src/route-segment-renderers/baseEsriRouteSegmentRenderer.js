define([
    'esri/core/watchUtils'
], (watchUtils
) => {
    'use strict';

    return class BaseEsriRouteSegmentRenderer {
        constructor (view) {
            this._view = view;
        }

        addPoint (point) {
            return this._whenViewUpdated();
        }

        addPath (points) {
            return this._whenViewUpdated();
        }

        _whenViewUpdated () {
            let startTime = new Date();

            return watchUtils.whenOnce(this._view, 'updating')
                .then(() => watchUtils.whenFalseOnce(this._view, 'updating'))
                .then(() => new Date() - startTime);
        }
    };
});
