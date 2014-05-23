#include <range/v3/algorithm/copy.hpp>
#include <range/v3/view/transform.hpp>
#include <iostream>
#include <iterator>

struct I_can_satisfy_regular_a_little
{
    int operator()(int i) const { return i + 1; }
};

template <typename T>
struct ostream_iterator : std::ostream_iterator<T>
{
    using std::ostream_iterator<T>::ostream_iterator;

    typedef ptrdiff_t difference_type;

    ostream_iterator() : std::ostream_iterator<T>(std::cout) {}
};

int main()
{
    const int array[] = { 0, 1, 2, 3 };

    //ranges::copy(
    //    //array | ranges::view::transform([](int i) { return i + 1; }),
    //    array | ranges::view::transform(I_can_satisfy_regular_a_little{}),
    //    std::ostream_iterator<int>(std::cout, ", "),
    //    ident{});

    //ranges::copy(
    //    array,
    //    std::ostream_iterator<int>(std::cout, ", "),
    //    ident{});

    CONCEPT_ASSERT(ranges::InputIterable<const int[4]>());
    CONCEPT_ASSERT(ranges::SemiRegular<ostream_iterator<int>>());
    //CONCEPT_ASSERT(ranges::WeaklyIncrementable<ostream_iterator<int>>());
    CONCEPT_ASSERT(ranges::IndirectlyProjectedCopyable<int *, ranges::ident, ostream_iterator<int>>());
    //ranges::copy(
    //    array,
    //    ostream_iterator<int>(std::cout, ", "));
}
