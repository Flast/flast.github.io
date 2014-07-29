#!/usr/bin/env ruby

require 'set'
require 'date'
require 'json'
require 'ruby-graphviz'

class ASpath < GraphViz
  class Node
    attr_reader :node

    def initialize(g, key)
      @set = Set.new
      @g = g
      @node = @g.add_nodes key.to_s
    end

    def <<(node)
      @g.add_edges(@node, @g[node].node) if @set.add? node
      self
    end

    def [](key)
      @node[key]
    end
    def []=(key, value)
      @node[key] = value
    end
  end

  attr_reader :origin
  attr_accessor :info

  def initialize(origin, layout)
    super :aspath, type: :digraph do |g|
      g.graph[:label] = "AS-path on AS#{origin} - #{DateTime.now}"
      g.graph[:center] = ""
      g.graph[:layout] = layout
    end

    @origin = origin
    @path = Hash.new {|h, k| h[k] = Node.new self, k}
    @path[@origin][:peripheries] = 2
  end

  def update_info
    @info.each do |k, v|
      @path[k][:label] = k + '\n<' + v + '>' if @path.has_key? k
    end
  end

  def [](asn)
    @path[asn]
  end

  def layout=(l)
    super[:layout] = l
  end
end

path = ASpath.new ARGV[0], 'fdp'
open("asinfo.json") do |io|
  path.info = JSON.load(io)
end

def aspath?(path)
  return unless path.length > 1
  case path.last
  when 'i','e','?'
    true
  end
end

STDIN.each_line do |line|
  l = line.split.drop 4
  next unless aspath? l
  l = l.reverse.drop(1).reverse

  path[path.origin] << l.first
  l.each_cons(2) {|l, r| path[l] << r}
end

path.update_info
path.output png: "as#{ARGV[0]}.png"
path.output dot: "as#{ARGV[0]}.gv"
