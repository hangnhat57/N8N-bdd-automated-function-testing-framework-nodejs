exports.multiCapabilities = [
    {
        browserName: "chrome",
        shardTestFiles: false,
        chromeOptions: {
            args: [ "--headless", "--disable-gpu", "--window-size=1920,1080" ]
        },
        metadata: {
            device: "Macbook Pro 2018",
            platform: {
                name: 'osx',
                version: '10.14'
            }
        }
    },
    {
        browserName: "firefox",
        shardTestFiles: false,
        'moz:firefoxOptions': {
            args: [ "--headless" ]
        },
        metadata: {
            device: 'Dell XPS',
            platform: {
                name: 'windows',
                version: '10'
            }
        }
    }
];