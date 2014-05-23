#include <type_traits>
#include <boost/lambda/lambda.hpp>

template <typename T>
void check(T)
{
    static_assert(std::is_default_constructible<T>{}, "default constructible");
    static_assert(std::is_assignable<T, T>{}   , "copy constructible");
}

int main()
{
    check([]{});
    check(boost::lambda::_1);
}
