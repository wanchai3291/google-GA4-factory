export class GoogleAnalyticsOptions {
    googleAnalyticsIdentifier: GoogleAnalyticsIdentifier;
    deviceIdentifier: DeviceIdentifier;
    gtag: GTag
}
export class GoogleAnalyticsIdentifier {
    publicKey: string
    privateKey: string
}
export class DeviceIdentifier {
    androidKey: string
    iosKey: string
}
export class GTag{
    key: string
}