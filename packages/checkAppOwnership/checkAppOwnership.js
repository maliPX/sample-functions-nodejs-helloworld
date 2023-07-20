function main(args) {
    let name = args.name || 'stranger'
    let greeting = 'Hello ' + name + '!'
    console.log(greeting)
    return {"body sec": greeting}
}

function steamCheckAppOwnership(steamId, appId) {
    const data = {
      key: this.options.webkey,
      steamid: info.steamId,
      appid: info.appId,
    };

    return this._get<ISteamOwnershipResponse>('ISteamUser', 'CheckAppOwnership', 2, data);
  }

exports.main = main;
