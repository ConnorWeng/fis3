var _ = require('./util.js');
var TAG_MAP = {
    "PUBLIC_JS": "jquery/jquery.js,jquery/jquery-migrate.js,jqueryui/jquery-ui.js,ctp/public/jsextend.js,jsconfig.js,ctp/public/json2.js,ctp/public/ctp.core.js,ctp/public/ctp.base.js,ctp/public/ctp.ui.component.js,ctp/statusbar/ctp.ui.statusbar.js",
    "PUBLIC_CSS": "statusbar.css",
    "THEME_COLOR_BLUE": "skins/blue/ctp-common.css",
    "THEME_COLOR_RED": "skins/red/ctp-common.css",
    "THEME_COLOR_LARVA": "skins/larva/ctp-common.css",
    "THEME_COLOR_STANDARD": "skins/standard/ctp-common.css",
    "BORDERLAYOUT_JS": "ctp/borderlayout/jquery.layout.js,ctp/borderlayout/ctp.ui.borderlayout-resize.js,ctp/borderlayout/ctp.ui.borderlayout-noresize.js,ctp/borderlayout/ctp.ui.borderlayout.js",
    "BORDERLAYOUT_CSS": "borderlayout.css",
    "PANEL_JS": "ctp/panel/ctp.ui.panel.js,ctp/public/jquery.bgiframe.js",
    "PANEL_CSS": "panel.css",
    "AJAXTREE_JS": "ctp/ajaxtree/ctp.ui.ajaxtree.js",
    "AJAXTREE_CSS": "ajaxtree.css",
    "TREEVIEW_JS": "ctp/treeview/jquery.cookie.js,ctp/treeview/jquery.treeview.js,ctp/treeview/ctp.ui.treeview.js",
    "TREEVIEW_CSS": "treeview.css",
    "FILEUPLOAD_JS": "ctp/fileupload/ctp.ui.fileupload.js,ctp/messagebox/ctp.ui.messagebox.js",
    "FILEUPLOAD_CSS": "fileupload.css,messagebox.css",
    "AJAXFILEUPLOAD_JS": "ctp/ajaxfileupload/uploadify/swfobject.js,ctp/ajaxfileupload/uploadify/jquery.uploadify.v2.1.0.js,ctp/ajaxfileupload/ctp.ui.ajaxfileupload.js,ctp/button/ctp.ui.button.js",
    "AJAXFILEUPLOAD_CSS": "ajaxfileupload/default.css,ajaxfileupload/uploadify.css,ajaxfileupload/ajaxfileupload.css,button.css",
    "HWIZARD_JS": "ctp/hwizard/ctp.ui.hwizard.js,ctp/button/ctp.ui.button.js",
    "HWIZARD_CSS": "hwizard.css,button.css",
    "VWIZARD_JS": "ctp/vwizard/ctp.ui.vwizard.js,ctp/button/ctp.ui.button.js",
    "VWIZARD_CSS": "vwizard.css,button.css",
    "PICTURESHOW_JS": "ctp/pictureshow/ctp.ui.pictureshow.js",
    "PICTURESHOW_CSS": "pictureshow.css",
    "CHART_JS": "ctp/chart/ctp.ui.chart.js",
    "FUSIONCHARTS_JS": "ctp/fusioncharts/fusioncharts.js,ctp/fusioncharts/ctp.ui.fusioncharts.js",
    "TEXTSLIDE_JS": "ctp/textslide/jquery.marquee.js,ctp/textslide/ctp.ui.textslide.js",
    "MEDIA_JS": "ctp/media/jquery.media.js,ctp/media/ctp.ui.media.js",
    "MESSAGEBOX_JS": "ctp/messagebox/ctp.ui.messagebox.js",
    "MESSAGEBOX_CSS": "messagebox.css",
    "MESSAGE_EX_JS": "ctp/messagebox/ctp.ui.messagebox.ex.js",
    "MESSAGE_EX_CSS": "messagebox.css",
    "RTE_JS": "ctp/colormenu/ctp.ui.colormenu.js,ctp/gridlayout/ctp.ui.gridlayout.js,jquery/jquery.autocomplete.js,ctp/textfield/ctp.ui.textfield.js,ctp/messagebox/ctp.ui.messagebox.js,ctp/label/ctp.ui.label.js,jquery/jquery.form.js,ctp/form/ctp.form.js,ctp/button/ctp.ui.button.js,ctp/combobox/ctp.ui.combobox.js,ctp/validator/ctp.validator-rules.js,ctp/validator/ctp.validator.js,ctp/panel/ctp.ui.panel.js,ctp/public/jquery.bgiframe.js,ctp/rte/ctp.ui.rte.js",
    "RTE_CSS": "colormenu.css,gridlayout.css,textfield.css,messagebox.css,label.css,form.css,button.css,combobox.css,validator.css,panel.css,rte.css",
    "COLORMENU_JS": "ctp/colormenu/ctp.ui.colormenu.js",
    "COLORMENU_CSS": "colormenu.css",
    "MENUS_JS": "ctp/menus/ctp.ui.menus.js",
    "MENUS_CSS": "menus.css",
    "LINK_JS": "ctp/link/ctp.ui.link.js",
    "LINK_CSS": "link.css",
    "CHECKBOX_JS": "ctp/checkbox/ctp.ui.checkbox.js",
    "CHECKBOX_CSS": "checkbox.css",
    "RADIO_JS": "ctp/radio/ctp.ui.radio.js",
    "RADIO_CSS": "radio.css",
    "CHECKBOXGROUP_JS": "ctp/checkbox/ctp.ui.checkbox.js,ctp/checkboxgroup/ctp.ui.checkboxgroup.js",
    "CHECKBOXGROUP_CSS": "checkbox.css,checkboxgroup.css",
    "RADIOGROUP_JS": "ctp/radio/ctp.ui.radio.js,ctp/radiogroup/ctp.ui.radiogroup.js",
    "RADIOGROUP_CSS": "radio.css,radiogroup.css",
    "TEXTFIELD_JS": "ctp/textfield/ctp.ui.textfield.js,jquery/jquery.autocomplete.js",
    "TEXTFIELD_CSS": "textfield.css",
    "LABEL_JS": "ctp/label/ctp.ui.label.js",
    "LABEL_CSS": "label.css",
    "TEXTAREA_JS": "ctp/textarea/ctp.ui.textarea.js",
    "TEXTAREA_CSS": "textarea.css",
    "GROUPBOX_JS": "ctp/checkbox/ctp.ui.checkbox.js,ctp/groupbox/ctp.ui.groupbox.js",
    "GROUPBOX_CSS": "checkbox.css,groupbox.css",
    "BUTTON_JS": "ctp/button/ctp.ui.button.js",
    "BUTTON_CSS": "button.css",
    "COMBOBOX_JS": "ctp/combobox/ctp.ui.combobox.js",
    "COMBOBOX_CSS": "combobox.css",
    "LISTVIEW_JS": "ctp/listview/ctp.ui.listview.js",
    "LISTVIEW_CSS": "listview.css",
    "CHAIN_JS": "ctp/chain/ctp.action.chain.js",
    "CHAIN_CSS": "",
    "FORM_JS": "jquery/jquery.form.js,ctp/form/ctp.form.js",
    "FORM_CSS": "form.css",
    "TOOLBAR_JS": "ctp/toolbar/ctp.ui.toolbar.js",
    "TOOLBAR_CSS": "toolbar.css",
    "VALIDATOR_JS": "ctp/validator/ctp.validator-rules.js,ctp/validator/ctp.validator.js",
    "VALIDATOR_CSS": "validator.css",
    "ACCORDION_JS": "ctp/accordion/ui.accordion.js,ctp/accordion/ctp.ui.accordion.js",
    "ACCORDION_CSS": "accordion.css",
    "DATEPICKER_JS": "ctp/textfield/ctp.ui.textfield.js,ctp/datepicker/ui.datepicker.js,ctp/datepicker/ctp.ui.datepicker.js",
    "DATEPICKER_CSS": "textfield.css,datepicker.css",
    "MULTISELECT_JS": "ctp/multiselect/ctp.ui.multiselect.js",
    "MULTISELECT_CSS": "multiselect.css",
    "PROGRESSBAR_JS": "jquery.bgiframe.js,ctp/progressbar/ctp.ui.progressbar.js",
    "PROGRESSBAR_CSS": "progressbar.css",
    "STATUSBAR_JS": "ctp/statusbar/ctp.ui.statusbar.js",
    "STATUSBAR_CSS": "statusbar.css",
    "TOOLTIP_JS": "ctp/tooltip/ctp.ui.tooltip.js",
    "TOOLTIP_CSS": "tooltip.css",
    "ZOOMIMAGEUP_JS": "ctp/button/ctp.ui.button.js,ctp/tooltip/ctp.ui.tooltip.js,ctp/zoomimageup/ctp.ui.zoomimageup.js",
    "ZOOMIMAGEUP_CSS": "button.css,tooltip.css,zoomimageup.css",
    "TOOLMENUS_JS": "ctp/toolmenus/ctp.ui.toolmenus.js",
    "TOOLMENUS_CSS": "toolmenus.css",
    "IMAGE_JS": "ctp/image/ctp.ui.image.js",
    "IMAGE_CSS": "image.css",
    "TABLETREE_JS": "ctp/tabletree/ctp.ui.tabletree.js",
    "TABLETREE_CSS": "tabletree.css",
    "TABS_JS": "ctp/tabs/ctp.ui.tabs.js",
    "TABS_CSS": "tabs.css",
    "EDITABLE_JS": "ctp/textfield/ctp.ui.textfield.js,ctp/combobox/ctp.ui.combobox.js,ctp/datepicker/ctp.ui.datepicker.js,ctp/radio/ctp.ui.radio.js,ctp/radiogroup/ctp.ui.radiogroup.js,ctp/checkbox/ctp.ui.checkbox.js,ctp/checkboxgroup/ctp.ui.checkboxgroup.js,ctp/currency/ctp.ui.currency.js,ctp/plugin/ctp.editable.js,ctp/grid/jquery.jeditable_g.js",
    "EDITABLE_CSS": "combobox.css,datepicker.css,textfield.css,radio.css,radiogroup.css,checkbox.css,checkboxgroup.css",
    "PORTAL_JS": "jquery.bgiframe.js,portal/js/jquery.ui.core.js,portal/js/jquery.ui.widget.js,portal/js/jquery.ui.mouse.js,portal/js/jquery.ui.sortable.js,ctp/portal/ctp.ui.portal.js",
    "PORTAL_CSS": "portal.css",
    "MAP_JS": "ctp/map/ctp.ui.map.js",
    "MAP_CSS": "map.css",
    "INFOTIP_JS": "ctp/infotip/ctp.ui.infotip.js",
    "INFOTIP_CSS": "infotip.css",
    "PERCENTAGE_JS": "ctp/percentage/ctp.ui.percentage.js",
    "GRID_JS": "ctp/panel/ctp.ui.panel.js,ctp/public/jquery.bgiframe.js,ctp/statusbar/ctp.ui.statusbar.js,ctp/menus/ctp.ui.menus.js,ctp/grid/ctp.ui.grid.js,ctp/grid/ctp.ui.grid.header.js,ctp/grid/ctp.ui.grid.footer.js",
    "GRID_CSS": "panel.css,statusbar.css,menus.css,grid.css",
    "BASICGRID_JS": "ctp/grid/ctp.ui.basicgrid.js",
    "BASICGRID_CSS": "basicgrid.css",
    "FROZENGRID_JS": "ctp/grid/ctp.ui.basicgrid.js,ctp/grid/ctp.ui.frozengrid.js",
    "FROZENGRID_CSS": "basicgrid.css",
    "GRIDLAYOUT_JS": "ctp/gridlayout/ctp.ui.gridlayout.js",
    "GRIDLAYOUT_CSS": "gridlayout.css",
    "TABLELAYOUT_JS": "ctp/tablelayout/ctp.ui.tablelayout.js",
    "TABLELAYOUT_CSS": "tablelayout.css",
    "CURRENCY_JS": "jquery/jquery.autocomplete.js,ctp/textfield/ctp.ui.textfield.js,ctp/currency/ctp.ui.currency.js,ctp/messagebox/ctp.ui.messagebox.js",
    "CURRENCY_CSS": "textfield.css,messagebox.css",
    "REPORT_JS": "ctp/report/ctp.ui.report.js",
    "REPORT_CSS": "report.css",
    "SYNCTREE_JS": "ctp/synctree/ctp.ui.synctree.js",
    "SYNCTREE_CSS": "ajaxtree.css",
    "DATEPICKER_TAGJS": "tags/ui.datepicker.js",
    "DATEPICKER_TAGCSS": "tags/ui.datepicker.css",
    "PUBLIC_TAGJS": "jquery/jquery.js,tags/jsextend.js,tags/json2.js,tags/ctp.tags.core.js",
    "PUBLIC_TAGCSS": "tags/style.css",
    "PANEL_TAGCSS": "tags/panel.css",
    "MESSAGEBOX_TAGJS": "tags/ctp.tags.messagebox.js",
    "MESSAGEBOX_TAGCSS": "tags/messagebox.css",
    "MESSAGEBOX_EX_TAGJS": "tags/ctp.tags.messagebox.ex.js",
    "BASICGRID_TAGJS": "tags/ctp.tags.basicgrid.js",
    "BASICGRID_TAGCSS": "tags/basicgridtag.css",
    "TABLETREE_TAGJS": "tags/ctp.tags.tabletree.js",
    "TABLETREE_TAGCSS": "tags/tabletree.css",
    "EDITABLE_TAGJS": "tags/ctp.tags.editable.js",
    "VALIDATOR_TAGJS": "tags/ctp.tags.validator.js",
    "VALIDATOR_TAGCSS": "tags/validator.css",
    "TREE_TAGJS": "tags/ctp.tags.tree.js",
    "TREE_TAGCSS": "tags/tree.css"
};
var CTP_INFO = '<script type="text/javascript">\r\n'+
'var CTP_WEB_FULLPATH = "<ctp:out name="fullPath" />";\r\n'+
'var CTP_WEB_LANG = "zh_CN";\r\n'+
'var CTP_COLOR = "standard";\r\n'+
'var CTP_SECURITYFLAG = false;\r\n'+
'</script>\r\n';


var CtpTag = Object.derive(function(itemsString) {
    var jsScript = "";
    var cssScript = "";

    var items = ["public"].concat(itemsString.split(','));
    //console.log("items---------:" + items);
    var jsFiles = [];
    var cssFiles = [];
    cssFiles.push(TAG_MAP["THEME_COLOR_STANDARD"]);
    items.forEach(
        function(item) {
            //console.log("---------------attr is:" + item.toUpperCase() + "_JS");
            var mapJsScript = TAG_MAP[item.toUpperCase() + "_JS"];
            var mapCssLink = TAG_MAP[item.toUpperCase() + "_CSS"];
            if (mapJsScript != undefined && mapJsScript != "") {
                var splittedMapJsScript = mapJsScript.split(",");
                jsFiles.push(splittedMapJsScript);
            }
            if(mapCssLink != undefined && mapCssLink!=""){
                var splittedMapCssLink = mapCssLink.split(",");
                cssFiles.push(splittedMapCssLink);
            }
        });
    this.jsFiles = jsFiles;
    this.cssFiles = cssFiles;

}, {
    get: function() {
        console.log("this.jsFiles is:" + JSON.stringify(this.jsFiles));
        var jsScripts = "";
        var cssScripts = "";
        _.flatten(this.jsFiles).forEach(function(jsFile) {
            if (jsFile != "") {
                jsScripts += '<script type="text/javascript" src="<ctp:out name="fullPath" />hash/js/' + jsFile + '"></script>\r\n';
            }
        });
        _.flatten(this.cssFiles).forEach(function(cssFile) {
            if (cssFile != "") {
                cssScripts += '<link rel="stylesheet" type="text/css" href="<ctp:out name="fullPath" />hash/css/' + cssFile + ' /">\r\n';
            }
        });
        


        console.log("in ctp tag:" + JSON.stringify(jsScripts));
        return CTP_INFO+jsScripts+cssScripts;
    }
});



var exports = module.exports = CtpTag.factory();