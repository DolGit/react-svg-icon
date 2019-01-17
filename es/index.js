function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';

import { extractLink } from '@dolnpm/link-extractor';

var url = extractLink('#svg-icon-base-url');
url = url && url.href ? url.href : location.origin + '/map.svg#';

export function setUrl(u) {
    url = u;
}

var formatUrl = function formatUrl(url, name) {
    return url + name;
};

export var MakePath = function (_React$Component) {
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
        return React.createElement(
            'g',
            { fill: color },
            React.createElement('use', { xlinkHref: localUrl })
        );
    };

    return MakePath;
}(React.Component);

export var SvgMultiIcon = function (_React$Component2) {
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

        return React.createElement(
            'svg',
            { role: 'img', title: title, className: className },
            paths && paths.map(function (path, index) {
                return React.createElement(MakePath, { key: index, iconUrl: iconUrl, name: path.name, color: path.color });
            })
        );
    };

    return SvgMultiIcon;
}(React.Component);

SvgMultiIcon.propTypes = process.env.NODE_ENV !== "production" ? {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    iconUrl: PropTypes.string,
    paths: PropTypes.array
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

        iconUrl = iconUrl ? formatUrl(iconUrl, name) : formatUrl(url, name);
        return React.createElement(
            'svg',
            { role: 'img', title: title, className: className },
            React.createElement(MakePath, { iconUrl: iconUrl, name: name, color: color })
        );
    };

    return SvgIcon;
}(React.Component);

SvgIcon.propTypes = process.env.NODE_ENV !== "production" ? {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    color: PropTypes.string.isRequired,
    iconUrl: PropTypes.string
} : {};

export default SvgIcon;