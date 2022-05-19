function BuscarGithub(){
    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/gutoffline",
         success: (function(user){
             console.log(user)
             let nome = user.name
             let login = user.login
             let foto = user.avatar_url
             let twitter = user.twitter_username
             let github = user.url
             let medium = user.blog
             let instuicao = user.company
             let pais = user.location
             document.getElementById("informacao-completo").innerHTML = `<div class="col-md-5"><img src="${foto}" width="150"></div> <div class="col-md-7"> ${nome} (${login}) <br> <a href="${twitter}"><i class="bi bi-twitter"></i></a> <a href="${github}"><i class="bi bi-github" width="100"></i></a> <a href="${medium}"><i class="bi bi-medium"></i></a> <br> ${instuicao} - ${pais}`
        })
    })
}
document.getElementById("buscar").addEventListener("click", function() {
    BuscarGithub();
})