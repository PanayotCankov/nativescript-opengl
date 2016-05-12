declare module "glview" {
    import { View } from "ui/core/view";

    export class GLView extends View {
        /**
         * Invalidate the view's display to request new drawing frame.
         */
        invalidate();
    }
} 