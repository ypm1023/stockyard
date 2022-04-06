// project imports
import services from 'utils/mockAdapter';

// user list
const actionLog_s1 = [
    {
        id: '1',
        content: '张三登录了系统',
        user: '张三',
        url: '管理员',
        time: '2022-04-07 12:00:00'
    },
    {
        id: '01',
        type: '李四审核了冀A88888停靠报警的信息',
        user: '李四',
        url: '管理员',
        time: '2022-04-07 12:00:00'
    },
    {
        id: '02',
        type: '张三修改了李四的角色',
        user: '张三',
        time: '2022-04-07 12:00:00'
    },
    {
        id: '03',
        type: '李四修改了李四的账户信息',
        user: '李四',
        time: '2022-04-07 12:00:00'
    },
    {
        id: '04',
        type: '张三登出系统',
        user: '张三',
        time: '2022-04-07 12:00:00'
    },
    {
        id: '05',
        type: '李四查看冀A88888装载报警的视频',
        user: '张三',
        time: '2022-04-07 12:00:00'
    }
];

// ==============================|| MOCK SERVICES ||============================== //

services.onGet('/api/action/list').reply(200, { actionLog_s1 });
