// project imports
import services from 'utils/mockAdapter';

// user list
const venue_s1 = [
    {
        id: '01',
        name: 'A棚门口',
        type: '优质',
        handle: '张三',
        cameras: ['相机01', '相机02'],
        status: 'Active'
    },
    {
        id: '02',
        name: 'A棚栅栏',
        type: '优质',
        handle: '张三',
        cameras: ['相机01', '相机02'],
        status: 'Active'
    },
    {
        id: '03',
        name: 'A棚左部A1区域',
        type: '良',
        handle: '张三',
        cameras: ['相机01', '相机02'],
        status: 'Active'
    },
    {
        id: '04',
        name: 'A棚左部A2区域',
        type: '优质，无烟',
        handle: '张三',
        cameras: ['相机01', '相机02'],
        status: 'Active'
    },
    {
        id: '05',
        name: 'A棚左部A3区域',
        handle: '张三',
        type: '劣质',
        cameras: ['相机01', '相机02'],
        status: 'Active'
    },
    {
        id: '06',
        name: 'A棚装载区域1',
        handle: '张三',
        type: '焦炭',
        cameras: ['相机01', '相机02'],
        status: 'Active'
    },
    {
        id: '01',
        name: 'A棚装载区域2',
        handle: '张三',
        type: '优质，无烟，易燃，耐烧',
        cameras: ['相机01', '相机02'],
        status: 'Active'
    },
    {
        id: '01',
        name: 'A棚装载区域3',
        handle: '张三',
        type: '优质，无烟，易燃，耐烧',
        cameras: ['相机01', '相机02'],
        status: 'Active'
    }
];

// ==============================|| MOCK SERVICES ||============================== //

services.onGet('/api/venue/list').reply(200, { venue_s1 });
