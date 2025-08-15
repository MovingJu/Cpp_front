FROM alpine:latest AS compiletime

RUN apk add g++ make linux-headers

WORKDIR /app

COPY ./extern ./extern
COPY ./routes ./routes
COPY ./main.cpp .
COPY ./Makefile .

RUN make build commands=-static&&strip e

FROM alpine:latest AS runtime

WORKDIR /app

COPY ./templates /app/templates
COPY ./static /app/static
COPY --from=compiletime /app/e /app

CMD ["./e"]