//
//  TNSEffects.m
//  GLViewApp
//
//  Created by Panayot Cankov on 5/11/16.
//  Copyright © 2016 Telerik. All rights reserved.
//

#import "TNSEffects.h"
#import <GLKit/GLKit.h>

@implementation TNSEffects

+ (GLKBaseEffect*)makeMeEffect {
    GLKBaseEffect* e;

    e = [[GLKBaseEffect alloc] init];
    e.light0.enabled = GL_TRUE;
    e.light0.diffuseColor = GLKVector4Make(1.0f, 0.4f, 0.4f, 1.0f);

    GLKMatrix4 projectionMatrix = GLKMatrix4MakePerspective
    (GLKMathDegreesToRadians(50.0f), 200/400, 0.1f, 100.0f);
    e.transform.projectionMatrix = projectionMatrix;

    GLKMatrix4 modelMatrix =
    GLKMatrix4MakeTranslation(0.0f,0.0f,-7.0f);
    modelMatrix = GLKMatrix4Rotate(modelMatrix, 0.5f, 1.0f, 1.0f, 0.7f);
    e.transform.modelviewMatrix = modelMatrix;

    return e;
}

@end
