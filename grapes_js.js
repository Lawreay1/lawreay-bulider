const editor = grapesjs.init({
    container: '#editor',
    height: '600px',
    width: '100%',
    fromElement: true,
    storageManager: { type: 'local' }, // Saves locally
    plugins: ['gjs-blocks-basic'], // Adds default blocks
});
