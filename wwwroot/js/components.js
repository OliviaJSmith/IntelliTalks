class SpeakerCard extends HTMLElement {
  constructor() {
    super();
    this.talkTitle = null;
    this.speakerImageUrl = null;
    this.speakerName = null;
    this.time = null;
    this.bio = null;
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="mx-auto p-3 text-center" style="max-width: min(600px, 100%);">
            <div class="card shadow-lg">
                <div>
                  <img class="speaker" src="${this.speakerImageUrl}" />
                </div>
                <div class="card-body">
                  <span class="fw-bold">${this.speakerName}</span> will be talking about <span class="fw-bold">${this.talkTitle}</span>!
                </div>
                <div class="card-footer">Talk Time: ${this.time}</div>
            </div>
        </div>
        `;
  }

  static get observedAttributes() {
    return ["speaker-name", "speaker-image-url", "talk-title", "time", "bio"];
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
