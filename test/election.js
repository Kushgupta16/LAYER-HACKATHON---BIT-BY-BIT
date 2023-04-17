var Election =artifacts.require("./Election.sol");

contract("Election",function(accounts))
{
    var electionInstance;
    it("initialize with two candidates",function()
    {
        return Election.deployed().then(function(indtance)
        {
            return instance.candiatesCount();
        }).then(function(count)
        {
            assert.equal(count,2);
        });
    });
}