import './current-weather-loading.scss';

(function () {
    const template = document.createElement('template');
    template.innerHTML = `
    <style>{{current-weather-loading.scss}}</style>
    <div class="showbox">
        <div class="loader">
            <svg class="circular" viewBox="25 25 50 50">
                <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
            </svg>
        </div>
    </div>
    `;

    class CurrentWeather extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }
    customElements.define('current-weather-loading', CurrentWeather);
})();