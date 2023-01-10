var alertBox = document.querySelector('.alertBox')
function getPassword(){
    var chars = "0123456789*/-!@#$%^&*()_+=\][{};':/.Α α, Β β, Γ γ, Δ δ, Ε ε, Ζ ζ, Η η, Θ θ, Ι ι, Κ κ, Λ λ, Μ μ, Ν ν, Ξ ξ, Ο ο, Π π, Ρ ρ, Σ σ/ς, Τ τ, Υ υ, Φ φ, Χ χ, Ψ ψ, Ω ω.m<lpokijnmhyutfgvbcxzsdfrewqabghtyQWERTYUIOPLKJHGFDSAZXCVBNM";
    var passwordLength = 22;
    var password="";

    for(var i = 0; i<passwordLength; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber+1);
    }
    document.getElementById("password").value = password
    alertBox.innerHTML = "Password Copied: <br> <br>" + password;
}

function copyPassword() {
    var copyPassText = document.getElementById("password")
    copyPassText.select();
    copyPassText.setSelectionRange(0, 9999);
    document.execCommand("copy");
    alertBox.classList.toggle('active');
    setTimeout(function(){
        alertBox.classList.toggle('active');
                    
    }, 2000)

}