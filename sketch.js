
let concepts = {
  acid : [
    "#F6FF8F", "#FF6E61", "#81DFA0", "#B2F5CF", "#FFCC00", "#FF9900", "#FF3399",
    "#CCFF00", "#66FF66", "#33CCCC", "#FF33FF", "#CC99FF", "#CC33FF", "#FF6666",
    "#FFFF33", "#FF9966", "#CCFF66", "#99FF33", "#CC9933", "#FF9933", "#FF6600",
    "#CC3300", "#FF3300", "#CC0066", "#FF33CC", "#CC33CC", "#9933CC", "#9933FF",
    "#9900FF", "#9900CC", "#990099", "#993399", "#CC0099", "#CC33FF", "#FF33FF",
    "#FF66CC", "#FF6699", "#FF9966", "#CC6600", "#996600", "#993300", "#FFCC33",
    "#FFFF66", "#CCFF99", "#99FF66", "#66FF33", "#33FF00", "#00FF33", "#33FF66",
    "#66FF99", "#99FFCC", "#CCFFFF", "#99CCFF", "#6699FF", "#3366FF", "#0033FF",
    "#0000FF", "#3300FF", "#6600FF", "#9933FF", "#CC33FF", "#FF00FF", "#FF33CC",
    "#FF66CC", "#FF99CC", "#FFCCCC", "#CC9999", "#996666", "#663333", "#330000",
    "#660000", "#993300", "#CC6600", "#FF9900", "#FFCC33", "#FFFF00", "#CCFF00",  
    "#99FF00", "#66FF00", "#33FF33", "#00FF66", "#33FF99", "#66FFCC", "#99FFFF",
    "#CCFFFF", "#99CCFF", "#6699CC", "#3366CC", "#0033CC", "#0000CC", "#000099",
    "#000066", "#003399", "#336699", "#6699FF", "#9999FF", "#CC99FF", "#FF99FF",
    "#FF66FF", "#FF33FF", "#FF00CC", "#FF0099", "#FF0066", "#FF0033", "#FF3300",
    "#FF6600", "#FF9900", "#FFCC00", "#FFFF00", "#CCFF00", "#99FF33", "#66FF66",
    "#33FF99", "#00FFCC", "#33FFFF", "#66FFFF", "#99FFFF", "#CCFFFF", "#CCFFCC",
    "#99FF99", "#66FF66", "#33FF33", "#00FF00", "#33FF33", "#66FF66", "#99FF99",
    "#CCFF99", "#FFFF99", "#FFFFCC", "#FFFF99", "#CCFF66", "#99FF33", "#66FF00",
    "#33FF00",
  ],  
  noisy: [
    "#990000","#CC0000","#FF0000","#FF3300","#FF6600","#FF9933","#FFCC00","#FFFF33","#FFFF66","#FFFF99","#FFFFCC","#FEFEFE","#FFCCCC","#FF9999","#FF6666","#FF3333","#FF0000","#CC0000","#990000","#660000",
    "#330000","#660033","#993366","#CC3366","#FF3366","#FF6699","#FF99CC","#FFCCFF","#FF99FF","#FF66FF","#FF33FF","#FF00FF","#CC00CC","#990099","#660066","#330033","#660066","#993399","#CC33CC","#FF33CC",
    "#FF66CC","#FF99CC","#FFCCCC","#CC99CC","#996699","#663366","#330066","#6600CC","#9933FF","#CC66FF","#CC99FF","#CCCCFF","#99CCFF","#6699FF","#3366FF","#0033FF","#0000FF","#0000CC","#000099","#000066",
    "#003399","#336699","#6699CC","#99CCCC","#CCFFFF","#99FFFF","#66FFFF","#33FFFF","#00FFFF","#00CCCC","#009999","#006666","#003333","#003366","#006699","#0099CC","#00CCFF","#33CCFF","#66CCFF","#99CCFF",
    "#CCCCFF","#CC99FF","#9966FF","#9933FF","#9900FF","#6600FF","#3300FF","#0033CC","#0033FF","#0033FF","#3366FF","#6699FF","#99CCFF","#CCFFFF","#99FFFF","#66FFFF","#33FFFF","#00FFFF","#00CCCC","#0099CC",
    "#0066CC","#0033CC","#0000CC","#000099","#000066","#003399","#336699","#6699CC","#99CCCC","#CCFFFF","#99FFFF","#66FFFF","#33FFFF","#00FFFF","#00CCCC","#009999","#006666","#003333","#000000","#333333",
  ],

    cold: [
      "#013220","#014421","#1B3D33","#2A4F3C","#365A41","#40664C","#507B59","#618D69","#7CA285","#92B297","#2C4C3B","#375C46","#446B51","#4E7C5D","#5D8D6B","#6C9E7A","#7CAF88","#8DBF96","#A0CFAC","#B2DFC3",
      // Terre hivernale (bruns et gris doux)
      "#4A2C2A","#5C3B2E","#6E4A37","#806152","#9B816A","#B0968C","#D1B6A1","#CABEB3","#DED5CA","#EEE4D8","#573A2F","#674734","#775A40","#8B6E50","#A08068","#B49280","#C7A79A","#D8BCB2","#E7D1C8","#F2E6DE",
      // Glace et neige (gris froids et blancs cassés)
      "#F5F5F5","#F0F0F0","#EAEAEA","#E4E4E4","#DCDCDC","#BFC4C9","#A5ACB1","#8A9399","#6F787E","#555E65","#3E464D","#2A2F35","#1C1E23","#4C5A62","#5D6A74","#73828E","#8D9BA8","#A7B6C3","#C3D0D6","#E0EBF0",
      // Ciel froid (bleus glacés et nuances)
      "#3C4F67","#41556F","#4D6381","#5A7495","#6787AB","#7A9FC1","#91B4D4","#A9C8E3","#C2D8EF","#D6E7F9","#314455","#3A5162","#455E71","#526C82","#627B93","#758DAB","#8BA0C2","#A1B3D5","#B7C7E6","#CEDBF3",
      // Montagnes enneigées (gris bleutés et bleus foncés)
      "#1B263B","#2C3E50","#34495E","#3B566A","#496D80","#4F7B8E","#568EA4","#609FB5","#79BBD6","#99D3ED","#21303E","#2D4051","#394E63","#475C75","#546B86","#67829C","#7D97B0","#94ADC3","#ABC3D4","#C2D8E3",
      // Ombres et nuit (gris foncés et noirs bleutés)
      "#1C1C1C","#2C2C2C","#3C3C3C","#4C4C4C","#5C5C5C","#2A3136","#3B444B","#4A545C","#58656D","#66757D","#354149","#455159","#55606A","#64707A","#738089","#829099","#91A0AA","#A0B0BB","#C2D2DA","#E2F2F6",
      // Coucher de soleil hivernal (rouges et bruns glacés)
      "#D88A8A","#C57F7F","#B56D6D","#A65B5B","#964545","#804040","#6A3636","#4F2A2A","#3C2222","#2A1818","#E0A3A3","#D28F8F","#C47C7C","#B56868","#A45252","#8E4848","#7A3E3E","#633232","#4E2626","#381C1C",
      // Forêt enneigée (verts moyens et bleus froids)
      "#344E41","#436154","#5A7767","#729B84","#92B6A5","#A6CAC3","#BFE4DF","#D3ECEA","#E8F5F3","#F2FAF9","#3F5D4A","#507363","#61897C","#7B9F95","#96B7AE","#AFD0C9","#C7E8E1","#DCF3F0","#EEF9F7","#F8FDFC",
      "#003366", "#006699", "#0099CC", "#66CCCC", "#3399CC", "#0066CC", "#0033CC", "#6699FF", "#3366CC", "#66CCFF","#99CCFFAA", "#CCFFFFAA", "#99CCFFAA", "#CCCCFFAA", "#336699AA", "#003399", "#0066FF", "#3366FF", "#0033FF", "#0033CCAA",
    ],
};

let currentConcept = "acid";
let sets = [];

function setup() {
  const canvasWrapper = select("#canvas-wrapper");

  let canvasWidth = 20 * 250 + 19 * 90;
  let canvasHeight = 960;

  // Canvas principal
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(canvasWrapper);

  noLoop();
  generateFixedSets();

  // Boutons pour changer de concept
  select("#acid-button").mousePressed(() => updateConcept("acid"));
  select("#noisy-button").mousePressed(() => updateConcept("noisy"));
  select("#cold-button").mousePressed(() => updateConcept("cold"));

  // Bouton pour régénérer
  // Création du bouton avec l'icône
let regenerateButton = createButton("");
regenerateButton.html(
  '<img id="refresh-icon" src="./imgs/refresh.svg" alt="Générer" title="Générer de nouvelles palettes" style="width: 70px; height: 70px;">'
);
regenerateButton.style("position", "absolute");
regenerateButton.style("border", "none");
regenerateButton.style("background", "none");
regenerateButton.style("display", "flex");
regenerateButton.style("justify-content", "center");
regenerateButton.style("align-items", "center");
regenerateButton.style("cursor", "pointer");
regenerateButton.style("transform", "translate(-50%, -50%)");
regenerateButton.style("left", "83%");
regenerateButton.style("top", "17.6%");

// Ajouter un gestionnaire d'événement pour l'animation de rotation
regenerateButton.mousePressed(() => {
  const icon = document.getElementById("refresh-icon");
  icon.classList.add("rotate-animation");
  

  // Supprimez la classe après l'animation pour qu'elle puisse être rejouée
  setTimeout(() => {
    icon.classList.remove("rotate-animation");
  }, 1000); // Durée de l'animation en millisecondes

  generateFixedSets();
  redraw();
});


  // Bouton pour exporter
  let exportButton = createButton("Exporter (ZIP)");
  exportButton.style("position", "absolute");
  exportButton.style("background", "linear-gradient(135deg, #4CAF50, #2E7D32)");
  exportButton.style("color", "#fff");
  exportButton.style("padding", "12px 24px");
  exportButton.style("border", "2px solid #2E7D32");
  exportButton.style("border-radius", "10px");
  exportButton.style("cursor", "pointer");
  exportButton.style("font-size", "16px");
  exportButton.style("width", "160px");
  exportButton.style("height", "60px");
  exportButton.style("transition", "all 0.3s ease");
  exportButton.style("transform", "translate(-50%, -50%)");
  exportButton.style("left", "94%");
  exportButton.style("top", "17.6%");

  exportButton.mousePressed(exportAllSetsAsZip);

  setupScroll();
}

function draw() {
  background(255);

  let margin = 78;
  let paletteSize = 250;

  for (let j = 0; j < sets.length; j++) {
    let x = j * (paletteSize + margin);
    let y = height / 2 - paletteSize / 2;

    drawHomageToTheSquare(this, x, y, sets[j], paletteSize);
    drawLegendAsTable(this, x, y + paletteSize / 2 + 30, sets[j]);
  }
}

function generateFixedSets() {
  sets = [];
  let colors = concepts[currentConcept];

  for (let i = 0; i < 20; i++) {
    let setColors = [];
    let previousLuminance = null;
    

    while (setColors.length < 4) {
      let color = random(colors);
      let luminance = getLuminance(color);

      if (
        previousLuminance === null ||
        Math.abs(luminance - previousLuminance) > 0.1
      ) {
        setColors.push(color);
        previousLuminance = luminance;
      }
    }
    sets.push(setColors);
  }
}

function getLuminance(colorHex) {
  let c = color(colorHex);
  let r = red(c) / 255;
  let g = green(c) / 255;
  let b = blue(c) / 255;

  r = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  g = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  b = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function drawHomageToTheSquare(canvas, x, y, colors, size) {
  canvas.push();
  canvas.translate(x, y);
  canvas.rectMode(CENTER);
  canvas.noStroke();

  for (let i = 4; i > 0; i--) {
    canvas.fill(colors[i - 1]);

    if (i === 4) {
      canvas.rect(0, 0, i * (size / 4), i * (size / 4), 6); // Radius
    } else {
      canvas.rect(0, 0, i * (size / 4), i * (size / 4));
    }

    canvas.rotate(PI / 8);
    canvas.stroke(0);
    canvas.strokeWeight(0.1);
  }
  canvas.pop();
}

function drawLegendAsTable(canvas, x, y, colors) {
  canvas.push();
  canvas.textSize(10);
  canvas.textAlign(CENTER);
  let rowHeight = 20;
  let legendSpacing = 100;

  canvas.fill(0);
  canvas.text("Couleur", x - legendSpacing - 1, y);
  canvas.text("ARGB", x - 20, y);
  canvas.text("HSL", x + legendSpacing - 20, y);

  for (let i = 0; i < colors.length; i++) {
    let colorHex = colors[i];
    let c = color(colorHex);

    let argb = `(${alpha(c)}, ${red(c)}, ${green(c)}, ${blue(c)})`;
    let h = floor(hue(c));
    let s = floor(saturation(c));
    let l = floor(lightness(c));
    let hsl = `(${h}, ${s}%, ${l}%)`;

    canvas.fill(colorHex);
    canvas.rect(x - legendSpacing - 12, y + (i + 1) * rowHeight, 20, 20);

    canvas.fill(0);
    canvas.text(argb, x - 20, y + (i + 1) * rowHeight + 10);
    canvas.text(hsl, x + legendSpacing - 20, y + (i + 1) * rowHeight + 10);
  }
  canvas.pop();
}

function updateConcept(concept) {
  if (concept !== currentConcept) {
    currentConcept = concept;
    generateFixedSets();
    redraw();
    highlightActiveButton(concept);
  }
}

function highlightActiveButton(concept) {
  const buttons = ["acid-button", "noisy-button", "cold-button"];
  buttons.forEach((btnId) => {
    const button = select(`#${btnId}`);
    button.removeClass("active-concept");
  });

  const activeButton = select(`#${concept}-button`);
  activeButton.addClass("active-concept");
}

function setupScroll() {
  const scrollContainer = document.getElementById("canvas-wrapper");
  scrollContainer.style.overflowX = "scroll";
  scrollContainer.style.overflowY = "hidden";

  scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
  });
}

function exportAllSetsAsZip() {
  const zip = new JSZip();

  for (let i = 0; i < sets.length; i++) {
    const colors = sets[i];

    // Canvas temporaire
    const tempCanvas = createGraphics(400, 600);
    tempCanvas.background(255);

    drawHomageToTheSquare(tempCanvas, tempCanvas.width / 2, 150, colors, 200);
    drawLegendAsTable(tempCanvas, tempCanvas.width / 2, 400, colors);

    const imgData = tempCanvas.canvas.toDataURL("image/png").split(",")[1];
    zip.file(`set_${currentConcept}_${i + 1}.png`, imgData, { base64: true });

    tempCanvas.remove(); // Supprime le canvas temporaire
  }

  // Générer le ZIP et le télécharger
  zip.generateAsync({ type: "blob" }).then((content) => {
    saveAs(content, `${currentConcept}_sets.zip`);
  });
}
