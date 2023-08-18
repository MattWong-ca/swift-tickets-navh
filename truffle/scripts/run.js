const MintTicket = artifacts.require("MintTicket");

const main = async () => {
  try {
    const accounts = await web3.eth.getAccounts();
    const nftContract = await MintTicket.new({ from: accounts[0], gas: 3000000 });

    console.log("Contract deployed to:", nftContract.address);

    // Call the function.
    // const result = await nftContract.mintNFTTicket({ value: 13000000, from: accounts[0] });
    // console.log("Minted NFT!", result);

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

main();