'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">mockthon documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-c26d27f5a5e99ff0834acf25a755278827f58efad3096781f521e2a39229709c25c3d23445632029e2ba77b73b00a605c99ec1ac9a3fd291c86b92c6ce5f1c0f"' : 'data-target="#xs-controllers-links-module-AppModule-c26d27f5a5e99ff0834acf25a755278827f58efad3096781f521e2a39229709c25c3d23445632029e2ba77b73b00a605c99ec1ac9a3fd291c86b92c6ce5f1c0f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-c26d27f5a5e99ff0834acf25a755278827f58efad3096781f521e2a39229709c25c3d23445632029e2ba77b73b00a605c99ec1ac9a3fd291c86b92c6ce5f1c0f"' :
                                            'id="xs-controllers-links-module-AppModule-c26d27f5a5e99ff0834acf25a755278827f58efad3096781f521e2a39229709c25c3d23445632029e2ba77b73b00a605c99ec1ac9a3fd291c86b92c6ce5f1c0f"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-c26d27f5a5e99ff0834acf25a755278827f58efad3096781f521e2a39229709c25c3d23445632029e2ba77b73b00a605c99ec1ac9a3fd291c86b92c6ce5f1c0f"' : 'data-target="#xs-injectables-links-module-AppModule-c26d27f5a5e99ff0834acf25a755278827f58efad3096781f521e2a39229709c25c3d23445632029e2ba77b73b00a605c99ec1ac9a3fd291c86b92c6ce5f1c0f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c26d27f5a5e99ff0834acf25a755278827f58efad3096781f521e2a39229709c25c3d23445632029e2ba77b73b00a605c99ec1ac9a3fd291c86b92c6ce5f1c0f"' :
                                        'id="xs-injectables-links-module-AppModule-c26d27f5a5e99ff0834acf25a755278827f58efad3096781f521e2a39229709c25c3d23445632029e2ba77b73b00a605c99ec1ac9a3fd291c86b92c6ce5f1c0f"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BookingModule.html" data-type="entity-link" >BookingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-BookingModule-fd3d00406ec26b9718e6b6850cf12d797b9161cc1e48d9a316cc8a935c53d842f9274aff00c350b8d79c4289c38c076bb1cc998d06a4120af05d556f9a152db2"' : 'data-target="#xs-controllers-links-module-BookingModule-fd3d00406ec26b9718e6b6850cf12d797b9161cc1e48d9a316cc8a935c53d842f9274aff00c350b8d79c4289c38c076bb1cc998d06a4120af05d556f9a152db2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BookingModule-fd3d00406ec26b9718e6b6850cf12d797b9161cc1e48d9a316cc8a935c53d842f9274aff00c350b8d79c4289c38c076bb1cc998d06a4120af05d556f9a152db2"' :
                                            'id="xs-controllers-links-module-BookingModule-fd3d00406ec26b9718e6b6850cf12d797b9161cc1e48d9a316cc8a935c53d842f9274aff00c350b8d79c4289c38c076bb1cc998d06a4120af05d556f9a152db2"' }>
                                            <li class="link">
                                                <a href="controllers/BookingController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookingController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BookingModule-fd3d00406ec26b9718e6b6850cf12d797b9161cc1e48d9a316cc8a935c53d842f9274aff00c350b8d79c4289c38c076bb1cc998d06a4120af05d556f9a152db2"' : 'data-target="#xs-injectables-links-module-BookingModule-fd3d00406ec26b9718e6b6850cf12d797b9161cc1e48d9a316cc8a935c53d842f9274aff00c350b8d79c4289c38c076bb1cc998d06a4120af05d556f9a152db2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BookingModule-fd3d00406ec26b9718e6b6850cf12d797b9161cc1e48d9a316cc8a935c53d842f9274aff00c350b8d79c4289c38c076bb1cc998d06a4120af05d556f9a152db2"' :
                                        'id="xs-injectables-links-module-BookingModule-fd3d00406ec26b9718e6b6850cf12d797b9161cc1e48d9a316cc8a935c53d842f9274aff00c350b8d79c4289c38c076bb1cc998d06a4120af05d556f9a152db2"' }>
                                        <li class="link">
                                            <a href="injectables/BookingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookingService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ConfigureService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigureService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StaffinfoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StaffinfoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConfigureModule.html" data-type="entity-link" >ConfigureModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ConfigureModule-7c4f70ea68593117daa8bdee3723b89a2333226fe76e44da8729b3cd8dc4c2f47f9d640d44f711a0a1454ba6721fca77b852bdfcfcb5d3be1ff0ee6ee1b9ee56"' : 'data-target="#xs-controllers-links-module-ConfigureModule-7c4f70ea68593117daa8bdee3723b89a2333226fe76e44da8729b3cd8dc4c2f47f9d640d44f711a0a1454ba6721fca77b852bdfcfcb5d3be1ff0ee6ee1b9ee56"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ConfigureModule-7c4f70ea68593117daa8bdee3723b89a2333226fe76e44da8729b3cd8dc4c2f47f9d640d44f711a0a1454ba6721fca77b852bdfcfcb5d3be1ff0ee6ee1b9ee56"' :
                                            'id="xs-controllers-links-module-ConfigureModule-7c4f70ea68593117daa8bdee3723b89a2333226fe76e44da8729b3cd8dc4c2f47f9d640d44f711a0a1454ba6721fca77b852bdfcfcb5d3be1ff0ee6ee1b9ee56"' }>
                                            <li class="link">
                                                <a href="controllers/ConfigureController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigureController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ConfigureModule-7c4f70ea68593117daa8bdee3723b89a2333226fe76e44da8729b3cd8dc4c2f47f9d640d44f711a0a1454ba6721fca77b852bdfcfcb5d3be1ff0ee6ee1b9ee56"' : 'data-target="#xs-injectables-links-module-ConfigureModule-7c4f70ea68593117daa8bdee3723b89a2333226fe76e44da8729b3cd8dc4c2f47f9d640d44f711a0a1454ba6721fca77b852bdfcfcb5d3be1ff0ee6ee1b9ee56"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ConfigureModule-7c4f70ea68593117daa8bdee3723b89a2333226fe76e44da8729b3cd8dc4c2f47f9d640d44f711a0a1454ba6721fca77b852bdfcfcb5d3be1ff0ee6ee1b9ee56"' :
                                        'id="xs-injectables-links-module-ConfigureModule-7c4f70ea68593117daa8bdee3723b89a2333226fe76e44da8729b3cd8dc4c2f47f9d640d44f711a0a1454ba6721fca77b852bdfcfcb5d3be1ff0ee6ee1b9ee56"' }>
                                        <li class="link">
                                            <a href="injectables/ConfigureService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigureService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StaffinfoModule.html" data-type="entity-link" >StaffinfoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-StaffinfoModule-23a76bc95ba8729e0fdcb5e9ad54ffb359e1e2eb77b47ba74243fcffd34e45ef5bb86c1792b371ff3ef25292b2e4fa45e78a4357a5b8d474cf693409d90be0d7"' : 'data-target="#xs-controllers-links-module-StaffinfoModule-23a76bc95ba8729e0fdcb5e9ad54ffb359e1e2eb77b47ba74243fcffd34e45ef5bb86c1792b371ff3ef25292b2e4fa45e78a4357a5b8d474cf693409d90be0d7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StaffinfoModule-23a76bc95ba8729e0fdcb5e9ad54ffb359e1e2eb77b47ba74243fcffd34e45ef5bb86c1792b371ff3ef25292b2e4fa45e78a4357a5b8d474cf693409d90be0d7"' :
                                            'id="xs-controllers-links-module-StaffinfoModule-23a76bc95ba8729e0fdcb5e9ad54ffb359e1e2eb77b47ba74243fcffd34e45ef5bb86c1792b371ff3ef25292b2e4fa45e78a4357a5b8d474cf693409d90be0d7"' }>
                                            <li class="link">
                                                <a href="controllers/StaffinfoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StaffinfoController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StaffinfoModule-23a76bc95ba8729e0fdcb5e9ad54ffb359e1e2eb77b47ba74243fcffd34e45ef5bb86c1792b371ff3ef25292b2e4fa45e78a4357a5b8d474cf693409d90be0d7"' : 'data-target="#xs-injectables-links-module-StaffinfoModule-23a76bc95ba8729e0fdcb5e9ad54ffb359e1e2eb77b47ba74243fcffd34e45ef5bb86c1792b371ff3ef25292b2e4fa45e78a4357a5b8d474cf693409d90be0d7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StaffinfoModule-23a76bc95ba8729e0fdcb5e9ad54ffb359e1e2eb77b47ba74243fcffd34e45ef5bb86c1792b371ff3ef25292b2e4fa45e78a4357a5b8d474cf693409d90be0d7"' :
                                        'id="xs-injectables-links-module-StaffinfoModule-23a76bc95ba8729e0fdcb5e9ad54ffb359e1e2eb77b47ba74243fcffd34e45ef5bb86c1792b371ff3ef25292b2e4fa45e78a4357a5b8d474cf693409d90be0d7"' }>
                                        <li class="link">
                                            <a href="injectables/StaffinfoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StaffinfoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-85a11fd52415ddf07851ad074e0f2a7be532f5b70cf5fd52b617e732d9aed71a8207cb146fb1b561b08fdb576206d47d2b2f02afc79262b4caa4d84c513bb790"' : 'data-target="#xs-controllers-links-module-UserModule-85a11fd52415ddf07851ad074e0f2a7be532f5b70cf5fd52b617e732d9aed71a8207cb146fb1b561b08fdb576206d47d2b2f02afc79262b4caa4d84c513bb790"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-85a11fd52415ddf07851ad074e0f2a7be532f5b70cf5fd52b617e732d9aed71a8207cb146fb1b561b08fdb576206d47d2b2f02afc79262b4caa4d84c513bb790"' :
                                            'id="xs-controllers-links-module-UserModule-85a11fd52415ddf07851ad074e0f2a7be532f5b70cf5fd52b617e732d9aed71a8207cb146fb1b561b08fdb576206d47d2b2f02afc79262b4caa4d84c513bb790"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-85a11fd52415ddf07851ad074e0f2a7be532f5b70cf5fd52b617e732d9aed71a8207cb146fb1b561b08fdb576206d47d2b2f02afc79262b4caa4d84c513bb790"' : 'data-target="#xs-injectables-links-module-UserModule-85a11fd52415ddf07851ad074e0f2a7be532f5b70cf5fd52b617e732d9aed71a8207cb146fb1b561b08fdb576206d47d2b2f02afc79262b4caa4d84c513bb790"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-85a11fd52415ddf07851ad074e0f2a7be532f5b70cf5fd52b617e732d9aed71a8207cb146fb1b561b08fdb576206d47d2b2f02afc79262b4caa4d84c513bb790"' :
                                        'id="xs-injectables-links-module-UserModule-85a11fd52415ddf07851ad074e0f2a7be532f5b70cf5fd52b617e732d9aed71a8207cb146fb1b561b08fdb576206d47d2b2f02afc79262b4caa4d84c513bb790"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/jwtServiceClass.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >jwtServiceClass</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BookingController.html" data-type="entity-link" >BookingController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ConfigureController.html" data-type="entity-link" >ConfigureController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/StaffinfoController.html" data-type="entity-link" >StaffinfoController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/BookingOperationTheater.html" data-type="entity-link" >BookingOperationTheater</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Login.html" data-type="entity-link" >Login</a>
                                </li>
                                <li class="link">
                                    <a href="entities/OperationTheaterInfo.html" data-type="entity-link" >OperationTheaterInfo</a>
                                </li>
                                <li class="link">
                                    <a href="entities/StaffCategory.html" data-type="entity-link" >StaffCategory</a>
                                </li>
                                <li class="link">
                                    <a href="entities/staffInfo.html" data-type="entity-link" >staffInfo</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BadRequest.html" data-type="entity-link" >BadRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommonEntity.html" data-type="entity-link" >CommonEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ForbiddenException.html" data-type="entity-link" >ForbiddenException</a>
                            </li>
                            <li class="link">
                                <a href="classes/GlobalAccess.html" data-type="entity-link" >GlobalAccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/loginDto.html" data-type="entity-link" >loginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Maintenance.html" data-type="entity-link" >Maintenance</a>
                            </li>
                            <li class="link">
                                <a href="classes/NotFound.html" data-type="entity-link" >NotFound</a>
                            </li>
                            <li class="link">
                                <a href="classes/staffInfoDto.html" data-type="entity-link" >staffInfoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TypeOrmInterface.html" data-type="entity-link" >TypeOrmInterface</a>
                            </li>
                            <li class="link">
                                <a href="classes/Unauthorized.html" data-type="entity-link" >Unauthorized</a>
                            </li>
                            <li class="link">
                                <a href="classes/userDto.html" data-type="entity-link" >userDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BookingService.html" data-type="entity-link" >BookingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CacheManagerInterceptor.html" data-type="entity-link" >CacheManagerInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfigureService.html" data-type="entity-link" >ConfigureService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/jwtServiceClass.html" data-type="entity-link" >jwtServiceClass</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link" >LoggerMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StaffinfoService.html" data-type="entity-link" >StaffinfoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidationPipe.html" data-type="entity-link" >ValidationPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuards.html" data-type="entity-link" >RolesGuards</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/SwaggerConfig.html" data-type="entity-link" >SwaggerConfig</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});