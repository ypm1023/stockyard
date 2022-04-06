// project imports
import services from 'utils/mockAdapter';

// user list
const waring_s1 = [
    {
        id: '10',
        type: '停靠错误警报',
        handle: '张三',
        url: '管理员',
        time: '2022-04-07 12:00:00',
        status: 'Active'
    },
    {
        id: '01',
        type: '人员违规警报',
        handle: '李四',
        url: '管理员',
        time: '2022-04-07 12:00:00',
        status: 'Active'
    },
    {
        id: '02',
        type: '装载错误警报',
        handle: '张三',
        url: '管理员',
        time: '2022-04-07 12:00:00',
        status: 'Active'
    },
    {
        id: '03',
        type: '停靠错误警报',
        handle: '李四',
        url: '管理员',
        time: '2022-04-07 12:00:00',
        status: 'Active'
    },
    {
        id: '04',
        type: '停靠错误警报',
        handle: '',
        url: '管理员',
        time: '2022-04-07 12:00:00',
        status: 'Pending'
    },
    {
        id: '05',
        type: '停靠错误警报',
        handle: '张三',
        url: '管理员',
        time: '2022-04-07 12:00:00',
        status: 'Active'
    },
    {
        id: '06',
        type: '停靠错误警报',
        handle: '',
        url: '管理员',
        time: '2022-04-07 12:00:00',
        status: 'Pending'
    },
    {
        id: '07',
        type: '停靠错误警报',
        handle: '',
        url: '管理员',
        time: '2022-04-07 12:00:00',
        status: 'Pending'
    },
    {
        id: '08',
        type: '停靠错误警报',
        handle: '',
        url: '管理员',
        time: '2022-04-07 12:00:00',
        status: 'Pending'
    },
    {
        id: '09',
        type: '停靠错误警报',
        handle: '张三',
        url: '管理员',
        time: '2022-04-07 12:00:00',
        status: 'Active'
    }
];

// ==============================|| MOCK SERVICES ||============================== //

services.onGet('/api/waring/list').reply(200, { waring_s1 });
