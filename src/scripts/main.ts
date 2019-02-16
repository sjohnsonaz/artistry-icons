import ChevronRight from './ChevronRight';
import Icons from './Icons';
import * as faSearch from '@fortawesome/free-solid-svg-icons/faSearch';
import * as FontAwesome from '@fortawesome/free-solid-svg-icons';

function run() {
    Icons.registerIcon(ChevronRight);
    //Icons.registerFontAwesomeIcon(faSearch);
    Icons.registerFontAwesome(FontAwesome.fas);
    window.document.body.appendChild(Icons.createIconRoot());
    window.document.body.appendChild(Icons.renderIcon('chevron-right'));
    window.document.body.appendChild(Icons.renderIcon('search'));
    window.document.body.appendChild(Icons.renderIcon('user'));
    console.log(FontAwesome);
    return 'Application started...';
}

window.onload = function () {
    console.log(run());
}

export default Icons