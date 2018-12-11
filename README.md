
# vuejs2-bootstrap4--cronometro

> Un proyecto Vue.js 
	
	Componente web hecho en VueJS2, alojado en github y en NPM.
	El paquete puede descargarse del sitio:
		https://www.npmjs.com/settings/edgargregori/packages.
	Y el nombre es:
		"vue-cronometro".
	Nota: Quize cambiar el nombre del paquete que originalmente se llamaba:
		"vuejs2-bootstrap4--cronometro" a "vuejs2-bootstrap4-cronometro" (sin esos dos guiones antes cronometro), y se complico y cambie en la ultima version a "vue-cronometro", disculpas por alguna confusion.
	
## Antes de instalar el componente.

``` bash

# install ambiente simple para VueJs2
$ vue init webpack-simple  demo-vue-cronometro


# instalar dependencias 
npm install 

# leventar un servidor para modo desarrollo. 
npm run dev 

# construir los archivos *.js y *.css para modo contrucción. 
npm run build 


```
## Build Setup (English)

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Instalar el componente.

``` bash

# install dependencies
npm install --save-dev  vue-cronometro


# install dependencies
npm install --save-dev  vue-cronometro

```


## Usar el componente.

	En los archivos demo:

		En "index.html" se debe colocar las referencias a los estilos y funcionalidad:
	
			<link rel="stylesheet" href="node_modules/vue-cronometro/dist/main.css">
			<body>
				<div id="app"></div>
				<script src="node_modules/vue-cronometro/dist/vue-cronometro.min.js"></script>

		En "src/App.vue":

			Llamar al componente:
				import VueCronometro from 'vue-cronometro'

			Declarar el componente:
				components: {
					'vue-cronometro': VueCronometro
				},
		
			LLamar a los componentes de "BootstrapVue", para utilizar sus componentes:
				import BootstrapVue from 'bootstrap-vue'
				Vue.use(BootstrapVue)


		Aqui el link del demo:	
			https://github.com/edgargregori/demo-vue-cronometro


## Descripción del componente 'vue-cronometro'.

		Fotografia:
				https://1drv.ms/w/s!AlHybZAhk77-hREm2IDQxmcdA8M-
		Este componente emula un cronometro simple, con la funcionalidad de los botones:
			ReInicar:  Inicio / Reinicio del cronometro.
			Continuar: Continua luego de haber pausado.
			Pausar: Detiene el cronometro.
		Este cronometro mide el tiempo en segundos.

## Bibliografia uso de BootstrapVue:
	https://bootstrap-vue.js.org/
	http://yuche.github.io/vue-strap/


