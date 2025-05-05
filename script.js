document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            const materialList = parseLitematic(content);
            displayMaterialList(materialList);
        };
        reader.readAsText(file);
    }
});

function parseLitematic(content) {
    // Placeholder function to parse the .litematic file and extract the material list
    // This function needs to be implemented
    return [];
}

function displayMaterialList(materialList) {
    const materialListDiv = document.getElementById('materialList');
    materialListDiv.innerHTML = '';

    if (materialList.length === 0) {
        materialListDiv.innerHTML = '<p>No materials found.</p>';
    } else {
        const ul = document.createElement('ul');
        materialList.forEach(material => {
            const li = document.createElement('li');
            li.textContent = material;
            ul.appendChild(li);
        });
        materialListDiv.appendChild(ul);
    }
}
