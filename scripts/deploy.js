const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log('Deploying contracts with the account: ' + deployer.address); 
    // Deploy DAO
    const Disperse = await ethers.getContractFactory('Disperse');
    const disperse = await Disperse.deploy();
    console.log("dao deployed on ", disperse.address);
}

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
})