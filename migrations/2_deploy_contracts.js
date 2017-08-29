var DPW = artifacts.require("./DPIcoWhitelist.sol");
var CPCrowdsale = artifacts.require("./CPCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
    const fiveDays = 5*24*60*60;
    const thirtyDays = 30*24*60*60;
    const startTime = new web3.BigNumber(1504034769);
    const endTime = new web3.BigNumber(startTime + thirtyDays);
    const whitelistEndTime = new web3.BigNumber(startTime + fiveDays);
    const rate = new web3.BigNumber(1000);
    const wallet = web3.eth.accounts[0];
    const cap = web3.toWei(45000, "ether");
    /*
    deployer.deploy(DPW).then(function() {
        return deployer.deploy(CPCrowdsale, startTime, endTime, whitelistEndTime, rate, wallet, cap, DPW.address);
    });

     */
    deployer.deploy(CPCrowdsale, startTime, endTime, rate, wallet, cap);

};
