class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var a = document.createElement('a');
        this.innerHTML = `
           <div class="container">
            <footer class="bg-dark">
                <div class="row">
                    <div class="col alignLeft">
                        <p><strong>Επικοινωνήστε μαζί μας</strong></p>
                        <p>Τηλέφωνο: 6986113446</p>
                        <p><a href="#">std101829@ac.eap.gr</a></p>
                    </div>
                    <div class="col alignRight">
                    <br>
                        <a href="#">Όροι χρήσης</a> | <a href="#">Πολιτική Απορρήτου</a>
                    </div>
                </div>
            </footer>
            </div>
    `;
    }
}


customElements.define('footer-component', Footer);
