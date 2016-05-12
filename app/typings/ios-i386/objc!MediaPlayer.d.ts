
declare class MPChangeLanguageOptionCommandEvent extends MPRemoteCommandEvent {

	/* readonly */ languageOption: MPNowPlayingInfoLanguageOption;
}

declare class MPChangePlaybackPositionCommand extends MPRemoteCommand {
}

declare class MPChangePlaybackPositionCommandEvent extends MPRemoteCommandEvent {

	/* readonly */ positionTime: number;
}

declare class MPChangePlaybackRateCommand extends MPRemoteCommand {

	supportedPlaybackRates: NSArray<number>;
}

declare class MPChangePlaybackRateCommandEvent extends MPRemoteCommandEvent {

	/* readonly */ playbackRate: number;
}

declare class MPContentItem extends NSObject {

	static alloc(): MPContentItem; // inherited from NSObject

	static new(): MPContentItem; // inherited from NSObject

	artwork: MPMediaItemArtwork;

	container: boolean;

	/* readonly */ identifier: string;

	playable: boolean;

	playbackProgress: number;

	subtitle: string;

	title: string;

	constructor(); // inherited from NSObject

	constructor(o: { identifier: string; });

	self(): MPContentItem; // inherited from NSObjectProtocol
}

declare class MPFeedbackCommand extends MPRemoteCommand {

	active: boolean;

	localizedShortTitle: string;

	localizedTitle: string;
}

declare class MPFeedbackCommandEvent extends MPRemoteCommandEvent {

	/* readonly */ negative: boolean;
}

declare var MPLanguageOptionCharacteristicContainsOnlyForcedSubtitles: string;

declare var MPLanguageOptionCharacteristicDescribesMusicAndSound: string;

declare var MPLanguageOptionCharacteristicDescribesVideo: string;

declare var MPLanguageOptionCharacteristicDubbedTranslation: string;

declare var MPLanguageOptionCharacteristicEasyToRead: string;

declare var MPLanguageOptionCharacteristicIsAuxiliaryContent: string;

declare var MPLanguageOptionCharacteristicIsMainProgramContent: string;

declare var MPLanguageOptionCharacteristicLanguageTranslation: string;

declare var MPLanguageOptionCharacteristicTranscribesSpokenDialog: string;

declare var MPLanguageOptionCharacteristicVoiceOverTranslation: string;

declare class MPMediaEntity extends NSObject implements NSSecureCoding {

	static alloc(): MPMediaEntity; // inherited from NSObject

	static canFilterByProperty(property: string): boolean;

	static new(): MPMediaEntity; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ persistentID: number;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	enumerateValuesForPropertiesUsingBlock(properties: NSSet<string>, block: (p1: string, p2: any, p3: interop.Reference<boolean>) => void): void;

	objectForKeyedSubscript(key: any): any;

	self(): MPMediaEntity; // inherited from NSObjectProtocol

	valueForProperty(property: string): any;
}

declare var MPMediaEntityPropertyPersistentID: string;

declare const enum MPMediaGrouping {

	Title = 0,

	Album = 1,

	Artist = 2,

	AlbumArtist = 3,

	Composer = 4,

	Genre = 5,

	Playlist = 6,

	PodcastTitle = 7
}

declare class MPMediaItem extends MPMediaEntity {

	static persistentIDPropertyForGroupingType(groupingType: MPMediaGrouping): string;

	static titlePropertyForGroupingType(groupingType: MPMediaGrouping): string;

	/* readonly */ albumArtist: string;

	/* readonly */ albumArtistPersistentID: number;

	/* readonly */ albumPersistentID: number;

	/* readonly */ albumTitle: string;

	/* readonly */ albumTrackCount: number;

	/* readonly */ albumTrackNumber: number;

	/* readonly */ artist: string;

	/* readonly */ artistPersistentID: number;

	/* readonly */ artwork: MPMediaItemArtwork;

	/* readonly */ assetURL: NSURL;

	/* readonly */ beatsPerMinute: number;

	/* readonly */ bookmarkTime: number;

	/* readonly */ cloudItem: boolean;

	/* readonly */ comments: string;

	/* readonly */ compilation: boolean;

	/* readonly */ composer: string;

	/* readonly */ composerPersistentID: number;

	/* readonly */ discCount: number;

	/* readonly */ discNumber: number;

	/* readonly */ genre: string;

	/* readonly */ genrePersistentID: number;

	/* readonly */ lastPlayedDate: Date;

	/* readonly */ lyrics: string;

	/* readonly */ mediaType: MPMediaType;

	/* readonly */ playCount: number;

	/* readonly */ playbackDuration: number;

	/* readonly */ podcastPersistentID: number;

	/* readonly */ podcastTitle: string;

	/* readonly */ protectedAsset: boolean;

	/* readonly */ rating: number;

	/* readonly */ releaseDate: Date;

	/* readonly */ skipCount: number;

	/* readonly */ title: string;

	/* readonly */ userGrouping: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding
}

declare class MPMediaItemArtwork extends NSObject {

	static alloc(): MPMediaItemArtwork; // inherited from NSObject

	static new(): MPMediaItemArtwork; // inherited from NSObject

	/* readonly */ bounds: CGRect;

	/* readonly */ imageCropRect: CGRect;

	constructor(); // inherited from NSObject

	constructor(o: { image: UIImage; });

	imageWithSize(size: CGSize): UIImage;

	self(): MPMediaItemArtwork; // inherited from NSObjectProtocol
}

declare class MPMediaItemCollection extends MPMediaEntity {

	static collectionWithItems(items: NSArray<MPMediaItem>): MPMediaItemCollection;

	/* readonly */ count: number;

	/* readonly */ items: NSArray<MPMediaItem>;

	/* readonly */ mediaTypes: MPMediaType;

	/* readonly */ representativeItem: MPMediaItem;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { items: NSArray<MPMediaItem>; });
}

declare var MPMediaItemPropertyAlbumArtist: string;

declare var MPMediaItemPropertyAlbumArtistPersistentID: string;

declare var MPMediaItemPropertyAlbumPersistentID: string;

declare var MPMediaItemPropertyAlbumTitle: string;

declare var MPMediaItemPropertyAlbumTrackCount: string;

declare var MPMediaItemPropertyAlbumTrackNumber: string;

declare var MPMediaItemPropertyArtist: string;

declare var MPMediaItemPropertyArtistPersistentID: string;

declare var MPMediaItemPropertyArtwork: string;

declare var MPMediaItemPropertyAssetURL: string;

declare var MPMediaItemPropertyBeatsPerMinute: string;

declare var MPMediaItemPropertyBookmarkTime: string;

declare var MPMediaItemPropertyComments: string;

declare var MPMediaItemPropertyComposer: string;

declare var MPMediaItemPropertyComposerPersistentID: string;

declare var MPMediaItemPropertyDiscCount: string;

declare var MPMediaItemPropertyDiscNumber: string;

declare var MPMediaItemPropertyGenre: string;

declare var MPMediaItemPropertyGenrePersistentID: string;

declare var MPMediaItemPropertyHasProtectedAsset: string;

declare var MPMediaItemPropertyIsCloudItem: string;

declare var MPMediaItemPropertyIsCompilation: string;

declare var MPMediaItemPropertyLastPlayedDate: string;

declare var MPMediaItemPropertyLyrics: string;

declare var MPMediaItemPropertyMediaType: string;

declare var MPMediaItemPropertyPersistentID: string;

declare var MPMediaItemPropertyPlayCount: string;

declare var MPMediaItemPropertyPlaybackDuration: string;

declare var MPMediaItemPropertyPodcastPersistentID: string;

declare var MPMediaItemPropertyPodcastTitle: string;

declare var MPMediaItemPropertyRating: string;

declare var MPMediaItemPropertyReleaseDate: string;

declare var MPMediaItemPropertySkipCount: string;

declare var MPMediaItemPropertyTitle: string;

declare var MPMediaItemPropertyUserGrouping: string;

declare class MPMediaLibrary extends NSObject implements NSSecureCoding {

	static alloc(): MPMediaLibrary; // inherited from NSObject

	static defaultMediaLibrary(): MPMediaLibrary;

	static new(): MPMediaLibrary; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ lastModifiedDate: Date;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	beginGeneratingLibraryChangeNotifications(): void;

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	endGeneratingLibraryChangeNotifications(): void;

	self(): MPMediaLibrary; // inherited from NSObjectProtocol
}

declare var MPMediaLibraryDidChangeNotification: string;

declare class MPMediaPickerController extends UIViewController {

	allowsPickingMultipleItems: boolean;

	delegate: MPMediaPickerControllerDelegate;

	/* readonly */ mediaTypes: MPMediaType;

	prompt: string;

	showsCloudItems: boolean;

	showsItemsWithProtectedAssets: boolean;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { mediaTypes: MPMediaType; });

	constructor(o: { nibName: string; bundle: NSBundle; }); // inherited from UIViewController

	self(): MPMediaPickerController; // inherited from NSObjectProtocol
}

interface MPMediaPickerControllerDelegate extends NSObjectProtocol {

	mediaPickerDidCancel?(mediaPicker: MPMediaPickerController): void;

	mediaPickerDidPickMediaItems?(mediaPicker: MPMediaPickerController, mediaItemCollection: MPMediaItemCollection): void;
}
declare var MPMediaPickerControllerDelegate: {

	prototype: MPMediaPickerControllerDelegate;
};

interface MPMediaPlayback {

	currentPlaybackRate: number;

	currentPlaybackTime: number;

	isPreparedToPlay: boolean;

	beginSeekingBackward(): void;

	beginSeekingForward(): void;

	endSeeking(): void;

	pause(): void;

	play(): void;

	prepareToPlay(): void;

	stop(): void;
}
declare var MPMediaPlayback: {

	prototype: MPMediaPlayback;
};

declare var MPMediaPlaybackIsPreparedToPlayDidChangeNotification: string;

declare class MPMediaPlaylist extends MPMediaItemCollection {

	/* readonly */ name: string;

	/* readonly */ playlistAttributes: MPMediaPlaylistAttribute;

	/* readonly */ seedItems: NSArray<MPMediaItem>;

	constructor(o: { items: NSArray<MPMediaItem>; }); // inherited from MPMediaItemCollection
}

declare const enum MPMediaPlaylistAttribute {

	None = 0,

	OnTheGo = 1,

	Smart = 2,

	Genius = 4
}

declare var MPMediaPlaylistPropertyName: string;

declare var MPMediaPlaylistPropertyPersistentID: string;

declare var MPMediaPlaylistPropertyPlaylistAttributes: string;

declare var MPMediaPlaylistPropertySeedItems: string;

declare class MPMediaPredicate extends NSObject implements NSSecureCoding {

	static alloc(): MPMediaPredicate; // inherited from NSObject

	static new(): MPMediaPredicate; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): MPMediaPredicate; // inherited from NSObjectProtocol
}

declare const enum MPMediaPredicateComparison {

	EqualTo = 0,

	Contains = 1
}

declare class MPMediaPropertyPredicate extends MPMediaPredicate {

	static predicateWithValueForProperty(value: any, property: string): MPMediaPropertyPredicate;

	static predicateWithValueForPropertyComparisonType(value: any, property: string, comparisonType: MPMediaPredicateComparison): MPMediaPropertyPredicate;

	/* readonly */ comparisonType: MPMediaPredicateComparison;

	/* readonly */ property: string;

	/* readonly */ value: any;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding
}

declare class MPMediaQuery extends NSObject implements NSCopying, NSSecureCoding {

	static albumsQuery(): MPMediaQuery;

	static alloc(): MPMediaQuery; // inherited from NSObject

	static artistsQuery(): MPMediaQuery;

	static audiobooksQuery(): MPMediaQuery;

	static compilationsQuery(): MPMediaQuery;

	static composersQuery(): MPMediaQuery;

	static genresQuery(): MPMediaQuery;

	static new(): MPMediaQuery; // inherited from NSObject

	static playlistsQuery(): MPMediaQuery;

	static podcastsQuery(): MPMediaQuery;

	static songsQuery(): MPMediaQuery;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ collectionSections: NSArray<MPMediaQuerySection>;

	/* readonly */ collections: NSArray<MPMediaItemCollection>;

	filterPredicates: NSSet<MPMediaPredicate>;

	groupingType: MPMediaGrouping;

	/* readonly */ itemSections: NSArray<MPMediaQuerySection>;

	/* readonly */ items: NSArray<MPMediaItem>;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { filterPredicates: NSSet<MPMediaPredicate>; });

	addFilterPredicate(predicate: MPMediaPredicate): void;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	removeFilterPredicate(predicate: MPMediaPredicate): void;

	self(): MPMediaQuery; // inherited from NSObjectProtocol
}

declare class MPMediaQuerySection extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): MPMediaQuerySection; // inherited from NSObject

	static new(): MPMediaQuerySection; // inherited from NSObject

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	/* readonly */ range: NSRange;

	/* readonly */ title: string;

	constructor(); // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	encodeWithCoder(aCoder: NSCoder): void; // inherited from NSCoding

	self(): MPMediaQuerySection; // inherited from NSObjectProtocol
}

declare const enum MPMediaType {

	Music = 1,

	Podcast = 2,

	AudioBook = 4,

	AudioITunesU = 8,

	AnyAudio = 255,

	Movie = 256,

	TVShow = 512,

	VideoPodcast = 1024,

	MusicVideo = 2048,

	VideoITunesU = 4096,

	HomeVideo = 8192,

	AnyVideo = 65280,

	Any = 4294967295
}

declare class MPMovieAccessLog extends NSObject implements NSCopying {

	static alloc(): MPMovieAccessLog; // inherited from NSObject

	static new(): MPMovieAccessLog; // inherited from NSObject

	/* readonly */ events: NSArray<any>;

	/* readonly */ extendedLogData: NSData;

	/* readonly */ extendedLogDataStringEncoding: number;

	constructor(); // inherited from NSObject

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	self(): MPMovieAccessLog; // inherited from NSObjectProtocol
}

declare class MPMovieAccessLogEvent extends NSObject implements NSCopying {

	static alloc(): MPMovieAccessLogEvent; // inherited from NSObject

	static new(): MPMovieAccessLogEvent; // inherited from NSObject

	/* readonly */ URI: string;

	/* readonly */ durationWatched: number;

	/* readonly */ indicatedBitrate: number;

	/* readonly */ numberOfBytesTransferred: number;

	/* readonly */ numberOfDroppedVideoFrames: number;

	/* readonly */ numberOfSegmentsDownloaded: number;

	/* readonly */ numberOfServerAddressChanges: number;

	/* readonly */ numberOfStalls: number;

	/* readonly */ observedBitrate: number;

	/* readonly */ playbackSessionID: string;

	/* readonly */ playbackStartDate: Date;

	/* readonly */ playbackStartOffset: number;

	/* readonly */ segmentsDownloadedDuration: number;

	/* readonly */ serverAddress: string;

	constructor(); // inherited from NSObject

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	self(): MPMovieAccessLogEvent; // inherited from NSObjectProtocol
}

declare const enum MPMovieControlStyle {

	None = 0,

	Embedded = 1,

	Fullscreen = 2,

	Default = 1
}

declare var MPMovieDurationAvailableNotification: string;

declare class MPMovieErrorLog extends NSObject implements NSCopying {

	static alloc(): MPMovieErrorLog; // inherited from NSObject

	static new(): MPMovieErrorLog; // inherited from NSObject

	/* readonly */ events: NSArray<any>;

	/* readonly */ extendedLogData: NSData;

	/* readonly */ extendedLogDataStringEncoding: number;

	constructor(); // inherited from NSObject

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	self(): MPMovieErrorLog; // inherited from NSObjectProtocol
}

declare class MPMovieErrorLogEvent extends NSObject implements NSCopying {

	static alloc(): MPMovieErrorLogEvent; // inherited from NSObject

	static new(): MPMovieErrorLogEvent; // inherited from NSObject

	/* readonly */ URI: string;

	/* readonly */ date: Date;

	/* readonly */ errorComment: string;

	/* readonly */ errorDomain: string;

	/* readonly */ errorStatusCode: number;

	/* readonly */ playbackSessionID: string;

	/* readonly */ serverAddress: string;

	constructor(); // inherited from NSObject

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	self(): MPMovieErrorLogEvent; // inherited from NSObjectProtocol
}

declare const enum MPMovieFinishReason {

	PlaybackEnded = 0,

	PlaybackError = 1,

	UserExited = 2
}

declare const enum MPMovieLoadState {

	Unknown = 0,

	Playable = 1,

	PlaythroughOK = 2,

	Stalled = 4
}

declare const enum MPMovieMediaTypeMask {

	None = 0,

	Video = 1,

	Audio = 2
}

declare var MPMovieMediaTypesAvailableNotification: string;

declare var MPMovieNaturalSizeAvailableNotification: string;

declare const enum MPMoviePlaybackState {

	Stopped = 0,

	Playing = 1,

	Paused = 2,

	Interrupted = 3,

	SeekingForward = 4,

	SeekingBackward = 5
}

declare class MPMoviePlayerController extends NSObject implements MPMediaPlayback {

	static alloc(): MPMoviePlayerController; // inherited from NSObject

	static new(): MPMoviePlayerController; // inherited from NSObject

	static preparePrerollAds(): void;

	/* readonly */ accessLog: MPMovieAccessLog;

	/* readonly */ airPlayVideoActive: boolean;

	allowsAirPlay: boolean;

	/* readonly */ backgroundView: UIView;

	contentURL: NSURL;

	controlStyle: MPMovieControlStyle;

	/* readonly */ duration: number;

	endPlaybackTime: number;

	/* readonly */ errorLog: MPMovieErrorLog;

	fullscreen: boolean;

	initialPlaybackTime: number;

	/* readonly */ loadState: MPMovieLoadState;

	/* readonly */ movieMediaTypes: MPMovieMediaTypeMask;

	movieSourceType: MPMovieSourceType;

	/* readonly */ naturalSize: CGSize;

	/* readonly */ playableDuration: number;

	/* readonly */ playbackState: MPMoviePlaybackState;

	/* readonly */ readyForDisplay: boolean;

	repeatMode: MPMovieRepeatMode;

	scalingMode: MPMovieScalingMode;

	shouldAutoplay: boolean;

	/* readonly */ timedMetadata: NSArray<any>;

	useApplicationAudioSession: boolean;

	/* readonly */ view: UIView;

	currentPlaybackRate: number; // inherited from MPMediaPlayback

	currentPlaybackTime: number; // inherited from MPMediaPlayback

	/* readonly */ isPreparedToPlay: boolean; // inherited from MPMediaPlayback

	constructor(); // inherited from NSObject

	constructor(o: { contentURL: NSURL; });

	beginSeekingBackward(): void; // inherited from MPMediaPlayback

	beginSeekingForward(): void; // inherited from MPMediaPlayback

	cancelAllThumbnailImageRequests(): void;

	cancelPreroll(): void;

	endSeeking(): void; // inherited from MPMediaPlayback

	pause(): void; // inherited from MPMediaPlayback

	play(): void; // inherited from MPMediaPlayback

	playPrerollAdWithCompletionHandler(completionHandler: (p1: NSError) => void): void;

	prepareToPlay(): void; // inherited from MPMediaPlayback

	requestThumbnailImagesAtTimesTimeOption(playbackTimes: NSArray<any>, option: MPMovieTimeOption): void;

	self(): MPMoviePlayerController; // inherited from NSObjectProtocol

	setFullscreenAnimated(fullscreen: boolean, animated: boolean): void;

	stop(): void; // inherited from MPMediaPlayback

	thumbnailImageAtTimeTimeOption(playbackTime: number, option: MPMovieTimeOption): UIImage;
}

declare var MPMoviePlayerDidEnterFullscreenNotification: string;

declare var MPMoviePlayerDidExitFullscreenNotification: string;

declare var MPMoviePlayerFullscreenAnimationCurveUserInfoKey: string;

declare var MPMoviePlayerFullscreenAnimationDurationUserInfoKey: string;

declare var MPMoviePlayerIsAirPlayVideoActiveDidChangeNotification: string;

declare var MPMoviePlayerLoadStateDidChangeNotification: string;

declare var MPMoviePlayerNowPlayingMovieDidChangeNotification: string;

declare var MPMoviePlayerPlaybackDidFinishNotification: string;

declare var MPMoviePlayerPlaybackDidFinishReasonUserInfoKey: string;

declare var MPMoviePlayerPlaybackStateDidChangeNotification: string;

declare var MPMoviePlayerReadyForDisplayDidChangeNotification: string;

declare var MPMoviePlayerScalingModeDidChangeNotification: string;

declare var MPMoviePlayerThumbnailErrorKey: string;

declare var MPMoviePlayerThumbnailImageKey: string;

declare var MPMoviePlayerThumbnailImageRequestDidFinishNotification: string;

declare var MPMoviePlayerThumbnailTimeKey: string;

declare var MPMoviePlayerTimedMetadataKeyDataType: string;

declare var MPMoviePlayerTimedMetadataKeyInfo: string;

declare var MPMoviePlayerTimedMetadataKeyLanguageCode: string;

declare var MPMoviePlayerTimedMetadataKeyMIMEType: string;

declare var MPMoviePlayerTimedMetadataKeyName: string;

declare var MPMoviePlayerTimedMetadataUpdatedNotification: string;

declare var MPMoviePlayerTimedMetadataUserInfoKey: string;

declare class MPMoviePlayerViewController extends UIViewController {

	/* readonly */ moviePlayer: MPMoviePlayerController;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { contentURL: NSURL; });

	constructor(o: { nibName: string; bundle: NSBundle; }); // inherited from UIViewController

	self(): MPMoviePlayerViewController; // inherited from NSObjectProtocol
}

declare var MPMoviePlayerWillEnterFullscreenNotification: string;

declare var MPMoviePlayerWillExitFullscreenNotification: string;

declare const enum MPMovieRepeatMode {

	None = 0,

	One = 1
}

declare const enum MPMovieScalingMode {

	None = 0,

	AspectFit = 1,

	AspectFill = 2,

	Fill = 3
}

declare const enum MPMovieSourceType {

	Unknown = 0,

	File = 1,

	Streaming = 2
}

declare var MPMovieSourceTypeAvailableNotification: string;

declare const enum MPMovieTimeOption {

	NearestKeyFrame = 0,

	Exact = 1
}

declare const enum MPMusicPlaybackState {

	Stopped = 0,

	Playing = 1,

	Paused = 2,

	Interrupted = 3,

	SeekingForward = 4,

	SeekingBackward = 5
}

declare class MPMusicPlayerController extends NSObject implements MPMediaPlayback {

	static alloc(): MPMusicPlayerController; // inherited from NSObject

	static applicationMusicPlayer(): MPMusicPlayerController;

	static iPodMusicPlayer(): MPMusicPlayerController;

	static new(): MPMusicPlayerController; // inherited from NSObject

	static systemMusicPlayer(): MPMusicPlayerController;

	/* readonly */ indexOfNowPlayingItem: number;

	nowPlayingItem: MPMediaItem;

	/* readonly */ playbackState: MPMusicPlaybackState;

	repeatMode: MPMusicRepeatMode;

	shuffleMode: MPMusicShuffleMode;

	volume: number;

	currentPlaybackRate: number; // inherited from MPMediaPlayback

	currentPlaybackTime: number; // inherited from MPMediaPlayback

	/* readonly */ isPreparedToPlay: boolean; // inherited from MPMediaPlayback

	constructor(); // inherited from NSObject

	beginGeneratingPlaybackNotifications(): void;

	beginSeekingBackward(): void; // inherited from MPMediaPlayback

	beginSeekingForward(): void; // inherited from MPMediaPlayback

	endGeneratingPlaybackNotifications(): void;

	endSeeking(): void; // inherited from MPMediaPlayback

	pause(): void; // inherited from MPMediaPlayback

	play(): void; // inherited from MPMediaPlayback

	prepareToPlay(): void; // inherited from MPMediaPlayback

	self(): MPMusicPlayerController; // inherited from NSObjectProtocol

	setQueueWithItemCollection(itemCollection: MPMediaItemCollection): void;

	setQueueWithQuery(query: MPMediaQuery): void;

	skipToBeginning(): void;

	skipToNextItem(): void;

	skipToPreviousItem(): void;

	stop(): void; // inherited from MPMediaPlayback
}

declare var MPMusicPlayerControllerNowPlayingItemDidChangeNotification: string;

declare var MPMusicPlayerControllerPlaybackStateDidChangeNotification: string;

declare var MPMusicPlayerControllerVolumeDidChangeNotification: string;

declare const enum MPMusicRepeatMode {

	Default = 0,

	None = 1,

	One = 2,

	All = 3
}

declare const enum MPMusicShuffleMode {

	Default = 0,

	Off = 1,

	Songs = 2,

	Albums = 3
}

declare class MPNowPlayingInfoCenter extends NSObject {

	static alloc(): MPNowPlayingInfoCenter; // inherited from NSObject

	static defaultCenter(): MPNowPlayingInfoCenter;

	static new(): MPNowPlayingInfoCenter; // inherited from NSObject

	nowPlayingInfo: NSDictionary<string, any>;

	constructor(); // inherited from NSObject

	self(): MPNowPlayingInfoCenter; // inherited from NSObjectProtocol
}

declare class MPNowPlayingInfoLanguageOption extends NSObject {

	static alloc(): MPNowPlayingInfoLanguageOption; // inherited from NSObject

	static new(): MPNowPlayingInfoLanguageOption; // inherited from NSObject

	/* readonly */ displayName: string;

	/* readonly */ identifier: string;

	/* readonly */ languageOptionCharacteristics: NSArray<string>;

	/* readonly */ languageOptionType: MPNowPlayingInfoLanguageOptionType;

	/* readonly */ languageTag: string;

	constructor(); // inherited from NSObject

	constructor(o: { type: MPNowPlayingInfoLanguageOptionType; languageTag: string; characteristics: NSArray<string>; displayName: string; identifier: string; });

	isAutomaticAudibleLanguageOption(): boolean;

	isAutomaticLegibleLanguageOption(): boolean;

	self(): MPNowPlayingInfoLanguageOption; // inherited from NSObjectProtocol
}

declare class MPNowPlayingInfoLanguageOptionGroup extends NSObject {

	static alloc(): MPNowPlayingInfoLanguageOptionGroup; // inherited from NSObject

	static new(): MPNowPlayingInfoLanguageOptionGroup; // inherited from NSObject

	/* readonly */ allowEmptySelection: boolean;

	/* readonly */ defaultLanguageOption: MPNowPlayingInfoLanguageOption;

	/* readonly */ languageOptions: NSArray<MPNowPlayingInfoLanguageOption>;

	constructor(); // inherited from NSObject

	constructor(o: { languageOptions: NSArray<MPNowPlayingInfoLanguageOption>; defaultLanguageOption: MPNowPlayingInfoLanguageOption; allowEmptySelection: boolean; });

	self(): MPNowPlayingInfoLanguageOptionGroup; // inherited from NSObjectProtocol
}

declare const enum MPNowPlayingInfoLanguageOptionType {

	Audible = 0,

	Legible = 1
}

declare var MPNowPlayingInfoPropertyAvailableLanguageOptions: string;

declare var MPNowPlayingInfoPropertyChapterCount: string;

declare var MPNowPlayingInfoPropertyChapterNumber: string;

declare var MPNowPlayingInfoPropertyCurrentLanguageOptions: string;

declare var MPNowPlayingInfoPropertyDefaultPlaybackRate: string;

declare var MPNowPlayingInfoPropertyElapsedPlaybackTime: string;

declare var MPNowPlayingInfoPropertyPlaybackQueueCount: string;

declare var MPNowPlayingInfoPropertyPlaybackQueueIndex: string;

declare var MPNowPlayingInfoPropertyPlaybackRate: string;

interface MPPlayableContentDataSource extends NSObjectProtocol {

	beginLoadingChildItemsAtIndexPathCompletionHandler?(indexPath: NSIndexPath, completionHandler: (p1: NSError) => void): void;

	childItemsDisplayPlaybackProgressAtIndexPath?(indexPath: NSIndexPath): boolean;

	contentItemAtIndexPath(indexPath: NSIndexPath): MPContentItem;

	numberOfChildItemsAtIndexPath(indexPath: NSIndexPath): number;
}
declare var MPPlayableContentDataSource: {

	prototype: MPPlayableContentDataSource;
};

interface MPPlayableContentDelegate extends NSObjectProtocol {

	playableContentManagerDidUpdateContext?(contentManager: MPPlayableContentManager, context: MPPlayableContentManagerContext): void;

	playableContentManagerInitializePlaybackQueueWithCompletionHandler?(contentManager: MPPlayableContentManager, completionHandler: (p1: NSError) => void): void;

	playableContentManagerInitiatePlaybackOfContentItemAtIndexPathCompletionHandler?(contentManager: MPPlayableContentManager, indexPath: NSIndexPath, completionHandler: (p1: NSError) => void): void;
}
declare var MPPlayableContentDelegate: {

	prototype: MPPlayableContentDelegate;
};

declare class MPPlayableContentManager extends NSObject {

	static alloc(): MPPlayableContentManager; // inherited from NSObject

	static new(): MPPlayableContentManager; // inherited from NSObject

	static sharedContentManager(): MPPlayableContentManager;

	/* readonly */ context: MPPlayableContentManagerContext;

	dataSource: MPPlayableContentDataSource;

	delegate: MPPlayableContentDelegate;

	constructor(); // inherited from NSObject

	beginUpdates(): void;

	endUpdates(): void;

	reloadData(): void;

	self(): MPPlayableContentManager; // inherited from NSObjectProtocol
}

declare class MPPlayableContentManagerContext extends NSObject {

	static alloc(): MPPlayableContentManagerContext; // inherited from NSObject

	static new(): MPPlayableContentManagerContext; // inherited from NSObject

	/* readonly */ contentLimitsEnabled: boolean;

	/* readonly */ contentLimitsEnforced: boolean;

	/* readonly */ endpointAvailable: boolean;

	/* readonly */ enforcedContentItemsCount: number;

	/* readonly */ enforcedContentTreeDepth: number;

	constructor(); // inherited from NSObject

	self(): MPPlayableContentManagerContext; // inherited from NSObjectProtocol
}

declare class MPRatingCommand extends MPRemoteCommand {

	maximumRating: number;

	minimumRating: number;
}

declare class MPRatingCommandEvent extends MPRemoteCommandEvent {

	/* readonly */ rating: number;
}

declare class MPRemoteCommand extends NSObject {

	static alloc(): MPRemoteCommand; // inherited from NSObject

	static new(): MPRemoteCommand; // inherited from NSObject

	enabled: boolean;

	constructor(); // inherited from NSObject

	addTargetAction(target: any, action: string): void;

	addTargetWithHandler(handler: (p1: MPRemoteCommandEvent) => MPRemoteCommandHandlerStatus): any;

	removeTarget(target: any): void;

	removeTargetAction(target: any, action: string): void;

	self(): MPRemoteCommand; // inherited from NSObjectProtocol
}

declare class MPRemoteCommandCenter extends NSObject {

	static alloc(): MPRemoteCommandCenter; // inherited from NSObject

	static new(): MPRemoteCommandCenter; // inherited from NSObject

	static sharedCommandCenter(): MPRemoteCommandCenter;

	/* readonly */ bookmarkCommand: MPFeedbackCommand;

	/* readonly */ changePlaybackPositionCommand: MPChangePlaybackPositionCommand;

	/* readonly */ changePlaybackRateCommand: MPChangePlaybackRateCommand;

	/* readonly */ disableLanguageOptionCommand: MPRemoteCommand;

	/* readonly */ dislikeCommand: MPFeedbackCommand;

	/* readonly */ enableLanguageOptionCommand: MPRemoteCommand;

	/* readonly */ likeCommand: MPFeedbackCommand;

	/* readonly */ nextTrackCommand: MPRemoteCommand;

	/* readonly */ pauseCommand: MPRemoteCommand;

	/* readonly */ playCommand: MPRemoteCommand;

	/* readonly */ previousTrackCommand: MPRemoteCommand;

	/* readonly */ ratingCommand: MPRatingCommand;

	/* readonly */ seekBackwardCommand: MPRemoteCommand;

	/* readonly */ seekForwardCommand: MPRemoteCommand;

	/* readonly */ skipBackwardCommand: MPSkipIntervalCommand;

	/* readonly */ skipForwardCommand: MPSkipIntervalCommand;

	/* readonly */ stopCommand: MPRemoteCommand;

	/* readonly */ togglePlayPauseCommand: MPRemoteCommand;

	constructor(); // inherited from NSObject

	self(): MPRemoteCommandCenter; // inherited from NSObjectProtocol
}

declare class MPRemoteCommandEvent extends NSObject {

	static alloc(): MPRemoteCommandEvent; // inherited from NSObject

	static new(): MPRemoteCommandEvent; // inherited from NSObject

	/* readonly */ command: MPRemoteCommand;

	/* readonly */ timestamp: number;

	constructor(); // inherited from NSObject

	self(): MPRemoteCommandEvent; // inherited from NSObjectProtocol
}

declare const enum MPRemoteCommandHandlerStatus {

	Success = 0,

	NoSuchContent = 100,

	NoActionableNowPlayingItem = 110,

	CommandFailed = 200
}

declare class MPSeekCommandEvent extends MPRemoteCommandEvent {

	/* readonly */ type: MPSeekCommandEventType;
}

declare const enum MPSeekCommandEventType {

	BeginSeeking = 0,

	EndSeeking = 1
}

declare class MPSkipIntervalCommand extends MPRemoteCommand {

	preferredIntervals: NSArray<any>;
}

declare class MPSkipIntervalCommandEvent extends MPRemoteCommandEvent {

	/* readonly */ interval: number;
}

declare class MPTimedMetadata extends NSObject {

	static alloc(): MPTimedMetadata; // inherited from NSObject

	static new(): MPTimedMetadata; // inherited from NSObject

	/* readonly */ allMetadata: NSDictionary<any, any>;

	/* readonly */ key: string;

	/* readonly */ keyspace: string;

	/* readonly */ timestamp: number;

	/* readonly */ value: any;

	constructor(); // inherited from NSObject

	self(): MPTimedMetadata; // inherited from NSObjectProtocol
}

declare function MPVolumeSettingsAlertHide(): void;

declare function MPVolumeSettingsAlertIsVisible(): boolean;

declare function MPVolumeSettingsAlertShow(): void;

declare class MPVolumeView extends UIView implements NSCoding {

	static appearance(): MPVolumeView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MPVolumeView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MPVolumeView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MPVolumeView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MPVolumeView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MPVolumeView; // inherited from UIAppearance

	showsRouteButton: boolean;

	showsVolumeSlider: boolean;

	volumeWarningSliderImage: UIImage;

	/* readonly */ wirelessRouteActive: boolean;

	/* readonly */ wirelessRoutesAvailable: boolean;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; }); // inherited from UIView

	maximumVolumeSliderImageForState(state: UIControlState): UIImage;

	minimumVolumeSliderImageForState(state: UIControlState): UIImage;

	routeButtonImageForState(state: UIControlState): UIImage;

	routeButtonRectForBounds(bounds: CGRect): CGRect;

	self(): MPVolumeView; // inherited from NSObjectProtocol

	setMaximumVolumeSliderImageForState(image: UIImage, state: UIControlState): void;

	setMinimumVolumeSliderImageForState(image: UIImage, state: UIControlState): void;

	setRouteButtonImageForState(image: UIImage, state: UIControlState): void;

	setVolumeThumbImageForState(image: UIImage, state: UIControlState): void;

	volumeSliderRectForBounds(bounds: CGRect): CGRect;

	volumeThumbImageForState(state: UIControlState): UIImage;

	volumeThumbRectForBoundsVolumeSliderRectValue(bounds: CGRect, rect: CGRect, value: number): CGRect;
}

declare var MPVolumeViewWirelessRouteActiveDidChangeNotification: string;

declare var MPVolumeViewWirelessRoutesAvailableDidChangeNotification: string;
