#include <boost/fiber/all.hpp>
#include <iostream>
#include <thread>
using namespace boost::fibers;

void show_info(char const* name)
{
    std::cout << name
      << ": tid " << std::this_thread::get_id()
      << ": fid " << boost::this_fiber::get_id()
      << std::endl;
}

int main()
{
    use_scheduling_algorithm<algo::shared_work>();

    show_info("main thread");

    fiber w1(show_info, "worker1");
    fiber w2(show_info, "worker2");

    std::thread th{[]
        {
            use_scheduling_algorithm<algo::shared_work>();
            show_info("worker thread");

            boost::this_fiber::yield();
        }};

    th.join();
    use_scheduling_algorithm<algo::round_robin>();

    w2.join();
    std::cout << "worker2 joined" << std::endl;
    w1.join();
    std::cout << "worker1 joined" << std::endl;

    fiber w3(show_info, "worker3");
    w3.join();
    std::cout << "worker3 joined" << std::endl;
}
