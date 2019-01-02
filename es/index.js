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

var SvgIcon = function (_React$Component) {
    _inherits(SvgIcon, _React$Component);

    function SvgIcon() {
        _classCallCheck(this, SvgIcon);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    SvgIcon.prototype.render = function render() {
        var _props = this.props,
            iconUrl = _props.iconUrl,
            name = _props.name;

        iconUrl = iconUrl ? formatUrl(iconUrl, name) : formatUrl(url, name);
        return React.createElement(
            'svg',
            { role: 'img', title: this.props.title, className: this.props.className },
            React.createElement(
                'g',
                { fill: this.props.color },
                React.createElement('use', { xlinkHref: iconUrl })
            )
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