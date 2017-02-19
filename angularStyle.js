var config = {
  pixelMultiplier: 4
};

angular.module('angularStyle', [])

/*
 * MARGIN DIRECTIVES
 */
.directive('asMXy', function () {
  return {
    restrict: 'A',
    scope: {
      asMXy: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asMXy + 'px';
      element.css({
        margin: pixels
      });
    }
  };
})
.directive('asMX', function () {
  return {
    restrict: 'A',
    scope: {
      asMX: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asMX + 'px';
      var margin = '0 ' + pixels;
      element.css({
        margin: margin
      });
    }
  };
})
.directive('asMY', function () {
  return {
    restrict: 'A',
    scope: {
      asMY: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asMY + 'px';
      var margin = pixels + ' 0';
      element.css({
        margin: margin
      });
    }
  };
})
.directive('asMT', function () {
  return {
    restrict: 'A',
    scope: {
      asMT: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asMT + 'px';
      var margin = pixels + ' 0 0 0';
      element.css({
        margin: margin
      });
    }
  };
})
.directive('asMB', function () {
  return {
    restrict: 'A',
    scope: {
      asMB: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asMB + 'px';
      var margin = '0 0 ' + pixels + ' 0';
      element.css({
        margin: margin
      });
    }
  };
})
.directive('asML', function () {
  return {
    restrict: 'A',
    scope: {
      asML: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asML + 'px';
      var margin = '0 0 0 ' + pixels;
      element.css({
        margin: margin
      });
    }
  };
})
.directive('asMR', function () {
  return {
    restrict: 'A',
    scope: {
      asMR: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asMR + 'px';
      var margin = '0 ' + pixels + ' 0 0';
      element.css({
        margin: margin
      });
    }
  };
})
/*
 * PADDING DIRECTIVES
 */
.directive('asPXy', function () {
  return {
    restrict: 'A',
    scope: {
      asPXy: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asPXy + 'px';
      element.css({
        padding: pixels
      });
    }
  };
})
.directive('asPX', function () {
  return {
    restrict: 'A',
    scope: {
      asPX: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asPX + 'px';
      var padding = '0 ' + pixels;
      element.css({
        padding: padding
      });
    }
  };
})
.directive('asPY', function () {
  return {
    restrict: 'A',
    scope: {
      asPY: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asPY + 'px';
      var padding = pixels + ' 0';
      element.css({
        padding: padding
      });
    }
  };
})
.directive('asPT', function () {
  return {
    restrict: 'A',
    scope: {
      asPT: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asPT + 'px';
      var padding = pixels + ' 0 0 0';
      element.css({
        padding: padding
      });
    }
  };
})
.directive('asPB', function () {
  return {
    restrict: 'A',
    scope: {
      asPB: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asPB + 'px';
      var padding = '0 0 ' + pixels + ' 0';
      element.css({
        padding: padding
      });
    }
  };
})
.directive('asPL', function () {
  return {
    restrict: 'A',
    scope: {
      asPL: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asPL + 'px';
      var padding = '0 0 0 ' + pixels;
      element.css({
        padding: padding
      });
    }
  };
})
.directive('asPR', function () {
  return {
    restrict: 'A',
    scope: {
      asPR: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asPR + 'px';
      var padding = '0 ' + pixels + ' 0 0';
      element.css({
        padding: padding
      });
    }
  };
})
/*
 * FONT DIRECTIVES
 */
.directive('asFSeperator', function () {
  return {
    restrict: 'E',
    template: "<style>.section-title { width: 100%; height: 10px; border-bottom: 1px solid #EFEFEF; text-align: left; margin-top: 8px; } .section-title span { font-size: 12px; background: #FFF; color: #D6D6D6; padding-right: 8px; } </style> <div class='section-title'><span>{{text}}</span></div>",
    scope: {
      text: '@text'
    }
  };
})
.directive('asF', function () {
  return {
    restrict: 'A',
    scope: {
      asF: '@'
    },
    link: function (scope, element) {
      var params = scope.asF.split(" ");
      var size;
      var weight;

      if (params[0] === 'xs') {
        size = 8;
      } else if (params[0] === 's') {
        size = 11;
      } else if (params[0] === 'm') {
        size = 14;
      } else if (params[0] === 'l') {
        size = 21;
      } else if (params[0] === 'xl') {
        size = 26;
      }

      if (params[1] === 'normal') {
        weight = 400;
      } else if (params[1] === 'bold') {
        weight = 700;
      } else if (params[1] === 'black') {
        weight = 900;
      }

      element.css({
        'font-size': size + 'px',
        'font-weight': weight
      });
    }
  };
})

/*
 * INPUT
 */
.directive('asIText', function () {
  return {
    restrict: 'A',
    link: function (scope, element) {
      element.css({
        'width': 'calc(100% - 16px)',
        'border-radius': '4px',
        'outline': 'none',
        'border': '1px solid #F4F5F7',
        'padding': '8px',
        'font-size': '14px',
        'color': '#373737'
      });
    }
  };
})
.directive('asIButton', function () {
  return {
    restrict: 'A',
    link: function (scope, element) {
      element.css({
        'width': '100%',
        'border-radius': '4px',
        'outline': 'none',
        'padding': '12px 8px',
        'font-size': '11px',
        'color': '#fff',
        'background': '#528BFD',
        'border': 'none',
        'font-weight': 'bold',
        'text-transform': 'uppercase'
      });
      element.on('mouseenter', function () {
        element.css({
          background: '#487BE3',
          cursor: 'pointer'
        });
      });
      element.on('mouseleave', function () {
        element.css({
          'background': '#528BFD',
          'box-shadow': 'none'
        });
      });
    }
  };
})

/*
 * CARD
 */
.directive('asCard', function () {
  return {
    restrict: 'A',
    link: function (scope, element) {
      element.css({
        'background': '#fff',
        'border-radius': '4px',
        'box-shadow': '0 0 15px rgba(48, 48, 48, 0.1)'
      });
    }
  };
});
