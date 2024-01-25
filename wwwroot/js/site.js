$.getJSON(("/wwwroot/js/presentations.json"), (presentations) => {
    const speakersContainer = document.getElementById("speakers-container")
    presentations.forEach(presentation => {
        const speakerCard = document.createElement("speaker-card")
        Object.keys(presentation).forEach(key => speakerCard[key] = presentation[key]);
        speakersContainer.appendChild(speakerCard);
    });
  })
  