const options = {
    webkey: constants.webkey,
    url: 'https://partner.steam-api.com/',
    version: 1,
  };

function main(args) {
    let name = args.name || 'stranger'
    let greeting = 'Hello ' + name + '!'
    console.log(greeting)
    return {"body sec": greeting}
}

async function steamCheckAppOwnership(steamId, appId) {
    const data = {
      key: this.options.webkey,
      steamid: steamId,
      appid: appId,
    };

    var res = await this._get<ISteamOwnershipResponse>('ISteamUser', 'CheckAppOwnership', 2, data);
  }

exports.main = main;
