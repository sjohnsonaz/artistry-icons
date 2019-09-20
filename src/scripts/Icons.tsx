import { IconDefinition, IconPack } from '@fortawesome/fontawesome-common-types';

import { Icon } from './Icon';
import FontAwesomeIcon from './FontAwesomeIcon';

export default class Icons {
    static icons: {
        [index: string]: Icon;
    } = {};

    static registerIcon(iconConstructor: new () => Icon) {
        let icon = new iconConstructor();
        this.icons[icon.name] = icon;
    }

    static registerFontAwesomeIcon(definition: IconDefinition) {
        let icon = new FontAwesomeIcon(definition);
        this.icons[icon.name] = icon;
    }

    static registerFontAwesome(definitions: IconPack) {
        for (let name in definitions) {
            if (definitions.hasOwnProperty(name)) {
                let definition = definitions[name];
                Icons.registerFontAwesomeIcon(definition);
            }
        }
    }

    static renderSVG(name: string) {
        let icon = this.icons[name];
        if (!icon) {
            throw new Error('No Icon defined');
        }
        return icon.render();
    }

    static renderIconFull(name: string) {
        let i = document.createElement('i');
        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.appendChild(Icons.renderSVG(name));
        i.appendChild(svg);
        return i;
    }

    static renderIcon(name: string) {
        let i = document.createElement('i');
        i.setAttribute('class', 'icon');
        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        let use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        use.setAttribute('href', '#' + name);
        svg.appendChild(use);
        i.appendChild(svg);
        return i;
    }

    static renderJSX(name: string) {
        return (
            <i className="icon">
                <svg xmlns="http://www.w3.org/2000/svg">
                    <use href={'#' + name} />
                </svg>
            </i>
        );
    }

    static renderJSXFull(name: string) {
        return (
            <i className="icon">
                <svg xmlns="http://www.w3.org/2000/svg">
                    {Icons.renderSVG(name)}
                </svg>
            </i>
        );
    }

    static createIconRoot() {
        let iconRoot = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        iconRoot.style.display = 'none';

        for (let name in this.icons) {
            if (this.icons.hasOwnProperty(name)) {
                iconRoot.appendChild(Icons.renderSVG(name));
            }
        }

        return iconRoot;
    }

    static defaultCreateElement<T extends Partial<U>, U extends SVGElement>(type: string, props?: T, ...children: Array<any>): U {
        let element = document.createElementNS('http://www.w3.org/2000/svg', type) as U;
        if (props) {
            for (let property in props) {
                if (props.hasOwnProperty) {
                    let value = props[property];
                    if (property === 'style') {
                        (element.style as any).cssText = value;
                    } else if (property.indexOf('on') >= 0) {
                        element[property as any] = value;
                    } else if (property === 'className') {
                        element[property as any] = value;
                    } else if (property === 'xmlns') {
                        // do nothing
                    } else {
                        element.setAttribute(property, value as any);
                    }
                }
            }
        }
        if (children) {
            for (let child of children) {
                element.appendChild(child);
            }
        }
        return element;
    }

    static createElement = Icons.defaultCreateElement;
    static setCreateElement(method: any) {
        this.createElement = method;
    }
}