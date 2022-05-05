const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log('Deploying contracts with the account: ' + deployer.address); 
    
    const token_address = '0x8C926B38d9B8c473aFAB4FABB3A8A06a0141D1c9';
    const disperse_address = '0xD0fBB96DC23769E3cf44B4b06F34fB1315FA5520';

    const amount = '10000';
    const recipient = '0x70beD91e9B6Fc4615B419c66AA2760B734F873FE';
    let recipients = [];
    let values = [];

    for (let index = 0; index < 800; index++) {
        recipients.push(recipient);
        values.push(amount);
    }
    console.log(recipients.length);
    // Deploy DAO
    const Disperse = await ethers.getContractFactory('Disperse');
    const disperse = await Disperse.attach(disperse_address);

    let tx =await disperse.disperseToken(token_address, recipients, values);

    console.log(tx.hash);

}

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
})