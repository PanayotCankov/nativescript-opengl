import { View } from "ui/core/view";

const GL_DEPTH_BUFFER_BIT = 0x00000100;
const GL_STENCIL_BUFFER_BIT = 0x00000400;
const GL_COLOR_BUFFER_BIT = 0x00004000;

const GL_DEPTH_TEST = 0x0B71;
const GL_ARRAY_BUFFER = 0x8892;
const GL_STATIC_DRAW = 0x88E4;

const GL_FLOAT = 0x1406;

const GL_FALSE = 0;
const GL_TRUE = 1;

const GL_TRIANGLES = 0x0004;

var jsCubeVertexData = [
//     x     y     z           nx    ny    nz
     1.0, -1.0, -1.0,         1.0,  0.0,  0.0,
     1.0,  1.0, -1.0,         1.0,  0.0,  0.0,
     1.0, -1.0,  1.0,         1.0,  0.0,  0.0,
     1.0, -1.0,  1.0,         1.0,  0.0,  0.0,
     1.0,  1.0,  1.0,         1.0,  0.0,  0.0,
     1.0,  1.0, -1.0,         1.0,  0.0,  0.0,

     1.0,  1.0, -1.0,         0.0,  1.0,  0.0,
    -1.0,  1.0, -1.0,         0.0,  1.0,  0.0,
     1.0,  1.0,  1.0,         0.0,  1.0,  0.0,
     1.0,  1.0,  1.0,         0.0,  1.0,  0.0,
    -1.0,  1.0, -1.0,         0.0,  1.0,  0.0,
    -1.0,  1.0,  1.0,         0.0,  1.0,  0.0,

    -1.0,  1.0, -1.0,        -1.0,  0.0,  0.0,
    -1.0, -1.0, -1.0,        -1.0,  0.0,  0.0,
    -1.0,  1.0,  1.0,        -1.0,  0.0,  0.0,
    -1.0,  1.0,  1.0,        -1.0,  0.0,  0.0,
    -1.0, -1.0, -1.0,        -1.0,  0.0,  0.0,
    -1.0, -1.0,  1.0,        -1.0,  0.0,  0.0,

    -1.0, -1.0, -1.0,         0.0, -1.0,  0.0,
     1.0, -1.0, -1.0,         0.0, -1.0,  0.0,
    -1.0, -1.0,  1.0,         0.0, -1.0,  0.0,
    -1.0, -1.0,  1.0,         0.0, -1.0,  0.0,
     1.0, -1.0, -1.0,         0.0, -1.0,  0.0,
     1.0, -1.0,  1.0,         0.0, -1.0,  0.0,

     1.0,  1.0,  1.0,         0.0,  0.0,  1.0,
    -1.0,  1.0,  1.0,         0.0,  0.0,  1.0,
     1.0, -1.0,  1.0,         0.0,  0.0,  1.0,
     1.0, -1.0,  1.0,         0.0,  0.0,  1.0,
    -1.0,  1.0,  1.0,         0.0,  0.0,  1.0,
    -1.0, -1.0,  1.0,         0.0,  0.0,  1.0,

     1.0, -1.0, -1.0,         0.0,  0.0, -1.0,
    -1.0, -1.0, -1.0,         0.0,  0.0, -1.0,
     1.0,  1.0, -1.0,         0.0,  0.0, -1.0,
     1.0,  1.0, -1.0,         0.0,  0.0, -1.0,
    -1.0, -1.0, -1.0,         0.0,  0.0, -1.0,
    -1.0,  1.0, -1.0,         0.0,  0.0, -1.0
];

console.log("Build Data");

var gCubeVertexData = interop.alloc(jsCubeVertexData.length * interop.sizeof(interop.types.float));
var gCubeVertexReference = new interop.Reference(interop.types.float, gCubeVertexData);
for (var i = 0; i < jsCubeVertexData.length; i++) {
    gCubeVertexReference[i] = jsCubeVertexData[i];
}

class GLKVector4Impl implements GLKVector4 {
    public v: interop.Reference<number>;

    private buffer: interop.AdoptedPointer;
    
    constructor() {
        // This will get deallocated when the JS wrapper is GCed.
        this.buffer = interop.alloc(4 * interop.sizeof(interop.types.float));
        this.v = new interop.Reference(interop.types.float, this.buffer);
    }
    
    setColor(r: number, g: number, b: number, a: number) {
        this.v[0] = r;
        this.v[1] = g;
        this.v[2] = b;
        this.v[3] = a;
    }
}

class GLKMatrix4Impl implements GLKMatrix4 {
    public m: interop.Reference<number>;

    private buffer: interop.AdoptedPointer;
    
    constructor() {
        // This will get deallocated when the JS wrapper is GCed.
        this.buffer = interop.alloc(16 * interop.sizeof(interop.types.float));
        this.m = new interop.Reference(interop.types.float, this.buffer);
    }
    
    setPerspective(fovyDegree: number, aspect: number, nearZ: number, farZ: number) {
        console.log("setPerspective...")
        var fovyRadians = fovyDegree * (Math.PI / 180);
        var cotan = 1 / tanf(fovyRadians / 2);
        console.log("Some functions done,");

        this.m[0] = cotan / aspect;
        this.m[5] = cotan;
        this.m[10] = (farZ + nearZ) / (nearZ - farZ);
        this.m[11] = -1;
        this.m[14] = (2.0 * farZ * nearZ) / (nearZ - farZ);
        console.log("m set!");
        
        for (var i = 0; i < 16; i++) {
            console.log("this.m[" + i + "]: " + this.m[i]);
        }
        var r = new interop.Reference(interop.types.float, this.buffer.add(5 * 4));
        console.log("Pointer value: " + r.value);
    }
    
    setZero() {
        for (var i = 0; i < 16; i++) {
            this.m[i] = 0;
        }
    }
    
    setIdentity() {
        this.setZero();
        this.m[0] = 1;
        this.m[5] = 1;
        this.m[10] = 1;
        this.m[15] = 1;
    }
    
    setTranslation(tx: number, ty: number, tz: number) {
        this.setIdentity();
        this.m[12] = tx;
        this.m[13] = ty;
        this.m[14] = tz;
    }
}

console.log("Data built");

class GLKDrawingImpl extends NSObject implements GLKViewDelegate {
    public static ObjCProtocols = [ GLKViewDelegate ];
    
    public effect: GLKBaseEffect;
    
    private diffuseColor;
    
    private projectionMatrix;
    private modelMatrix;

    initWithContext(context: EAGLContext): GLKDrawingImpl {
        // Warning: constructors will not execute so you can't assign fields...
        this.projectionMatrix = new GLKMatrix4Impl();
        this.modelMatrix = new GLKMatrix4Impl();

        this.diffuseColor = new GLKVector4Impl();
    
        console.log("Make effect");
        
        this.effect = TNSEffects.makeMeEffect();
        console.log("The effect is: " + this.effect);
        
        // this.effect = (<any>GLKBaseEffect.alloc()).init();
        // console.log("Set light0");
        // this.effect.light0.enabled = GL_TRUE;
        // this.diffuseColor.setColor(1, 0.4, 0.4, 1);
        // this.effect.light0.diffuseColor = this.diffuseColor;
        
        // console.log(this.effect.light0.diffuseColor);
        
        console.log("Init complete!");
        return this;
    }

    glkViewDrawInRect(view: GLKView, rect: CGRect): void {
        console.log("Update!");
        
        var aspect = fabsf(rect.size.width / rect.size.height);
        console.log("Aspect: " + aspect);
        this.projectionMatrix.setPerspective(50, aspect, 0.1, 100);
        //this.effect.transform.projectionMatrix = this.projectionMatrix;
        
        // TODO: The modelviewMatrix is of union type and thus not exposed
        // var modelMatrix /* GLKMatrix4 */ = GLKMatrix4MakeTranslation(0.0, 0.0, -7.0);
        // modelMatrix = GLKMatrix4Rotate(modelMatrix, rotation, 1.0, 1.0, 0.7);     
        // this.effect.transform.modelviewMatrix = modelMatrix;
        
        this.modelMatrix.setTranslation(0, 0, -7);
        // this.modelMatrix.rotate(this.rotation, 1, 1, 0.7);
        //this.effect.transform.modelviewMatrix = this.modelMatrix;
        
        console.log("Matrix: " + this.modelMatrix.m);
        
        //console.log("Get matrx from the effect: " + this.effect.transform.modelviewMatrix);
        
        // this.rotation += this.timeSinceLastUpdate * 1.0;
        
        console.log("Draw!");
        
        glClearColor(0.6, 0.6, 0.65, 1);
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
        
        this.effect.prepareToDraw();
        
        glDrawArrays(GL_TRIANGLES, 0, 36);
        console.log("Drawn!");
        
        
    }
}

export class GLView extends View {
    private _ios: GLKView;
    private _delegate: GLKDrawingImpl;

    constructor() {
        super();
        
        console.log("new GLView");
        this._ios = (<any>GLKView.alloc()).init();
        
        let context = new EAGLContext({ API: EAGLRenderingAPI.kEAGLRenderingAPIOpenGLES2 });
        console.log("Context: " + context);
        EAGLContext.setCurrentContext(context);
        
        console.log("Putting them together");
        this._delegate = (<GLKDrawingImpl>GLKDrawingImpl.alloc()).initWithContext(context);
        console.log("Has GLKDrawingImpl");
        this.ios.delegate = this._delegate;
        this.ios.context = context;
        
        this.ios.drawableColorFormat = GLKViewDrawableColorFormat.RGBA8888;
        this.ios.drawableDepthFormat = GLKViewDrawableDepthFormat.Format24;
        this.ios.drawableStencilFormat = GLKViewDrawableStencilFormat.Format8;
        
        glEnable(GL_DEPTH_TEST);

        var vertexBuffer = new interop.Reference(interop.types.uint32, 0);
        glGenBuffers(1, vertexBuffer);
        glBindBuffer(GL_ARRAY_BUFFER, vertexBuffer.value);
        var bufSize = 36 * 6 * 4; // interop.sizeof(gCubeVertexData) = 4 :(;
        console.log("BUF SIZE: " + bufSize);
        glBufferData(GL_ARRAY_BUFFER, bufSize, gCubeVertexData, GL_STATIC_DRAW);

        var ptr0 = new interop.Pointer(0); // NOTE: Returns 'null', when null is marshaled to void* it seems to get NULL, must be fine.
        console.log(ptr0);
        glEnableVertexAttribArray(GLKVertexAttrib.Position);
        glVertexAttribPointer(GLKVertexAttrib.Position, 3, GL_FLOAT, GL_FALSE, 24, ptr0);
        
        var ptr12 = new interop.Pointer(12);
        console.log(ptr12);
        glEnableVertexAttribArray(GLKVertexAttrib.Normal);
        glVertexAttribPointer(GLKVertexAttrib.Normal, 3, GL_FLOAT, GL_FALSE, 24, ptr12);

        this.ios.drawableMultisample = GLKViewDrawableMultisample.Multisample4X;
        
        console.log("Done!");
        
        // setInterval(() => {
        //     this.invalidate();
        // }, 1000);
    }

    get ios(): GLKView {
        return this._ios;
    }

    public invalidate() {
        this.ios.setNeedsDisplay();
    }
}
