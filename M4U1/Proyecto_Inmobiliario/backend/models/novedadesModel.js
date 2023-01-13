var pool = require('./bd'); //llamdando datos BD


async function getNovedades() {

    var query = 'select * from novedades'
    var rows = await pool.query(query);
    return rows;
}

async function insertarNovedades(obj) {
    try {
        var query = 'insert into novedades set ?';
        var rows = await pool.query(query, [obj]);
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getNovedades, insertarNovedades }