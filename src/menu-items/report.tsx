// assets
import { IconBug, IconClipboardList, IconLayoutKanban } from '@tabler/icons';

// constant
const icons = {
    IconBug,
    IconClipboardList,
    IconLayoutKanban
};

// ==============================|| APPLICATION MENU ITEMS ||============================== //

const report = {
    id: 'report',
    // title: <FormattedMessage id="application" />,
    type: 'group',
    children: [
        {
            id: 'warning',
            title: '警报信息',
            icon: icons.IconBug,
            type: 'item',
            url: '/waring/list'
        },
        {
            id: '',
            title: '日志信息',
            icon: icons.IconClipboardList,
            type: 'item',
            url: '/log/list'
        },
        {
            id: 'site',
            title: '场地信息',
            icon: icons.IconLayoutKanban,
            type: 'item',
            url: '/venue/list'
        }
    ]
};

export default report;
