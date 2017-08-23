export class AppSettings {
	public static devMode = false;
    public static get API_ENDPOINT(): string {
        if (AppSettings.devMode) {
            return 'http://localhost:8080/api/';
        } else {
            return 'https://blockexplorer.gamecredits.com/api/';
        }
    }

	public static get BLOCK_SOCKET_SERVER_URL(): string {
		return 'wss://localhost:5004/block';
	}

	public static get TX_SOCKET_SERVER_URL(): string {
		return 'wss://localhost:5004/tx';
	}
}
