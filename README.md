# 🎨 Color the Boxes

A simple JavaScript project that assigns a **random background color** to every box inside a container each time the page is loaded. This project demonstrates basic DOM manipulation, functions, loops, and the use of JavaScript's built-in `Math` methods.

---

## 📌 Features

- 🎲 Generates a random RGB color for each box.
- 🎨 Every box receives a unique background color.
- ⚡ Uses JavaScript DOM manipulation.
- 🧩 Beginner-friendly project for learning JavaScript fundamentals.

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## 📂 Project Structure

```
Color-the-Boxes/
│── index.html
│── style.css
│── script.js
└── README.md
```

---

## 🚀 How It Works

1. Selects all the boxes inside the container.
2. Generates three random numbers between **0 and 255** for the Red, Green, and Blue (RGB) color values.
3. Combines these values into an RGB color string.
4. Applies the generated color as the background color of each box.

---

## 💻 JavaScript Concepts Used

- `querySelector()`
- `children`
- `Array.from()`
- `forEach()`
- Functions
- Template Literals
- `Math.random()`
- `Math.ceil()`
- DOM Manipulation
- CSS Style Manipulation

---

## 📖 Code Explanation

### Selecting the Boxes

```javascript
let boxes = document.querySelector(".container").children;
```

This selects all child elements inside the container.

---

### Generating a Random Color

```javascript
function getRandomColor() {
    let val1 = Math.ceil(Math.random() * 255);
    let val2 = Math.ceil(Math.random() * 255);
    let val3 = Math.ceil(Math.random() * 255);

    return `rgb(${val1}, ${val2}, ${val3})`;
}
```

The function generates random RGB values and returns a valid CSS color.

---

### Applying Colors

```javascript
Array.from(boxes).forEach((box) => {
    box.style.backgroundColor = getRandomColor();
});
```

Converts the HTMLCollection into an array and assigns a random color to every box.

---

## 🎯 Learning Outcomes

This project helps you understand:

- DOM Selection
- HTMLCollection vs Array
- Converting HTMLCollection using `Array.from()`
- JavaScript Functions
- Random Number Generation
- RGB Color Format
- Iterating with `forEach()`
- Styling Elements Dynamically

---

## ▶️ How to Run

1. Clone the repository.

```bash
git clone https://github.com/your-username/color-the-boxes.git
```

2. Open the project folder.

3. Open `index.html` in your browser.

The boxes will automatically receive random background colors.

---

## 📸 Demo

Every time the page is refreshed, each box is assigned a new random color.

---

## 🔮 Future Improvements

- Add a button to generate new colors without refreshing.
- Randomize both background and text colors.
- Add smooth color transition animations.
- Allow users to choose the number of boxes.
- Generate color palettes instead of completely random colors.

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome. Feel free to fork the repository and submit a pull request.

---

## 📄 License

This project is open source and available under the MIT License.

---

### ⭐ If you found this project helpful, consider giving it a star on GitHub!
