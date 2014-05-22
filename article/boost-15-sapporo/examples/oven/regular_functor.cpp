#include <boost/range/adaptor/transformed.hpp>
#include <boost/range/algorithm/copy.hpp>
#include <boost/range/any_range.hpp>
#include <iterator>
#include <iostream>

template <typename T>
using fwd_range = boost::any_range<T, boost::forward_traversal_tag, T &, ptrdiff_t>;

struct I_can_satisfy_regular_a_little
{
    int operator()(int i) const { return i + 1; }
};

int main()
{
    const int array[] = { 0, 1, 2, 3 };

    fwd_range<int> r = array
        | boost::adaptors::transformed(I_can_satisfy_regular_a_little{});
    boost::copy(r, std::ostream_iterator<int>(std::cout, ", "));
}
