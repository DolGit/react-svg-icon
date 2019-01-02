import React from 'react'
import PropTypes from 'prop-types';

import {extractLink} from '@dolnpm/link-extractor'

let url = extractLink('#svg-icon-base-url')
url = url && url.href ? url.href : location.origin + '/map.svg#'

export function setUrl(u) {
    url = u
}

const formatUrl = (url, name) => {
    return url + name
}

class SvgIcon extends React.Component {
    render() {
        let {iconUrl, name } = this.props
        iconUrl = iconUrl ? formatUrl(iconUrl, name) : formatUrl(url, name)
        return (
            <svg role="img" title={this.props.title} className={this.props.className}>
                <g fill={this.props.color}>
                    <use xlinkHref={iconUrl} />
                </g>
            </svg>
        )
    }
}

SvgIcon.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    color: PropTypes.string.isRequired,
    iconUrl: PropTypes.string
};

export default SvgIcon