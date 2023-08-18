const NFTTicket = artifacts.require("MintTicket");

module.exports = async function(deployer, _network, accounts) {
  // Deploy the contract
  await deployer.deploy(NFTTicket, { from: accounts[0], gas: 3000000 });

  // Retrieve the deployed contract instance
  const nftContract = await NFTTicket.deployed();

  console.log("Contract deployed to:", nftContract.address);

  // Call the function.
  // const result = await nftContract.mintNFTTicket({ value: 13000000, from: accounts[0] });
  // console.log("Minted NFT!", result);
};