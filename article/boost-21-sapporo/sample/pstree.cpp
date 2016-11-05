#include <iostream>
#include <boost/process.hpp>
using namespace boost::process;
#include <unistd.h>

void show_pstree(char const* parent)
{
    spawn("/usr/bin/pstree", "-alpuUs", std::to_string(boost::this_process::get_id()));
    std::getchar();
}

int main(int argc, char** argv)
{
    if (argc > 1)
    {
        show_pstree(argv[1]);
        return 0;
    }

    std::cout << "main process"
      << " : pid " << boost::this_process::get_id() << std::endl;

    child c("/usr/bin/xterm", "-e", argv[0], std::to_string(boost::this_process::get_id()));

    std::cout << "wait for child" << std::endl;
    c.join();
}

