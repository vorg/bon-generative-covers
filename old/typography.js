const Typography = {}

Typography.formatAuthorName = function (name) {
  var authorOut = {}
  // var authorOut = new Array(["name", "normal"], ["surname", "normal"]);

  // console.log("current name: " + name);
  name = name.replace('  ', ' ')
  var tokens = name.split(/[, ]/)
  if (tokens.length !== 2) { tokens = name.split(' ') }

  var option = Math.round(Math.random() * 6)

  // trim
  // tokens[0] = tokens[0].trim();
  // tokens[1] = tokens[1].trim();

  // selection of different variations with bold/italic and upperCase options

  switch (option) {
    case 0:
      authorOut.name = tokens[0]
      // authorOut.nameStyle = "normal";
      authorOut.surname = tokens[1]
      // authorOut.surnameStyle = "normal";
      break

    case 1:
      authorOut.name = tokens[0].toUpperCase()
      // authorOut.nameStyle = "normal";
      authorOut.surname = tokens[1]
      // authorOut.surnameStyle = "normal";
      break

    case 2:
      authorOut.name = tokens[0].toUpperCase()
      // authorOut.nameStyle = "normal";
      authorOut.surname = tokens[1].toUpperCase()
      // authorOut.surnameStyle = "normal";
      break

    case 3:
      authorOut.name = tokens[0].toUpperCase()
      authorOut.nameStyle = 'bold'
      authorOut.surname = tokens[1]
      // authorOut.surnameStyle = "normal";
      break

    case 4:
      authorOut.name = tokens[0].toUpperCase()
      // authorOut.nameStyle = "normal";
      authorOut.surname = tokens[1]
      authorOut.surnameStyle = 'italic'
      break

    case 5:
      authorOut.name = tokens[0].toUpperCase()
      authorOut.nameStyle = 'bold'
      authorOut.surname = tokens[1]
      authorOut.surnameStyle = 'italic'
      break

    case 6:
      authorOut.name = tokens[0].toUpperCase()
      authorOut.nameStyle = 'lighter'
      authorOut.surname = tokens[1]
      authorOut.surnameStyle = 'bold'
      break

    default:
      authorOut.name = tokens[0]
      // authorOut.nameStyle = "normal";
      authorOut.surname = tokens[1]
      // authorOut.surnameStyle = "normal";
  }
  return authorOut
}

Typography.addLigatures = function (sourceStr, fontname) {
  var outputStr = ''

  // var mark = 'left'
  // Polish quatation marks #x201E/#x201D outer, #xBB/#xAB inner
  sourceStr = sourceStr.replace(/"/, String.fromCharCode(parseInt('201E', 16)))
  sourceStr = sourceStr.replace(/"/, String.fromCharCode(parseInt('201D', 16)))

  // console.log('font to check: ' + fontname)

  outputStr = sourceStr

  switch (fontname) {
    case 'Anaheim':

      outputStr = outputStr.replace(/ffi/g, String.fromCharCode(parseInt('fb03', 16)))
      outputStr = outputStr.replace(/ffl/g, String.fromCharCode(parseInt('fb04', 16)))
      outputStr = outputStr.replace(/ff/g, String.fromCharCode(parseInt('fb00', 16)))
      outputStr = outputStr.replace(/fi/g, String.fromCharCode(parseInt('fb01', 16)))
      outputStr = outputStr.replace(/fl/g, String.fromCharCode(parseInt('fb02', 16)))
      break

    case 'Andada':

      outputStr = outputStr.replace(/fi/g, String.fromCharCode(parseInt('fb01', 16)))
      outputStr = outputStr.replace(/fl/g, String.fromCharCode(parseInt('fb02', 16)))
      break

    case 'BenchNine':

      outputStr = outputStr.replace(/ffi/g, String.fromCharCode(parseInt('fb03', 16)))
      outputStr = outputStr.replace(/ff/g, String.fromCharCode(parseInt('FB00', 16)))
      outputStr = outputStr.replace(/fi/g, String.fromCharCode(parseInt('fb01', 16)))
      outputStr = outputStr.replace(/fl/g, String.fromCharCode(parseInt('fb02', 16)))
      break

    case 'FrancoisOne':

      outputStr = outputStr.replace(/ffi/g, String.fromCharCode(parseInt('fb03', 16)))
      outputStr = outputStr.replace(/ffl/g, String.fromCharCode(parseInt('fb04', 16)))
      outputStr = outputStr.replace(/fi/g, String.fromCharCode(parseInt('fb01', 16)))
      outputStr = outputStr.replace(/fl/g, String.fromCharCode(parseInt('fb02', 16)))
      break

    case 'Merriweather':

      outputStr = outputStr.replace(/ffi/g, String.fromCharCode(parseInt('fb03', 16)))
      outputStr = outputStr.replace(/ffl/g, String.fromCharCode(parseInt('fb04', 16)))
      outputStr = outputStr.replace(/ff/g, String.fromCharCode(parseInt('fb00', 16)))
      outputStr = outputStr.replace(/fi/g, String.fromCharCode(parseInt('fb01', 16)))
      outputStr = outputStr.replace(/fl/g, String.fromCharCode(parseInt('fb02', 16)))
      break

    case 'MerriweatherSans':

      outputStr = outputStr.replace(/ffi/g, String.fromCharCode(parseInt('fb03', 16)))
      outputStr = outputStr.replace(/ffl/g, String.fromCharCode(parseInt('fb04', 16)))
      outputStr = outputStr.replace(/ff/g, String.fromCharCode(parseInt('fb00', 16)))
      outputStr = outputStr.replace(/fi/g, String.fromCharCode(parseInt('fb01', 16)))
      outputStr = outputStr.replace(/fl/g, String.fromCharCode(parseInt('fb02', 16)))
      break

    case 'Oswald':

      outputStr = outputStr.replace(/fi/g, String.fromCharCode(parseInt('fb01', 16)))
      outputStr = outputStr.replace(/fl/g, String.fromCharCode(parseInt('fb02', 16)))
      break

    case 'PTSans':

      outputStr = outputStr.replace(/fi/g, String.fromCharCode(parseInt('fb01', 16)))
      outputStr = outputStr.replace(/fl/g, String.fromCharCode(parseInt('fb02', 16)))
      break

    case 'PTSerif':

      outputStr = outputStr.replace(/fi/g, String.fromCharCode(parseInt('fb01', 16)))
      outputStr = outputStr.replace(/fl/g, String.fromCharCode(parseInt('fb02', 16)))
      break

    case 'RobotoSlab':

      outputStr = outputStr.replace(/ffi/g, String.fromCharCode(parseInt('fb03', 16)))
      outputStr = outputStr.replace(/ffl/g, String.fromCharCode(parseInt('fb04', 16)))
      outputStr = outputStr.replace(/fi/g, String.fromCharCode(parseInt('fb01', 16)))
      outputStr = outputStr.replace(/fl/g, String.fromCharCode(parseInt('fb02', 16)))
      break

    case 'SourceCode':

      outputStr = outputStr.replace(/ffi/g, String.fromCharCode(parseInt('fb02', 16)))
      outputStr = outputStr.replace(/fl/g, String.fromCharCode(parseInt('fb01', 16)))
      break

    case 'SourceSans':

      outputStr = outputStr.replace(/ffi/g, String.fromCharCode(parseInt('fb02', 16)))
      outputStr = outputStr.replace(/fi/g, String.fromCharCode(parseInt('fb00', 16)))
      outputStr = outputStr.replace(/fl/g, String.fromCharCode(parseInt('fb01', 16)))
      break

    case 'UbuntuCondensed':

      outputStr = outputStr.replace(/ffi/g, String.fromCharCode(parseInt('fb03', 16)))
      outputStr = outputStr.replace(/ffl/g, String.fromCharCode(parseInt('fb04', 16)))
      // outputStr = outputStr.replace(/ff/g, String.fromCharCode(parseInt('fb00', 16)));
      outputStr = outputStr.replace(/fi/g, String.fromCharCode(parseInt('fb01', 16)))
      outputStr = outputStr.replace(/fl/g, String.fromCharCode(parseInt('fb02', 16)))
      break

    default:
      outputStr = sourceStr
  }

  return outputStr
}

Typography.breakTitle = function (title) {
  // var t = title
  title = title.trim()
  // var len = title.length

  // Full stop (.) is dangerous as dividing titlte to headline and subtitle. Because there
  // could be name in titles like C. W. Mills
  // Clasically only semi-columns (:) are used to build hierarchy in titling.
  var regExp = /[:]/
  var dot = title.match(regExp)
  if (dot) {
    var dotPos = title.indexOf(dot)
    var subTitleStart = dotPos
    if (dot !== '(') subTitleStart += 1
    // uppercase headtitle
    return [ title.substr(0, dotPos).toUpperCase(), title.substr(subTitleStart).trim() ]
  }

  return [title, '']
}

// Should be slightly updated by angle_ratio and centered leaders
// url link...

Typography.breakLines = function (crayon, str, maxWidth) {
  var words = str.split(' ')
  var lines = []
  var currentLine = ''
  while (words.length > 0) {
    var word = words.shift()
    var newLine = currentLine
    if (newLine.length > 0) newLine += ' '
    newLine += word
    var measurements = crayon.measureText(newLine)
    if (measurements.width > maxWidth && currentLine.length > 0) {
      lines.push(currentLine)
      currentLine = word
    } else {
      currentLine = newLine
    }
  }
  lines.push(currentLine)
  return lines
}

Typography.longestWord = function (text) {
  var longest = 0

  var tokens = text.split(' ')

  tokens.forEach(
    function addNumber (value) { if (value.length > longest) { longest = value.length } }
  )

  return longest
}

Typography.pairSelector = function (layout, title) {
  let outFonts = []
  const titleStats = title.length
  let availablePairs = []
  switch (layout) {
    case 'Simplest':
      availablePairs = [0, 1, 2, 3, 4, 5, 6, 7, 8]
      outFonts = Typography.TypePairs(availablePairs, titleStats)
      break

    case 'Pseudo':
      availablePairs = [7, 7, 7]
      outFonts = Typography.TypePairs(availablePairs, titleStats)
      break

    case 'Circular Chaos':
      availablePairs = [7, 7, 7]
      outFonts = Typography.TypePairs(availablePairs, titleStats)
      break

    case 'Circular Chaos II':
      availablePairs = [7, 7, 7]
      outFonts = Typography.TypePairs(availablePairs, titleStats)
      break

    case 'Cube':
      availablePairs = [7, 7, 7]
      outFonts = Typography.TypePairs(availablePairs, titleStats)
      break

    default:
      availablePairs = [0, 1, 2, 3, 4, 5, 6, 7, 8]
      // pair = Math.floor(Math.random() * 9)
      // availablePairs = new Array(pair, pair, pair)
      outFonts = Typography.TypePairs(availablePairs, titleStats)
      /*
      const fonts = {}
      fonts.titleFamily = 'Arial'
      fonts.titleFont = ''
      fonts.titleStyle = 'normal'
      fonts.titleLine = 0.0
      fonts.authorFamily = 'Arial'
      fonts.authorFont = ''
      fonts.authorStyle = 'normal'
      fonts.PairRatio = 0.5
      outFonts = fonts
      */
  }

  return outFonts
}

Typography.TypePairs = function (pairs, titleStats) {
  // Title Font | Author Font | Title Length | Parent Layout (optional)

  // WIDER AND BOLD
  // Francois One (ligatures) | Bench Nine | Short & Medium
  // Roboto Slab | Source Sans | Short
  // Andada | BenchNine Light | Short

  // MIDDLE RANGE
  // PT Sans Regular | PT Serif Regular/Bold/Italic | Short & Medium
  // Anaheim Regular | PT Serif Regular/Bold/Italic | Short & Medium
  // Source Code | Oswald | Short & Medium | Fractal Tree
  // Merriweather Sans / Merriweather Serif | Medium

  // NARROW - GOOD FOR LONG TITLES
  // BenchNine Light | Ubuntu Condensed | Short/Medium/Wide
  // Ubuntu Condensed | Oswald Light/Regular/ no Italic

  // Array for two types: [0] name, size(scale) and weight/style
  // var fonts = new Array(8);
  var fonts = { }

  // narrow pairs array by title length
  console.log('title length: ' + titleStats)

  // if(titleStats > 72) { pairs = pairs.splice(7,2); console.log("deleted " + pairs); }

  // random selector out of all pre-defined pair for current layout
  var pickMe = Math.round(Math.random() * (pairs.length - 1))
  console.log('pickMe: ' + pickMe + ' case: ' + pairs[pickMe])
  fonts[8] = pairs[pickMe]

  switch (pairs[pickMe]) {
    case 0:
      fonts.titleFamily = 'FrancoisOne'
      fonts.titleFont = ''
      fonts.titleStyle = 'normal'
      fonts.titleLine = -0.1
      fonts.authorFamily = 'BenchNine'
      fonts.authorFont = ''
      fonts.authorStyle = 'lighter'
      fonts.PairRatio = 0.8
      break

    case 1:
      fonts.titleFamily = 'RobotoSlab'
      fonts.titleFont = ''
      fonts.titleStyle = 'normal'
      fonts.titleLine = 0
      fonts.authorFamily = 'SourceSans'
      fonts.authorFont = ''
      fonts.authorStyle = 'normal'
      fonts.PairRatio = 0.72
      break

    case 2:
      fonts.titleFamily = 'Andada'
      fonts.titleFont = ''
      fonts.titleStyle = 'normal'
      fonts.titleLine = 0
      fonts.authorFamily = 'BenchNine'
      fonts.authorFont = ''
      fonts.authorStyle = 'lighter'
      fonts.PairRatio = 0.5
      break

    case 3:
      fonts.titleFamily = 'PTSans'
      fonts.titleFont = ''
      fonts.titleStyle = 'normal'
      fonts.titleLine = 0
      fonts.authorFamily = 'PTSerif'
      fonts.authorFont = ''
      fonts.authorStyle = 'normal'
      fonts.PairRatio = 0.72
      break

    case 4:
      fonts.titleFamily = 'Anaheim'
      fonts.titleFont = ''
      fonts.titleStyle = 'normal'
      fonts.titleLine = 0
      fonts.authorFamily = 'PTSerif'
      fonts.authorFont = ''
      fonts.authorStyle = 'normal'
      fonts.PairRatio = 0.56
      break

    case 5:
      fonts.titleFamily = 'SourceCode'
      fonts.titleFont = ''
      fonts.titleStyle = 'normal'
      fonts.titleLine = -0.1
      fonts.authorFamily = 'Oswald'
      fonts.authorFont = ''
      fonts.authorStyle = 'normal'
      fonts.PairRatio = 0.8
      break

    case 6:
      fonts.titleFamily = 'MerriweatherSans'
      fonts.titleFont = ''
      fonts.titleStyle = 'normal'
      fonts.titleLine = 0
      fonts.authorFamily = 'Merriweather'
      fonts.authorFont = ''
      fonts.authorStyle = 'normal'
      fonts.PairRatio = 0.8
      break

    case 7:
      fonts.titleFamily = 'BenchNine'
      fonts.titleFont = ''
      fonts.titleStyle = 'lighter'
      fonts.titleLine = 0
      fonts.authorFamily = 'UbuntuCondensed'
      fonts.authorFont = ''
      fonts.authorStyle = 'normal'
      fonts.PairRatio = 0.45
      break

    case 8:
      fonts.titleFamily = 'UbuntuCondensed'
      fonts.titleFont = ''
      fonts.titleStyle = 'normal'
      fonts.titleLine = -0.1
      fonts.authorFamily = 'Oswald'
      fonts.authorFont = ''
      fonts.authorStyle = 'normal'
      fonts.PairRatio = 0.75
      break
  }

  return fonts
}

module.exports = Typography
