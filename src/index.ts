import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log(`The public key: ${keypair.publicKey.toBase58()}`)
console.log(`The secret key: ${keypair.secretKey}`)
console.log("Generated key pair");