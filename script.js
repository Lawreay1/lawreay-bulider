const editor = grapesjs.init({
    container: '#editor',
    height: '600px',
    width: '100%',
    fromElement: true,
    storageManager: { type: 'local' }, // Saves changes locally
    plugins: ['gjs-blocks-basic'], // Adds basic content blocks
});
