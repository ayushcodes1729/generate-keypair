import "dotenv/config"
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const keyFromEnv = process.env.PUBLIC_KEY || "";
const pubkey = new PublicKey(keyFromEnv);
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const balanceInLamports = await connection.getBalance(pubkey);
const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;
console.log(`Finished fetching balance in your wallet at address ${pubkey} and balance is ${balanceInSol}`)