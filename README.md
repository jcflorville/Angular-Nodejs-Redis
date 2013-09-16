#Angular-Nodejs-Redis
==========

Esto es un repositorio, donde se mezcla Angular (http://angularjs.org/), NodeJS (http://nodejs.org/) y Redis (http://redis.io/), para la creación de una pequeña aplicación, donde es posible agregar tareas a un lista.

##Requisitos

- Redis (http://redis.io/topics/quickstart)

- NodeJS (http://howtonode.org/how-to-install-nodejs)

- Git (http://git-scm.com/book/en/Getting-Started-Installing-Git)


##Inicio
	
Para comenzar debemos tener levantado el servidor Redis: 
	
	$ redis-server

Hacemos clone del repositorio:
	
	$ git clone git@github.com:jcflorville/Angular-Nodejs-Redis.git

Accedemos a la carpeta e instalamos la dependicias:

	$ cd Angular-Nodejs-Redis
	$ npm install

Levantamos el servidor 
	
	$ node app.js

Listo ya podemos acceder en el navegador http://localhost:3000