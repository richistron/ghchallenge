clean:
	rm -rf build

build: clean
	NODE_ENV=production yarn build

install:
	yarn isntall

test:
	CI=true yarn test

pack: build
	docker build -t ghchallenge .