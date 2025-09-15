document.addEventListener("DOMContentLoaded", () => {
    // Features and concepts from your screenshots
    const data = {
        layer5: [
            ["6024", "impact"],
            ["8182", "buzz"],
            ["11005", "computer keyboard"],
            ["12697", "sudden, loud, and isolated sounds"],
            ["17886", "tick"],
            ["26511", "long notes"],
        ],
        layer16: [
            ["1590", "musical instrument"],
            ["2839", "cough"],
            ["10861", "meow"],
            ["14346", "alarm"],
            ["22244", "burping"],
            ["29907", "wind"],
        ],
        layer26: [
            ["1124", "water flow"],
            ["5620", "happy"],
            ["12247", "female speech"],
            ["13402", "male speech"],
            ["16605", "laughter"],
            ["25986", "screaming"],
        ]
    };

    // Generate accordion
    const accordion = document.getElementById("accordion");

    Object.entries(data).forEach(([layer, features]) => {
        const details = document.createElement("details");
        details.className = "mb-4 border rounded-lg";

        // Keep Layer 26 open by default
        if (layer === "layer26") {
            details.setAttribute("open", "");
        }

        const summary = document.createElement("summary");
        summary.className = "cursor-pointer bg-gray-200 px-4 py-2 font-semibold";
        summary.textContent = layer.replace("layer", "Layer ");
        details.appendChild(summary);

        const wrapper = document.createElement("div");
        wrapper.className = "overflow-x-auto";

        const table = document.createElement("table");
        table.className = "table-auto w-full border-collapse border border-gray-300 rounded-lg shadow";

        const thead = `
      <thead class="bg-gray-100">
        <tr>
          <th class="border border-gray-300 px-4 py-2 text-center">Feature ID</th>
          <th class="border border-gray-300 px-4 py-2 text-center">Most Representative Audio CLips</th>
          <th class="border border-gray-300 px-4 py-2 text-center">Least Representative Audio CLips</th>
          <th class="border border-gray-300 px-4 py-2 text-center">Concept Name</th>
        </tr>
      </thead>
    `;
        table.innerHTML = thead;

        const tbody = document.createElement("tbody");

        features.forEach(([featureId, conceptName]) => {
            const row = document.createElement("tr");
            row.className = "hover:bg-gray-50";

            // Feature ID
            const tdFeature = `<td class="border px-4 py-2 text-center">${featureId}</td>`;

            // Most representative audios
            let mostHTML = `<div class="flex flex-col items-center space-y-2">`;
            for (let i = 0; i <= 3; i++) {
                mostHTML += `<audio src="audios/most_representative/${layer}/${featureId}_${conceptName}/${i}.wav" controls preload></audio>`;
            }
            mostHTML += `</div>`;
            const tdMost = `<td class="border px-4 py-2">${mostHTML}</td>`;

            // Least representative audios
            let leastHTML = `<div class="flex flex-col items-center space-y-2">`;
            for (let i = 0; i <= 3; i++) {
                leastHTML += `<audio src="audios/least_representative/${layer}/${featureId}_${conceptName}/${i}.wav" controls preload></audio>`;
            }
            leastHTML += `</div>`;
            const tdLeast = `<td class="border px-4 py-2">${leastHTML}</td>`;

            // Concept name
            const tdConcept = `<td class="border px-4 py-2 text-center">${conceptName}</td>`;

            row.innerHTML = tdFeature + tdMost + tdLeast + tdConcept;
            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        wrapper.appendChild(table);
        details.appendChild(wrapper);
        accordion.appendChild(details);
    });
});