// exemple of swap on jup

// Slippage is defined in bps which means 100 is 1% so we gotta multiply by 100
const getAmountOutJupyter = async (tokenA, tokenB, amount, slippage) => {
    const url = `https://quote-api.jup.ag/v6/quote?inputMint=${tokenA}&outputMint=${tokenB}&amount=${Number(amount).toFixed(0)}&slippageBps=${slippage*100}`
    let quote = null
    try {
        quote = await (await fetch(url)).json()
        if (!quote) {
            console.error('unable to quote')
            return null
        }
    } catch (e) {
        console.log('Error getting amount out', e)
        return null
    }
    return quote
}

const swapJupyter = async (privateKey, tokenA, tokenB, amount, slippage) => {
	console.log('starting swap...')
    console.log('swapping:', amount, 'of', tokenA, 'for token:', tokenB, 'with slippage:', slippage)

    let txid = null
    let tokenData = null
    let amountOut = null
	let quote = null

	const wallet = new Wallet(Keypair.fromSecretKey(bs58.decode(privateKey)))
	const connection = new Connection( // The RPC endpoint must be quicknode because chainstack doesn't work
		'<YOUR_RPC_ENDPOINT>'
	)
	
	try {
		quote = await getAmountOutJupyter(tokenA, tokenB, amount, slippage)
		amountOut = quote.outAmount
		if (!amountOut) {
			console.log('quote', quote)
			return {ok: false}
		}
	} catch (e) {
		console.log('Error getting quote', e)
		return {ok: false}
	}
    try {
        // get serialized transaction
        const swapResult = await (
            await fetch('https://quote-api.jup.ag/v6/swap', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    quoteResponse: quote,
                    userPublicKey: wallet.publicKey.toString(),
                    dynamicComputeUnitLimit: true, // allow dynamic compute limit instead of max 1,400,000
                    prioritizationFeeLamports: 'auto', // or custom lamports: 1000
                }),
            })
        ).json()
        // submit transaction
        const swapTransactionBuf = Buffer.from(swapResult.swapTransaction, 'base64')
        var transaction = web3.VersionedTransaction.deserialize(swapTransactionBuf)
        transaction.sign([wallet.payer])
        const rawTransaction = transaction.serialize()
        txid = await connection.sendRawTransaction(rawTransaction, {
            maxRetries: 30,
            skipPreflight: false, // If you set this to true, you can skip the next one.
            preflightCommitment: 'processed',
        })
        console.log(`https://solscan.io/tx/${txid}`)
        await connection.confirmTransaction(txid)
    } catch (e) {
        console.log('Transaction didnt confirm in 60 seconds (it is still valid)')
        // The transaction may fail because it didn't confirm in 1 minute but 99% of the times it works a bit later    
    }

    return {
        txid,
        ok: true,
        solSpent: amount,
        tokensReceived: amountOut,
    }
}