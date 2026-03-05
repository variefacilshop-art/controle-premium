// ============================
// MODULO VENDAS
// ============================

const tabVendas = document.getElementById("tabVendas");
const vendasBox = document.getElementById("vendasBox");

const financasBox = document.getElementById("financasBox");
const metasBox = document.getElementById("metasBox");
const dashboardBox = document.getElementById("dashboardBox");

if (tabVendas) {

  tabVendas.onclick = () => {

    if (financasBox) financasBox.classList.add("hidden");
    if (metasBox) metasBox.classList.add("hidden");
    if (dashboardBox) dashboardBox.classList.add("hidden");

    if (vendasBox) vendasBox.classList.remove("hidden");

  };

}
