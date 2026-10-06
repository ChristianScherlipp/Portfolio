import { Routes } from '@angular/router';
import { WrapperHome } from './component/wrapper-home/wrapper-home';
import { Imprint } from './component/imprint/imprint';
import { PrivacyPolicy } from './component/privacy-policy/privacy-policy';
import { ComingSoon } from './component/coming-soon/coming-soon';

export const routes: Routes = [
    {
        path: "",
        component: WrapperHome
    },
    {
        path: "imprint",
        component: Imprint
    },
    {
        path: "privacy-policy",
        component: PrivacyPolicy
    },
    {
        path: "coming-soon",
        component: ComingSoon
    },
    {
        path: "**",
        redirectTo: ""
    }
];
