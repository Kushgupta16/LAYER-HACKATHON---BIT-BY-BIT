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

it("it initializes the candidates with the correct values",function(){
    return Election.deployed().then(function(insatnce){
        electionInstance = insatnce;
        return electionInstance.candidates(1);
    }).then(function(candidate){
        assert.equal(candidate[0],1, "contain the correct id");
        assert.equal(candidate[1], "Candidate 1", "contains the correct name");
        assert.equal(candidate[2], 0, "contains the correct vote counts");
        return electionInstance.candidates(2);

    }).then(function(candidate){
        assert.equal(candidate[0],2,"contains the correect id");
        assert.equal(candidate[1],"Candidate 2", "contains the correct name");
        assert.equal(candidate[2],0, "contains the correct votes count");
    });

