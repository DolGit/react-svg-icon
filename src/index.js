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

export class MakePath extends React.Component {
    render() {
        const { color, name, iconUrl } = this.props
        const localUrl = iconUrl ? formatUrl(iconUrl, name) : formatUrl(url, name)
        return (
            <g fill={color}>
                <use xlinkHref={localUrl} />
            </g>
        )
    }
}

export class SvgMultiIcon extends React.Component {
    render() {
        let { title, className, paths, iconUrl } = this.props
        return (
            <svg role="img" title={title} className={className}>
                {paths && paths.map((path, index) => {
                    return (
                        <MakePath key={index} iconUrl={iconUrl} name={path.name} color={path.color} />
                    )
                })}
            </svg>
        )
    }
}

SvgMultiIcon.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    iconUrl: PropTypes.string,
    paths: PropTypes.array
};


class SvgIcon extends React.Component {
    render() {
        let {iconUrl, name, title, className, color } = this.props
        iconUrl = iconUrl ? formatUrl(iconUrl, name) : formatUrl(url, name)
        return (
            <svg role="img" title={title} className={className}>
                <MakePath iconUrl={iconUrl} name={name} color={color} />
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