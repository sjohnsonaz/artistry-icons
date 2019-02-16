import Icons from './Icons';

import { Icon } from './Icon';

export interface IFontAwesomeDefinition {
    prefix: string;
    iconName: string;
    icon: [number, number, string[], string, string];
}

export default class FontAwesomeIcon extends Icon {
    name: string;
    definition: IFontAwesomeDefinition

    constructor(definition: IFontAwesomeDefinition) {
        super();
        this.definition = definition;
        this.name = definition.iconName;
    }

    render<T extends SVGElement>(): T {
        return (
            <symbol id={this.name} viewBox={[0, 0, this.definition.icon[0], this.definition.icon[1]].join(' ')}>
                <path fill="currentColor"
                    d={this.definition.icon[4]} />
            </symbol>
        );
    }
}