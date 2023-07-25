/**
 * Vendors
 */
 // import $ from 'jquery';
 // window.$ = $;

 // Пример подключения плагина
 // import pluginName from 'plugin-name';
import svg4everybody from 'svg4everybody';

 /**
  * Modules
  */
 // Пример подключения модуля
 //import module from './modules/module';


 const app = {
    ready() {
        // Пример вызова импортированных функций
        // pluginName();
        svg4everybody();
    },

    load() {
    },

    resize() {

    },

    scroll() {

    },
};


// $(() => {
//     app.ready();
//
//     $(window)
//         .on('load', app.load)
//         .on('resize', app.resize)
//         .on('scroll', app.scroll);
// });
