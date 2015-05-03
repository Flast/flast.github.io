require 'net/ssh'
require_relative '../utility/pair.rb'

module Platform
  module Cisco

    def self.aspath?(path)
      return unless path.length > 1
      case path.last
      when 'i','e','?'
        true
      end
    end

    def self.paths(host, user, opt = {})
      stdout = ""

      opt[:send_env] = false
      begin
        Net::SSH.start(host, user, opt) do |ssh|
          ssh.open_channel do |ch|
            ch.exec 'show bgp ipv6 unicast paths' do |ch, success|
              abort unless success
              ch.on_data do |_, data|
                stdout = data
              end
            end
          end
        end
      rescue
        # ignore 'connection reset by peer'
      end

      udag = Set.new # unique DAG

      stdout.each_line do |line|
        # trim address, hash, refcount and metric
        p = line.split.drop 4
        next unless aspath? p
        # trim tail i, e or ?
        p = p.reverse.drop(1).reverse

        udag << Utility::Pair.new(:self, p.first)
        p.each_cons(2){ |l, r| udag << Utility::Pair.new(l, r) }
      end

      udag
    end
  end
end
