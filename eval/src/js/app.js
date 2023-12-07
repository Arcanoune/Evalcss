import Alpine from "alpinejs";
import EditorPreview from "./components/EditorPreview";
import Slider from "./components/Slider";
import Projet from "./components/Projet";


window.Alpine = Alpine;
window.addEventListener('DOMContentLoaded', () => {
    if (!window.alpineInitialized) {
        window.alpineInitialized = true;
        Alpine.data('EditorPreview', EditorPreview);
        Alpine.data('Slider', Slider);
        Alpine.data('Projet', Projet);
        Alpine.start();
    }
})
