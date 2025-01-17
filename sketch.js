
let concepts = {
  acid: [
    // Verts fluorescents (dominance acide)
    "#00FF00", "#32FF32", "#64FF64", "#96FF96", "#C8FFC8", "#AFFF00", "#80FF00", "#4FFF4F", "#00FF7F", "#00FF4F",
    // Jaunes éclatants
    "#FFFF00", "#FFF000", "#FFE600", "#FFDD00", "#FFCC00", "#FFD500", "#FFE700", "#FFF933", "#FFF380", "#FFFFB3",
    // Roses saturés et toxiques
    "#FF007F", "#FF3399", "#FF66B3", "#FF99CC", "#FF00CC", "#FF33FF", "#FF66FF", "#FF99FF", "#FF00B3", "#FF339C",
    // Néons vibrants (cyan et bleus électriques)
    "#00FFFF", "#33FFFF", "#66FFFF", "#99FFFF", "#66CCFF", "#3399FF", "#0066FF", "#0033FF", "#00BFFF", "#00A3CC",
    // Teintes toxiques supplémentaires
    "#A0FFA0", "#B5FF4F", "#D9FF33", "#EEFF00", "#FFFF33", "#FFF780", "#E6FF7F", "#CCFF66", "#B3FF33", "#A6FF4D",
    // Accents psychédéliques
    "#FF007F", "#FF1AB3", "#FF3366", "#FF6699", "#FF339C", "#CC00FF", "#CC33FF", "#B200CC", "#9900FF", "#8000CC",
    // Contraste sombre et acide
    "#660033", "#99004D", "#B30066", "#CC007F", "#4CFF99", "#33FFCC", "#00FFFF", "#4D99FF", "#3333FF", "#001AFF",
    // Bases sombres pour profondeur
    "#0F0F0F", "#1F1F1F", "#2F2F2F", "#3F3F3F", "#4F4F4F", "#5F5F5F",
  ],
  
  
  noisy: [
    // Rouge vif et ardent
    "#990000", "#CC0000", "#FF0000", "#FF3300", "#FF4500", "#FF5733", "#FF6600", "#FF7F50", "#FF9933", "#FFB347",
    // Jaune éclatant et saturé
    "#FFD700", "#FFFF00", "#FFFF33", "#FFFF66", "#FFEB3B", "#FFF176", "#FFEE58", "#FFF59D", "#FFFACD", "#FEFEA8",
    // Orange ardent
    "#FFA500", "#FF8C00", "#FF7043", "#FF5722", "#FF4500", "#E65100", "#FB8C00", "#F57C00", "#EF6C00", "#FF9800",
    // Violet électrique
    "#9400D3", "#9932CC", "#BA55D3", "#8A2BE2", "#A020F0", "#9370DB", "#DDA0DD", "#EE82EE", "#DA70D6", "#FF00FF",
    // Bleu saturé et contrasté
    "#0000FF", "#1E90FF", "#4169E1", "#4682B4", "#5F9EA0", "#6495ED", "#7B68EE", "#6A5ACD", "#483D8B", "#4B0082",
    // Neon et saturation visuelle
    "#00CED1", "#40E0D0", "#48D1CC", "#20B2AA", "#008080", "#00FFFF", "#00BFFF", "#1E90FF", "#5F9EA0", "#4682B4",
    // Contrast sombre pour équilibre
    "#2C2C2C", "#3C3C3C", "#4C4C4C", "#5C5C5C", "#333333", "#000000", "#292B2C", "#2E3B4E", "#1C2833", "#17202A",
    // Accents supplémentaires pour l'intensité
    "#FF69B4", "#FF1493", "#DB7093", "#FF6EB4", "#FF69B4", "#FF7F50", "#F08080", "#FF4500", "#FF6347", "#CD5C5C",
  ],
  

  cold: [
    // Forêts froides et ombres
    "#013220", "#014421", "#1B3D33", "#2A4F3C", "#365A41", "#40664C", "#507B59", "#618D69", "#2C4C3B", "#375C46", 
    "#446B51", "#4E7C5D", "#5D8D6B", "#6C9E7A", "#7CAF88", "#8DBF96", "#A0CFAC", "#92B297", "#7CA285", "#B2DFC3",
    // Terre hivernale (bruns et gris doux)
    "#4A2C2A", "#5C3B2E", "#6E4A37", "#806152", "#9B816A", "#B0968C", "#D1B6A1", "#CABEB3", "#DED5CA", "#EEE4D8",
    "#573A2F", "#674734", "#775A40", "#8B6E50", "#A08068", "#B49280", "#C7A79A", "#D8BCB2", "#E7D1C8", "#F2E6DE",
    // Glace et neige (gris froids et blancs cassés)
    "#F5F5F5", "#EAEAEA", "#DCDCDC", "#BFC4C9", "#A5ACB1", "#8A9399", "#6F787E", "#555E65", "#3E464D", "#2A2F35", 
    "#1C1E23", "#4C5A62", "#5D6A74", "#73828E", "#8D9BA8", "#A7B6C3", "#C3D0D6", "#E0EBF0", "#F0F0F0", "#E4E4E4",
    // Ciel froid (bleus glacés et nuances)
    "#3C4F67", "#41556F", "#4D6381", "#5A7495", "#6787AB", "#7A9FC1", "#91B4D4", "#A9C8E3", "#C2D8EF", "#D6E7F9",
    "#314455", "#3A5162", "#455E71", "#526C82", "#627B93", "#758DAB", "#8BA0C2", "#A1B3D5", "#B7C7E6", "#CEDBF3",
    // Montagnes enneigées (gris bleutés et bleus foncés)
    "#1B263B", "#2C3E50", "#34495E", "#3B566A", "#496D80", "#4F7B8E", "#568EA4", "#609FB5", "#79BBD6", "#99D3ED",
    "#21303E", "#2D4051", "#394E63", "#475C75", "#546B86", "#67829C", "#7D97B0", "#94ADC3", "#ABC3D4", "#C2D8E3",
    // Ombres et nuit (gris foncés et noirs bleutés)
    "#1C1C1C", "#2C2C2C", "#3C3C3C", "#4C4C4C", "#5C5C5C", "#2A3136", "#3B444B", "#4A545C", "#58656D", "#66757D", 
    "#354149", "#455159", "#55606A", "#64707A", "#738089", "#829099", "#91A0AA", "#A0B0BB", "#C2D2DA", "#E2F2F6",
    // Coucher de soleil hivernal (rouges et bruns glacés)
    "#D88A8A", "#C57F7F", "#B56D6D", "#A65B5B", "#964545", "#804040", "#6A3636", "#4F2A2A", "#3C2222", "#2A1818",
    "#E0A3A3", "#D28F8F", "#C47C7C", "#B56868", "#A45252", "#8E4848", "#7A3E3E", "#633232", "#4E2626", "#381C1C",
    // Forêt enneigée (verts moyens et bleus froids)
    "#344E41", "#436154", "#5A7767", "#729B84", "#92B6A5", "#A6CAC3", "#BFE4DF", "#D3ECEA", "#E8F5F3", "#F2FAF9", 
    "#3F5D4A", "#507363", "#61897C", "#7B9F95", "#96B7AE", "#AFD0C9", "#C7E8E1", "#DCF3F0", "#EEF9F7", "#F8FDFC",
    // Ombres et glacis supplémentaires (bleus et gris profonds)
    "#001F3F", "#003366", "#003F7F", "#004F9F", "#005FBF", "#336699", "#6699CC", "#003399", "#3366FF", "#0033FF", 
    "#66CCFF", "#99CCFFAA", "#CCFFFFAA", "#0033CC", "#0033CCAA",
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

  select("#acid-button").mousePressed(() => updateConcept("acid"));
  select("#noisy-button").mousePressed(() => updateConcept("noisy"));
  select("#cold-button").mousePressed(() => updateConcept("cold"));

  let regenerateButton = createButton("");

  regenerateButton.html(`
    <div style="display: flex; align-items: center; gap: 8px;">
      <img id="refresh-icon" src="./imgs/refresh.svg" alt="Générer" title="Générer de nouvelles palettes" style="width: 30px; height: 30px;">
      <span style="color:rgb(255, 255, 255); font-size: 16px;">Générer</span>
    </div>
  `);
  
  regenerateButton.style("position", "absolute");
  regenerateButton.style("border", "none");
  regenerateButton.style("background", "rgba(220, 20, 60, 80%)"); 
  regenerateButton.style("color", "#fff"); 
  regenerateButton.style("font-size", "16px");
  regenerateButton.style("font-weight", "bold");
  regenerateButton.style("display", "flex");
  regenerateButton.style("justify-content", "center");
  regenerateButton.style("align-items", "center");
  regenerateButton.style("cursor", "pointer");
  regenerateButton.style("transform", "translate(-50%, -50%)");
  regenerateButton.style("left", "84%");
  regenerateButton.style("top", "17.6%");
  regenerateButton.style("width", "160px");
  regenerateButton.style("height", "60px");
  regenerateButton.style("border-radius", "12px");
  regenerateButton.style("box-shadow", "0 4px 10px rgba(0, 0, 0, 0.25)"); 
  regenerateButton.style("transition", "transform 0.2s, background 0.3s, box-shadow 0.3s");
  
  regenerateButton.mouseOver(() => {
    regenerateButton.style("background", "rgb(220, 20, 60,95%)"); 
    regenerateButton.style("box-shadow", "0 6px 14px rgba(0, 0, 0, 0.35)"); 
  });
  
  regenerateButton.mouseOut(() => {
  regenerateButton.style("background", "rgb(220, 20, 60,95%)");
    regenerateButton.style("box-shadow", "0 4px 10px rgba(0, 0, 0, 0.25)");
  });
  
  regenerateButton.mousePressed(() => {
    const icon = document.getElementById("refresh-icon");
    icon.classList.add("rotate-animation");
  
    setTimeout(() => {
      icon.classList.remove("rotate-animation");
    }, 1000); 
  
    generateFixedSets();
    redraw();
  });
  


  // Bouton pour exporter
  let exportButton = createButton("");

  exportButton.html(`
    <div style="display: flex; align-items: center; gap: 8px;">
      <img src="./imgs/export.svg" alt="Export" style="width: 40px; height: 40px;">
      <span style="color: #fff; font-size: 16px;">Export</span>
    </div>
  `);
  
  exportButton.style("position", "absolute");
  exportButton.style("background", "rgba(2, 23, 97, 0.9)"); 
  exportButton.style("padding", "12px 24px");
  exportButton.style("border", "none");
  exportButton.style("border-radius", "10px");
  exportButton.style("cursor", "pointer");
  exportButton.style("display", "flex");
  exportButton.style("justify-content", "center");
  exportButton.style("align-items", "center");
  exportButton.style("width", "160px");
  exportButton.style("height", "60px");
  exportButton.style("transition", "all 0.3s ease"); 
  exportButton.style("transform", "translate(-50%, -50%)");
  exportButton.style("left", "94%");
  exportButton.style("top", "17.7%");
  exportButton.style("font-size", "30px");
  
  exportButton.mouseOver(() => {
    exportButton.style("background", "rgba(25, 118, 210, 0.9)"); 
    exportButton.style("box-shadow", "0 6px 14px rgba(25, 118, 210, 0.35)"); 
  });
  
  exportButton.mouseOut(() => {
    exportButton.style("background", "rgba(2, 23, 97, 0.9)"); 
    exportButton.style("box-shadow", "0 4px 10px rgba(0, 0, 0, 0.25)"); 
  });
  
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
        Math.abs(luminance - previousLuminance) > 0.4
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
      canvas.rect(0, 0, i * (size / 4), i * (size / 4), 6); 
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
