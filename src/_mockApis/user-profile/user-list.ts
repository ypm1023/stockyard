// project imports
import services from 'utils/mockAdapter';

// asset
import Avatar1 from 'assets/images/users/avatar-1.png';
import Avatar2 from 'assets/images/users/avatar-2.png';
import Avatar3 from 'assets/images/users/avatar-3.png';

// user list
const users_s1 = [
    {
        id: '01',
        avatar: 'user-7.png',
        name: '张三',
        verify: 1,
        email: '13911111111',
        role: '管理员',
        last: '2022-04-07 12:00:00',
        status: 'Active'
    },
    {
        id: '02',
        avatar: 'user-7.png',
        name: '李四',
        verify: 1,
        email: '13911111111',
        role: '操作员',
        last: '2022-04-07 12:00:00',
        status: 'Pending'
    },
    {
        id: '03',
        avatar: 'user-7.png',
        name: '王五',
        verify: 1,
        email: '13911111111',
        role: '管理员',
        last: '2022-04-07 12:00:00',
        status: 'Rejected'
    },
    {
        id: '04',
        avatar: 'user-7.png',
        name: '赵六',
        verify: 1,
        email: '13911111111',
        role: '操作员',
        last: '2022-04-07 12:00:00',
        status: 'Pending'
    },
    {
        id: '05',
        avatar: 'user-7.png',
        name: '和二',
        verify: 0,
        email: '13911111111',
        role: '管理员',
        last: '2022-04-07 12:00:00',
        status: 'Active'
    },
    {
        id: '06',
        avatar: 'user-7.png',
        name: '黄三',
        verify: 1,
        email: '13911111111',
        role: '管理员',
        last: '2022-04-07 12:00:00',
        status: 'Rejected'
    },
    {
        id: '07',
        avatar: 'user-7.png',
        name: '纪八',
        verify: 1,
        email: '13911111111',
        role: '操作员',
        last: '2022-04-07 12:00:00',
        status: 'Active'
    },
    {
        id: '08',
        avatar: 'user-7.png',
        name: '刘大',
        verify: 1,
        email: '13911111111',
        role: '操作员',
        last: '2022-04-07 12:00:00',
        status: 'Pending'
    },
    {
        id: '09',
        avatar: 'user-7.png',
        name: '赵九',
        verify: 1,
        email: '13911111111',
        role: '管理员',
        last: '2022-04-07 12:00:00',
        status: 'Active'
    },
    {
        id: '10',
        avatar: 'user-7.png',
        name: '钱十',
        verify: 1,
        email: '13911111111',
        role: '操作员',
        last: '2022-04-07 12:00:00',
        status: 'Active'
    }
];

const users_s2 = [
    {
        image: Avatar1,
        name: 'Elnora',
        designation: 'Lead Marketing Facilitator',
        badgeStatus: 'active',
        subContent: 'We need to generate the virtual CSS hard drive!',
        email: 'Reid_OConnell4@yahoo.com',
        phone: '506-654-1653',
        location: 'Saucerize',
        progressValue: '78%'
    },
    {
        image: Avatar2,
        name: 'Hirohito',
        designation: 'Investor Creative Liaison',
        badgeStatus: 'active',
        subContent: 'If we synthesize the protocol, we can get to the RSS circuit through.',
        email: 'Conner22@hotmail.com',
        phone: '673-157-1670',
        location: 'Port Narcos',
        progressValue: '78%'
    },
    {
        image: Avatar3,
        name: 'Kathie',
        designation: 'Human Accountability Strategist',
        badgeStatus: 'inactive',
        subContent: 'We need to generate the virtual CSS hard drive!',
        email: 'Dangelo40@company.com',
        phone: '506-654-1653',
        location: 'Saucerize',
        progressValue: '78%'
    }
];

// ==============================|| MOCK SERVICES ||============================== //

services.onGet('/api/user-list/s1/list').reply(200, { users_s1 });

services.onGet('/api/user-list/s2/list').reply(200, { users_s2 });
