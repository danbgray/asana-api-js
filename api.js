/*
    A suite of functions to pull down the right bits of data
    from asana.
*/

var k_base_url = 'https://app.asana.com/api/1.0';
var k_auth_token = undefined;

asana_api_call = function(uri_cmd, auth_token) {
    /*
        runs a generic asana api command,  
    */
    
    var url = k_base_url + uri_cmd;
    var err = "";

    if(auth_token === undefined) {
        auth_token = k_auth_token;
    }

    return Meteor.http.get(url, {
        timeout: 30000,
        auth: auth_token
    }); 
}


asana_api_get_projects = function(workspace_id) {
    /*
        @param workspace_id
        @returns list of projects
        
        For testing, load up sample data.
    */
    
    if(workspace_id === "test") {
        return sample_asana_projects;
    }
    
    projects = asana_api_call('/workspaces/'+workspace_id+'/projects').data;
    return projects;
}

asana_api_get_tasks_for_project = function(project_id, test) {
    /*
        @param project_id
        @returns list of tasks for a given project.
    */
    if(test === true) {
        for(var i=0;i<sample_asana_kanban_tasks.length;i++) {
            sample_asana_kanban_tasks[i]['project_id']=project_id;
        }
       return sample_asana_kanban_tasks;
    }
    tasks = asana_api_call("/project/"+project_id+"/tasks");
    return tasks;
}

asana_api_get_all_tasks_in_workspace = function(workspace_id) {
    /*
        @param workspace_id
        @returns list of all tasks in workspace
    */
}

asana_get_stories_for_taks = function(task_id) {
    
}
