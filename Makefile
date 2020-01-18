VERSION=$(shell node version.js)

clean:
	rm -rf build

build: clean
	NODE_ENV=production yarn build

install:
	yarn install

test:
	yarn pretty-check
	CI=true yarn test

pack: build
	docker build -t ghchallenge .
	docker tag ghchallenge docker.pkg.github.com/richistron/ghchallenge/nginx:$(VERSION)
	docker login docker.pkg.github.com --username richistron -p $(DOCKER_LOGIN)
	docker push docker.pkg.github.com/richistron/ghchallenge/nginx:$(VERSION)
