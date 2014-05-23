#include <range/v3/algorithm/copy.hpp>
#include <range/v3/view/transform.hpp>
#include <iostream>
#include <iterator>

struct I_can_satisfy_regular_a_little
{
    int operator()(int i) const { return i + 1; }
};

int main()
{
    const int array[] = { 0, 1, 2, 3 };

    ranges::copy(
        array | ranges::view::transform([](int i) { return i + 1; }),
        std::ostream_iterator<int>(std::cout, ", "));

    ranges::copy(
        array | ranges::view::transform(I_can_satisfy_regular_a_little{}),
        std::ostream_iterator<int>(std::cout, ", "));
}
