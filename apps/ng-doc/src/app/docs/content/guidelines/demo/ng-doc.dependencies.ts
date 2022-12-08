import {NgDocDependencies} from '@ng-doc/builder';
import {DemoPageModule} from './ng-doc.module';
import {ButtonDemoComponent} from './demos/button-demo/button-demo.component';
import {ButtonInlineDemoComponent} from './demos/button-inline-demo/button-inline-demo.component';

const DemoPageDependencies: NgDocDependencies = {
	// Add your module here
	module: DemoPageModule,
	// And all demos that you'd like to use
	demo: {ButtonDemoComponent, ButtonInlineDemoComponent}
}

export default DemoPageDependencies;