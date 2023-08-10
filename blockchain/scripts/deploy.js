const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory("MintTicket");
    const nftContract = await nftContractFactory.deploy();
    await nftContract.waitForDeployment();
    console.log("Contract deployed to:", await nftContract.getAddress());
  
    // Call the function.
    let txn = await nftContract.mintNFTTicket()
    // Wait for it to be mined.
    await txn.wait()
    console.log("Minted NFT!")

  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();