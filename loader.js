(function() {
    // Injects the app layout directly into the DOM
    const container = document.createElement('div');
    container.style.cssText = "position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:99999;background:#000;";
    
    const iframe = document.createElement('iframe');
    iframe.style.cssText = "width:100%;height:100%;border:none;";
    // Pulls your app or points to the execution bundle
    iframe.srcdoc = `<!DOCTYPE html>
    <html>
    <head><style>body{margin:0;background:#000;color:#fff;font-family:sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;}</style></head>
    <body>
        <div style="text-align:center;">
            <h2>Loading Roblox Wrapper...</h2>
            <p>Initializing CDN assets from repository package.</p>
        </div>
    </body>
    </html>`;
    
    container.appendChild(iframe);
    document.documentElement.appendChild(container);
})();