
help:
	@echo "Usage: make <command>"
	@echo "  build         Build project"
	@echo "  watch         Build project and watch for changes"
	@echo "  serve-local   Start Webserver container, build and watch"

build:
	webpack

serve-local:
	docker-compose up -d
	webpack --watch

watch:
	webpack --watch
