const os = require('os');

const getMyIp = function()
{
    let ifaces = os.networkInterfaces();
    let data = {};

    Object.keys(ifaces).forEach(function (ifname) {
        let alias = 0;

        ifaces[ifname].forEach(function(iface){
            if('IPv4' !== iface.family || iface.internal !== false) return;
            if (alias >= 1) {
                // this single interface has multiple ipv4 addresses
                console.log(ifname + ':' + alias, iface.address);
              } else {
                // this interface has only one ipv4 adress
                console.log(ifname, iface.address);
              }
              ++alias;
        });
    });

    // en0 192.168.1.101
    // eth0 10.0.0.101
    return data;
}

module.exports = getMyIp;