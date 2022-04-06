// assets
import { IconSitemap } from '@tabler/icons';

// ==============================|| APPLICATION MENU ITEMS ||============================== //

const transportation = {
    id: 'transportation',
    // title: <FormattedMessage id="application" />,
    type: 'group',
    children: [
        {
            id: 'transportation',
            title: '运输信息',
            icon: IconSitemap,
            type: 'item',
            url: '/user/list'
        }
    ]
};

export default transportation;
