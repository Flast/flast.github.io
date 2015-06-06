require 'net/ssh'
require_relative '../utility/udag.rb'

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
      stdout = [""]

      opt[:send_env] = false
      begin
        Net::SSH.start(host, user, opt) do |ssh|
          ssh.open_channel do |ch|
            ch.exec 'show bgp ipv6 unicast paths' do |ch, success|
              abort unless success
              ch.on_data do |_, data|
                stdout = data.lines
              end
            end
          end
        end
      rescue
        # ignore 'connection reset by peer'
      end

      Utility::uniqueDAG(stdout.map do |l|
        # trim address, hash, refcount and metric
        l.split.drop 4
      end.select do |p|
        aspath? p
      end.map do |p|
        # trim tail i, e or ?
        p.pop
        p
      end)
    end
  end
end
