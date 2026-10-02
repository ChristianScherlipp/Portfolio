import { Routes } from '@angular/router';
import { WrapperHome } from './component/wrapper-home/wrapper-home';
import { Imprint } from './component/imprint/imprint';
import { PrivacyPolicy } from './component/privacy-policy/privacy-policy';

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
        path: "**",
        redirectTo: ""
    }
];
