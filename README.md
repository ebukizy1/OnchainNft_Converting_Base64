OnChainNFT
This repository contains the smart contract code for the OnChainNFT project, a simple on-chain NFT (Non-Fungible Token) minting platform developed in Solidity. The NFTs are created using SVG images, and the contract is deployed on the Ethereum blockchain.

Smart Contract Details
Contract Name: OnChainNFT
Symbol: ONC
License: UNLICENSED (For educational purposes only)
OpenSea URL: https://testnets.opensea.io/collection/onchainnft-194
Features
Mint unique NFTs with customizable SVG images.
Token URI generated using Base64-encoded SVG images.
Simple and easy-to-understand contract structure.
Ownership functionality using the Ownable contract from OpenZeppelin.

Details
Contract Deployment
The script uses the Hardhat framework to deploy an NFT contract. The contract is created using the NFT contract factory obtained from the Hardhat ethers library.

Minting
The SVG representation is provided to the contract's mint function, generating a new NFT.

OpenSea Link
The script constructs a link to view the minted NFT on OpenSea by extracting the token ID from the transaction receipt.# OnchainNft_Converting_Base64
