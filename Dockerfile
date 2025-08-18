FROM alpine:latest AS compiletime

RUN apk add g++ linux-headers cmake make build-base

WORKDIR /app

COPY ./extern ./extern
COPY ./include ./include
COPY ./src ./src
COPY ./templates ./templates
COPY ./static ./static
COPY ./.env .
COPY ./CMakeLists.txt .

RUN cmake -S . -B build \
 && cmake --build build 


FROM alpine:latest AS runtime

RUN apk add libstdc++ libgcc 

WORKDIR /app

COPY --from=compiletime /app/build/templates ./templates
COPY --from=compiletime /app/build/static ./static
COPY --from=compiletime /app/build/.env .
COPY --from=compiletime /app/build/e .

CMD ["./e"]