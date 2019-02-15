import ChevronRight from './ChevronRight';
import Icons from './Icons';

export function run() {
    Icons.registerIcon(ChevronRight);
    window.document.body.appendChild(Icons.createIconRoot());
    window.document.body.appendChild(Icons.renderIcon('chevron-right'));

    return 'Application started...';
}

window.onload = function () {
    console.log(run());
}