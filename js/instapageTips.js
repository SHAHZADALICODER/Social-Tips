document.getElementById("copyTitleButton").addEventListener("click", function() {
    let txtToCopy = document.getElementById("latestCaptionTxt").innerText;
    copyText(txtToCopy);
});

document.getElementById("copyTagsButton").addEventListener("click" , function(){
    let txtToCopy = document.getElementById("latestTagsTxt").innerText;
    copyText(txtToCopy);
})

function copyText(txt)
{
    navigator.clipboard.writeText(txt).then(function() {
        console.log('Text copied to clipboard');
        alert("Copied.! , Now you can use this into your instagram post/reels")
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
    });
}