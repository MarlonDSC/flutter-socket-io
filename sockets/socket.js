//Socket messages
const { io } = require('../index');
io.on('connection', client => {
    client.on('event', data => {
        console.log('Cliente conectado');
    });
    client.on('disconnect', () => {
        console.log('Cliente desconectado')
    });
    client.on('mensaje', (payload) => {
        console.log('Mensaje', payload);

        io.emit('mensaje', {admin: 'Nuevo mensaje'});
    })
});