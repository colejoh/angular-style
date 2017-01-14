var config = {
    pixelMultiplier: 4,
    smallCaps: {
        size: 11,
        weight: 700,
        color: '#8A95A6'
    }
};

var angularStyle = angular.module('angularStyle', ['ngRoute']);

/*
 * MARGIN DIRECTIVES
 */
angularStyle.directive('asMXy', function() {
    return { restrict: 'A', scope: { asMXy: '=' },
        link: function(scope, element, attr) {
            var pixels = config.pixelMultiplier * scope.asMXy + 'px';
            element.css({ margin: pixels });
        }
    };
});
angularStyle.directive('asMX', function() {
    return { restrict: 'A', scope: { asMX: '=' },
        link: function(scope, element, attr) {
            var pixels = config.pixelMultiplier * scope.asMX + 'px';
            var margin = '0 ' + pixels;
            element.css({ margin: margin, });
        }
    };
});
angularStyle.directive('asMY', function() {
    return { restrict: 'A', scope: { asMY: '=' },
        link: function(scope, element, attr) {
            var pixels = config.pixelMultiplier * scope.asMY + 'px';
            var margin = pixels + ' 0';
            element.css({ margin: margin });
        }
    };
});
angularStyle.directive('asMT', function() {
    return { restrict: 'A', scope: { asMT: '=' },
        link: function(scope, element, attr) {
            var pixels = config.pixelMultiplier * scope.asMT + 'px';
            var margin = pixels + ' 0 0 0';
            element.css({ margin: margin });
        }
    };
});
angularStyle.directive('asMB', function() {
    return { restrict: 'A', scope: { asMB: '=' },
        link: function(scope, element, attr) {
            var pixels = config.pixelMultiplier * scope.asMB + 'px';
            var margin = '0 0 ' + pixels + ' 0';
            element.css({ margin: margin });
        }
    };
});
angularStyle.directive('asML', function() {
    return { restrict: 'A', scope: { asML: '=' },
        link: function(scope, element, attr) {
            var pixels = config.pixelMultiplier * scope.asML + 'px';
            var margin = '0 0 0 ' + pixels;
            element.css({ margin: margin });
        }
    };
});
angularStyle.directive('asMR', function() {
    return { restrict: 'A', scope: { asMR: '=' },
        link: function(scope, element, attr) {
            var pixels = config.pixelMultiplier * scope.asMR + 'px';
            var margin = '0 ' + pixels + ' 0 0';
            element.css({ margin: margin });
        }
    };
});
/*
 * PADDING DIRECTIVES
 */
angularStyle.directive('asPXy', function() {
    return { restrict: 'A', scope: { asPXy: '=' },
        link: function(scope, element, attr) {
            var pixels = config.pixelMultiplier * scope.asPXy + 'px';
            element.css({ padding: pixels });
        }
    };
});
angularStyle.directive('asPX', function() {
    return { restrict: 'A', scope: { asPX: '=' },
        link: function(scope, element, attr) {
            var pixels = config.pixelMultiplier * scope.asPX + 'px';
            var padding = '0 ' + pixels;
            element.css({ padding: padding, });
        }
    };
});
angularStyle.directive('asPY', function() {
    return { restrict: 'A', scope: { asPY: '=' },
        link: function(scope, element, attr) {
            var pixels = config.pixelMultiplier * scope.asPY + 'px';
            var padding = pixels + ' 0';
            element.css({ padding: padding });
        }
    };
});
angularStyle.directive('asPT', function() {
    return { restrict: 'A', scope: { asPT: '=' },
        link: function(scope, element, attr) {
            var pixels = config.pixelMultiplier * scope.asPT + 'px';
            var padding = pixels + ' 0 0 0';
            element.css({ padding: padding });
        }
    };
});
angularStyle.directive('asPB', function() {
    return { restrict: 'A', scope: { asPB: '=' },
        link: function(scope, element, attr) {
            var pixels = config.pixelMultiplier * scope.asPB + 'px';
            var padding = '0 0 ' + pixels + ' 0';
            element.css({ padding: padding });
        }
    };
});
angularStyle.directive('asPL', function() {
    return { restrict: 'A', scope: { asPL: '=' },
        link: function(scope, element, attr) {
            var pixels = config.pixelMultiplier * scope.asPL + 'px';
            var padding = '0 0 0 ' + pixels;
            element.css({ padding: padding });
        }
    };
});
angularStyle.directive('asPR', function() {
    return { restrict: 'A', scope: { asPR: '=' },
        link: function(scope, element, attr) {
            var pixels = config.pixelMultiplier * scope.asPR + 'px';
            var padding = '0 ' + pixels + ' 0 0';
            element.css({ padding: padding });
        }
    };
});
/*
 * FONT DIRECTIVES
 */
angularStyle.directive('asFSmallCaps', function() {
    return { restrict: 'A',
        link: function(scope, element, attr) {
            element.css({
                'font-size': config.smallCaps.size + 'px',
                'text-transform': 'uppercase',
                'font-weight': config.smallCaps.weight,
                'color': config.smallCaps.color
            });
        }
    };
});
