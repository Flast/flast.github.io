#include <range/v3/algorithm/copy.hpp>
#include <range/v3/view/indirect.hpp>
#include <iostream>
#include <iterator>

int main()
{
    const int src[] = { 0, 1, 2, 3 };
    const int *isrc[sizeof(src) / sizeof(int)];

    ranges::copy(src, isrc, [](const int &i) { return &i; });

    for (int i : isrc | ranges::view::indirect)
        std::cout << i << ", ";
    std::cout << std::endl;
}
