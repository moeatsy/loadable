import loadable from '@loadable/component';
import React from "react";

export const Auth = loadable(() => import('./components/Auth' /* webpackChunkName: "Auth" */ ), {
        fallback: <span>loading</span>,
    }
);

export const Opening = loadable(() => import('./components/Opening' /* webpackChunkName: "Opening" */ ), {
        fallback: <span>loading</span>,
    }
);


