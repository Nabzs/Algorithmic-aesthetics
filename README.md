# Color Concept Generator

## Overview
The **Color Concept Generator** is an interactive tool designed to create color palettes associated with specific conceptual themes. It enables users to generate, view, and export dynamic color sets. This project combines art, technology, and creativity to aid research in art, color theory, and deep learning.

---

## Features

### 1. **Dynamic Concept-Based Color Generation**
- **Three predefined concepts**:
  - `acid`
  - `noisy`
  - `cold`
- Generates 20 unique color sets per concept.

### 2. **Interactive Canvas**
- A **scrollable horizontal layout** to visualize color sets.
- Dynamic resizing ensures optimal presentation.

### 3. **Interactive Buttons**
- **Concept Selection**: Highlight active concept with visual indicators.
- **Refresh Colors**: Regenerate new color sets with an animated refresh button.
- **Export Options**: Export color sets as images in a ZIP file.

### 4. **Color Legends**
- Display ARGB, HSL, and hex values for each color in the set.
- Well-organized, professional table layout accompanying each color palette.

### 5. **Advanced Export**
- Saves all generated sets for a selected concept as individual PNG images inside a ZIP file.

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (Optional, for serving the project locally)
- A modern web browser (e.g., Chrome, Firefox, Edge)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Nabzs/Algorithmic_esthetics.git
   cd Algorithmic_esthetics
   ```
2. Open `index.html` in your browser to launch the project.

### Local Server (Optional)
For a better experience, run the project on a local server:
```bash
npx serve .
```

---

## Usage

1. **Select a Concept**:
   - Click on a concept button (`acid`, `noisy`, or `cold`) to explore its associated color sets.
   - The active concept is visually highlighted.

2. **Generate New Sets**:
   - Click the refresh button (circular icon) to regenerate 20 unique color sets for the current concept.

3. **Export Color Sets**:
   - Click on `Export (ZIP)` to download all color sets as PNG images packaged in a ZIP file.

4. **Scroll to Explore**:
   - Use the horizontal scroll to navigate through multiple color sets.

---

## Technologies Used
- **HTML5**: Structure of the project.
- **CSS3**: Styling and animations.
- **JavaScript (p5.js)**: Core logic for color generation, rendering, and export.
- **JSZip**: Packaging color sets into a ZIP file.

---

## Contribution
Contributions are welcome! Please:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add new feature'
   ```
4. Push to your branch and create a pull request.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact
For questions or suggestions, feel free to contact:
- **Name**: Nabil Boukhorissa
- **Email**: boukhorissa.nabil@gmail.com
- **GitHub**: [https://github.com/Nabzs/Algorithmic_esthetics](https://github.com/Nabzs/Algorithmic_esthetics)

---

## Images

### Acid Color Sets
![Acid Color Set 1](./Exports/Acid/acid%20(1).png)
![Acid Color Set 2](./Exports/Acid/acid%20(2).png)

### Noisy Color Sets
![Noisy Color Set 1](./Exports/Noisy/noisy%20(1).png)
![Noisy Color Set 2](./Exports/Noisy/noisy%20(2).png)

### Cold Color Sets
![Cold Color Set 1](./Exports/Cold/cold%20(1).png)
![Cold Color Set 2](./Exports/Cold/cold%20(2).png)

---

Thank you for exploring the **Color Concept Generator**! 🎨

