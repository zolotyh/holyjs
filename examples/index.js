async function sleep(ms = 0) {
    console.log('before all');
    await new Promise(r => setTimeout(() => { console.log('after timeout'); r(); }, ms));
    console.log('after all');
}
sleep(1000);
