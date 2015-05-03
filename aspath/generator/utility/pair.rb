module Utility
  class Pair
    attr_accessor :first, :second

    def initialize(first, second)
      @first = first
      @second = second
    end

    def ==(o)
      @first == o.first and @second == o.second
    end

    def eql?(o)
      @first.eql?(o.first) and @second.eql?(o.second)
    end

    def hash
      [@first, @second].hash
    end
  end
end
