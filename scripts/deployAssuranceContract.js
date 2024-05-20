

const hre = require("hardhat");

async function main() {
 
  

  const contractAssurance = await hre.ethers.deployContract("contractAssurance");

  await contractAssurance.waitForDeployment();

  console.log(`deployed to ${contractAssurance.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
