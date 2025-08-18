cmake_minimum_required(VERSION 3.10)
project(
    Cpp_server
    LANGUAGES CXX
    VERSION 0.0 
    DESCRIPTION "MovingJu's DASOM On-Vacation Frontend Project."
)
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)
set(EXECUTABLE "e")
add_executable(
    ${EXECUTABLE}
    src/main.cpp 

)

target_include_directories(
    ${EXECUTABLE} 
    PUBLIC 
    ${CMAKE_SOURCE_DIR}/includes 
    ${CMAKE_SOURCE_DIR}/extern
)

find_package(Threads REQUIRED)
target_link_libraries(
    ${EXECUTABLE} 
    PRIVATE 
    ${CMAKE_THREAD_LIBS_INIT}
)

file(COPY ${CMAKE_SOURCE_DIR}/templates DESTINATION ${CMAKE_BINARY_DIR})
file(COPY ${CMAKE_SOURCE_DIR}/static DESTINATION ${CMAKE_BINARY_DIR})
file(COPY ${CMAKE_SOURCE_DIR}/.env DESTINATION ${CMAKE_BINARY_DIR})