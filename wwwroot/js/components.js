class SpeakerCard extends HTMLElement {
  constructor() {
    super();
    this.talkTitle = null;
    this.speakerImageUrl = null;
    this.speakerName = null;
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="p-3 text-center">
            <div class="card shadow-lg">
                <div>
                  <img class="speaker" src="${this.speakerImageUrl}" />
                </div>
                <div class="card-body">
                  <span class="fw-bold">${this.speakerName}</span> will be talking about <span class="fw-bold">${this.talkTitle}</span>!
                </div>
            </div>
        </div>
        `;
  }

  static get observedAttributes() {
    return ["speaker-name", "speaker-image-url", "talk-title"];
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;

    property = this.toCamelCase(property);
    this[property] = newValue;
  }

  toCamelCase(str) {
    const words = str.split("-");
    return words.map((word, index) =>
      index === 0
        ? word
        : word[0].toUpperCase() + word.slice(1)
      ).join("")
  }
}

customElements.define("speaker-card", SpeakerCard);
