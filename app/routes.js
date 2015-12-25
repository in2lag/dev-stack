import Welcome from './components/welcome';
import HelloReact from './components/hello-react';
import App from './components/app';

const routes = {
    path: '/',
    component: App,
    indexRoute: {component: Welcome},
    childRoutes: [
        { path: 'hello-react/:name', component: HelloReact }
    ]
};

export default routes;
