
declare class GLKBaseEffect extends NSObject implements GLKNamedEffect {

	static alloc(): GLKBaseEffect; // inherited from NSObject

	static new(): GLKBaseEffect; // inherited from NSObject

	colorMaterialEnabled: number;

	constantColor: GLKVector4;

	/* readonly */ fog: GLKEffectPropertyFog;

	label: string;

	/* readonly */ light0: GLKEffectPropertyLight;

	/* readonly */ light1: GLKEffectPropertyLight;

	/* readonly */ light2: GLKEffectPropertyLight;

	lightModelAmbientColor: GLKVector4;

	lightModelTwoSided: number;

	lightingType: GLKLightingType;

	/* readonly */ material: GLKEffectPropertyMaterial;

	/* readonly */ texture2d0: GLKEffectPropertyTexture;

	/* readonly */ texture2d1: GLKEffectPropertyTexture;

	textureOrder: NSArray<GLKEffectPropertyTexture>;

	/* readonly */ transform: GLKEffectPropertyTransform;

	useConstantColor: number;

	constructor(); // inherited from NSObject

	prepareToDraw(): void; // inherited from GLKNamedEffect

	self(): GLKBaseEffect; // inherited from NSObjectProtocol
}

declare class GLKEffectProperty extends NSObject {

	static alloc(): GLKEffectProperty; // inherited from NSObject

	static new(): GLKEffectProperty; // inherited from NSObject

	constructor(); // inherited from NSObject

	self(): GLKEffectProperty; // inherited from NSObjectProtocol
}

declare class GLKEffectPropertyFog extends GLKEffectProperty {

	color: GLKVector4;

	density: number;

	enabled: number;

	end: number;

	mode: number;

	start: number;
}

declare class GLKEffectPropertyLight extends GLKEffectProperty {

	ambientColor: GLKVector4;

	constantAttenuation: number;

	diffuseColor: GLKVector4;

	enabled: number;

	linearAttenuation: number;

	position: GLKVector4;

	quadraticAttenuation: number;

	specularColor: GLKVector4;

	spotCutoff: number;

	spotDirection: GLKVector3;

	spotExponent: number;

	transform: GLKEffectPropertyTransform;
}

declare class GLKEffectPropertyMaterial extends GLKEffectProperty {

	ambientColor: GLKVector4;

	diffuseColor: GLKVector4;

	emissiveColor: GLKVector4;

	shininess: number;

	specularColor: GLKVector4;
}

declare class GLKEffectPropertyTexture extends GLKEffectProperty {

	enabled: number;

	envMode: GLKTextureEnvMode;

	name: number;

	target: GLKTextureTarget;
}

declare class GLKEffectPropertyTransform extends GLKEffectProperty {

	modelviewMatrix: GLKMatrix4;

	/* readonly */ normalMatrix: GLKMatrix3;

	projectionMatrix: GLKMatrix4;
}

declare const enum GLKFogMode {

	Exp = 0,

	Exp2 = 1,

	Linear = 2
}

declare const enum GLKLightingType {

	PerVertex = 0,

	PerPixel = 1
}

declare function GLKMathProject(object: GLKVector3, model: GLKMatrix4, projection: GLKMatrix4, viewport: interop.Reference<number>): GLKVector3;

declare function GLKMathUnproject(window: GLKVector3, model: GLKMatrix4, projection: GLKMatrix4, viewport: interop.Reference<number>, success: interop.Reference<boolean>): GLKVector3;

interface GLKMatrix2 {
	m: interop.Reference<number>;
}
declare var GLKMatrix2: interop.StructType<GLKMatrix2>;

interface GLKMatrix3 {
	m: interop.Reference<number>;
}
declare var GLKMatrix3: interop.StructType<GLKMatrix3>;

declare function GLKMatrix3Add(matrixLeft: GLKMatrix3, matrixRight: GLKMatrix3): GLKMatrix3;

declare function GLKMatrix3GetColumn(matrix: GLKMatrix3, column: number): GLKVector3;

declare function GLKMatrix3GetMatrix2(matrix: GLKMatrix3): GLKMatrix2;

declare function GLKMatrix3GetRow(matrix: GLKMatrix3, row: number): GLKVector3;

declare var GLKMatrix3Identity: GLKMatrix3;

declare function GLKMatrix3Invert(matrix: GLKMatrix3, isInvertible: interop.Reference<boolean>): GLKMatrix3;

declare function GLKMatrix3InvertAndTranspose(matrix: GLKMatrix3, isInvertible: interop.Reference<boolean>): GLKMatrix3;

declare function GLKMatrix3Make(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): GLKMatrix3;

declare function GLKMatrix3MakeAndTranspose(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): GLKMatrix3;

declare function GLKMatrix3MakeRotation(radians: number, x: number, y: number, z: number): GLKMatrix3;

declare function GLKMatrix3MakeScale(sx: number, sy: number, sz: number): GLKMatrix3;

declare function GLKMatrix3MakeWithArray(values: interop.Reference<number>): GLKMatrix3;

declare function GLKMatrix3MakeWithArrayAndTranspose(values: interop.Reference<number>): GLKMatrix3;

declare function GLKMatrix3MakeWithColumns(column0: GLKVector3, column1: GLKVector3, column2: GLKVector3): GLKMatrix3;

declare function GLKMatrix3MakeWithQuaternion(quaternion: GLKQuaternion): GLKMatrix3;

declare function GLKMatrix3MakeWithRows(row0: GLKVector3, row1: GLKVector3, row2: GLKVector3): GLKMatrix3;

declare function GLKMatrix3MakeXRotation(radians: number): GLKMatrix3;

declare function GLKMatrix3MakeYRotation(radians: number): GLKMatrix3;

declare function GLKMatrix3MakeZRotation(radians: number): GLKMatrix3;

declare function GLKMatrix3Multiply(matrixLeft: GLKMatrix3, matrixRight: GLKMatrix3): GLKMatrix3;

declare function GLKMatrix3MultiplyVector3(matrixLeft: GLKMatrix3, vectorRight: GLKVector3): GLKVector3;

declare function GLKMatrix3MultiplyVector3Array(matrix: GLKMatrix3, vectors: interop.Reference<GLKVector3>, vectorCount: number): void;

declare function GLKMatrix3Rotate(matrix: GLKMatrix3, radians: number, x: number, y: number, z: number): GLKMatrix3;

declare function GLKMatrix3RotateWithVector3(matrix: GLKMatrix3, radians: number, axisVector: GLKVector3): GLKMatrix3;

declare function GLKMatrix3RotateWithVector4(matrix: GLKMatrix3, radians: number, axisVector: GLKVector4): GLKMatrix3;

declare function GLKMatrix3RotateX(matrix: GLKMatrix3, radians: number): GLKMatrix3;

declare function GLKMatrix3RotateY(matrix: GLKMatrix3, radians: number): GLKMatrix3;

declare function GLKMatrix3RotateZ(matrix: GLKMatrix3, radians: number): GLKMatrix3;

declare function GLKMatrix3Scale(matrix: GLKMatrix3, sx: number, sy: number, sz: number): GLKMatrix3;

declare function GLKMatrix3ScaleWithVector3(matrix: GLKMatrix3, scaleVector: GLKVector3): GLKMatrix3;

declare function GLKMatrix3ScaleWithVector4(matrix: GLKMatrix3, scaleVector: GLKVector4): GLKMatrix3;

declare function GLKMatrix3SetColumn(matrix: GLKMatrix3, column: number, vector: GLKVector3): GLKMatrix3;

declare function GLKMatrix3SetRow(matrix: GLKMatrix3, row: number, vector: GLKVector3): GLKMatrix3;

declare function GLKMatrix3Subtract(matrixLeft: GLKMatrix3, matrixRight: GLKMatrix3): GLKMatrix3;

declare function GLKMatrix3Transpose(matrix: GLKMatrix3): GLKMatrix3;

interface GLKMatrix4 {
	m: interop.Reference<number>;
}
declare var GLKMatrix4: interop.StructType<GLKMatrix4>;

declare function GLKMatrix4Add(matrixLeft: GLKMatrix4, matrixRight: GLKMatrix4): GLKMatrix4;

declare function GLKMatrix4GetColumn(matrix: GLKMatrix4, column: number): GLKVector4;

declare function GLKMatrix4GetMatrix2(matrix: GLKMatrix4): GLKMatrix2;

declare function GLKMatrix4GetMatrix3(matrix: GLKMatrix4): GLKMatrix3;

declare function GLKMatrix4GetRow(matrix: GLKMatrix4, row: number): GLKVector4;

declare var GLKMatrix4Identity: GLKMatrix4;

declare function GLKMatrix4Invert(matrix: GLKMatrix4, isInvertible: interop.Reference<boolean>): GLKMatrix4;

declare function GLKMatrix4InvertAndTranspose(matrix: GLKMatrix4, isInvertible: interop.Reference<boolean>): GLKMatrix4;

declare function GLKMatrix4Make(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): GLKMatrix4;

declare function GLKMatrix4MakeAndTranspose(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): GLKMatrix4;

declare function GLKMatrix4MakeFrustum(left: number, right: number, bottom: number, top: number, nearZ: number, farZ: number): GLKMatrix4;

declare function GLKMatrix4MakeLookAt(eyeX: number, eyeY: number, eyeZ: number, centerX: number, centerY: number, centerZ: number, upX: number, upY: number, upZ: number): GLKMatrix4;

declare function GLKMatrix4MakeOrtho(left: number, right: number, bottom: number, top: number, nearZ: number, farZ: number): GLKMatrix4;

declare function GLKMatrix4MakePerspective(fovyRadians: number, aspect: number, nearZ: number, farZ: number): GLKMatrix4;

declare function GLKMatrix4MakeRotation(radians: number, x: number, y: number, z: number): GLKMatrix4;

declare function GLKMatrix4MakeScale(sx: number, sy: number, sz: number): GLKMatrix4;

declare function GLKMatrix4MakeTranslation(tx: number, ty: number, tz: number): GLKMatrix4;

declare function GLKMatrix4MakeWithArray(values: interop.Reference<number>): GLKMatrix4;

declare function GLKMatrix4MakeWithArrayAndTranspose(values: interop.Reference<number>): GLKMatrix4;

declare function GLKMatrix4MakeWithColumns(column0: GLKVector4, column1: GLKVector4, column2: GLKVector4, column3: GLKVector4): GLKMatrix4;

declare function GLKMatrix4MakeWithQuaternion(quaternion: GLKQuaternion): GLKMatrix4;

declare function GLKMatrix4MakeWithRows(row0: GLKVector4, row1: GLKVector4, row2: GLKVector4, row3: GLKVector4): GLKMatrix4;

declare function GLKMatrix4MakeXRotation(radians: number): GLKMatrix4;

declare function GLKMatrix4MakeYRotation(radians: number): GLKMatrix4;

declare function GLKMatrix4MakeZRotation(radians: number): GLKMatrix4;

declare function GLKMatrix4Multiply(matrixLeft: GLKMatrix4, matrixRight: GLKMatrix4): GLKMatrix4;

declare function GLKMatrix4MultiplyAndProjectVector3(matrixLeft: GLKMatrix4, vectorRight: GLKVector3): GLKVector3;

declare function GLKMatrix4MultiplyAndProjectVector3Array(matrix: GLKMatrix4, vectors: interop.Reference<GLKVector3>, vectorCount: number): void;

declare function GLKMatrix4MultiplyVector3(matrixLeft: GLKMatrix4, vectorRight: GLKVector3): GLKVector3;

declare function GLKMatrix4MultiplyVector3Array(matrix: GLKMatrix4, vectors: interop.Reference<GLKVector3>, vectorCount: number): void;

declare function GLKMatrix4MultiplyVector3ArrayWithTranslation(matrix: GLKMatrix4, vectors: interop.Reference<GLKVector3>, vectorCount: number): void;

declare function GLKMatrix4MultiplyVector3WithTranslation(matrixLeft: GLKMatrix4, vectorRight: GLKVector3): GLKVector3;

declare function GLKMatrix4MultiplyVector4(matrixLeft: GLKMatrix4, vectorRight: GLKVector4): GLKVector4;

declare function GLKMatrix4MultiplyVector4Array(matrix: GLKMatrix4, vectors: interop.Reference<GLKVector4>, vectorCount: number): void;

declare function GLKMatrix4Rotate(matrix: GLKMatrix4, radians: number, x: number, y: number, z: number): GLKMatrix4;

declare function GLKMatrix4RotateWithVector3(matrix: GLKMatrix4, radians: number, axisVector: GLKVector3): GLKMatrix4;

declare function GLKMatrix4RotateWithVector4(matrix: GLKMatrix4, radians: number, axisVector: GLKVector4): GLKMatrix4;

declare function GLKMatrix4RotateX(matrix: GLKMatrix4, radians: number): GLKMatrix4;

declare function GLKMatrix4RotateY(matrix: GLKMatrix4, radians: number): GLKMatrix4;

declare function GLKMatrix4RotateZ(matrix: GLKMatrix4, radians: number): GLKMatrix4;

declare function GLKMatrix4Scale(matrix: GLKMatrix4, sx: number, sy: number, sz: number): GLKMatrix4;

declare function GLKMatrix4ScaleWithVector3(matrix: GLKMatrix4, scaleVector: GLKVector3): GLKMatrix4;

declare function GLKMatrix4ScaleWithVector4(matrix: GLKMatrix4, scaleVector: GLKVector4): GLKMatrix4;

declare function GLKMatrix4SetColumn(matrix: GLKMatrix4, column: number, vector: GLKVector4): GLKMatrix4;

declare function GLKMatrix4SetRow(matrix: GLKMatrix4, row: number, vector: GLKVector4): GLKMatrix4;

declare function GLKMatrix4Subtract(matrixLeft: GLKMatrix4, matrixRight: GLKMatrix4): GLKMatrix4;

declare function GLKMatrix4Translate(matrix: GLKMatrix4, tx: number, ty: number, tz: number): GLKMatrix4;

declare function GLKMatrix4TranslateWithVector3(matrix: GLKMatrix4, translationVector: GLKVector3): GLKMatrix4;

declare function GLKMatrix4TranslateWithVector4(matrix: GLKMatrix4, translationVector: GLKVector4): GLKMatrix4;

declare function GLKMatrix4Transpose(matrix: GLKMatrix4): GLKMatrix4;

declare function GLKMatrixStackCreate(alloc: any): interop.Unmanaged<any>;

declare function GLKMatrixStackGetMatrix2(stack: any): GLKMatrix2;

declare function GLKMatrixStackGetMatrix3(stack: any): GLKMatrix3;

declare function GLKMatrixStackGetMatrix3Inverse(stack: any): GLKMatrix3;

declare function GLKMatrixStackGetMatrix3InverseTranspose(stack: any): GLKMatrix3;

declare function GLKMatrixStackGetMatrix4(stack: any): GLKMatrix4;

declare function GLKMatrixStackGetMatrix4Inverse(stack: any): GLKMatrix4;

declare function GLKMatrixStackGetMatrix4InverseTranspose(stack: any): GLKMatrix4;

declare function GLKMatrixStackGetTypeID(): number;

declare function GLKMatrixStackLoadMatrix4(stack: any, matrix: GLKMatrix4): void;

declare function GLKMatrixStackMultiplyMatrix4(stack: any, matrix: GLKMatrix4): void;

declare function GLKMatrixStackMultiplyMatrixStack(stackLeft: any, stackRight: any): void;

declare function GLKMatrixStackPop(stack: any): void;

declare function GLKMatrixStackPush(stack: any): void;

declare function GLKMatrixStackRotate(stack: any, radians: number, x: number, y: number, z: number): void;

declare function GLKMatrixStackRotateWithVector3(stack: any, radians: number, axisVector: GLKVector3): void;

declare function GLKMatrixStackRotateWithVector4(stack: any, radians: number, axisVector: GLKVector4): void;

declare function GLKMatrixStackRotateX(stack: any, radians: number): void;

declare function GLKMatrixStackRotateY(stack: any, radians: number): void;

declare function GLKMatrixStackRotateZ(stack: any, radians: number): void;

declare function GLKMatrixStackScale(stack: any, sx: number, sy: number, sz: number): void;

declare function GLKMatrixStackScaleWithVector3(stack: any, scaleVector: GLKVector3): void;

declare function GLKMatrixStackScaleWithVector4(stack: any, scaleVector: GLKVector4): void;

declare function GLKMatrixStackSize(stack: any): number;

declare function GLKMatrixStackTranslate(stack: any, tx: number, ty: number, tz: number): void;

declare function GLKMatrixStackTranslateWithVector3(stack: any, translationVector: GLKVector3): void;

declare function GLKMatrixStackTranslateWithVector4(stack: any, translationVector: GLKVector4): void;

declare class GLKMesh extends NSObject {

	static alloc(): GLKMesh; // inherited from NSObject

	static new(): GLKMesh; // inherited from NSObject

	static newMeshesFromAssetSourceMeshesError(asset: MDLAsset, sourceMeshes: interop.Reference<NSArray<MDLMesh>>): NSArray<GLKMesh>;

	/* readonly */ name: string;

	/* readonly */ submeshes: NSArray<GLKSubmesh>;

	/* readonly */ vertexBuffers: NSArray<GLKMeshBuffer>;

	/* readonly */ vertexCount: number;

	/* readonly */ vertexDescriptor: MDLVertexDescriptor;

	constructor(); // inherited from NSObject

	constructor(o: { mesh: MDLMesh; });

	self(): GLKMesh; // inherited from NSObjectProtocol
}

declare class GLKMeshBuffer extends NSObject implements MDLMeshBuffer {

	static alloc(): GLKMeshBuffer; // inherited from NSObject

	static new(): GLKMeshBuffer; // inherited from NSObject

	/* readonly */ allocator: GLKMeshBufferAllocator;

	/* readonly */ glBufferName: number;

	/* readonly */ offset: number;

	/* readonly */ length: number; // inherited from MDLMeshBuffer

	/* readonly */ type: MDLMeshBufferType; // inherited from MDLMeshBuffer

	/* readonly */ zone: any; /*MDLMeshBufferZone */ // inherited from MDLMeshBuffer

	constructor(); // inherited from NSObject

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	fillDataOffset(data: NSData, offset: number): void; // inherited from MDLMeshBuffer

	map(): MDLMeshBufferMap; // inherited from MDLMeshBuffer

	self(): GLKMeshBuffer; // inherited from NSObjectProtocol
}

declare class GLKMeshBufferAllocator extends NSObject implements MDLMeshBufferAllocator {

	static alloc(): GLKMeshBufferAllocator; // inherited from NSObject

	static new(): GLKMeshBufferAllocator; // inherited from NSObject

	constructor(); // inherited from NSObject

	newBufferFromZoneDataType(zone: MDLMeshBufferZone, data: NSData, type: MDLMeshBufferType): MDLMeshBuffer; // inherited from MDLMeshBufferAllocator

	newBufferFromZoneLengthType(zone: MDLMeshBufferZone, length: number, type: MDLMeshBufferType): MDLMeshBuffer; // inherited from MDLMeshBufferAllocator

	newBufferType(length: number, type: MDLMeshBufferType): MDLMeshBuffer; // inherited from MDLMeshBufferAllocator

	newBufferWithDataType(data: NSData, type: MDLMeshBufferType): MDLMeshBuffer; // inherited from MDLMeshBufferAllocator

	newZone(capacity: number): MDLMeshBufferZone; // inherited from MDLMeshBufferAllocator

	newZoneForBuffersWithSizeAndType(sizes: NSArray<number>, types: NSArray<number>): MDLMeshBufferZone; // inherited from MDLMeshBufferAllocator

	self(): GLKMeshBufferAllocator; // inherited from NSObjectProtocol
}

interface GLKNamedEffect {

	prepareToDraw(): void;
}
declare var GLKNamedEffect: {

	prototype: GLKNamedEffect;
};

interface GLKQuaternion {
	q: interop.Reference<number>;
}
declare var GLKQuaternion: interop.StructType<GLKQuaternion>;

declare function GLKQuaternionAdd(quaternionLeft: GLKQuaternion, quaternionRight: GLKQuaternion): GLKQuaternion;

declare function GLKQuaternionAngle(quaternion: GLKQuaternion): number;

declare function GLKQuaternionAxis(quaternion: GLKQuaternion): GLKVector3;

declare function GLKQuaternionConjugate(quaternion: GLKQuaternion): GLKQuaternion;

declare var GLKQuaternionIdentity: GLKQuaternion;

declare function GLKQuaternionInvert(quaternion: GLKQuaternion): GLKQuaternion;

declare function GLKQuaternionLength(quaternion: GLKQuaternion): number;

declare function GLKQuaternionMake(x: number, y: number, z: number, w: number): GLKQuaternion;

declare function GLKQuaternionMakeWithAngleAndAxis(radians: number, x: number, y: number, z: number): GLKQuaternion;

declare function GLKQuaternionMakeWithAngleAndVector3Axis(radians: number, axisVector: GLKVector3): GLKQuaternion;

declare function GLKQuaternionMakeWithArray(values: interop.Reference<number>): GLKQuaternion;

declare function GLKQuaternionMakeWithMatrix3(matrix: GLKMatrix3): GLKQuaternion;

declare function GLKQuaternionMakeWithMatrix4(matrix: GLKMatrix4): GLKQuaternion;

declare function GLKQuaternionMakeWithVector3(vector: GLKVector3, scalar: number): GLKQuaternion;

declare function GLKQuaternionMultiply(quaternionLeft: GLKQuaternion, quaternionRight: GLKQuaternion): GLKQuaternion;

declare function GLKQuaternionNormalize(quaternion: GLKQuaternion): GLKQuaternion;

declare function GLKQuaternionRotateVector3(quaternion: GLKQuaternion, vector: GLKVector3): GLKVector3;

declare function GLKQuaternionRotateVector3Array(quaternion: GLKQuaternion, vectors: interop.Reference<GLKVector3>, vectorCount: number): void;

declare function GLKQuaternionRotateVector4(quaternion: GLKQuaternion, vector: GLKVector4): GLKVector4;

declare function GLKQuaternionRotateVector4Array(quaternion: GLKQuaternion, vectors: interop.Reference<GLKVector4>, vectorCount: number): void;

declare function GLKQuaternionSlerp(quaternionStart: GLKQuaternion, quaternionEnd: GLKQuaternion, t: number): GLKQuaternion;

declare function GLKQuaternionSubtract(quaternionLeft: GLKQuaternion, quaternionRight: GLKQuaternion): GLKQuaternion;

declare class GLKReflectionMapEffect extends GLKBaseEffect implements GLKNamedEffect {

	matrix: GLKMatrix3;

	/* readonly */ textureCubeMap: GLKEffectPropertyTexture;
}

declare class GLKSkyboxEffect extends NSObject implements GLKNamedEffect {

	static alloc(): GLKSkyboxEffect; // inherited from NSObject

	static new(): GLKSkyboxEffect; // inherited from NSObject

	center: GLKVector3;

	label: string;

	/* readonly */ textureCubeMap: GLKEffectPropertyTexture;

	/* readonly */ transform: GLKEffectPropertyTransform;

	xSize: number;

	ySize: number;

	zSize: number;

	constructor(); // inherited from NSObject

	draw(): void;

	prepareToDraw(): void; // inherited from GLKNamedEffect

	self(): GLKSkyboxEffect; // inherited from NSObjectProtocol
}

declare class GLKSubmesh extends NSObject {

	static alloc(): GLKSubmesh; // inherited from NSObject

	static new(): GLKSubmesh; // inherited from NSObject

	/* readonly */ elementBuffer: GLKMeshBuffer;

	/* readonly */ elementCount: number;

	/* readonly */ mesh: GLKMesh;

	/* readonly */ mode: number;

	/* readonly */ name: string;

	/* readonly */ type: number;

	constructor(); // inherited from NSObject

	self(): GLKSubmesh; // inherited from NSObjectProtocol
}

declare const enum GLKTextureEnvMode {

	Replace = 0,

	Modulate = 1,

	Decal = 2
}

declare class GLKTextureInfo extends NSObject implements NSCopying {

	static alloc(): GLKTextureInfo; // inherited from NSObject

	static new(): GLKTextureInfo; // inherited from NSObject

	/* readonly */ alphaState: GLKTextureInfoAlphaState;

	/* readonly */ containsMipmaps: boolean;

	/* readonly */ height: number;

	/* readonly */ name: number;

	/* readonly */ target: number;

	/* readonly */ textureOrigin: GLKTextureInfoOrigin;

	/* readonly */ width: number;

	constructor(); // inherited from NSObject

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	self(): GLKTextureInfo; // inherited from NSObjectProtocol
}

declare const enum GLKTextureInfoAlphaState {

	None = 0,

	NonPremultiplied = 1,

	Premultiplied = 2
}

declare const enum GLKTextureInfoOrigin {

	Unknown = 0,

	TopLeft = 1,

	BottomLeft = 2
}

declare class GLKTextureLoader extends NSObject {

	static alloc(): GLKTextureLoader; // inherited from NSObject

	static cubeMapWithContentsOfFileOptionsError(path: string, options: NSDictionary<string, number>): GLKTextureInfo;

	static cubeMapWithContentsOfFilesOptionsError(paths: NSArray<any>, options: NSDictionary<string, number>): GLKTextureInfo;

	static cubeMapWithContentsOfURLOptionsError(url: NSURL, options: NSDictionary<string, number>): GLKTextureInfo;

	static new(): GLKTextureLoader; // inherited from NSObject

	static textureWithCGImageOptionsError(cgImage: any, options: NSDictionary<string, number>): GLKTextureInfo;

	static textureWithContentsOfDataOptionsError(data: NSData, options: NSDictionary<string, number>): GLKTextureInfo;

	static textureWithContentsOfFileOptionsError(path: string, options: NSDictionary<string, number>): GLKTextureInfo;

	static textureWithContentsOfURLOptionsError(url: NSURL, options: NSDictionary<string, number>): GLKTextureInfo;

	constructor(); // inherited from NSObject

	constructor(o: { sharegroup: EAGLSharegroup; });

	cubeMapWithContentsOfFileOptionsQueueCompletionHandler(path: string, options: NSDictionary<string, number>, queue: NSObject, block: (p1: GLKTextureInfo, p2: NSError) => void): void;

	cubeMapWithContentsOfFilesOptionsQueueCompletionHandler(paths: NSArray<any>, options: NSDictionary<string, number>, queue: NSObject, block: (p1: GLKTextureInfo, p2: NSError) => void): void;

	cubeMapWithContentsOfURLOptionsQueueCompletionHandler(url: NSURL, options: NSDictionary<string, number>, queue: NSObject, block: (p1: GLKTextureInfo, p2: NSError) => void): void;

	self(): GLKTextureLoader; // inherited from NSObjectProtocol

	textureWithCGImageOptionsQueueCompletionHandler(cgImage: any, options: NSDictionary<string, number>, queue: NSObject, block: (p1: GLKTextureInfo, p2: NSError) => void): void;

	textureWithContentsOfDataOptionsQueueCompletionHandler(data: NSData, options: NSDictionary<string, number>, queue: NSObject, block: (p1: GLKTextureInfo, p2: NSError) => void): void;

	textureWithContentsOfFileOptionsQueueCompletionHandler(path: string, options: NSDictionary<string, number>, queue: NSObject, block: (p1: GLKTextureInfo, p2: NSError) => void): void;

	textureWithContentsOfURLOptionsQueueCompletionHandler(url: NSURL, options: NSDictionary<string, number>, queue: NSObject, block: (p1: GLKTextureInfo, p2: NSError) => void): void;
}

declare var GLKTextureLoaderApplyPremultiplication: string;

declare const enum GLKTextureLoaderError {

	FileOrURLNotFound = 0,

	InvalidNSData = 1,

	InvalidCGImage = 2,

	UnknownPathType = 3,

	UnknownFileType = 4,

	PVRAtlasUnsupported = 5,

	CubeMapInvalidNumFiles = 6,

	CompressedTextureUpload = 7,

	UncompressedTextureUpload = 8,

	UnsupportedCubeMapDimensions = 9,

	UnsupportedBitDepth = 10,

	UnsupportedPVRFormat = 11,

	DataPreprocessingFailure = 12,

	MipmapUnsupported = 13,

	UnsupportedOrientation = 14,

	ReorientationFailure = 15,

	AlphaPremultiplicationFailure = 16,

	InvalidEAGLContext = 17,

	IncompatibleFormatSRGB = 18
}

declare var GLKTextureLoaderErrorDomain: string;

declare var GLKTextureLoaderErrorKey: string;

declare var GLKTextureLoaderGLErrorKey: string;

declare var GLKTextureLoaderGenerateMipmaps: string;

declare var GLKTextureLoaderGrayscaleAsAlpha: string;

declare var GLKTextureLoaderOriginBottomLeft: string;

declare var GLKTextureLoaderSRGB: string;

declare const enum GLKTextureTarget {

	Target2D = 3553,

	TargetCubeMap = 34067,

	TargetCt = 2
}

interface GLKVector2 {
	v: interop.Reference<number>;
}
declare var GLKVector2: interop.StructType<GLKVector2>;

declare function GLKVector2Add(vectorLeft: GLKVector2, vectorRight: GLKVector2): GLKVector2;

declare function GLKVector2AddScalar(vector: GLKVector2, value: number): GLKVector2;

declare function GLKVector2AllEqualToScalar(vector: GLKVector2, value: number): boolean;

declare function GLKVector2AllEqualToVector2(vectorLeft: GLKVector2, vectorRight: GLKVector2): boolean;

declare function GLKVector2AllGreaterThanOrEqualToScalar(vector: GLKVector2, value: number): boolean;

declare function GLKVector2AllGreaterThanOrEqualToVector2(vectorLeft: GLKVector2, vectorRight: GLKVector2): boolean;

declare function GLKVector2AllGreaterThanScalar(vector: GLKVector2, value: number): boolean;

declare function GLKVector2AllGreaterThanVector2(vectorLeft: GLKVector2, vectorRight: GLKVector2): boolean;

declare function GLKVector2Distance(vectorStart: GLKVector2, vectorEnd: GLKVector2): number;

declare function GLKVector2Divide(vectorLeft: GLKVector2, vectorRight: GLKVector2): GLKVector2;

declare function GLKVector2DivideScalar(vector: GLKVector2, value: number): GLKVector2;

declare function GLKVector2DotProduct(vectorLeft: GLKVector2, vectorRight: GLKVector2): number;

declare function GLKVector2Length(vector: GLKVector2): number;

declare function GLKVector2Lerp(vectorStart: GLKVector2, vectorEnd: GLKVector2, t: number): GLKVector2;

declare function GLKVector2Make(x: number, y: number): GLKVector2;

declare function GLKVector2MakeWithArray(values: interop.Reference<number>): GLKVector2;

declare function GLKVector2Maximum(vectorLeft: GLKVector2, vectorRight: GLKVector2): GLKVector2;

declare function GLKVector2Minimum(vectorLeft: GLKVector2, vectorRight: GLKVector2): GLKVector2;

declare function GLKVector2Multiply(vectorLeft: GLKVector2, vectorRight: GLKVector2): GLKVector2;

declare function GLKVector2MultiplyScalar(vector: GLKVector2, value: number): GLKVector2;

declare function GLKVector2Negate(vector: GLKVector2): GLKVector2;

declare function GLKVector2Normalize(vector: GLKVector2): GLKVector2;

declare function GLKVector2Project(vectorToProject: GLKVector2, projectionVector: GLKVector2): GLKVector2;

declare function GLKVector2Subtract(vectorLeft: GLKVector2, vectorRight: GLKVector2): GLKVector2;

declare function GLKVector2SubtractScalar(vector: GLKVector2, value: number): GLKVector2;

interface GLKVector3 {
	v: interop.Reference<number>;
}
declare var GLKVector3: interop.StructType<GLKVector3>;

declare function GLKVector3Add(vectorLeft: GLKVector3, vectorRight: GLKVector3): GLKVector3;

declare function GLKVector3AddScalar(vector: GLKVector3, value: number): GLKVector3;

declare function GLKVector3AllEqualToScalar(vector: GLKVector3, value: number): boolean;

declare function GLKVector3AllEqualToVector3(vectorLeft: GLKVector3, vectorRight: GLKVector3): boolean;

declare function GLKVector3AllGreaterThanOrEqualToScalar(vector: GLKVector3, value: number): boolean;

declare function GLKVector3AllGreaterThanOrEqualToVector3(vectorLeft: GLKVector3, vectorRight: GLKVector3): boolean;

declare function GLKVector3AllGreaterThanScalar(vector: GLKVector3, value: number): boolean;

declare function GLKVector3AllGreaterThanVector3(vectorLeft: GLKVector3, vectorRight: GLKVector3): boolean;

declare function GLKVector3CrossProduct(vectorLeft: GLKVector3, vectorRight: GLKVector3): GLKVector3;

declare function GLKVector3Distance(vectorStart: GLKVector3, vectorEnd: GLKVector3): number;

declare function GLKVector3Divide(vectorLeft: GLKVector3, vectorRight: GLKVector3): GLKVector3;

declare function GLKVector3DivideScalar(vector: GLKVector3, value: number): GLKVector3;

declare function GLKVector3DotProduct(vectorLeft: GLKVector3, vectorRight: GLKVector3): number;

declare function GLKVector3Length(vector: GLKVector3): number;

declare function GLKVector3Lerp(vectorStart: GLKVector3, vectorEnd: GLKVector3, t: number): GLKVector3;

declare function GLKVector3Make(x: number, y: number, z: number): GLKVector3;

declare function GLKVector3MakeWithArray(values: interop.Reference<number>): GLKVector3;

declare function GLKVector3Maximum(vectorLeft: GLKVector3, vectorRight: GLKVector3): GLKVector3;

declare function GLKVector3Minimum(vectorLeft: GLKVector3, vectorRight: GLKVector3): GLKVector3;

declare function GLKVector3Multiply(vectorLeft: GLKVector3, vectorRight: GLKVector3): GLKVector3;

declare function GLKVector3MultiplyScalar(vector: GLKVector3, value: number): GLKVector3;

declare function GLKVector3Negate(vector: GLKVector3): GLKVector3;

declare function GLKVector3Normalize(vector: GLKVector3): GLKVector3;

declare function GLKVector3Project(vectorToProject: GLKVector3, projectionVector: GLKVector3): GLKVector3;

declare function GLKVector3Subtract(vectorLeft: GLKVector3, vectorRight: GLKVector3): GLKVector3;

declare function GLKVector3SubtractScalar(vector: GLKVector3, value: number): GLKVector3;

interface GLKVector4 {
	v: interop.Reference<number>;
}
declare var GLKVector4: interop.StructType<GLKVector4>;

declare function GLKVector4Add(vectorLeft: GLKVector4, vectorRight: GLKVector4): GLKVector4;

declare function GLKVector4AddScalar(vector: GLKVector4, value: number): GLKVector4;

declare function GLKVector4AllEqualToScalar(vector: GLKVector4, value: number): boolean;

declare function GLKVector4AllEqualToVector4(vectorLeft: GLKVector4, vectorRight: GLKVector4): boolean;

declare function GLKVector4AllGreaterThanOrEqualToScalar(vector: GLKVector4, value: number): boolean;

declare function GLKVector4AllGreaterThanOrEqualToVector4(vectorLeft: GLKVector4, vectorRight: GLKVector4): boolean;

declare function GLKVector4AllGreaterThanScalar(vector: GLKVector4, value: number): boolean;

declare function GLKVector4AllGreaterThanVector4(vectorLeft: GLKVector4, vectorRight: GLKVector4): boolean;

declare function GLKVector4CrossProduct(vectorLeft: GLKVector4, vectorRight: GLKVector4): GLKVector4;

declare function GLKVector4Distance(vectorStart: GLKVector4, vectorEnd: GLKVector4): number;

declare function GLKVector4Divide(vectorLeft: GLKVector4, vectorRight: GLKVector4): GLKVector4;

declare function GLKVector4DivideScalar(vector: GLKVector4, value: number): GLKVector4;

declare function GLKVector4DotProduct(vectorLeft: GLKVector4, vectorRight: GLKVector4): number;

declare function GLKVector4Length(vector: GLKVector4): number;

declare function GLKVector4Lerp(vectorStart: GLKVector4, vectorEnd: GLKVector4, t: number): GLKVector4;

declare function GLKVector4Make(x: number, y: number, z: number, w: number): GLKVector4;

declare function GLKVector4MakeWithArray(values: interop.Reference<number>): GLKVector4;

declare function GLKVector4MakeWithVector3(vector: GLKVector3, w: number): GLKVector4;

declare function GLKVector4Maximum(vectorLeft: GLKVector4, vectorRight: GLKVector4): GLKVector4;

declare function GLKVector4Minimum(vectorLeft: GLKVector4, vectorRight: GLKVector4): GLKVector4;

declare function GLKVector4Multiply(vectorLeft: GLKVector4, vectorRight: GLKVector4): GLKVector4;

declare function GLKVector4MultiplyScalar(vector: GLKVector4, value: number): GLKVector4;

declare function GLKVector4Negate(vector: GLKVector4): GLKVector4;

declare function GLKVector4Normalize(vector: GLKVector4): GLKVector4;

declare function GLKVector4Project(vectorToProject: GLKVector4, projectionVector: GLKVector4): GLKVector4;

declare function GLKVector4Subtract(vectorLeft: GLKVector4, vectorRight: GLKVector4): GLKVector4;

declare function GLKVector4SubtractScalar(vector: GLKVector4, value: number): GLKVector4;

declare const enum GLKVertexAttrib {

	Position = 0,

	Normal = 1,

	Color = 2,

	TexCoord0 = 3,

	TexCoord1 = 4
}

interface GLKVertexAttributeParameters {
	type: number;
	size: number;
	normalized: number;
}
declare var GLKVertexAttributeParameters: interop.StructType<GLKVertexAttributeParameters>;

declare function GLKVertexAttributeParametersFromModelIO(vertexFormat: MDLVertexFormat): GLKVertexAttributeParameters;

declare class GLKView extends UIView implements NSCoding {

	static appearance(): GLKView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GLKView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GLKView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): GLKView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GLKView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): GLKView; // inherited from UIAppearance

	context: EAGLContext;

	delegate: GLKViewDelegate;

	drawableColorFormat: GLKViewDrawableColorFormat;

	drawableDepthFormat: GLKViewDrawableDepthFormat;

	/* readonly */ drawableHeight: number;

	drawableMultisample: GLKViewDrawableMultisample;

	drawableStencilFormat: GLKViewDrawableStencilFormat;

	/* readonly */ drawableWidth: number;

	enableSetNeedsDisplay: boolean;

	/* readonly */ snapshot: UIImage;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { frame: CGRect; }); // inherited from UIView

	constructor(o: { frame: CGRect; context: EAGLContext; });

	bindDrawable(): void;

	deleteDrawable(): void;

	display(): void;

	self(): GLKView; // inherited from NSObjectProtocol
}

declare class GLKViewController extends UIViewController implements GLKViewDelegate, NSCoding {

	delegate: GLKViewControllerDelegate;

	/* readonly */ framesDisplayed: number;

	/* readonly */ framesPerSecond: number;

	pauseOnWillResignActive: boolean;

	paused: boolean;

	preferredFramesPerSecond: number;

	resumeOnDidBecomeActive: boolean;

	/* readonly */ timeSinceFirstResume: number;

	/* readonly */ timeSinceLastDraw: number;

	/* readonly */ timeSinceLastResume: number;

	/* readonly */ timeSinceLastUpdate: number;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { nibName: string; bundle: NSBundle; }); // inherited from UIViewController

	glkViewDrawInRect(view: GLKView, rect: CGRect): void; // inherited from GLKViewDelegate

	self(): GLKViewController; // inherited from NSObjectProtocol
}

interface GLKViewControllerDelegate extends NSObjectProtocol {

	glkViewControllerUpdate(controller: GLKViewController): void;

	glkViewControllerWillPause?(controller: GLKViewController, pause: boolean): void;
}
declare var GLKViewControllerDelegate: {

	prototype: GLKViewControllerDelegate;
};

interface GLKViewDelegate extends NSObjectProtocol {

	glkViewDrawInRect(view: GLKView, rect: CGRect): void;
}
declare var GLKViewDelegate: {

	prototype: GLKViewDelegate;
};

declare const enum GLKViewDrawableColorFormat {

	RGBA8888 = 0,

	RGB565 = 1,

	SRGBA8888 = 2
}

declare const enum GLKViewDrawableDepthFormat {

	FormatNone = 0,

	Format16 = 1,

	Format24 = 2
}

declare const enum GLKViewDrawableMultisample {

	MultisampleNone = 0,

	Multisample4X = 1
}

declare const enum GLKViewDrawableStencilFormat {

	FormatNone = 0,

	Format8 = 1
}

declare function NSStringFromGLKMatrix2(matrix: GLKMatrix2): string;

declare function NSStringFromGLKMatrix3(matrix: GLKMatrix3): string;

declare function NSStringFromGLKMatrix4(matrix: GLKMatrix4): string;

declare function NSStringFromGLKQuaternion(quaternion: GLKQuaternion): string;

declare function NSStringFromGLKVector2(vector: GLKVector2): string;

declare function NSStringFromGLKVector3(vector: GLKVector3): string;

declare function NSStringFromGLKVector4(vector: GLKVector4): string;

declare var kGLKModelErrorDomain: string;

declare var kGLKModelErrorKey: string;
