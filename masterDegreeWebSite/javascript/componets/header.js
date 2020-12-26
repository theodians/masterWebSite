class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        var a = document.createElement('a');
        this.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <a href="mainPage.html">
                            <img id="UniStamp" src="../images/Screenshot%202020-12-14%20212944.png" alt="no picture available"
                                 class="border-top border-left rounded-top rounded-left rounded-sm rounded-circle">
                        </a>
                        <h5>
                            <b>UNIVERSITY <p>LEONARDO DA VINCI</p></b>
                        </h5>
                    </div>
                    <div class="col-12 col-md-8 alignCenter">
                        <h4>
                            <b>ΗΛΕΚΤΡΟΝΙΚΗ ΓΡΑΜΜΑΤΕΙΑ</b>
                        </h4>
                        <h6>
                            <b><p>ΜΕΤΑΠΤΥΧΙΑΚΟΥ ΠΡΟΓΡΑΜΜΑΤΟΣ ΚΑΛΩΝ ΤΕΧΝΩΝ</p></b>
                            <b><p>ΤΜΗΜΑ ΚΑΛΩΝ ΤΕΧΝΩΝ</p></b>
                            <b><p>ΠΑΝΕΠΙΣΤΗΜΙΟ LEONARDO DA VINCI</p></b>
                        </h6>
                    </div>
                    <div class="col-sm row align-items-center">
                    </div>
                    <div class="col-sm-auto row align-items-center">
                        <a href="Eisodos.html" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Είσοδος</a>
                    </div>
                </div>
            </div>
    `;
    }
}



customElements.define('header-component', Header);
