import "dotenv/config"
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { getDomainKeySync} from "@bonfida/spl-name-service";
// const keyFromEnv = process.env.PUBLIC_KEY;
// if (!keyFromEnv) {
//     throw new Error("Couldn't fetch public key");   
// }
const domain = "mccann.sol"
const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");
const pubkey = new PublicKey(getDomainKeySync(domain).pubkey.toBase58());
const balanceInLamports = await connection.getBalance(pubkey);
const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;
console.log(`Finished fetching balance in your wallet at address ${pubkey} and balance is ${balanceInSol}`)