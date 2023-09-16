document.addEventListener("DOMContentLoaded", function(){ 
    const users = [];
    const RENDER_EVENT = 'render-user';
    const submitButtonStatus = document.getElementById('submitButton');

    // Tab   
    const tabs = document.querySelectorAll("#myTab a")    
    tabs.forEach(function(tab){
        const tabTrigger = new bootstrap.Tab(tab);

        
        tab.addEventListener("click", function(event){
            event.preventDefault();
            tabTrigger.show();
        });
    });
})