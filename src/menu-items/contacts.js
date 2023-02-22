// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const contacts = {
    id: 'contacts',
    type: 'group',
    children: [
        {
            id: 'contacts',
            title: 'My Contacts',
            type: 'collapse',
            icon: icons.IconKey,
            children: [
                {
                    id: 'data',
                    title: 'Data',
                    type: 'item',
                    url: '/sample-page'
                },
                {
                    id: 'section',
                    title: 'Sections',
                    type: 'item',
                    url: '/sample-page',
                    target: true
                }
            ]
        }
    ]
};

export default contacts;
