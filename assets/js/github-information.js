function fetchGitHubInformation(event){
    var username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter a github username</h2>`)
    }
}