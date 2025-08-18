#include "crow.h"
#include "../include/__init__.h"

// to do : dotenv로드 안되면 세그멘트 뜨는 에러 처리하기 ---> 불가능 ㅋㅋ. sigterm 날라오는 순간 쓰레드 꼬임

int main() {
    crow::SimpleApp app;

    CROW_ROUTE(app, "/")([](){
        return index();
    });

    CROW_ROUTE(app, "/try_it_out")([](){
        return try_it_out();
    });

    CROW_ROUTE(app, "/intro")([](){
        return intro();
    });

    app.port(8080)
       .run();
}
