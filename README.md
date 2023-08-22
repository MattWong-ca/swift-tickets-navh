# 🎤 Swift Tickets
### Live demo: https://swift-tickets-navh.vercel.app
### YouTube video: https://youtu.be/GCiS5LiToCU

<img width="1440" alt="Swift Tickets NAVH Cover" src="https://github.com/MattWong-ca/swift-tickets-navh/assets/66754344/3e5282f1-e8d1-4373-a491-e1238de48d74">

# 📝 About
Swift Tickets is an NFT ticketing platform that disrupts the $78B Event Tickets market, leveraging Worldcoin's World ID to prevent bots from buying tickets of artists like Taylor Swift. We're on a mission to provide fans with a fair chance to buy tickets to their favourite concerts, sporting events, and more. We provide a fair chance at tickets, the option to buy in crypto, and *transparency* in the ticketing process.

### 🤖 "It's Me, Hi, I'm The Problem, It's Me"
You've likely heard of Ticketmaster’s inability to handle bots, especially in November '22 when fans waited HOURS (just to get nothing), or most recently in August '23, when their Eras Tour Verified Fan program was basically a lottery ticket—thousands of fans were waitlisted.

The Events Tickets market is a huge opportunity. According to Statista:
> _"Revenue in the Event Tickets market is projected to reach $78B USD in 2023, [...] and an expected 760M users by 2027"_

Ticketmaster is a monopoly owning 70% of the market, but their Verified Fan just **doesn't work**.

### 😭 Cruel Summer
Canadian fans are [frustrated](https://ca.style.yahoo.com/canadian-taylor-swift-fans-toronto-shows-waitlist-142720549.html) that they're all on the waitlist for Swift's Eras Tour in Toronto (November 2024). There was only a 1 in 400 chance of getting a ticket ([source](https://www.theglobeandmail.com/canada/article-taylor-swift-canada-tickets-codes-percentage/)), so it's actually easier to get into Harvard than to get a Eras ticket :P

### 👁️ You're The Only One Of You
With Swift Tickets' use of World ID, only **real** humans can buy tickets! This prevents bots from accessing the checkout. In the future, I'll implement different verification levels based on orb / phone verification, which can differentiate fans' chances of getting in depending on how much we're able to prove they're human.

# 🛠 Consensys Products
### MetaMask
Implemented connect wallet button using the MetaMask SDK, enabling users to login with mobile wallets and also see their address in the navbar.

Link to code in `navbar.tsx`: [MetaMask SDK usage](https://github.com/MattWong-ca/swift-tickets-navh/blob/e1a8ec85c36fc03921816fffb23112e299fa5a32/frontend/src/components/navbar.tsx#L22)

### Infura
Used Infura RPC endpoints for deploying on Linea and Goerli (also deployed on Base), levaraging the lower tranasaction fees and faster confirmation times of the L2s so that users don't have to wait on the loading screen too long for tickets (better UX).

Links to code in `truffle-config.js`: [Linea endpoint](https://github.com/MattWong-ca/swift-tickets-navh/blob/e1a8ec85c36fc03921816fffb23112e299fa5a32/blockchain/truffle-config.js#L82) and [Goerli endpoint](https://github.com/MattWong-ca/swift-tickets-navh/blob/e1a8ec85c36fc03921816fffb23112e299fa5a32/blockchain/truffle-config.js#L73)

### Linea + Truffle
Deployed on Linea using Truffle. The `blockchain` folder is a Truffle project.

Deployed Linea contract (verified): 0x2A6123eEDea57303d2034f60A62C0C1529f06752
- [Blockscout](https://explorer.goerli.linea.build/address/0x2A6123eEDea57303d2034f60A62C0C1529f06752)
- [Goerli Linea Scan](https://goerli.lineascan.build/address/0x2a6123eedea57303d2034f60a62c0c1529f06752)

Link to code in `truffle-config.js`: [Linea network](https://github.com/MattWong-ca/swift-tickets-navh/blob/e1a8ec85c36fc03921816fffb23112e299fa5a32/blockchain/truffle-config.js#L78)

### thirdweb (Partner Tech)
In `profile.tsx`, I used `ThirdwebNftMedia` from the React SDK to display the user's NFT ticket. The metadata that conains the image is stored on IPFS through Pinata. The `ThirdwebProvider` is wrapped around the dapp to enable this.

Link to code in `profile.tsx`: [ThirdwebNftMedia](https://github.com/MattWong-ca/swift-tickets-navh/blob/e1a8ec85c36fc03921816fffb23112e299fa5a32/frontend/src/pages/profile.tsx#L89)

# 🏃 Run It Locally
Check out: https://swift-tickets-navh.vercel.app

OR

1. `git clone https://github.com/MattWong-ca/swift-tickets-navh.git`
2. `cd frontend`
3. `npm install`
4. `npm run dev`
5. View on `localhost:3000`!

# 🏗️ How it's Made
Non-Consensys Tech Stack
- Worldcoin's World ID for bot prevention
- Supabase for World ID web backend verification
- NFT metadata stored on IPFS through Pinata

### Checkout with World ID
The key value prop of this platform is using World ID to prevent bots. The UI/UX is similar to a reCAPTCHA, with users clicking on the `I'm Human` button to verify with Worldcoin. Once verified, a `useEffect` will automatically check if the user is verified in the Supabase database and show a green approval. If not verified, the `Purchase NFT Ticket` button won't work!

**Note**: since users can game the frontend, the web verification can't be just done on the frontend, which is why Supabase is used. In `verify.ts`, the `if (verifyRes.status == 200)` block contains the lines where the user's address + a `isWorldcoinVerified` boolean is sent to Supabase. In the frontend, when determining whether to show a `I'm Human` or `Verified` button, Supabase is called to determine if the user is verified.

### Overall Dapp
- Next.js app frontend built with TypeScript and HTML/CSS, with a `verify.ts` API route for World ID verification.
- Truffle project for deploying Solidity smart contracts.

### Deployed Contracts
- Linea: 0x2A6123eEDea57303d2034f60A62C0C1529f06752
- Goerli: 0x230e5C67CC8ADb19039b174FD0D288a7d2F417a3
- Base: 0xBA3EB1470575ED8B82aa9f8f89Da260d1feC1042

Note: All images used in Swift Tickets were either from royalty-free sources or from partner companies themselves (eg. logos).

# 🚀 Future Plans
### Account Abstraction
Implement account abstraction login flow to make onboarding seamless for users without a wallet. 

### Points System
Award points if ticket buyers are the same people attending the event (eg. they're not ticket scalpers).

### QR Code Ticket
Usually QR codes are sent by email, so I'll want to email a QR code when they users purchase the NFT ticket (for actually getting into the event).

### Option To Use USDC Or Fiat
If users don't want to pay with ETH, they should be able to buy tickets with USDC (or other stablecoins) and fiat.

### Option To Buy More Than 1 Ticket
There's currently no option to buy more than 1 ticket unless you redo the entire process, which is a pain. Ticketmaster allows fans to buy a maximum of four Eras tickets, so I'll need to add a # of tickets option.
