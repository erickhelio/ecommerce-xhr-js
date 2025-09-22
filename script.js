function buscarProdutos() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dummyjson.com/products", true);
  xhr.responseType = "json";

  xhr.onload = function () {
    if (xhr.status === 200) {
      const produtos = xhr.response.products; 
      const lista = document.getElementById("lista-produtos");
      lista.innerHTML = "";

      produtos.slice(0, 10).forEach(p => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${p.title}</strong> - $${p.price}`;
        lista.appendChild(li);
      });
    } else {
      alert("Erro: " + xhr.status);
    }
  };

  xhr.onerror = function () {
    alert("Erro de rede");
  };

  xhr.send();
}
