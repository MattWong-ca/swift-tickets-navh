// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";

contract MintTicket is ERC721URIStorage {
    // uint256 public constant MAX_TICKETS = 13000;
    // uint256 public ticketPrice = 0.013 ether;

    // Ticket[] public tickets;
    uint256 private mintedTicketCount;

    constructor() ERC721("Swift Tickets", "SWIFT") {}

    // struct Ticket {
    //     address owner;
    //     string image;
    //     uint256 ticketId;
    //     string title;
    //     string location;
    //     string seat;
    //     string time;
    // }
    
    function mintNftTicket() public payable {
        // require(mintedTicketCount < MAX_TICKETS, "Maximum number of tickets reached");
        // require(msg.value >= ticketPrice, "Insufficient ETH sent");

        uint256 newTicketId = mintedTicketCount;

        // Ticket memory newTicket = Ticket({
        //     owner: msg.sender,
        //     image: "",
        //     ticketId: newTicketId,
        //     title: "The Eras Tour - Nov 15 2024",
        //     location: "Rogers Centre | Toronto, CA",
        //     seat: "Section Z, Row 1, Seat 3",
        //     time: "7:00 PM ET"
        // });

        _safeMint(msg.sender, newTicketId);
        _setTokenURI(newTicketId, "ipfs://QmaW6ZPDLhJ1N4eyqwxGV721C2YiJE39kMv1kGCJ7kYwBt");

        // tickets.push(newTicket);
        mintedTicketCount++;
    }

}