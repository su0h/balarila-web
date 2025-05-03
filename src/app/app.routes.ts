import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GrammarCheckPageComponent } from './grammar-check-page/grammar-check-page.component';
import { CorruptionPageComponent } from './corruption-page/corruption-page.component';

export const routes: Routes = [
    { 
        path: '', 
        component: MainLayoutComponent, 
        children: [
            {
                path: '',
                component: HomepageComponent
            },
            {
                path: 'grammar-checker',
                component: GrammarCheckPageComponent
            },
            {
                path: 'corruption',
                component: CorruptionPageComponent
            }
        ]
    },
];
