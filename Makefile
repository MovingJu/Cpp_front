e?=e
version?=20
port?=8080
files?=
commands?=

extern=extern
add= -std=c++$(version) -o $(e) -lpthread -I$(extern) $(commands)
img_name=cpp_front
docker_platform=linux/arm64,linux/amd64#,linux/arm/v7

d_build:
	docker buildx build \
		--platform $(docker_platform) \
		-t movingju/test:$(img_name) \
		--push .

d_run:
	docker run -p $(port):8080 movingju/test:$(img_name)

build:
	g++ main.cpp $(files) $(add)

run: build
	./$(e)
	