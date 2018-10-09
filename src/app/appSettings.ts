// TODO move values to an .env file

export class AppSettings {
  public static devMode = false;

  public static get API_ENDPOINT(): string {
    if (AppSettings.devMode) {
      return 'http://localhost:8080/api/';
    } else {
      return 'https://blockexplorer.gamecredits.org/api/';
    }
  }

  public static get API_DOCS_URL(): string {
    return this.API_ENDPOINT + 'ui/';
  }

  public static get BLOCK_SOCKET_SERVER_URL(): string {
    return 'https://blockexplorer.gamecredits.org/block';
  }

  public static get TX_SOCKET_SERVER_URL(): string {
    return 'https://blockexplorer.gamecredits.org/tx';
  }

  public static get APP_WEBSITE(): string {
    if (AppSettings.devMode) {
      return 'http://localhost:4200';
    } else {
      return 'https://gamecredits.org/';
    }
  }
}
