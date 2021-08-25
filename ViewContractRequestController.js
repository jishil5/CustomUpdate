({
    handleLoad : function(component, event, helper) {
        console.log('handle handleLoad');
        component.set("v.showSpinner", false);
    },
    handleSubmit : function(component, event, helper) {
        event.preventDefault(); // Prevent default submit
        var fields = event.getParam("fields");
        
        component.find('createAccountForm').submit(fields); 
        console.log('handle handleSubmit');
        
        var DocumentType = fields.Document_Type__c;
        var recordId = component.get('v.recordId');
        let oppName = component.get("v.oppName");
        
        if(DocumentType =='KSTE – KORE SIM Transfer Exhibit'){
            
            var urlEvent = $A.get("e.force:navigateToURL");
            urlEvent.setParams({
                "url": 'https://uatna11.springcm.com/atlas/doclauncher/eos/Custom Contract Jishil?aid=9909&eos[0].Id="+recordId"&eos[0].System=Salesforce&eos[0].Type=Opportunity&eos[0].Name={!Opportunity.Name}&eos[0].ScmPath=/{!Account.Name}/Opportunities'
                
                
                
            });
            
            urlEvent.fire();
        }else if(DocumentType =='KRA – KORE Referral Agreement'){
            //Test Purpose
            var urlEvent = $A.get("e.force:navigateToURL");
            urlEvent.setParams({
                "url": 'https://www.google.com/'
                
                
                
            });
            urlEvent.fire();  
        }
        
    },
    handleSuccess : function(component, event, helper) {
        
        console.log('record updated successfully');
        //alert('record updated successfully');
        
        component.set("v.showSpinner", false);
         $A.get("e.force:closeQuickAction").fire();
        $A.get('e.force:showToast').setParams({
            "title": "Success",
            "message": "Record has been updated!",
            "type": "success",
        }).fire();
        
    },
    handleUploadFinished: function (cmp, event) {
        // Get the list of uploaded files
        var uploadedFiles = event.getParam("files");
        alert("Files uploaded : " + uploadedFiles.length);
        
        // Get the file name
        uploadedFiles.forEach(file => console.log(file.name));
    },
    handleClose : function(component, event, helper) {
        var wasDismissed = $A.get("e.force:closeQuickAction").fire(); 
    }
})