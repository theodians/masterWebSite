class Navigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var a = document.createElement('a');
        this.innerHTML = `
           <div class="container" id="navbarTogglerDemo01">
                <nav class=" nav nav-pills nav-fill navbar navbar-expand-lg navbar navbar-dark bg-dark nav nav-pills nav-justified navbar-fixed-top">
                        <a class="navbar-brand" href="#"></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class=" nav nav-pills nav-fill collapse navbar-collapse" id="navbarSupportedContent">
                        <a class="nav-item nav-link textColor" href="mainPage.html">Αρχική</a>
                        <a class="nav-item nav-link textColor" href="Mathimata.html">Μαθήματα</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a class="nav-item nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Προσωπικό
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item" href="prosopiko.html">Προσωπικό</a>
                                        <a class="dropdown-item" href="Gramatia.html">Γραματεία</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <a class="nav-item nav-link textColor" href="Kanonismos.html">Κανονισμός Σπουδών</a>
                    </div>
                </nav>
            </div>
    `;
    }
}


customElements.define('navigation-component', Navigation);
