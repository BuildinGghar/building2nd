$(document).ready(function(){$(".ulPlumbing li").click(function(){var li=$(this);$(".ulPlumbing li").removeClass("active");li.addClass("active");});$(".ulPainting li").click(function(){var li=$(this);$(".ulPainting li").removeClass("active");li.addClass("active");});$(".ulWINDOWS").on('change','input[type=checkbox]',function(){var li=$(this).parent("div").parent("li");if($(this).is(':checked')){li.addClass("active");}
else{li.removeClass("active");}});$(".ulDOORS").on('change','input[type=checkbox]',function(){var li=$(this).parent("div").parent("li");if($(this).is(':checked')){li.addClass("active");}
else{li.removeClass("active");}});$(".ulElectrical li").click(function(){var li=$(this);$(".ulElectrical li").removeClass("active");li.addClass("active");});$(".ulFlooring").on('change','input[type=checkbox]',function(){var li=$(this).parent("div").parent("li");if($(this).is(':checked')){li.addClass("active");}
else{li.removeClass("active");}});$(".ulStructure li").click(function(){var li=$(this);$(".ulStructure li").removeClass("active");li.addClass("active");});$(".ulPlanning li").click(function(){var li=$(this);$(".ulPlanning li").removeClass("active");li.addClass("active");});$(".ulBHK li").click(function(){var li=$(this);$(".ulBHK li").removeClass("active");li.addClass("active");});$(".ulAmenities").on('change','input[type=checkbox]',function(){var li=$(this).parent("div").parent("li");if($(this).is(':checked')){li.addClass("active");}
else{li.removeClass("active");}});$(".ulSanitary li").click(function(){var li=$(this);$(".ulSanitary li").removeClass("active");li.addClass("active");});$(".custompackage_step1_next").click(function(){$(".custompackage_step1").css("display","none");$(".custompackage_step2").css("display","block");$(".custompackage_step3").css("display","none");$(".custompackage_step4").css("display","none");});$(".custompackage_step2_next").click(function(){$(".custompackage_step1").css("display","none");$(".custompackage_step2").css("display","none");$(".custompackage_step3").css("display","block");$(".custompackage_step4").css("display","none");});$(".custompackage_step2_prev").click(function(){$(".custompackage_step1").css("display","block");$(".custompackage_step2").css("display","none");$(".custompackage_step3").css("display","none");$(".custompackage_step4").css("display","none");});$(".custompackage_step3_prev").click(function(){$(".custompackage_step1").css("display","none");$(".custompackage_step2").css("display","block");$(".custompackage_step3").css("display","none");$(".custompackage_step4").css("display","none");});$(".custompackage_step3_next").click(function(){$(".custompackage_step1").css("display","none");$(".custompackage_step4").css("display","block");$(".custompackage_step3").css("display","none");$(".custompackage_step2").css("display","none");});$(".custompackage_step4_prev").click(function(){$(".custompackage_step1").css("display","none");$(".custompackage_step3").css("display","block");$(".custompackage_step2").css("display","none");$(".custompackage_step4").css("display","none");});$(".reqClass").change(function(){var inp=$(this);if(inp.val()===""){inp.addClass("requiredc");inp.focus();}
else{inp.removeClass("requiredc");}});$(".txtC_PEmail").change(function(){var email=$(".txtC_PEmail").val();if(email!==""){if(!ValidateEmail(email)){$(".txtC_PEmail").addClass("requiredc");}}
else{$(".txtC_PEmail").addClass("requiredc");}});$(".txtC_Email").change(function(){var email=$(".txtC_Email").val();if(email!==""){if(!ValidateEmail(email)){$(".txtC_Email").focus();$(".txtC_Email").addClass("requiredc");}}
else{$(".txtC_Email").focus();$(".txtC_Email").addClass("requiredc");}});$(".emailValidation").change(function(){var email=$(this);if(email.val()!==""){if(!ValidateEmail(email.val())){email.focus();email.addClass("requiredc");}}});$(".submitC_P").click(function(){$(".spanC_PStatus").empty();$(".submitC_P").empty();$(".submitC_P").append("Please wait...");var ulPlumbing=$(".ulPlumbing .active").html();var ulPainting=$(".ulPainting .active").html();var ulWINDOWS="";$(".ulWINDOWS .active").each(function(index){ulWINDOWS+=$(this).find("label").html()+",";});var ulDOORS="";$(".ulDOORS .active").each(function(index){ulDOORS+=$(this).find("label").html()+",";});var ulElectrical=$(".ulElectrical .active").html();var ulFlooring="";$(".ulFlooring .active").each(function(index){ulFlooring+=$(this).find("label").html()+",";});var ulStructure=$(".ulStructure .active").attr('li-data');var ulPlanning=$(".ulPlanning .active").html();var ddlHomeLoan=$(".ddlHomeLoan").val();var txtBudget=$(".txtBudget").val();var ulBHK=$(".ulBHK .active").html();var ulSanitary=$(".ulSanitary .active").html();var ulAmenities="";$(".ulAmenities .active").each(function(index){ulAmenities+=$(this).find("label").html()+",";});var ddlConstruction=$(".ddlConstruction").val();var ddlHouseType=$(".ddlHouseType").val();var ddlFloors=$(".ddlFloors").val();var ddlDesign=$(".ddlDesign").val();var ddlInterior=$(".ddlInterior").val();var txtPlotLocation=$(".txtPlotLocation").val();var txtSiteArea=$(".txtSiteArea").val();var txtName=$(".txtC_PName").val();var txtMobile=$(".txtC_PMobile").val();var txtEmail=$(".txtC_PEmail").val();var txtCity=$(".txtC_PCity").val();var txtQueries=$(".txtC_PQueries").val();if(txtName!==""&&txtMobile!==""&&txtEmail!==""&&txtCity!==""&&txtQueries!==""&&ValidateEmail(txtEmail)){var data1="{Plumbing:'"+ulPlumbing+"', Painting:'"+ulPainting+"', windows_:'"+ulWINDOWS+"', doors:'"+ulDOORS+"', Electrical:'"+ulElectrical+"', Flooring:'"+ulFlooring+"', Structure:'"+ulStructure+"', Planning:'"+ulPlanning+"', HomeLoan:'"+ddlHomeLoan+"', Budget:'"+txtBudget+"', Bathroom:'', BHK:'"+ulBHK+"', HouseType:'"+ddlHouseType+"', Floors:'"+ddlFloors+"', Design:'"+ddlDesign+"', Interior:'"+ddlInterior+"', PlotLocation:'"+txtPlotLocation+"', SiteArea:'"+txtSiteArea+"', Name_:'"+txtName+"', Mobile:'"+txtMobile+"', Email:'"+txtEmail+"', City:'"+txtCity+"', Queries:'"+txtQueries+"',Sanitary:'"+ulSanitary+"', Amenities:'"+ulAmenities+"', Construction:'"+ddlConstruction+"'}";$.ajax({url:"/IndMasonApi.asmx/CustomPackageCreation",data:data1,type:"POST",contentType:"application/json; charset=utf-8",dataType:"json",success:function(r){if(r.d.toString()==="Success"){$(".txtBudget").val("");$(".txtPlotLocation").val("");$(".txtSiteArea").val("");$(".txtC_PName").val("");$(".txtC_PMobile").val("");$(".txtC_PEmail").val("");$(".txtC_PCity").val("");$(".txtC_PQueries").val("");$(".spanC_PStatus").css("color","green");$(".spanC_PStatus").append("Custom package request posted successfully. Our Team will get back you shortly.");}
else{$(".spanC_PStatus").css("color","red");$(".spanC_PStatus").append("There is some problem now. Please try after some time.");}
$(".submitC_P").empty();$(".submitC_P").append("<i class='fa fa-chevron-right'></i> SUBMIT");}});}
else{$(".submitC_P").empty();$(".submitC_P").append("<i class='fa fa-chevron-right'></i> SUBMIT");if(txtName===""){$(".txtC_PName").addClass("requiredc");$(".txtC_PName").focus();}
if(txtMobile===""){$(".txtC_PMobile").addClass("requiredc");$(".txtC_PMobile").focus();}
if(txtEmail===""){$(".txtC_PEmail").addClass("requiredc");$(".txtC_PEmail").focus();}
else{$(".txtC_PEmail").addClass("requiredc");$(".txtC_PEmail").focus();}
if(txtCity===""){$(".txtC_PCity").addClass("requiredc");$(".txtC_PCity").focus();}
if(txtQueries===""){$(".txtC_PQueries").addClass("requiredc");$(".txtC_PQueries").focus();}}});$(".const_enq_submit_form").click(function(){$(".const_enq_submit_form").empty();$(".const_enq_submit_form").append("Please wait...");$(".spanS_Status").empty();var name_=$(".txtCE_CPerson").val();var mobile=$(".txtCE_Contact").val();var email=$(".txtCE_Email").val();var service=$(".txtCE_Service").val();var location=$(".txtCE_Location").val();var housetype=$(".txtCE_HouseType").val();var floor=$(".txtCE_floor").val();var bhk=$(".txtCE_BHK").val();var constType=$(".txtCE_ConstType").val();var hl=$(".txtCE_HomeLoan").val();var whenTo=$(".txtCE_When").val();var budget=$(".txtCE_Budget").val();var site=$(".txtCE_Site").val();var msg=$(".txtCE_Msg").val();var rurl="/IndMasonApi.asmx/ConstructionEnquiry";if(name_!==""&&mobile!==""&&email!==""&&location!==""&&housetype!==""&&ValidateEmail(email)){$.ajax({url:rurl,data:"{name_:'"+name_+"', mobile:'"+mobile+"', email:'"+email+"', service:'"+service+"', location:'"+location+"', housetype:'"+housetype+"', floor:'"+floor+"',  bhk:'"+bhk+"',  constType:'"+constType+"',  hl:'"+hl+"',  whenTo:'"+whenTo+"',  budget:'"+budget+"',  site:'"+site+"',  msg:'"+msg+"'}",type:"POST",contentType:"application/json; charset=utf-8",dataType:"json",success:function(r){if(r.d.toString()==="Success"){$(".txtCE_CPerson").val("");$(".txtCE_Contact").val("");$(".txtCE_Email").val("");$(".txtCE_Service").val("");$(".txtCE_Location").val("");$(".txtCE_HouseType").val("");$(".txtCE_floor").val("");$(".txtCE_BHK").val("");$(".txtCE_ConstType").val("");$(".txtCE_HomeLoan").val("");$(".txtCE_When").val("");$(".txtCE_Budget").val("");$(".txtCE_Site").val("");$(".txtCE_Msg").val("");$(".spanS_Status").css("color","green");$(".spanS_Status").append("Query posted successfully. Our Team will get back you shortly.");}
else{$(".spanS_Status").css("color","red");$(".spanS_Status").append("There is some problem now. Please try after some time.");}
$(".const_enq_submit_form").empty();$(".const_enq_submit_form").append("Submit");}});}
else{$(".const_enq_submit_form").empty();$(".const_enq_submit_form").append("Submit");if(name_===""){$(".txtCE_CPerson").addClass("requiredc");$(".txtCE_CPerson").focus();}
if(mobile===""){$(".txtCE_Contact").addClass("requiredc");$(".txtCE_Contact").focus();}
if(location===""){$(".txtCE_Location").addClass("requiredc");$(".txtCE_Location").focus();}
if(housetype===""){$(".txtCE_HouseType").addClass("requiredc");$(".txtCE_HouseType").focus();}
if(email===""){$(".txtCE_Email").addClass("requiredc");$(".txtCE_Email").focus();}
else{$(".txtCE_Email").addClass("requiredc");$(".txtCE_Email").focus();}}
return false;});$(".supplier_submit_form").click(function(){$(".supplier_submit_form").empty();$(".supplier_submit_form").append("Please wait...");$(".spanS_Status").empty();var name_=$(".txtS_CPerson").val();var mobile=$(".txtS_Contact").val();var email=$(".txtS_Email").val();var compName=$(".txtS_CompName").val();var telNo=$(".txtS_TelNo").val();var branch=$(".txtS_Branch").val();var address=$(".txtS_Address").val();var faxno=$(".txtS_FaxNo").val();var material=$(".txtS_Material").val();var curl=$(".txtS_Url").val();var companyType=$(".ddlCompanyType").val();var rurl="/IndMasonApi.asmx/SupplierEnquiry";if(name_!==""&&mobile!==""&&email!==""&&branch!==""&&address!==""&&compName!==""&&telNo!==""&&ValidateEmail(email)){$.ajax({url:rurl,data:"{name_:'"+name_+"', mobile:'"+mobile+"', email:'"+email+"', compName:'"+compName+"', telNo:'"+telNo+"', branch:'"+branch+"', address:'"+address+"',  faxno:'"+faxno+"',  material:'"+material+"',  curl:'"+curl+"',  companyType:'"+companyType+"'}",type:"POST",contentType:"application/json; charset=utf-8",dataType:"json",success:function(r){if(r.d.toString()==="Success"){$(".txtS_CPerson").val("");$(".txtS_Contact").val("");$(".txtS_Email").val("");$(".txtS_CompName").val("");$(".txtS_TelNo").val("");$(".txtS_Branch").val("");$(".txtS_Address").val("");$(".txtS_FaxNo").val("");$(".txtS_Material").val("");$(".txtS_Url").val("");$(".spanS_Status").css("color","green");$(".spanS_Status").append("Query posted successfully. Our Team will get back you shortly.");}
else{$(".spanS_Status").css("color","red");$(".spanS_Status").append("There is some problem now. Please try after some time.");}
$(".supplier_submit_form").empty();$(".supplier_submit_form").append("Submit");}});}
else{$(".supplier_submit_form").empty();$(".supplier_submit_form").append("Submit");if(name_===""){$(".txtS_CPerson").addClass("requiredc");$(".txtS_CPerson").focus();}
if(mobile===""){$(".txtS_Contact").addClass("requiredc");$(".txtS_Contact").focus();}
if(address===""){$(".txtS_Address").addClass("requiredc");$(".txtS_Address").focus();}
if(branch===""){$(".txtS_Branch").addClass("requiredc");$(".txtS_Branch").focus();}
if(compName===""){$(".txtS_CompName").addClass("requiredc");$(".txtS_CompName").focus();}
if(telNo===""){$(".txtS_TelNo").addClass("requiredc");$(".txtS_TelNo").focus();}
if(email===""){$(".txtS_Email").addClass("requiredc");$(".txtS_Email").focus();}
else{$(".txtS_Email").addClass("requiredc");$(".txtS_Email").focus();}}
return false;});$(".contractor_submit_form").click(function(){$(".contractor_submit_form").empty();$(".contractor_submit_form").append("Please wait...");$(".spanS_Status").empty();var name_=$(".txtS_CPerson").val();var mobile=$(".txtS_Contact").val();var email=$(".txtS_Email").val();var compName=$(".txtS_CompName").val();var telNo=$(".txtS_TelNo").val();var city=$(".txtS_City").val();var state=$(".txtS_State").val();var address=$(".txtS_Address").val();var faxno=$(".txtS_FaxNo").val();var zip=$(".txtS_Zip").val();var curl=$(".txtS_Url").val();var companyType=$("input[name='companyType']:checked").val();var rurl="/IndMasonApi.asmx/ContractorEnquiry";if(name_!==""&&mobile!==""&&email!==""&&city!==""&&address!==""&&compName!==""&&telNo!==""&&zip!==""&&state!==""&&ValidateEmail(email)){$.ajax({url:rurl,data:"{name_:'"+name_+"', mobile:'"+mobile+"', email:'"+email+"', compName:'"+compName+"', telNo:'"+telNo+"', address:'"+address+"', city:'"+city+"', state:'"+state+"', faxno:'"+faxno+"',  zipcode:'"+zip+"',  curl:'"+curl+"',  companyType:'"+companyType+"'}",type:"POST",contentType:"application/json; charset=utf-8",dataType:"json",success:function(r){if(r.d.toString()==="Success"){$(".txtS_CPerson").val("");$(".txtS_Contact").val("");$(".txtS_Email").val("");$(".txtS_CompName").val("");$(".txtS_TelNo").val("");$(".txtS_City").val("");$(".txtS_State").val();$(".txtS_Address").val("");$(".txtS_FaxNo").val("");$(".txtS_Zip").val("");$(".txtS_Url").val("");$(".spanS_Status").css("color","green");$(".spanS_Status").append("Query posted successfully. Our Team will get back you shortly.");}
else{$(".spanS_Status").css("color","red");$(".spanS_Status").append("There is some problem now. Please try after some time.");}
$(".contractor_submit_form").empty();$(".contractor_submit_form").append("Submit");}});}
else{$(".contractor_submit_form").empty();$(".contractor_submit_form").append("Submit");if(name_===""){$(".txtS_CPerson").addClass("requiredc");$(".txtS_CPerson").focus();}
if(mobile===""){$(".txtS_Contact").addClass("requiredc");$(".txtS_Contact").focus();}
if(address===""){$(".txtS_Address").addClass("requiredc");$(".txtS_Address").focus();}
if(city===""){$(".txtS_City").addClass("requiredc");$(".txtS_City").focus();}
if(compName===""){$(".txtS_CompName").addClass("requiredc");$(".txtS_CompName").focus();}
if(telNo===""){$(".txtS_TelNo").addClass("requiredc");$(".txtS_TelNo").focus();}
if(zip===""){$(".txtS_Zip").addClass("requiredc");$(".txtS_Zip").focus();}
if(state===""){$(".txtS_State").addClass("requiredc");$(".txtS_State").focus();}
if(email===""){$(".txtS_Email").addClass("requiredc");$(".txtS_Email").focus();}
else{$(".txtS_Email").addClass("requiredc");$(".txtS_Email").focus();}}
return false;});$(".consultant_submit_form").click(function(){$(".consultant_submit_form").empty();$(".consultant_submit_form").append("Please wait...");$(".spanS_Status").empty();var name_=$(".txtS_CPerson").val();var mobile=$(".txtS_Contact").val();var email=$(".txtS_Email").val();var compName=$(".txtS_CompName").val();var telNo=$(".txtS_TelNo").val();var city=$(".txtS_City").val();var state=$(".txtS_State").val();var address=$(".txtS_Address").val();var faxno=$(".txtS_FaxNo").val();var zip=$(".txtS_Zip").val();var curl=$(".txtS_Url").val();var rurl="/IndMasonApi.asmx/ConsultantEnquiry";if(name_!==""&&mobile!==""&&email!==""&&city!==""&&address!==""&&compName!==""&&telNo!==""&&zip!==""&&state!==""&&ValidateEmail(email)){$.ajax({url:rurl,data:"{name_:'"+name_+"', mobile:'"+mobile+"', email:'"+email+"', compName:'"+compName+"', telNo:'"+telNo+"', address:'"+address+"', city:'"+city+"', state:'"+state+"', faxno:'"+faxno+"',  zipcode:'"+zip+"',  curl:'"+curl+"'}",type:"POST",contentType:"application/json; charset=utf-8",dataType:"json",success:function(r){if(r.d.toString()==="Success"){$(".txtS_CPerson").val("");$(".txtS_Contact").val("");$(".txtS_Email").val("");$(".txtS_CompName").val("");$(".txtS_TelNo").val("");$(".txtS_City").val("");$(".txtS_State").val();$(".txtS_Address").val("");$(".txtS_FaxNo").val("");$(".txtS_Zip").val("");$(".txtS_Url").val("");$(".spanS_Status").css("color","green");$(".spanS_Status").append("Query posted successfully. Our Team will get back you shortly.");}
else{$(".spanS_Status").css("color","red");$(".spanS_Status").append("There is some problem now. Please try after some time.");}
$(".consultant_submit_form").empty();$(".consultant_submit_form").append("Submit");}});}
else{$(".consultant_submit_form").empty();$(".consultant_submit_form").append("Submit");if(name_===""){$(".txtS_CPerson").addClass("requiredc");$(".txtS_CPerson").focus();}
if(mobile===""){$(".txtS_Contact").addClass("requiredc");$(".txtS_Contact").focus();}
if(address===""){$(".txtS_Address").addClass("requiredc");$(".txtS_Address").focus();}
if(city===""){$(".txtS_City").addClass("requiredc");$(".txtS_City").focus();}
if(compName===""){$(".txtS_CompName").addClass("requiredc");$(".txtS_CompName").focus();}
if(telNo===""){$(".txtS_TelNo").addClass("requiredc");$(".txtS_TelNo").focus();}
if(zip===""){$(".txtS_Zip").addClass("requiredc");$(".txtS_Zip").focus();}
if(state===""){$(".txtS_State").addClass("requiredc");$(".txtS_State").focus();}
if(email===""){$(".txtS_Email").addClass("requiredc");$(".txtS_Email").focus();}
else{$(".txtS_Email").addClass("requiredc");$(".txtS_Email").focus();}}
return false;});$(".EN_submit_form").click(function(){$(".EN_submit_form").empty();$(".EN_submit_form").append("Please wait...");$(".spanEN_Status").empty();var pname_=getUrlParameter("p");var tp=getUrlParameter("t");var city=$(".txtEN_City").val();var cat=$(".ddlEN_Category").val();var req=$(".txtEN_Require").val();var rurl="/IndMasonApi.asmx/PackageEnquiry";if(tp==="s"){rurl="/IndMasonApi.asmx/ServiceEnquiry";}
var name_=$(".txtEN_Name").val();var mobile=$(".txtEN_Mob").val();var email=$(".txtEN_Email").val();var msg=$(".txtEN_Msg").val();if(name_!==""&&mobile!==""&&email!==""&&req!==""&&cat!==""&&city!==""&&ValidateEmail(email)){$.ajax({url:rurl,data:"{name_:'"+name_+"', mobile:'"+mobile+"', email:'"+email+"', city:'"+city+"', msg:'"+msg+"', package:'"+pname_+"', cat:'"+cat+"',  reqservice:'"+req+"'}",type:"POST",contentType:"application/json; charset=utf-8",dataType:"json",success:function(r){if(r.d.toString()==="Success"){$(".txtEN_Name").val("");$(".txtEN_Mob").val("");$(".txtEN_Email").val("");$(".txtEN_Msg").val("");$(".txtEN_Require").val("");$(".spanEN_Status").css("color","green");$(".spanEN_Status").append("Query posted successfully. Our Team will get back you shortly.");}
else{$(".spanEN_Status").css("color","red");$(".spanEN_Status").append("There is some problem now. Please try after some time.");}
$(".EN_submit_form").empty();$(".EN_submit_form").append("Submit");}});}
else{$(".EN_submit_form").empty();$(".EN_submit_form").append("Submit");if(name_===""){$(".txtEN_Name").addClass("requiredc");$(".txtEN_Name").focus();}
if(mobile===""){$(".txtEN_Mob").addClass("requiredc");$(".txtEN_Mob").focus();}
if(city===""){$(".txtEN_City").addClass("requiredc");$(".txtEN_City").focus();}
if(cat===""){$(".ddlEN_Category").addClass("requiredc");$(".ddlEN_Category").focus();}
if(req===""){$(".txtEN_Require").addClass("requiredc");$(".txtEN_Require").focus();}
if(email===""){$(".txtEN_Email").addClass("requiredc");$(".txtEN_Email").focus();}
else{$(".txtEN_Email").addClass("requiredc");$(".txtEN_Email").focus();}}
return false;});$(".contact_submit_form").click(function(){$(".contact_submit_form").empty();$(".contact_submit_form").append("Please wait...");$(".spanC_Status").empty();var name_=$(".txtC_Name").val();var mobile=$(".txtC_Mob").val();var email=$(".txtC_Email").val();var qry=$(".ddlC_Query").val();var msg=$(".txtC_Msg").val();var service=$(".ddlC_Service").val();var state=$(".txtC_State").val();var city=$(".txtC_City").val();var location=$(".txtC_Location").val();var terms=$("#chkTerms").prop('checked');if(name_!==""&&mobile!==""&&state!==""&&city!==""&&location!==""&&email!==""&&ValidateEmail(email)){if(terms===true){$.ajax({url:"/IndMasonApi.asmx/ContactUs",data:"{name_:'"+name_+"', mobile:'"+mobile+"', email:'"+email+"', qry:'"+qry+"', msg:'"+msg+"', service:'"+service+"', state:'"+state+"', city:'"+city+"', location:'"+location+"'}",type:"POST",contentType:"application/json; charset=utf-8",dataType:"json",success:function(r){if(r.d.toString()==="Success"){$(".txtC_Name").val("");$(".txtC_Mob").val("");$(".txtC_Email").val("");$(".txtC_State").val("");$(".txtC_City").val("");$(".txtC_Location").val("");$(".txtC_Msg").val("");$(".spanC_Status").css("color","green");$(".spanC_Status").append("Query posted successfully. Our Team will get back you shortly.");}
else{$(".spanC_Status").css("color","red");$(".spanC_Status").append("There is some problem now. Please try after some time.");}
$(".contact_submit_form").empty();$(".contact_submit_form").append("Submit");}});}
else{$(".contact_submit_form").empty();$(".contact_submit_form").append("Submit");alert("Please accect the terms and condition");}}
else{$(".contact_submit_form").empty();$(".contact_submit_form").append("Submit");if(state===""){$(".txtC_State").addClass("requiredc");$(".txtC_State").focus();}
if(city===""){$(".txtC_City").addClass("requiredc");$(".txtC_City").focus();}
if(location===""){$(".txtC_Location").addClass("requiredc");$(".txtC_Location").focus();}
if(name_===""){$(".txtC_Name").addClass("requiredc");$(".txtC_Name").focus();}
if(mobile===""){$(".txtC_Mob").addClass("requiredc");$(".txtC_Mob").focus();}
if(email===""){$(".txtC_Email").addClass("requiredc");$(".txtC_Email").focus();}
else{$(".txtC_Email").addClass("requiredc");$(".txtC_Email").focus();}}
return false;});$(".contact").click(function(){$(".contact").empty();$(".contact").append("Please wait...");$(".spanC_Status").empty();var name_=$(".txtC_Name").val();var mobile=$(".txtC_Mob").val();var msg=$(".txtC_Msg").val();var city=$(".txtC_City").val();if(name_!==""&&mobile!==""&&city!==""){$.ajax({url:"/IndMasonApi.asmx/EnquiryUs",data:"{name_:'"+name_+"', mobile:'"+mobile+"', msg:'"+msg+"', city:'"+city+"'}",type:"POST",contentType:"application/json; charset=utf-8",dataType:"json",success:function(r){if(r.d.toString()==="Success"){$(".txtC_Name").val("");$(".txtC_Mob").val("");$(".txtC_City").val("");$(".txtC_Msg").val("");alert("Query posted successfully. Our Team will get back you shortly.");$('#StudentDetails').modal('hide');}
else{alert("There is some problem now. Please try after some time.");}
$(".contact").empty();$(".contact").append("Submit");}});}
else{$(".contact").empty();$(".contact").append("Submit");if(city===""){$(".txtC_City").addClass("requiredc");$(".txtC_City").focus();}
if(name_===""){$(".txtC_Name").addClass("requiredc");$(".txtC_Name").focus();}
if(mobile===""){$(".txtC_Mob").addClass("requiredc");$(".txtC_Mob").focus();}}
return false;});$(".HE_Submit").click(function(){$(".HE_Submit").empty();$(".HE_Submit").append("Please wait...");$(".spanHE_Status").empty();var name_=$(".txtHE_Name").val();var mobile=$(".txtHE_Mob").val();var email=$(".txtHE_Email").val();var city=$(".ddlHECity").val();var pin=$(".txtHE_Pin").val();if(name_!==""&&mobile!==""&&email!==""&&ValidateEmail(email)&&city!==""&&pin!==""){$.ajax({url:"/IndMasonApi.asmx/HomeEnquiry",data:"{name_:'"+name_+"', mobile:'"+mobile+"', email:'"+email+"', city:'"+city+"', pin:'"+pin+"'}",type:"POST",contentType:"application/json; charset=utf-8",dataType:"json",success:function(r){if(r.d.toString()==="Success"){$(".txtHE_Name").val("");$(".txtHE_Mob").val("");$(".txtHE_Email").val("");$(".txtHE_Pin").val("");$(".spanHE_Status").css("color","green");$(".spanHE_Status").append("Query posted successfully. Our Team will get back you shortly.");}
else{$(".spanHE_Status").css("color","red");$(".spanHE_Status").append("There is some problem now. Please try after some time.");}
$(".HE_Submit").empty();$(".HE_Submit").append("Submit");}});}
else{$(".HE_Submit").empty();$(".HE_Submit").append("Submit");if(name_===""){$(".txtHE_Name").addClass("requiredc");$(".txtHE_Name").focus();}
if(mobile===""){$(".txtHE_Mob").addClass("requiredc");$(".txtHE_Mob").focus();}
if(email===""){$(".txtHE_Email").addClass("requiredc");$(".txtHE_Email").focus();}
else{$(".txtHE_Email").addClass("requiredc");$(".txtHE_Email").focus();}
if(city===""){$(".ddlHECity").addClass("requiredc");$(".ddlHECity").focus();}
if(pin===""){$(".txtHE_Pin").addClass("requiredc");$(".txtHE_Pin").focus();}}
return false;});});function isNumber(evt){evt=(evt)?evt:window.event;var charCode=(evt.which)?evt.which:evt.keyCode;if(charCode>31&&(charCode<48||charCode>57)){return false;}
return true;}
var getUrlParameter=function getUrlParameter(sParam){var sPageURL=window.location.search.substring(1),sURLVariables=sPageURL.split('&'),sParameterName,i;for(i=0;i<sURLVariables.length;i++){sParameterName=sURLVariables[i].split('=');if(sParameterName[0]===sParam){return sParameterName[1]===undefined?true:decodeURIComponent(sParameterName[1]);}}};function ValidateEmail(email){var expr=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;return expr.test(email);}