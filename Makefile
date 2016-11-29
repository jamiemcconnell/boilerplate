
build:
	webpack

make serve-local:
	docker-compose up -d
	webpack --watch
