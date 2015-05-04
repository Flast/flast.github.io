require_relative './pair.rb'

module Utility

  def self.uniqueDAG(paths)
    dag = Set.new
    paths.each do |p|
      ([:self] + p).each_cons(2) do |l, r|
        dag.add Utility::Pair.new(l, r)
      end
    end
    dag
  end

end
