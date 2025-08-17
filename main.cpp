#include "crow.h"
#include "routes/__init__.h"

int main() {
    crow::SimpleApp app;

    CROW_ROUTE(app, "/")([](){
        return index();
    });

    CROW_ROUTE(app, "/test")([](){
        return test();
    });

    CROW_ROUTE(app, "/intro")([](){
        return intro();
    });

    CROW_ROUTE(app, "/cors_dogbaby")([](){
        return cors_bullshit();
    });

    app.port(8080)
       .run();
}
