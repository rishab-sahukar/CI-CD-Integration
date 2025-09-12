/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["sap/ui/build/cicd/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
