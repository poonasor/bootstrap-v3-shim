//TABLE OF CONTENTS
/*FORMS*/
/*GRID*/
/*BUTTONS*/
/*BREADCRUMBS*/
/*HELPER CLASSES*/
/*IMAGES*/
/*INPUT GROUPS*/
/*LABELS / BADGES*/
/*NAVBAR*/
/*NAVS*/
/*PAGINATION*/
/*PANELS*/

$(document).ready(function() {
	
/*FORMS*/
//Adds .row to .form-group
$(document).find('.form-group').addClass('row');
//Update control-label to col-form-label
$('[class*="control-label"]').each(function() {
	this.className = this.className.replace("control-label", "col-form-label"); 
});
//Update input-lg to form-control-lg
$('[class*="input-lg"]').each(function() {
	this.className = this.className.replace("input-lg", "form-control-lg"); 
});
//Update input-sm to form-control-sm
$('[class*="input-sm"]').each(function() {
	this.className = this.className.replace("input-sm", "form-control-sm"); 
});
//Update form-group- to form-control-
$('[class*="form-group-"]').each(function() {
	this.className = this.className.replace("form-group-", "form-control-"); 
});
//Update help-block to form-text.text-muted
$('[class*="help-block"]').each(function() {
	this.className = this.className.replace("help-block", "form-text text-muted"); 
});
//Update radio to form-check
$('[class*="radio"]').each(function() {
	this.className = this.className.replace("radio", "form-check"); 
});
//Update checkbox to form-check
$('[class*="checkbox"]').each(function() {
	this.className = this.className.replace("checkbox", "form-check"); 
});
//Update form-control-static to form-control-plaintext
$('[class*="form-control-static"]').each(function() {
	this.className = this.className.replace("form-control-static", "form-control-plaintext"); 
});
/*FORMS END*/

/*GRID*/
//Update Bootstrap 3 Offseet to Bootstrap 4
$('[class*="col-sm-offset-"]').each(function() {
	this.className = this.className.replace("col-sm-offset-", "offset-sm-"); 
});
$('[class*="col-md-offset-"]').each(function() {
	this.className = this.className.replace("col-md-offset-", "offset-md-"); 
});
$('[class*="col-lg-offset-"]').each(function() {
	this.className = this.className.replace("col-lg-offset-", "offset-lg-"); 
});

//Update Grid col-xs to col-
$('[class*="col-xs-"]').each(function() {
	this.className = this.className.replace("col-xs-", "col-"); 
});
/*GRID END*/

/*BUTTONS*/
//Update btn-default to btn-secondary
$('[class*="btn-default"]').each(function() {
	this.className = this.className.replace("btn-default", "btn-secondary"); 
});
//Update btn-group-justified to btn-group.d-flex
$('[class*="btn-group-justified"]').each(function() {
	this.className = this.className.replace("btn-group-justified", "btn-group.d-flex"); 
});
/*BUTTONS END*/

/*BREADCRUMBS*/
$(document).find('.breadcrumb > li').addClass('breadcrumb-item');
/*BREADCRUMBS END*/

/*HELPER CLASSES*/
//Update center-block to mx-auto
$('[class*="center-block"]').each(function() {
	this.className = this.className.replace("center-block", "mx-auto"); 
});
//Update pull-left to float-left
$('[class*="pull-left"]').each(function() {
	this.className = this.className.replace("pull-left", "float-left"); 
});
//Update pull-right to float-right
$('[class*="pull-right"]').each(function() {
	this.className = this.className.replace("pull-right", "float-right"); 
});
//Update visible-xs- to d-block.d-sm-none
$('[class*="visible-xs-"]').each(function() {
	this.className = this.className.replace("visible-xs-", "d-block d-sm-none"); 
});
//Update visible-sm- to d-block.d-md-none
$('[class*="visible-sm-"]').each(function() {
	this.className = this.className.replace("visible-sm-", "d-block d-md-none"); 
});
//Update visible-md- to d-block-d-lg-none
$('[class*="visible-md-"]').each(function() {
	this.className = this.className.replace("visible-md-", "d-block d-lg-none"); 
});
//Update visible-lg- to d-block.d-xl-none
$('[class*="visible-lg-"]').each(function() {
	this.className = this.className.replace("visible-lg-", "d-block d-xl-none"); 
});
//Update hidden-xs-up to d-none
$('[class*="hidden-xs-up"]').each(function() {
	this.className = this.className.replace("hidden-xs-up", "d-none"); 
});
//Update hidden-sm-up to d-sm-none
$('[class*="hidden-sm-up"]').each(function() {
	this.className = this.className.replace("hidden-sm-up", "d-sm-none"); 
});
//Update hidden-md-up to d-md-none
$('[class*="hidden-md-up"]').each(function() {
	this.className = this.className.replace("hidden-md-up", "d-md-none"); 
});
//Update hidden-lg-up to d-lg-none
$('[class*="hidden-lg-up"]').each(function() {
	this.className = this.className.replace("hidden-lg-up", "d-lg-none"); 
});
//Update hidden-xl-up to d-xl-none
$('[class*="hidden-xl-up"]').each(function() {
	this.className = this.className.replace("hidden-xl-up", "d-xl-none"); 
});
/*HELPER CLASSES END*/

/*IMAGES*/
//Update img-responsive to img-fluid
$('[class*="img-responsive"]').each(function() {
	this.className = this.className.replace("img-responsive", "img-fluid"); 
});
//Update img-rounded to rounded
$('[class*="img-rounded"]').each(function() {
	this.className = this.className.replace("img-rounded", "rounded"); 
});
//Update img-circle to rounded-cirlce
$('[class*="img-circle"]').each(function() {
	this.className = this.className.replace("img-circle", "rounded-circle"); 
});
/*IMAGES END*/

/*INPUT GROUPS*/
//Update input-group-addon to input-group-prepend/input-group-append
$('[class*="input-group-addon"]').each(function() {
	this.className = this.className.replace("input-group-addon", "input-group-prepend"); 
});
//Update input-group-btn to input-group-prepend/input-group-append
$('[class*="input-group-btn"]').each(function() {
	this.className = this.className.replace("input-group-btn", "input-group-prepend"); 
});
/*INPUT GROUPS END*/

/*LABELS / BADGES*/
//Update label to badge
$('[class*="label"]').each(function() {
	this.className = this.className.replace("label", "badge"); 
});
//Update badge to badge.badge-pill
$('[class*="badge"]').each(function() {
	this.className = this.className.replace("badge", "badge badge-pill"); 
});
/*LABELS / BADGES END*/

/*NAVBAR*/
//Update navbar-default to navbar-light
$('[class*="navbar-default"]').each(function() {
	this.className = this.className.replace("navbar-default", "navbar-light"); 
});
//Update navbar-toggle to navbar-toggler
$('[class*="navbar-toggle"]').each(function() {
	this.className = this.className.replace("navbar-toggle", "navbar-toggler"); 
});
//Update navbar-form to form-inline
$('[class*="navbar-form"]').each(function() {
	this.className = this.className.replace("navbar-form", "form-inline"); 
});
//Update navbar-btn to nav-item
$('[class*="navbar-btn"]').each(function() {
	this.className = this.className.replace("navbar-btn", "nav-item"); 
});
//Update navbar-right to ml-auto
$('[class*="navbar-right"]').each(function() {
	this.className = this.className.replace("navbar-right", "ml-auto"); 
});
//Update navbar-left to mr-auto
$('[class*="navbar-left"]').each(function() {
	this.className = this.className.replace("navbar-left", "mr-auto"); 
});
//Update navbar-fixed-top to fixed-top
$('[class*="navbar-fixed-top"]').each(function() {
	this.className = this.className.replace("navbar-fixed-top", "fixed-top"); 
});
/*NAVBAR END*/

/*NAVS*/
$(document).find('.nav > li').addClass('nav-item');
$(document).find('.nav > li > a').addClass('nav-link');
/*NAVS END*/

/*PAGINATION*/
$(document).find('.pagination > li').addClass('page-item');
$(document).find('.pagination > li > a').addClass('page-link');
/*PAGINATION END*/

/*PANELS*/
//Update panel to card
$('[class*="panel"]').each(function() {
	this.className = this.className.replace("panel", "card"); 
});
//Update panel-group to card-group
$('[class*="panel-group"]').each(function() {
	this.className = this.className.replace("panel-group", "card-group"); 
});
//Update panel-heading to card-header
$('[class*="panel-heading"]').each(function() {
	this.className = this.className.replace("panel-heading", "card-header"); 
});
//Update panel-title to card-title
$('[class*="panel-title"]').each(function() {
	this.className = this.className.replace("panel-title", "card-title"); 
});
//Update panel-body to card-body
$('[class*="panel-body"]').each(function() {
	this.className = this.className.replace("panel-body", "card-body"); 
});
//Update panel-footer to card-footer
$('[class*="panel-footer"]').each(function() {
	this.className = this.className.replace("panel-footer", "card-footer"); 
});
/*PANELS END*/

/*PROGRESS*/
//Update progress-bar- to bg-
$('[class*="progress-bar-"]').each(function() {
	this.className = this.className.replace("progress-bar-", "bg-"); 
});
/*PROGRESS END*/

/*TABLE*/
//Update table-condensed to table-sm
$('[class*="table-condensed"]').each(function() {
	this.className = this.className.replace("table-condensed", "table-sm"); 
});
$(document).find('table.active').addClass('table-active');
$(document).find('table.success').addClass('table-success');
$(document).find('table.info').addClass('table-info');
$(document).find('table.warning').addClass('table-warning');
$(document).find('table.danger').addClass('table-danger');
/*TABLE END*/

});
