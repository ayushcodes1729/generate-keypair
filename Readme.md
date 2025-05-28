env
SECRET_KEY="[list of numbers in secret key]"
PUBLIC_KEY="your public key here"

## Connection with main-net or devnet cluster
- Connection(endpoint, commitment='confirmed'): This function connects to the Solana cluster.
## Get Balance
- get_balance(pubkey): This function retrieves the balance of a given public key in lamports.
## Get Pubkey from domain
- A function called getDomainKeySync(domain) provided by library @bonfida/spl-name-service returns us a public key object from a domain.
- - Syntax: const pubkey = new PublicKey(getDomainKeySync(domain).pubkey.toBase58());
