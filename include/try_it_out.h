#pragma once

#include "crow.h"
#include "dotenv.h"

std::string try_it_out(){
    dotenv::init();
    crow::mustache::context ctx;

    const std::string SERVER_IP(std::getenv("SERVER_IP"));
    const std::string SERVER_PORT(std::getenv("SERVER_PORT"));
    ctx["link"] = "ws://" + SERVER_IP + ":" + SERVER_PORT;

    auto tmpl = crow::mustache::load("try_it_out.html");
    return tmpl.render_string(ctx);
    
}