var config = {
  pixelMultiplier: 4,
  colors: {
    primary: {
      light: '#ED9DBB',
      dark: '#D48CA7'
    },
    good: {
      light: '#15CD72',
      dark: '#0CB863'
    },
    bad: {
      light: '#F9532C',
      dark: '#E44924'
    },
    dark: '#202020',
    mono: '#7C7977',
    light: '#CECBC9'
  }
};

angular.module('angularStyle', [])

/*
 * MARGIN DIRECTIVES
 */
.directive('asMXy', function ($document) {
  return {
    restrict: 'A',
    scope: {
      asMXy: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asMXy + 'px';
      element.addClass('margin-xy-' + pixels);
      var styles = [
        'margin: ' + pixels
      ];

      var styleString = '';
      for (var i = 0; i < styles.length; i++) {
        styleString += styles[i];
        styleString += '; ';
      }
      createCSSSelector('.margin-xy-' + pixels, styleString, $document);
    }
  };
})
.directive('asMX', function ($document) {
  return {
    restrict: 'A',
    scope: {
      asMX: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asMX + 'px';
      var margin = '0 ' + pixels;

      element.addClass('margin-x-' + pixels);
      var styles = [
        'margin: ' + margin
      ];

      var styleString = '';
      for (var i = 0; i < styles.length; i++) {
        styleString += styles[i];
        styleString += '; ';
      }
      createCSSSelector('.margin-x-' + pixels, styleString, $document);
    }
  };
})
.directive('asMY', function ($document) {
  return {
    restrict: 'A',
    scope: {
      asMY: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asMY + 'px';
      var margin = pixels + ' 0';

      element.addClass('margin-y-' + pixels);
      var styles = [
        'margin: ' + margin
      ];

      var styleString = '';
      for (var i = 0; i < styles.length; i++) {
        styleString += styles[i];
        styleString += '; ';
      }
      createCSSSelector('.margin-y-' + pixels, styleString, $document);
    }
  };
})
.directive('asMT', function ($document) {
  return {
    restrict: 'A',
    scope: {
      asMT: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asMT + 'px';
      var margin = pixels + ' 0 0 0';
      element.addClass('margin-t-' + pixels);
      var styles = [
        'margin: ' + margin
      ];

      var styleString = '';
      for (var i = 0; i < styles.length; i++) {
        styleString += styles[i];
        styleString += '; ';
      }
      createCSSSelector('.margin-t-' + pixels, styleString, $document);
    }
  };
})
.directive('asMB', function ($document) {
  return {
    restrict: 'A',
    scope: {
      asMB: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asMB + 'px';
      var margin = '0 0 ' + pixels + ' 0';
      element.addClass('margin-b-' + pixels);
      var styles = [
        'margin: ' + margin
      ];

      var styleString = '';
      for (var i = 0; i < styles.length; i++) {
        styleString += styles[i];
        styleString += '; ';
      }
      createCSSSelector('.margin-b-' + pixels, styleString, $document);
    }
  };
})
.directive('asML', function ($document) {
  return {
    restrict: 'A',
    scope: {
      asML: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asML + 'px';
      var margin = '0 0 0 ' + pixels;
      element.addClass('margin-l-' + pixels);
      var styles = [
        'margin: ' + margin
      ];

      var styleString = '';
      for (var i = 0; i < styles.length; i++) {
        styleString += styles[i];
        styleString += '; ';
      }
      createCSSSelector('.margin-l-' + pixels, styleString, $document);
    }
  };
})
.directive('asMR', function ($document) {
  return {
    restrict: 'A',
    scope: {
      asMR: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asMR + 'px';
      var margin = '0 ' + pixels + ' 0 0';
      element.addClass('margin-r-' + pixels);
      var styles = [
        'margin: ' + margin
      ];

      var styleString = '';
      for (var i = 0; i < styles.length; i++) {
        styleString += styles[i];
        styleString += '; ';
      }
      createCSSSelector('.margin-r-' + pixels, styleString, $document);
    }
  };
})
/*
 * PADDING DIRECTIVES
 */
.directive('asPXy', function ($document) {
  return {
    restrict: 'A',
    scope: {
      asPXy: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asPXy + 'px';
      element.addClass('padding-xy-' + pixels);
      var styles = [
        'padding: ' + pixels
      ];

      var styleString = '';
      for (var i = 0; i < styles.length; i++) {
        styleString += styles[i];
        styleString += '; ';
      }
      createCSSSelector('.padding-xy-' + pixels, styleString, $document);
    }
  };
})
.directive('asPX', function ($document) {
  return {
    restrict: 'A',
    scope: {
      asPX: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asPX + 'px';
      var padding = '0 ' + pixels;
      element.addClass('padding-x-' + pixels);
      var styles = [
        'padding: ' + padding
      ];

      var styleString = '';
      for (var i = 0; i < styles.length; i++) {
        styleString += styles[i];
        styleString += '; ';
      }
      createCSSSelector('.padding-x-' + pixels, styleString, $document);
    }
  };
})
.directive('asPY', function ($document) {
  return {
    restrict: 'A',
    scope: {
      asPY: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asPY + 'px';
      var padding = pixels + ' 0';
      element.addClass('padding-y-' + pixels);
      var styles = [
        'padding: ' + padding
      ];

      var styleString = '';
      for (var i = 0; i < styles.length; i++) {
        styleString += styles[i];
        styleString += '; ';
      }
      createCSSSelector('.padding-y-' + pixels, styleString, $document);
    }
  };
})
.directive('asPT', function ($document) {
  return {
    restrict: 'A',
    scope: {
      asPT: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asPT + 'px';
      var padding = pixels + ' 0 0 0';
      element.addClass('padding-t-' + pixels);
      var styles = [
        'padding: ' + padding
      ];

      var styleString = '';
      for (var i = 0; i < styles.length; i++) {
        styleString += styles[i];
        styleString += '; ';
      }
      createCSSSelector('.padding-t-' + pixels, styleString, $document);
    }
  };
})
.directive('asPB', function ($document) {
  return {
    restrict: 'A',
    scope: {
      asPB: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asPB + 'px';
      var padding = '0 0 ' + pixels + ' 0';
      element.addClass('padding-b-' + pixels);
      var styles = [
        'padding: ' + padding
      ];

      var styleString = '';
      for (var i = 0; i < styles.length; i++) {
        styleString += styles[i];
        styleString += '; ';
      }
      createCSSSelector('.padding-b-' + pixels, styleString, $document);
    }
  };
})
.directive('asPL', function ($document) {
  return {
    restrict: 'A',
    scope: {
      asPL: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asPL + 'px';
      var padding = '0 0 0 ' + pixels;
      element.addClass('padding-l-' + pixels);
      var styles = [
        'padding: ' + padding
      ];

      var styleString = '';
      for (var i = 0; i < styles.length; i++) {
        styleString += styles[i];
        styleString += '; ';
      }
      createCSSSelector('.padding-l-' + pixels, styleString, $document);
    }
  };
})
.directive('asPR', function ($document) {
  return {
    restrict: 'A',
    scope: {
      asPR: '='
    },
    link: function (scope, element) {
      var pixels = config.pixelMultiplier * scope.asPR + 'px';
      var padding = '0 ' + pixels + ' 0 0';
      element.addClass('padding-r-' + pixels);
      var styles = [
        'padding: ' + padding
      ];

      var styleString = '';
      for (var i = 0; i < styles.length; i++) {
        styleString += styles[i];
        styleString += '; ';
      }
      createCSSSelector('.padding-r-' + pixels, styleString, $document);
    }
  };
})
/*
 * FONT DIRECTIVES
 */
.directive('asF', function ($document) {
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

      element.addClass('font-' + size + '-' + weight);
      var styles = [
        'font-size: ' + size + 'px',
        'font-weight: ' + weight
      ];

      var styleString = '';
      for (var i = 0; i < styles.length; i++) {
        styleString += styles[i];
        styleString += '; ';
      }
      createCSSSelector('.font-' + size + '-' + weight, styleString, $document);
    }
  };
})
.directive('asFC', function ($document) {
  return {
    restrict: 'A',
    scope: {
      asFC: '@'
    },
    link: function (scope, element) {
      var color = config.colors[scope.asFC];

      element.addClass('font-color-' + scope.asFC);
      var styles = [
        'color: ' + color
      ];

      var styleString = '';
      for (var i = 0; i < styles.length; i++) {
        styleString += styles[i];
        styleString += '; ';
      }

      createCSSSelector('.font-color-' + scope.asFC, styleString, $document);
    }
  };
})

/*
 * INPUT
 */
.directive('asIText', function ($document) {
  return {
    restrict: 'A',
    link: function (scope, element) {
      element.addClass('as-input');
      var styles = [
        'width: 100%',
        'border-radius: 4px',
        'outline: none',
        'border: 2px solid ' + config.colors.light,
        'padding: 8px',
        'font-size: 14px',
        'color: ' + config.colors.dark
      ];

      var styleString = '';
      for (var i = 0; i < styles.length; i++) {
        styleString += styles[i];
        styleString += '; ';
      }

      createCSSSelector('.as-input', styleString, $document);
      createCSSSelector('.as-input:focus', 'border: 2px solid ' + config.colors.mono, $document);
    }
  };
})
.directive('asIButton', function ($document) {
  return {
    restrict: 'A',
    link: function (scope, element) {
      element.addClass('button-primary');
      var styles = [
        'width: 100%',
        'border-radius: 4px',
        'outline: none',
        'padding: 12px 8px',
        'font-size: 11px',
        'color: #fff',
        'background: ' + config.colors.primary.light,
        'border: none',
        'border-bottom: 2px solid ' + config.colors.primary.dark
      ];

      var styleString = '';
      for (var i = 0; i < styles.length; i++) {
        styleString += styles[i];
        styleString += '; ';
      }
      createCSSSelector('.button-primary', styleString, $document);
      createCSSSelector('.button-primary:hover', 'background: ' + config.colors.primary.dark + '; cursor: pointer', $document);
    }
  };
})
.directive('asIButtonGood', function ($document) {
  return {
    restrict: 'A',
    link: function (scope, element) {
      element.addClass('button-good');
      var styles = [
        'width: 100%',
        'border-radius: 4px',
        'outline: none',
        'padding: 12px 8px',
        'font-size: 11px',
        'color: #fff',
        'background: ' + config.colors.good.light,
        'border: none',
        'border-bottom: 2px solid ' + config.colors.good.dark
      ];

      var styleString = '';
      for (var i = 0; i < styles.length; i++) {
        styleString += styles[i];
        styleString += '; ';
      }
      createCSSSelector('.button-good', styleString, $document);
      createCSSSelector('.button-good:hover', 'background: ' + config.colors.good.dark + '; cursor: pointer', $document);
    }
  };
})
.directive('asIButtonBad', function ($document) {
  return {
    restrict: 'A',
    link: function (scope, element) {
      element.addClass('button-bad');
      var styles = [
        'width: 100%',
        'border-radius: 4px',
        'outline: none',
        'padding: 12px 8px',
        'font-size: 11px',
        'color: #fff',
        'background: ' + config.colors.bad.light,
        'border: none',
        'border-bottom: 2px solid ' + config.colors.bad.dark
      ];

      var styleString = '';
      for (var i = 0; i < styles.length; i++) {
        styleString += styles[i];
        styleString += '; ';
      }
      createCSSSelector('.button-bad', styleString, $document);
      createCSSSelector('.button-bad:hover', 'background: ' + config.colors.bad.dark + '; cursor: pointer', $document);
    }
  };
})

/*
 * CARD
 */
.directive('asCard', function ($document) {
  return {
    restrict: 'A',
    link: function (scope, element) {
      element.addClass('as-card');
      var styles = [
        'background: #fff',
        'border-radius: 4px',
        'box-shadow: 0 0 15px rgba(48, 48, 48, 0.1)'
      ];

      var styleString = '';
      for (var i = 0; i < styles.length; i++) {
        styleString += styles[i];
        styleString += '; ';
      }
      createCSSSelector('.as-card', styleString, $document);
    }
  };
});

function createCSSSelector(selector, style, $document) {
  var doc = $document[0];

  if (!doc.styleSheets) {
    return;
  }
  if (doc.getElementsByTagName('head').length === 0) {
    return;
  }

  var styleSheet;
  var mediaType;
  var i;
  var l;

  if (doc.styleSheets.length > 0) {
    for (i = 0, l = doc.styleSheets.length; i < l; i++) {
      if (doc.styleSheets[i].disabled) {
        continue;
      }
      var media = doc.styleSheets[i].media;
      mediaType = typeof media;

      if (angular.isString(media)) {
        if (media === '' || (media.indexOf('screen') !== -1)) {
          styleSheet = doc.styleSheets[i];
        }
      } else if (angular.isObject(mediaType)) {
        if (media.mediaText === '' || (media.mediaText.indexOf('screen') !== -1)) {
          styleSheet = doc.styleSheets[i];
        }
      }

      if (angular.isUndefined(styleSheet)) {
        break;
      }
    }
  }

  if (angular.isUndefined(styleSheet)) {
    var styleSheetElement = doc.createElement('style');
    styleSheetElement.type = 'text/css';
    doc.getElementsByTagName('head')[0].appendChild(styleSheetElement);

    for (i = 0; i < doc.styleSheets.length; i++) {
      if (doc.styleSheets[i].disabled) {
        continue;
      }
      styleSheet = doc.styleSheets[i];
    }

    mediaType = typeof styleSheet.media;
  }

  if (angular.isString(mediaType)) {
    for (i = 0, l = styleSheet.rules.length; i < l; i++) {
      if (styleSheet.rules[i].selectorText && styleSheet.rules[i].selectorText.toLowerCase() === selector.toLowerCase()) {
        styleSheet.rules[i].style.cssText = style;
        return;
      }
    }
    styleSheet.addRule(selector, style);
  } else if (angular.isObject(mediaType)) {
    var styleSheetLength = (styleSheet.cssRules) ? styleSheet.cssRules.length : 0;
    for (i = 0; i < styleSheetLength; i++) {
      if (styleSheet.cssRules[i].selectorText && styleSheet.cssRules[i].selectorText.toLowerCase() === selector.toLowerCase()) {
        styleSheet.cssRules[i].style.cssText = style;
        return;
      }
    }
    styleSheet.insertRule(selector + '{' + style + '}', styleSheetLength);
  }
}
