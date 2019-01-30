import './current-weather.scss';
import { API_KEY } from './api-key';

(function () {
    const template = document.createElement('template');
    template.innerHTML = `
    <style>{{current-weather.scss}}</style>
    <style>
        current-weather-loading {
            width: 50px;
        }
        .hide {
            display: none;
        }

        .weather-card {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 232px;
        }
        .weather-content {
            display: flex;
            flex-direction: column;
            align-items: top;
        }
        .weather-content > * {
            padding: 0 16px 0 16px;
        }
        .weather-image {
            padding: 16px;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            background-color: #e5eeff;
            width: 200px;
        }
    </style>
    <current-weather-loading></current-weather-loading>
    <div class="hide weather-card mdc-card">
        <div class="weather-content">
            <img class="weather-image" src="/images/partly.png" />
            <h1 class="something">Zip: <span></span></h1>
        </div>
    </div>`;

    class CurrentWeather extends HTMLElement {
        get zip() {
            return this.getAttribute('zip');
        }
        set zip(zipCode) {
            this.setAttribute('zip', zipCode);
        }

        static get observedAttributes() {
            return ['zip'];
        }

        attributeChangedCallback(name, oldValue, newValue) {
            console.log(name, oldValue, newValue);

            this.zipSpan.innerText = this.zip;
        }

        constructor() {
            super();

            this.attachShadow({ mode: 'open' });
            this.shadowRoot.appendChild(template.content.cloneNode(true));
            this.zipSpan = this.shadowRoot.querySelector('span');
            this.loadingElement = this.shadowRoot.querySelector('current-weather-loading');
            this.weatherContentElement = this.shadowRoot.querySelector('.weather-content');

            setTimeout(() => {
                console.log('Swapping');
                this.weatherContentElement.classList.remove('hide');
                this.loadingElement.classList.add('hide');
            }, 500);
        }
    }

    customElements.define('current-weather', CurrentWeather);
})();