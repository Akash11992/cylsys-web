var app = angular.module('myApp', []);
app.controller("Enquiry", ["$scope", "$timeout", "$http", "$location", function ($scope, $timeout, $http, $location) {
    $scope.enquiry = { "Name": "", "Email": "", "Phone": "","Service":"","position":"","file":"", "Requirment": ""};
	$scope.newsletter=function(contactdetails){
		debugger
        var emailbody = "Please find the details for News letter </br></br>"
        emailbody += "<table border='1'>"
        emailbody += "<tbody>"
        emailbody += "<tr>"
        emailbody += "<td style='background-color:lightgrey'>Name</td>"
        emailbody += "<td>" + contactdetails.Name + "</td>"
        emailbody += "</tr>"
        emailbody += "<tr>"
        emailbody += "<td style='background-color:lightgrey'>Email</td>"
        emailbody += "<td>" + contactdetails.Email + "</td>"
        emailbody += "</tr>"
        emailbody += "</tbody>"
        emailbody += "</table>"
        emailbody += "</br></br>Thanks</br>Team Cylsys"
		if((contactdetails.Name==="")||(contactdetails.Email==="") ||(contactdetails.Name===undefined) ||(contactdetails.Email===undefined))
		{
			alert("Fields can not be blank !");
			return;
		}
		else{
        var data = {
            "UserID": "reachus@cylsys.com",
            "AccountType": "Exchange",
            "Name": "Sales",
            "Email": "pawas.goyal@cylsys.com",
            "Server": null,
            "Port": 0,
            "ProjectCode": "CYLSYS",
            "CompanyName": "Cylsys",
            "ToEmail": ["pawas.goyal@cylsys.com"],
            "CCEmail": null,
            "BCCEmail": ["pawas.goyal@cylsys.com"],
            "Body": emailbody,
            "Subject": "News letter from Cylsys.Com",
            "Templatename": null,
            "ListofAttchment": null,
            "ServiceUser":"gfpemailserviceUser",
            "ServicePassword":"gfpemailserviceUser@@##$$"
        };
        $http({
            method: "POST",
            url: "https://emailservice.cylsys.com/api/SmtpEmail/SendEmail",
            dataType: 'json',
            data: data,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (success) {
            alert("Thanks for registering. Look forward to receiving updates from the world of Cylsys and Technology.");
			window.location.reload()
			
        });
		}
    };
    $scope.submit = function (contactdetails,page_name) {
        debugger
        var emailbody = "Please find the enquiry details </br></br>"
        emailbody += "<table border='1'>"
        emailbody += "<tbody>"
        emailbody += "<tr>"
        emailbody += "<td style='background-color:lightgrey'>Name</td>"
        emailbody += "<td>" + contactdetails.Name + "</td>"
        emailbody += "</tr>"
        emailbody += "<tr>"
        emailbody += "<td style='background-color:lightgrey'>Email</td>"
        emailbody += "<td>" + contactdetails.Email + "</td>"
        emailbody += "</tr>"
		emailbody += "<tr>"
        emailbody += "<td style='background-color:lightgrey'>Phone</td>"
        emailbody += "<td>" + contactdetails.Phone + "</td>"
        emailbody += "</tr>"
     if(page_name==="QuickContact"){
        emailbody += "<tr>"
        emailbody += "<td style='background-color:lightgrey'>Service</td>"
        emailbody += "<td>" + contactdetails.Service + "</td>"
        emailbody += "</tr>"
         }
		 if(page_name==="Career"){
        emailbody += "<tr>"
        emailbody += "<td style='background-color:lightgrey'>Position</td>"
        emailbody += "<td>" + contactdetails.position + "</td>"
        emailbody += "</tr>"			
          }
	    emailbody += "<tr>"
        emailbody += "<td style='background-color:lightgrey'>Requirement</td>"
        emailbody += "<td>" + contactdetails.Requirment + "</td>"
        emailbody += "</tr>"
        emailbody += "</tbody>"
        emailbody += "</table>"
        emailbody += "</br></br>Thanks</br>Team Cylsys"
		if((contactdetails.Name==="")||(contactdetails.Email==="") ||(contactdetails.Name===undefined) ||(contactdetails.Email===undefined))
		{
			alert("Fields can not be blank !");
			return;
		}
		else if(((contactdetails.Phone==="")||(contactdetails.Phone===undefined)) && (page_name!=="Newsletter")){
			alert("Fields can not be blank !");
			return;
		}
		else{
        var data = {
            "UserID": "reachus@cylsys.com",
            "AccountType": "Exchange",
            "Name": "Sales",
            "Email": "pawas.goyal@cylsys.com",
            "Server": null,
            "Port": 0,
            "ProjectCode": "CYLSYS",
            "CompanyName": "Cylsys",
            "ToEmail": ["pawas.goyal@cylsys.com"],
            "CCEmail": null,
            "BCCEmail": ["pawas.goyal@cylsys.com"],
            "Body": emailbody,
            "Subject": "Enquiry From Cylsys.Com",
            "Templatename": null,
            "ListofAttchment": null,
            "ServiceUser":"gfpemailserviceUser",
            "ServicePassword":"gfpemailserviceUser@@##$$"
        };
        $http({
            method: "POST",
            url: "https://emailservice.cylsys.com/api/SmtpEmail/SendEmail",
            dataType: 'json',
            data: data,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (success) {
            alert("Thanks for your enquiry, Our team will reach you soon !");
			window.location.reload()
        });
		}
    };
	
}]);
app.directive('fdInput', [function () {
    return {
        link: function (scope, element, attrs) {
            element.on('change', function  (evt) {
				debugger;
                var files = evt.target.files;
                alert(files[0].name);
                alert(files[0].size);
            });
        }
    }
}]);