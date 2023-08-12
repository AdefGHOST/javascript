function searchGoogle() {
    const inputElement = document.getElementById('searchInput');
    const searchTerm = inputElement.value;
  
    if (searchTerm.trim() !== '') {
      const googleURL = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
      window.location.href = googleURL;
    }
  }

document.addEventListener("keydown", function(e) {
    tecla = e.key;
    if (tecla === "Enter") {
        searchGoogle();
    }
});