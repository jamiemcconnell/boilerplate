
default:
	echo " build "

build:
	webpack

serve-local:
	docker-compose up -d
	webpack --watch

watch:
	webpack --watch
