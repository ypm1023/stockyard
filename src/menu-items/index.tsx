import dashboard from './dashboard';

import report from './report';
import transport from './transport';
import monitor from './monitor';
import { NavItemType } from 'types';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
    items: [dashboard, monitor, report, transport]
};

export default menuItems;
