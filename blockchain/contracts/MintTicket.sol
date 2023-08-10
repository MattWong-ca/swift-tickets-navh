// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";

contract MintTicket is ERC721URIStorage {
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
    _setTokenURI(newTicketId, "ipfs://QmXgqF5ifdLsNGjMETCqVAxQcVBfRX39iNsuAcuGoGd4Mm");

    // Increment counter when next NFT ticket is minted
    mintedTicketCount++;
  }

}