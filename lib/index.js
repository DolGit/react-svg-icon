'use strict';

exports.__esModule = true;
exports.SvgMultiIcon = exports.MakePath = undefined;
exports.setUrl = setUrl;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _linkExtractor = require('@dolnpm/link-extractor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var url = (0, _linkExtractor.extractLink)('#svg-icon-base-url');
url = url && url.href ? url.href : location.origin + '/map.svg#';

function setUrl(u) {
    url = u;
}

var formatUrl = function formatUrl(url, name) {
    return url + name;
};

var MakePath = exports.MakePath = function (_React$Component) {
    _inherits(MakePath, _React$Component);

    function MakePath() {
        _classCallCheck(this, MakePath);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    MakePath.prototype.render = function render() {
        var _props = this.props,
            color = _props.color,
            name = _props.name,
            iconUrl = _props.iconUrl;

        var localUrl = iconUrl ? formatUrl(iconUrl, name) : formatUrl(url, name);
        return _react2.default.createElement(
            'g',
            { fill: color },
            _react2.default.createElement('use', { xlinkHref: localUrl })
        );
    };

    return MakePath;
}(_react2.default.Component);

var SvgMultiIcon = exports.SvgMultiIcon = function (_React$Component2) {
    _inherits(SvgMultiIcon, _React$Component2);

    function SvgMultiIcon() {
        _classCallCheck(this, SvgMultiIcon);

        return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
    }

    SvgMultiIcon.prototype.render = function render() {
        var _props2 = this.props,
            title = _props2.title,
            className = _props2.className,
            paths = _props2.paths,
            iconUrl = _props2.iconUrl;

        return _react2.default.createElement(
            'svg',
            { role: 'img', title: title, className: className },
            paths && paths.map(function (path, index) {
                return _react2.default.createElement(MakePath, { key: index, iconUrl: iconUrl, name: path.name, color: path.color });
            })
        );
    };

    return SvgMultiIcon;
}(_react2.default.Component);

SvgMultiIcon.propTypes = process.env.NODE_ENV !== "production" ? {
    title: _propTypes2.default.string.isRequired,
    className: _propTypes2.default.string,
    iconUrl: _propTypes2.default.string,
    paths: _propTypes2.default.array
} : {};

var SvgIcon = function (_React$Component3) {
    _inherits(SvgIcon, _React$Component3);

    function SvgIcon() {
        _classCallCheck(this, SvgIcon);

        return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
    }

    SvgIcon.prototype.render = function render() {
        var _props3 = this.props,
            iconUrl = _props3.iconUrl,
            name = _props3.name,
            title = _props3.title,
            className = _props3.className,
            color = _props3.color;

        return _react2.default.createElement(
            'svg',
            { role: 'img', title: title, className: className },
            _react2.default.createElement(MakePath, { iconUrl: iconUrl, name: name, color: color })
        );
    };

    return SvgIcon;
}(_react2.default.Component);

SvgIcon.propTypes = process.env.NODE_ENV !== "production" ? {
    name: _propTypes2.default.string.isRequired,
    title: _propTypes2.default.string.isRequired,
    className: _propTypes2.default.string,
    color: _propTypes2.default.string.isRequired,
    iconUrl: _propTypes2.default.string
} : {};

exports.default = SvgIcon;