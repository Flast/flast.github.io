#!/usr/bin/env ruby

require 'set'
require 'date'
require 'json'
require 'ruby-graphviz'

require_relative './platform/cisco.rb'

class ASpath < GraphViz
  attr_reader :origin

  def layout=(l)
    super[:layout] = l
  end

  def initialize(origin, info, layout)
    super :aspath, type: :digraph do |g|
      g.graph[:label] = "AS-path on AS#{origin} - #{DateTime.now}"
      g.graph[:center] = ""
      g.graph[:layout] = layout
    end

    @origin = origin.to_s
    @info = info
    @path = Set.new
    @nodes = Hash.new

    label_node :self
    @nodes[:self][:peripheries] = 2
  end


  def <<(udag)
    udag.each do |edge|
      label_node edge.first
      label_node edge.second
    end
    udag.difference(@path).each do |edge|
      add_edges @nodes[edge.first], @nodes[edge.second]
    end
    @path.merge udag
  end

  private

  def label_node(node)
    return if @nodes.has_key? node

    asn = node == :self ? @origin : node
    @nodes[node] = add_nodes(asn, label: asn + '\n<' + @info[asn] + '>')
  end
end

path =
open("asinfo.json") { |io| path = ASpath.new ARGV[0], JSON.load(io), 'fdp' }

routers =
open(ARGV[1]) { |io| routers = JSON.load(io) }

routers.each do |r|
  p r
  case r["vendor"]
  when "cisco"
    path << Platform::Cisco.paths(r["hostname"], r["user"], keys: r["keys"])
  end
end

path.output png: "as#{ARGV[0]}.png"
path.output dot: "as#{ARGV[0]}.gv"
