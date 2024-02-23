import { ethers } from "hardhat";
const hre = require("hardhat");

async function main() {

  const NFTContractFactory = await hre.ethers.getContractFactory('NFT');

  // await NFTContractFactory.waitForDeployment();

  const NFTContract = await NFTContractFactory.deploy();



  console.log('✅ Contract deployed to:', NFTContract.target);

    const svg = `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
    <title>Drawing</title>
    <defs>
     <filter height="200%" width="200%" y="-50%" x="-50%" id="svg_5_blur">
      <feGaussianBlur stdDeviation="9.1" in="SourceGraphic"/>
     </filter>
    </defs>
    <g>
     <title>Layer 1</title>
     <rect transform="rotate(25 400 281)" stroke-dasharray="5,2,2,2" filter="url(#svg_5_blur)" id="svg_5" height="226" width="454" y="168" x="173" stroke="#000" fill="#11d6d6"/>
     <text transform="matrix(1.40571 0 0 3.5995 -233.375 -597.275)" stroke="#000" xml:space="preserve" text-anchor="start" font-family="Noto Sans JP" font-size="24" id="svg_6" y="251" x="349" stroke-width="0" fill="#d11717">EMAX ELECTRICAL</text>
    </g>
   </svg>`;


     // Call the mint function from our contract
  const txn = await NFTContract.mint(svg);
  const txnReceipt = await txn.wait();

  // Get the token id of the minted NFT (using our event)
  const event = txnReceipt.events?.find((event :any) => event.event === 'Minted');
  const tokenId = event?.args['tokenId'];

  console.log(
    '🎨 Your minted NFT:',
    `https://testnets.opensea.io/assets/${NFTContract.target}/${tokenId}`
  );

}

// ✅ Contract deployed to: 0x33fEE46438252fE4b214E6EE7fBfb56e52629260
// 🎨 Your minted NFT: https://testnets.opensea.io/assets/0x33fEE46438252fE4b214E6EE7fBfb56e52629260/undefined

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
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