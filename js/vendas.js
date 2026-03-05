// ======================
// MODULO VENDAS
// ======================

const tabVendas = document.getElementById("tabVendas");

if(tabVendas){

  tabVendas.addEventListener("click", ()=>{

    document.getElementById("financasBox")?.classList.add("hidden");
    document.getElementById("metasBox")?.classList.add("hidden");
    document.getElementById("dashboardBox")?.classList.add("hidden");

    document.getElementById("vendasBox")?.classList.remove("hidden");

  });

}
