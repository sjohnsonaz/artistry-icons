import Icons from './Icons';
import {Icon} from './Icon';

export default class ChevronRight extends Icon {
    name: 'chevron-right'

    render() {
        return (
            <symbol id="chevron-right" viewBox="0 0 512 512">
                <path fill="none" stroke="currentColor" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"
                    d="
                    M 40 40
                    L 472 256
                    L 40 472 
                " />
            </symbol>
        );
    }
}