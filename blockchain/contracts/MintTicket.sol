// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract MintTicket is ERC721 {
  // Counter to keep track of minted tickets.
  uint256 private mintedTicketCount;

  // We need to pass the name of our NFTs token and its symbol.
  constructor() ERC721 ("Swift Tickets", "SWIFT") {
    console.log("Please work!");
  }

  // A function our user will hit to get their NFT.
  function mintNftTicket() public {
     // Get the current tokenId, this starts at 0.
    uint256 newTicketId = mintedTicketCount;

     // Actually mint the NFT to the sender using msg.sender.
    _safeMint(msg.sender, newTicketId);
    
    // Return the NFT's metadata
    tokenURI(newTicketId);

    // Increment counter when next NFT ticket is minted
    mintedTicketCount++;
  }

  // Set the NFT's metadata
  function tokenURI(uint256 _tokenId) public view override returns (string memory) {
    require(_exists(_tokenId));
    console.log("An NFT w/ ID %s has been minted to %s", _tokenId, msg.sender);
    return "https://cloudflare-ipfs.com/ipfs/QmaW6ZPDLhJ1N4eyqwxGV721C2YiJE39kMv1kGCJ7kYwBt";
  }
}