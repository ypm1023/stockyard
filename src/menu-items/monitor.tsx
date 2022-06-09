// assets
import { IconSitemap } from '@tabler/icons';

// ==============================|| APPLICATION MENU ITEMS ||============================== //

const monitor = {
    id: 'monitor',
    // title: <FormattedMessage id="application" />,
    type: 'group',
    children: [
        {
            id: 'monitor',
            title: '监控中心',
            icon: IconSitemap,
            type: 'item',
            url: '/monitor/page'
        }
    ]
};

export default monitor;
