document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        console.log('Selected file:', file.name); // Log the selected file name
        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            console.log('File content:', content); // Log the file content
            const materialList = parseLitematic(content);
            displayMaterialList(materialList);
        };
        reader.readAsText(file);
    }
});

function parseLitematic(content) {
    console.log('Parsing started'); // Log the start of the parsing process
    // Placeholder function to parse the .litematic file and extract the material list
    // This function needs to be implemented
    console.log('File content:', content); // Log the file content
    const materialList = []; // Placeholder for the extracted material list
    console.log('Parsed material list:', materialList); // Log the parsed material list
    console.log('Parsing ended'); // Log the end of the parsing process
    return materialList;
}

function displayMaterialList(materialList) {
    console.log('Material list before displaying:', materialList); // Log the material list before displaying
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
