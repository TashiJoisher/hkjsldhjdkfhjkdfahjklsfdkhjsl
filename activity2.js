function GetScore() {
    score=localStorage.getItem("score");
    document.getElementById("Tashi").innerHTML="<h1>Score is:"+ score+"</h1>";

}
function Back(){
    window.location="activity_1.html";
}