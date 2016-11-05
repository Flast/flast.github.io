#include <boost/process.hpp>
using namespace boost::process;

int main()
{
    spawn("/usr/bin/gnome-terminal", "-x", "bash");
}

