import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'dashboard',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      }
    ],
  },
  {
    label: 'Admin Configuration',
    main: [
      {
        state: 'admin',
        short_label: 'A',
        name: 'Add Masters',
        type: 'sub',
        icon: 'ti-id-badge',
        children: [
          {
            state: 'addFee',
            type: 'link',
            name: 'Add Fee'
         
          }, {
            state: 'addClass',
            type: 'link',
            name: 'Add Class'
         
          }
        ]
      }
    ]
  },
  {
    label: 'Student Management',
    main: [
      {
        state: 'basic',
        name: 'Student Mangement',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        children: [
          {
            state: 'button',
            name: 'Add Student'
          },
          {
            state: 'typography',
            name: 'Total Students'
          }
        ]
      },
      {
        state: 'notifications',
        name: 'Notifications',
        type: 'link',
        icon: 'ti-crown'
      }
    ]
  },
  {
    label: 'Fee',
    main: [
      {
        state: 'fees',
        name: 'Fee Dtails',
        type: 'link',
        icon: 'ti-layers'
      }
    ]
  },
  {
    label: 'Tables',
    main: [
      {
        state: 'bootstrap-table',
        name: 'Bootstrap Table',
        type: 'link',
        icon: 'ti-receipt'
      }
    ]
  },
  {
    label: 'Map',
    main: [
      {
        state: 'map',
        name: 'Maps',
        type: 'link',
        icon: 'ti-map-alt'
      }
    ]
  },
 
  {
    label: 'Other',
    main: [
      {
        state: '',
        name: 'Menu Levels',
        type: 'sub',
        icon: 'ti-direction-alt',
        children: [
          {
            state: '',
            name: 'Menu Level 2.1',
            target: true
          }, {
            state: '',
            name: 'Menu Level 2.2',
            type: 'sub',
            children: [
              {
                state: '',
                name: 'Menu Level 2.2.1',
                target: true
              },
              {
                state: '',
                name: 'Menu Level 2.2.2',
                target: true
              }
            ]
          }, {
            state: '',
            name: 'Menu Level 2.3',
            target: true
          }, {
            state: '',
            name: 'Menu Level 2.4',
            type: 'sub',
            children: [
              {
                state: '',
                name: 'Menu Level 2.4.1',
                target: true
              },
              {
                state: '',
                name: 'Menu Level 2.4.2',
                target: true
              }
            ]
          }
        ]
      }, {
        state: 'simple-page',
        name: 'Simple Page',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
