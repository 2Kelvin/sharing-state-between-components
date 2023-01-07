var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function Panel(_ref) {
  var title = _ref.title,
      children = _ref.children,
      isActive = _ref.isActive,
      onShow = _ref.onShow;

  return React.createElement(
    "section",
    { className: "_panel" },
    React.createElement(
      "h3",
      null,
      title
    ),
    isActive ? React.createElement(
      "p",
      null,
      children
    ) : React.createElement(
      "button",
      { onClick: onShow },
      "Show Details"
    )
  );
}

function Parent() {
  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      activeIndex = _React$useState2[0],
      setActiveIndex = _React$useState2[1];

  return React.createElement(
    "div",
    { className: "_parent" },
    React.createElement(
      "h2",
      null,
      "Almaty, Kazakhstan"
    ),
    React.createElement(
      Panel,
      {
        title: "About",
        isActive: activeIndex === 0,
        onShow: function onShow() {
          return setActiveIndex(0);
        }
      },
      "With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city."
    ),
    React.createElement(
      Panel,
      {
        title: "Etymology",
        isActive: activeIndex === 1,
        onShow: function onShow() {
          return setActiveIndex(1);
        }
      },
      "The name comes from ",
      React.createElement(
        "span",
        { lang: "kk-KZ" },
        "\u0430\u043B\u043C\u0430"
      ),
      ", the Kazakh word for \"apple\" and is often translated as \"full of apples\". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild ",
      React.createElement(
        "i",
        { lang: "la" },
        "Malus sieversii"
      ),
      " is considered a likely candidate for the ancestor of the modern domestic apple."
    )
  );
}

export default function App() {
  return React.createElement(Parent, null);
}

var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));