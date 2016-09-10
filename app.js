var express = require('express');
var app = express();
    
// Definir a route principal
app.get('/', function(req, res) {
  res.send('PUCC Ionic Course');
});

// Lista de Utilizadores
var users = [
	  {'photo' : 'http://s2.glbimg.com/pXH2qoCQFOGFm6VmCJZvvL68m98=/e.glbimg.com/og/ed/f/original/2016/06/14/untitled-3_1.jpg', 'name' : 'Lilian', 'age': '21'},
	  {'photo' : 'http://s2.glbimg.com/eSWSdBeYTNdjxJYSX3YQ5IVm12A=/s.glbimg.com/et/gs/f/original/2015/10/23/gabee2.jpg', 'name' : 'Larissa', 'age' : '18'}
];



// Definir um endpoint da API
app.get('/api/get_users', function(req, res, next) {
  res.send(users);
})

// Aplicação disponível em http://127.0.0.1:9000/
app.listen(process.env.PORT || 3000);
