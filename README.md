# 🎭 Entroido Galicia — Interactive Card Stack UI Resource

A **reusable front-end UI resource** featuring an interactive stacked card system with fluid physics.  
Built to showcase Galician carnival traditions through micro-interactions, spring-based animations, and depth-aware layouts.

*This is intended as a UI pattern / reusable resource, not a complete product.*


## ✨ Features

* **Dynamic Card Stack**: Interactive layering with real-time depth calculation.
* **Fluid "Fan" Animation**: Smooth card transitions using spring physics (stiffness/damping).
* **Depth & Perspective**: Automated scaling, rotation, and blur effects based on card index.
* **Infinite Loop Logic**: Seamless "send-to-back" reordering when interacting with the top card.
* **Modern UI Aesthetics**: High-fidelity visuals with glassmorphism, mesh gradients, and refined typography.
* **Responsive React Components**: Modular and reusable structure built with Framer Motion.


## 🛠 Technologies

* **React** (Functional Components & Hooks)
* **Framer Motion** (Layout animations, `AnimatePresence` & Spring physics)
* **CSS3** (Custom mesh gradients, backdrop filters, and flexbox)
* **JavaScript** (ES6+ State management)


## 🌱 What I Learned

While creating this UI resource, I improved my understanding of:

* **Declarative Animations**: Using `layout` and `layoutId` to manage complex DOM reordering without manual coordinate math.
* **Spring Physics vs. Linear Motion**: Fine-tuning animation feel through mass, stiffness, and damping parameters.
* **State-Driven UI**: Coordinating the visual "stack" order with React state updates.
* **Perceived Depth (Z-Space)**: Implementing visual hierarchy using dynamic `zIndex`, `filter: blur()`, and `opacity` gradients.
* **Performance Optimization**: Managing hardware-accelerated transforms for smooth 60fps interactions.
* **Visual Storytelling**: Integrating cultural heritage (Galician Entroido) into a modern, high-end UI pattern.


## 📍 The Process

This resource was built as a **library-style UI component** to:

1.  **Highlight Cultural Content**: Focus on Galician traditions (Peliqueiros, Xenerais, Pantallas, Cigarróns) through an engaging interface.
2.  **Minimize Layout Shift**: Ensuring cards maintain their "fan" position even during initial load or refresh through stabilized initial states.
3.  **Animate Seamlessly**: Creating a circular interaction where the top card slides back while the rest of the stack moves forward.
4.  **Prioritize Reusability**: Decoupling the animation logic from the content, allowing the stack to work with any data set.


## 🚀 Author

Developed with 💙 by **Laura Calviño**.

* **GitHub**: [github.com/lauraacalvino](https://github.com/lauraacalvino)
* **Project**: Entroido Galicia UI Pattern
