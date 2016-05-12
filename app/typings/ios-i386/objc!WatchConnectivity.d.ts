
declare const enum WCErrorCode {

	GenericError = 7001,

	SessionNotSupported = 7002,

	SessionMissingDelegate = 7003,

	SessionNotActivated = 7004,

	DeviceNotPaired = 7005,

	WatchAppNotInstalled = 7006,

	NotReachable = 7007,

	InvalidParameter = 7008,

	PayloadTooLarge = 7009,

	PayloadUnsupportedTypes = 7010,

	MessageReplyFailed = 7011,

	MessageReplyTimedOut = 7012,

	FileAccessDenied = 7013,

	DeliveryFailed = 7014,

	InsufficientSpace = 7015
}

declare var WCErrorDomain: string;

declare class WCSession extends NSObject {

	static alloc(): WCSession; // inherited from NSObject

	static defaultSession(): WCSession;

	static isSupported(): boolean;

	static new(): WCSession; // inherited from NSObject

	/* readonly */ applicationContext: NSDictionary<string, any>;

	/* readonly */ complicationEnabled: boolean;

	delegate: WCSessionDelegate;

	/* readonly */ outstandingFileTransfers: NSArray<WCSessionFileTransfer>;

	/* readonly */ outstandingUserInfoTransfers: NSArray<WCSessionUserInfoTransfer>;

	/* readonly */ paired: boolean;

	/* readonly */ reachable: boolean;

	/* readonly */ receivedApplicationContext: NSDictionary<string, any>;

	/* readonly */ watchAppInstalled: boolean;

	/* readonly */ watchDirectoryURL: NSURL;

	constructor(); // inherited from NSObject

	activateSession(): void;

	self(): WCSession; // inherited from NSObjectProtocol

	sendMessageDataReplyHandlerErrorHandler(data: NSData, replyHandler: (p1: NSData) => void, errorHandler: (p1: NSError) => void): void;

	sendMessageReplyHandlerErrorHandler(message: NSDictionary<string, any>, replyHandler: (p1: NSDictionary<string, any>) => void, errorHandler: (p1: NSError) => void): void;

	transferCurrentComplicationUserInfo(userInfo: NSDictionary<string, any>): WCSessionUserInfoTransfer;

	transferFileMetadata(file: NSURL, metadata: NSDictionary<string, any>): WCSessionFileTransfer;

	transferUserInfo(userInfo: NSDictionary<string, any>): WCSessionUserInfoTransfer;

	updateApplicationContextError(applicationContext: NSDictionary<string, any>): boolean;
}

interface WCSessionDelegate extends NSObjectProtocol {

	sessionDidFinishFileTransferError?(session: WCSession, fileTransfer: WCSessionFileTransfer, error: NSError): void;

	sessionDidFinishUserInfoTransferError?(session: WCSession, userInfoTransfer: WCSessionUserInfoTransfer, error: NSError): void;

	sessionDidReceiveApplicationContext?(session: WCSession, applicationContext: NSDictionary<string, any>): void;

	sessionDidReceiveFile?(session: WCSession, file: WCSessionFile): void;

	sessionDidReceiveMessage?(session: WCSession, message: NSDictionary<string, any>): void;

	sessionDidReceiveMessageData?(session: WCSession, messageData: NSData): void;

	sessionDidReceiveMessageDataReplyHandler?(session: WCSession, messageData: NSData, replyHandler: (p1: NSData) => void): void;

	sessionDidReceiveMessageReplyHandler?(session: WCSession, message: NSDictionary<string, any>, replyHandler: (p1: NSDictionary<string, any>) => void): void;

	sessionDidReceiveUserInfo?(session: WCSession, userInfo: NSDictionary<string, any>): void;

	sessionReachabilityDidChange?(session: WCSession): void;

	sessionWatchStateDidChange?(session: WCSession): void;
}
declare var WCSessionDelegate: {

	prototype: WCSessionDelegate;
};

declare class WCSessionFile extends NSObject {

	static alloc(): WCSessionFile; // inherited from NSObject

	static new(): WCSessionFile; // inherited from NSObject

	/* readonly */ fileURL: NSURL;

	/* readonly */ metadata: NSDictionary<string, any>;

	constructor(); // inherited from NSObject

	self(): WCSessionFile; // inherited from NSObjectProtocol
}

declare class WCSessionFileTransfer extends NSObject {

	static alloc(): WCSessionFileTransfer; // inherited from NSObject

	static new(): WCSessionFileTransfer; // inherited from NSObject

	/* readonly */ file: WCSessionFile;

	/* readonly */ transferring: boolean;

	constructor(); // inherited from NSObject

	cancel(): void;

	self(): WCSessionFileTransfer; // inherited from NSObjectProtocol
}

declare class WCSessionUserInfoTransfer extends NSObject implements NSSecureCoding {

	static alloc(): WCSessionUserInfoTransfer; // inherited from NSObject

	static new(): WCSessionUserInfoTransfer; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ currentComplicationInfo: boolean;

	/* readonly */ transferring: boolean;

	/* readonly */ userInfo: NSDictionary<string, any>;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	cancel(): void;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): WCSessionUserInfoTransfer; // inherited from NSObjectProtocol
}
