document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop(); // e.g., "index.html"

    const isActive = (page) =>
        currentPage === page ?
        "bg-gray-800 text-white" :
        "bg-indigo-600 hover:bg-indigo-700 text-white";

    const headerHTML = `
    <!-- Title -->
    <header class="text-center py-8">
      <h1 class="text-3xl font-bold">
        AR&D: A Framework for Retrieving and Describing Concepts for Interpreting AudioLLMs
      </h1>
      <p class="mt-4 text-lg">
        Townim Faisal<sup>1,2</sup>, Ta Duc Huy<sup>1</sup>, Siqi Pan<sup>2</sup>, Jeremy Stoddard<sup>2</sup>, and Zhibin Liao<sup>1,3</sup>
      </p>
      <p class="mt-2 text-gray-700">1 Australian Institute for Machine Learning, University of Adelaide, Australia</p>
      <p class="text-gray-700">2 Dolby Laboratories, Australia</p>
      <p class="text-gray-700">3 School of Computer and Mathematical Sciences, University of Adelaide, Australia</p>
    </header>

    <!-- Buttons -->
    <div class="flex justify-center space-x-4 mb-6">
      <a href="https://arxiv.org/abs/2602.22253" 
           target="_blank"
           class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-lg flex items-center space-x-2">
          📄 <span>Paper</span>
      </a>
      

      <a href="index.html" 
         class="${isActive("index.html")} font-semibold px-4 py-2 rounded-lg flex items-center space-x-2">
        🏠 <span>Main Page</span>
      </a>

      <a href="demos.html" 
         class="${isActive("demos.html")} font-semibold px-4 py-2 rounded-lg flex items-center space-x-2">
        🎛️ <span>Concept Examples</span>
      </a>

      <a href="steering.html" 
         class="${isActive("steering.html")} font-semibold px-4 py-2 rounded-lg flex items-center space-x-2">
        ⚙️ <span>Steering</span>
      </a>

    </div>
    <hr class="my-4">
  `;

    document.getElementById("header").innerHTML = headerHTML;
});

// modal.js
function openModal(type) {
    const messageEl = document.getElementById("modalMessage");
    if (type === "paper") {
        messageEl.textContent = "Paper will be available soon.";
    } else if (type === "code") {
        messageEl.textContent = "Code will be released soon.";
    }
    document.getElementById("myModal").classList.remove("hidden");
    document.getElementById("myModal").classList.add("flex");
}

function closeModal() {
    document.getElementById("myModal").classList.add("hidden");
    document.getElementById("myModal").classList.remove("flex");
}
