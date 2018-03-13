sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/util/MockServer",
	"sap/ui/model/BindingMode",
	"sap/ui/model/odata/v2/ODataModel",
	"sap/ui/model/odata/AnnotationHelper"
], function(Controller, MockServer, BindingMode, ODataModel, AnnotationHelper) {
	"use strict";

	return Controller.extend("sap.ui.comp.sample.smartfield.SmartField", {
		onInit: function() {
			var oMockServer = new MockServer({
				rootUri: "smartfield.SmartField/"
			});
			var sPath = jQuery.sap.getModulePath("sap.ui.comp.sample.smartfield");
			oMockServer.simulate(sPath + "/mockserver/metadata.xml", sPath + "/mockserver/");
			oMockServer.start();
			var oModel = new ODataModel("smartfield.SmartField");
			oModel.setDefaultBindingMode(BindingMode.TwoWay);
			var oView = this.getView();
			oView.setModel(oModel);
			oView.bindElement("/Products('1239102')");
		},

		onChangeEditMode: function(oEvent) {
			var oView = this.getView(),
				bFlag = !oView.byId("idCategory").getContextEditable();

			oView.byId("idProductId").setContextEditable(bFlag);
			oView.byId("idName").setContextEditable(bFlag);
			oView.byId("idEmail").setContextEditable(bFlag);
			oView.byId("idPhone").setContextEditable(bFlag);
			oView.byId("idURL").setContextEditable(bFlag);
			oView.byId("idCategory").setContextEditable(bFlag);
			oView.byId("idDescription").setContextEditable(bFlag);
			oView.byId("idPrice").setContextEditable(bFlag);
			oView.byId("idSale").setContextEditable(bFlag);
			oView.byId("idStatus").setContextEditable(bFlag);
			oView.byId("idQuantity").setContextEditable(bFlag);
			oView.byId("idPassword").setContextEditable(bFlag);
			oView.byId("idCreationDate").setContextEditable(bFlag);
			oView.byId("idCreationDateLong").setContextEditable(bFlag);
			oView.byId("idCreationDateCustomPattern").setContextEditable(bFlag);
			oView.byId("idLastChanged").setContextEditable(bFlag);
			oView.byId("idAvailableSince").setContextEditable(bFlag);
		}
	});
});