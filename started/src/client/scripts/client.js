/**
 * Created by pomy on 15/11/13.
 */
import App from '../../app/app';

var attachElement = document.getElementById('react-app');

var state = {
    user: {
        name: 'pomy',
        age: 22,
        location: 'guangzhou, china'
    }
};

var app;

app = new App({state: state});

app.renderToDOM(attachElement);