# 🎤 Swift Tickets (Taylor's Version)

[Insert image soon]

### WIP, will submit to NAVH!

# 🤖 "It's Me, Hi, I'm The Problem, It's Me"
You've likely heard of Ticketmaster’s inability to handle bots, especially in November '22 when fans waited HOURS (just to get nothing), or most recently in August '23, when their Eras Tour Verified Fan program was basically a lottery ticket—thousands of fans were waitlisted.

The Events Tickets market is a huge opportunity. According to Statista:
> _"Revenue in the Event Tickets market is projected to reach $78B USD in 2023, [...] and an expected 760M users by 2027"_

Ticketmaster is a monopoly and their Verified Fan just **doesn't work**.

### 😭 ~~Onchain~~ Cruel Summer
Canadian fans are [frustrated](https://ca.style.yahoo.com/canadian-taylor-swift-fans-toronto-shows-waitlist-142720549.html) that they're all on the waitlist for Swift's Eras Tour in Toronto (November 2024). There was only a 1 in 400 chance of getting a ticket ([source](https://www.theglobeandmail.com/canada/article-taylor-swift-canada-tickets-codes-percentage/)), so it's actually easier to get into Harvard than to get a Eras ticket :P

### 👁️ You're The Only One Of You
With Swift Tickets' use of World ID, only **real** humans can buy tickets! This prevents bots from accessing the checkout.

There’s been privacy concerns with Worldcoin, but Swifties will literally do anything to get a ticket—in the future, I'll implement different verification levels based on orb / phone verification, which can differentiate their chances of getting in by how much we're able to prove they're human.

# 🏗️ How it's Made
Swift Tickets is an events platform that leverages Worldcoin's World ID to discourage ticket scalpers + prevent bots from buying Taylor Swift concert tickets. Every sponsor tech's integration in this dapp was intentionally and thoughfully chosen to provide a _seamless_ user experience.

[Insert Consensys products]

- Worldcoin's World ID for bot prevention
- Deployed on the Superchain (Optimism, Base, Zora, Mode)
- Supabase for World ID web backend verification
- NFT metadata stored on IPFS through Pinata
- Alchemy and QuickNode for RPC endpoints

### Tickets
The tickets are all deployed on different chains, separated by seat sections! For example, at a stadium there's 100 level, 200 level, etc. and seat sections in each. Each of these sections have tickets deployed on a different chain, which leverages the Superchain's horizontal scaling to provide more accessibility to users in case they're on another network. If 10s of thousands of Swifties are trying to mint an NFT at the same time, it might even help with congestion/gas fees! Deployments were made using Hardhat, with networks in `/blockchain/hardhat.config.js`.

### Checkout with World ID
The key value prop of this platform is using World ID to prevent bots. The UI/UX is similar to a reCAPTCHA, with users clicking on the `I'm Human` button to verify with Worldcoin. Once verified, a `useEffect` will automatically check if the user is verified in the Supabase database and show a green approval. If not verified, the `Purchase NFT Ticket` button won't work!

**Important**: since user's can game the frontend, the web verification can't be just done on the frontend, which is why Supabase is used. In `verify.ts`, the `if (verifyRes.status == 200)` block contains the lines where the user's address + a `isWorldcoinVerified` boolean is sent to Supabase. In the frontend, when determining whether to show a `I'm Human` or `Verified` button, Supabase is called to determine if the user is verified.

### Overall Dapp
- Next.js app frontend built with TypeScript and HTML/CSS, with a `verify.ts` API route for World ID verification.
- Hardhat project for deploying Solidity smart contracts.
- Design + branding was inspired by Zora!

### Deployed Contracts
- [Zora Goerli](https://testnet.explorer.zora.energy/address/0x8a204761ffb6edd676ec28849de46d5e59f87fe1)
- [Base Goerli](https://goerli.basescan.org/address/0x2a6123eedea57303d2034f60a62c0c1529f06752)
- [Optimism Goerli](https://goerli-optimism.etherscan.io/address/0xb861d6d79123ada308e5f4030f458b402e2d131a)
- [Mode Testnet](https://sepolia.explorer.mode.network/address/0xb861d6d79123ADa308E5F4030F458b402E2D131A)
- [Goerli](https://goerli.etherscan.io/address/0x46224855ce16b2a5a8ddfab0578da8828d43f601)

# 🚀 Future Plans
### QR Code Ticket
Currently it's only a NFT ticket, but there's no QR code for user's to actually get into the event! Usually QR codes are sent by email, so I'll want to implement this so that a QR code is emailed when they purchase the NFT ticket.

### World ID Proof Onchain
To the make the dapp fully onchain, I'll scrap the Supabase backend for onchain proofs.

### Option To Use USDC Or Fiat
If users don't want to pay with ETH, they should be able to buy tickets with USDC (or other stablecoins) and fiat.

### Option To Buy More Than 1 Ticket
There's currently no option to buy more than 1 ticket unless you redo the entire process, which is a pain. Ticketmaster allows fans to buy a maximum of four Eras tickets, so I'll need to add a # of tickets option.

### Create Event Feature
The target initial customers are more well-known artists like Taylor Swift, which is where the ticket scalpers + bots are. They won't be trying to bot a small event (eg. ETHDenver side event), so World ID is most useful for highly anticipated events like concerts + sporting events.
