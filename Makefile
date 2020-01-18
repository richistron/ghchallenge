clean:
	rm -rf build

build: clean install
	NODE_ENV=production yarn build

install:
	yarn isntall

test: install
	CI=true yarn test

pack: build
	docker build -t ghchallenge .