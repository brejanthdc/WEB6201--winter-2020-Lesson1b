// IIFE - IMmediattly invoked fucntion expression
// Anonymous self executing finction
(function(){
    function Start()
    {
        console.log("App Started...");

        let firstHeading = document.getElementById("firstHeading");
        firstHeading.textContent = "Goodbye cruel world!";

       /*  one line way of doing the above
        document.getElementById("firstHeading").textContent = "Goodbye " */

        firstHeading.style.fontWeight = "bold";

        let main = document.getElementsByTagName("main")[0];

            // configuring my new element
        let newH2 = document.createElement("h2");
        newH2.setAttribute("class", "Display-5");
        newH2.textContent = "secondary heading";
        main.appendChild(newH2);


    }

    window.addEventListener("load", Start);
})();