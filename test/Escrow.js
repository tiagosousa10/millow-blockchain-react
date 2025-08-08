const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Escrow", () => {
  it("saves the addresses", async () => {
    const signers = await ethers.getSigners();
    console.log("🚀 ~ signers:", signers);

    const RealEstate = await ethers.getContractFactory("RealEstate");
    realEstate = await RealEstate.deploy();
    console.log("🚀 ~ realEstate:", realEstate.address);

    //mint
    // let transaction = await realEstate.mint(
    //   "https://ipfs.io/ipfs/QmQUozrHLAusXDxrvsESJ3PYB3rUeUuBAvVWw6nop2uu7c/1.png"
    // );
  });
});
