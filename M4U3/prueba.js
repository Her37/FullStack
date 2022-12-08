var moment = require('moment');
moment.locale('es');
console.log('Naci ' + moment('06/05/1985', 'DD/MM/YYYY').fromNow());

