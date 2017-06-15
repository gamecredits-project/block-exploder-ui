export class AppSettings {
	public static devMode = false;
    public static get API_ENDPOINT(): string {
        if (AppSettings.devMode) {
            return 'http://localhost:8080/api/';
        } else {
            return 'http://148.251.15.209/api/';
        }
    }
}
