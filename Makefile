port?=8080

img_name=cpp_front
docker_platform=linux/arm64,linux/amd64#,linux/arm/v7

.PHONY: build run
build:
	docker buildx build \
		--platform $(docker_platform) \
		-t movingju/test:$(img_name) \
		--push .

test:
	docker buildx build \
		-t movingju/test:$(img_name) \
		.

run:
	docker run -p $(port):8080 movingju/test:$(img_name)
