#pragma once

#include "crow.h"
#include "dotenv.h"

std::string cors_bullshit(){
    dotenv::init();
    crow::mustache::context ctx;

    const std::string SERVER_IP(std::getenv("SERVER_IP"));
    const std::string SERVER_PORT(std::getenv("SERVER_PORT"));
    ctx["link"] = "http://" + SERVER_IP + ":" + SERVER_PORT;
    
    auto tmpl = crow::mustache::load("cors_bullshit.html");
    return tmpl.render_string(ctx);
}