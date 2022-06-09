import dashboard from './dashboard';
import widget from './widget';
import application from './application';
import forms from './forms';
import elements from './elements';
import pages from './pages';
import utilities from './utilities';
import support from './support';
import other from './other';
import report from './report';
import transport from './transport';
import monitor from './monitor';
import { NavItemType } from 'types';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
    items: [dashboard, monitor, report, transport, widget, application, forms, elements, pages, utilities, support, other]
};

export default menuItems;
