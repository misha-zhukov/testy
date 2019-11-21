/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NbMenuItem } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PagesMenu {

  getMenu(): Observable<NbMenuItem[]> {
    const menu: NbMenuItem[] = [
      {
        title: 'FEATURES',
        group: true,
      },
      {
        title: 'Courses',
        icon: 'layout-outline',
        children: [
          {
            title: 'Add course',
            link: '/admin/add-course',
          },
        ],
      },

    ];

    return of([...menu]);
  }
}
