#pragma once

#include "crow.h"

std::string intro(){
    std::string page = crow::mustache::load_text("intro.html");
    return page;
}
