// assets
import { IconSitemap } from '@tabler/icons';

// ==============================|| APPLICATION MENU ITEMS ||============================== //

const transport = {
    id: 'transport',
    // title: <FormattedMessage id="application" />,
    type: 'group',
    children: [
        {
            id: 'transport',
            title: '运输信息',
            icon: IconSitemap,
            type: 'item',
            url: '/transport/list'
        }
    ]
};

export default transport;
